// Server function for the Chhina site. Holds the Anthropic API key and the
// prompts, so the browser can only ask for the three jobs this site does:
// read a chhina photo, explain a chhina, and answer questions about it.
const { explainPrompt, chatRules, READ_PROMPT, ACK, READ_EXTRA } = require('./_prompts.js');

const MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-5-5';
const API_URL = 'https://api.anthropic.com/v1/messages';

// Limits (override with environment variables in Vercel).
const PER_IP_HOUR = +process.env.LIMIT_PER_IP_HOUR || 25;   // explain + chat + read calls per visitor per hour
const READS_PER_IP_DAY = +process.env.LIMIT_READS_PER_IP_DAY || 8; // photo reads per visitor per day
const DAILY_CAP = +process.env.LIMIT_DAILY_TOTAL || 600;     // all calls from everyone per day (cost ceiling)

// Best-effort in-memory counters. They reset when the function instance is
// recycled, so they slow abuse rather than guarantee a hard ceiling. Set a
// monthly spend limit on the Anthropic account as the real backstop.
const hits = new Map();
let day = '', dayCount = 0;
function allow(ip, kind) {
  const now = Date.now();
  const today = new Date().toISOString().slice(0, 10);
  if (today !== day) { day = today; dayCount = 0; hits.clear(); }
  if (dayCount >= DAILY_CAP) return false;
  const h = hits.get(ip) || { calls: [], reads: 0 };
  h.calls = h.calls.filter(t => now - t < 3600e3);
  if (h.calls.length >= PER_IP_HOUR) return false;
  if (kind === 'read' && h.reads >= READS_PER_IP_DAY) return false;
  h.calls.push(now); if (kind === 'read') h.reads++;
  hits.set(ip, h); dayCount++;
  return true;
}

const LANGS = new Set(['en', 'ne', 'hi']);
const str = (v, max) => typeof v === 'string' && v.length > 0 && v.length <= max;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

async function callClaude(body, signal) {
  return fetch(API_URL, {
    method: 'POST',
    signal,
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: MODEL, ...body }),
  });
}

function extractJson(text) {
  const t = text.replace(/```(?:json)?/g, '').trim();
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a < 0 || b <= a) return null;
  try { return JSON.parse(t.slice(a, b + 1)); } catch { return null; }
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') return json(res, 200, { ok: !!process.env.ANTHROPIC_API_KEY });
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  if (!process.env.ANTHROPIC_API_KEY) return json(res, 503, { error: 'Not configured' });

  const origin = req.headers.origin;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  if (origin && host && new URL(origin).host !== host) return json(res, 403, { error: 'Forbidden' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = null; } }
  if (!b || typeof b !== 'object') return json(res, 400, { error: 'Bad request', code: 'invalid_request' });

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const kind = b.kind;
  if (!['read', 'explain', 'chat'].includes(kind)) return json(res, 400, { error: 'Unknown kind', code: 'invalid_request' });
  if (!allow(ip, kind)) return json(res, 429, { error: 'Limit reached' });

  const ctl = new AbortController();
  res.on('close', () => { if (!res.writableEnded) ctl.abort(); });

  // ----- Read a photo: one non-streaming call that returns JSON -----
  if (kind === 'read') {
    const okType = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(b.mediaType);
    if (!okType || !str(b.image, 4_200_000) || !/^[A-Za-z0-9+/=]+$/.test(b.image.slice(0, 200)))
      return json(res, 413, { error: 'Image missing, wrong type or too large', code: 'image_rejected' });
    try {
      const r = await callClaude({
        max_tokens: 3000,
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type: b.mediaType, data: b.image } },
          { type: 'text', text: READ_PROMPT },
        ] }],
      }, ctl.signal);
      const j = await r.json();
      if (!r.ok) return json(res, r.status === 429 ? 429 : 502, { error: j?.error?.message || 'Upstream error', code: r.status === 400 ? 'image_rejected' : 'upstream_error' });
      const text = (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
      const data = extractJson(text);
      if (!data) return json(res, 422, { error: 'Could not parse', code: 'invalid_json' });
      return json(res, 200, { data });
    } catch (e) {
      return json(res, 502, { error: 'Upstream error', code: 'upstream_error' });
    }
  }

  // ----- Explain / chat: streamed text -----
  const lang = LANGS.has(b.lang) ? b.lang : 'ne';
  if (!str(b.summary, 14000)) return json(res, 400, { error: 'Missing chart', code: 'invalid_request' });
  let messages, maxTokens;
  if (kind === 'explain') {
    const mode = b.mode === 'read' ? 'read' : 'create';
    messages = [{ role: 'user', content: explainPrompt(lang, b.summary, mode === 'read' ? READ_EXTRA : '', mode) }];
    maxTokens = 3000;
  } else {
    const turns = Array.isArray(b.turns) ? b.turns.slice(-15) : [];
    const valid = turns.length > 0 && turns.every((t, i, a) =>
      t && (t.role === 'user' || t.role === 'assistant') && str(t.content, i === a.length - 1 ? 1500 : 6000) &&
      (i === 0 ? t.role === 'user' : t.role !== a[i - 1].role)) && turns[turns.length - 1].role === 'user';
    if (!valid) return json(res, 400, { error: 'Bad conversation', code: 'invalid_request' });
    messages = [
      { role: 'user', content: chatRules(lang, b.summary, b.source === 'read' ? READ_EXTRA : '') },
      { role: 'assistant', content: ACK[lang] },
      ...turns.map(t => ({ role: t.role, content: t.content })),
    ];
    maxTokens = 2000;
  }

  let r;
  try {
    r = await callClaude({ max_tokens: maxTokens, stream: true, messages }, ctl.signal);
  } catch (e) {
    return json(res, 502, { error: 'Upstream error' });
  }
  if (!r.ok) {
    let j = null; try { j = await r.json(); } catch {}
    return json(res, r.status === 429 ? 429 : 502, { error: j?.error?.message || 'Upstream error' });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Accel-Buffering', 'no');

  const reader = r.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line.startsWith('data:')) continue;
        let ev; try { ev = JSON.parse(line.slice(5)); } catch { continue; }
        if (ev.type === 'content_block_delta' && ev.delta?.type === 'text_delta') res.write(ev.delta.text);
        else if (ev.type === 'error') { res.write('\u0000ERR:upstream_error'); res.end(); return; }
      }
    }
  } catch (e) {
    if (!ctl.signal.aborted) res.write('\u0000ERR:upstream_error');
  }
  res.end();
};
