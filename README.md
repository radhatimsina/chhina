# Chhina · चिना — public site

Make a Nepali–Hindu chhina from birth details, or upload a photo of a chhina to have it read and explained in Nepali, with questions about puja.

## What's in here

- `index.html` — the whole site. Charts, panchang and dasha are calculated in the visitor's browser.
- `api/claude.js` — server function. It holds your Anthropic API key and the prompts, and only does three jobs: read a chhina photo, explain a chhina, answer questions about it.
- `api/_prompts.js` — the Nepali/Hindi/English prompts, including the puja and samagri guidance.
- `vercel.json` — gives the function up to 120 seconds for long readings.

## Deploy (about 5 minutes)

1. Unzip this folder on your computer and open a terminal in it.
2. Run `npx vercel --prod` and follow the prompts. Choose the scope **radhatimsina's projects** (or EverTrust Holding Group LLC) and name the project `chhina`.
3. Add your API key:
   - Vercel dashboard → project **chhina** → Settings → Environment Variables
   - Name `ANTHROPIC_API_KEY`, value = your key from console.anthropic.com, environment **Production**
   - Then redeploy: `npx vercel --prod` again (or Deployments → Redeploy).
4. Open the `chhina-….vercel.app` link. Until the key is added, chhina creation works and the reading/question parts say they're unavailable.

To use your own domain: Vercel → project → Settings → Domains.

## Cost control

Every reading, explanation and question is billed to your Anthropic account.

- **Set a monthly spend limit** in the Anthropic Console (Settings → Limits). This is the real ceiling.
- Built-in limits (change in Vercel environment variables, then redeploy):
  - `LIMIT_PER_IP_HOUR` — calls per visitor per hour (default 25)
  - `LIMIT_READS_PER_IP_DAY` — photo readings per visitor per day (default 8)
  - `LIMIT_DAILY_TOTAL` — all calls from everyone per day (default 600)
- These counters live in memory, so they reset when Vercel recycles the function. They slow abuse; the Console spend limit is the guarantee.
- `CLAUDE_MODEL` — defaults to `claude-sonnet-5-5`. Set `claude-haiku-5-5` for cheaper answers (photo reading is less reliable on Haiku).

Rough guide: a photo reading plus its Nepali explanation is a few cents on Sonnet; each question is about a cent.

## Privacy

Photos go to Anthropic only to be read, and the site doesn't store them or the questions.
