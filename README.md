# Chhina · चिना

A free Nepali–Hindu chhina (janma kundali) site. Live at https://chhina.vercel.app

Everything runs in the visitor's browser. There is no server, no AI and no API key, so there is nothing to pay for beyond Vercel's free hosting.

## What it does

- **Create a chhina** from birth date (AD or Bikram Sambat), time and place: Lagna and Navamsa charts, panchang, graha table, Vimshottari dasha and basic yogas.
- **Read a chhina**: the visitor fills in the Lagna and each planet's rashi number from their own chhina (a photo can be shown alongside for reference; it never leaves the device).
- **Explanation** in simple Nepali or English: Lagna, Moon sign, nakshatra and naming syllable, each planet's house, yogas and doshas (Manglik, Kaal Sarpa, grahan, Gandmool), current Sade Sati or dhaiya, and the current dasha.
- **Puja and remedies**: which planets need shanti and why, with deity, day, beej mantra, daan and a full samagri list, plus simple home puja steps.
- **Questions**: topic buttons and typed questions in Nepali, Hindi or English (work, marriage, health, study, children, home, legal, debt, going abroad, samagri for named pujas, gemstones, naming).

## Files

- `index.html` — page, chart engine and translations
- `guide.js` — the knowledge base and the explanation, puja and question logic

## Accuracy notes

Lahiri ayanamsa, mean lunar node, whole-sign houses. Planets are accurate to a few arcminutes for 1800–2050. Explanations and puja guidance are rule-based and follow common Nepali Hindu practice; they are guidance, not prediction. Practice varies by family and region.

## Deploys

Pushing to `main` redeploys automatically on Vercel (project `chhina`, radhatimsina's projects).
