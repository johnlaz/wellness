<div align="center">

<img src="1778510121986_image.png" alt="LAZLAB Creations" width="140" />

# Wellness Suite

### Strategy · Behavior · Mastery

**A private, precision-built command center for your mind, your plans, and your health.**
No accounts. No subscriptions. No servers holding your life.

[**⚜ Launch the App**](https://johnlaz.github.io/wellnessapp/app/index) &nbsp;·&nbsp; [**◈ Visit the Landing Page**](https://johnlaz.github.io/wellnessapp/)

![PWA](https://img.shields.io/badge/PWA-installable-b5814a?style=for-the-badge)
![Offline](https://img.shields.io/badge/works-offline-9eaab8?style=for-the-badge)
![Private](https://img.shields.io/badge/data-stays%20on%20device-2d3a4a?style=for-the-badge)
![Price](https://img.shields.io/badge/price-free-b5814a?style=for-the-badge)

</div>

---

## Operate with intention.

Most wellness apps want your email, your data, and a monthly fee. **LWS wants none of that.**

LWS is a single, self-contained Progressive Web App that brings your personal strategy, behavioral records, and health tracking into one refined interface — then keeps every byte of it **on your own device**. Open it, install it, use it on a plane. It's yours completely.

> *The lotus meets the machine.*

---

## ✦ Everything in One Command Center

| | Module | What it does |
|---|---|---|
| 🧭 | **The Audit** | A clear, structured overview of your core system — the people and patterns that matter most — with editable profiles. |
| 🛡️ | **Care Protocols** | Define, refine, and review behavioral management protocols and the records that back them up. |
| ♟ | **Personal Strategy** | Identity, priorities, and inner architecture — a prioritized action table that keeps you pointed at what matters. |
| 🤝 | **Business Strategy** | Map partnership structure, equity, leverage, and exit options in one view. |
| 🗺️ | **Path Forward** | Long-term planning and timeline. See the road, not just the next turn. |
| 📚 | **Session Logs** | A searchable archive of your strategy and therapy sessions. Paste a raw transcript and let AI parse it into structured fields. |
| ⚡ | **Mediator** | Dual-session AI mediation: lay out two sides, get a clear, balanced analysis, and keep a history of every run. |
| 💬 | **AI Chat** | In-app AI sessions with persona switching — a thinking partner that's there when you are. |
| 🏥 | **Medical** | Symptom checker, lab-result interpretation, and a private symptom-history vault. |

---

## ✦ Built Different

### 🔒 Private by Architecture
Your vault lives in your browser's `localStorage`. There's no backend, no analytics, no ad tracking. The *only* thing that ever leaves your device is the text of an AI prompt you choose to send — and it goes straight to [Groq](https://groq.com), nowhere else.

### 🤖 AI That Works for You
Bring your own free Groq API key and unlock:
- **Session Sync** — AI reviews your recent sessions and *proposes* updates to your strategy panels. You approve each change; nothing is applied without your say-so.
- **Transcript Parsing** — paste a full AI session and watch the fields fill themselves.
- **Mediation, Chat & Summaries** — pick the Groq model that fits the job, from fast-and-light to deep-and-thorough.
- **Daily Quote** — generate a fresh one on demand.

### 📱 Installs Like a Native App
No app store. No gatekeeping. Add it to your home screen and it launches full-screen, loads instantly, and keeps working without a connection.

### 💾 Your Data, Portable
**Export Vault (JSON)** downloads everything. Edit it, back it up, move it to a new device, and **Import** it back. Want a clean slate? **Reset to Blank** clears all personal data and keeps the app shell.

---

## ✦ From Raw Data to Decisive Action

**01 · Open & Configure** — Launch from any device. Set up your modules in minutes. No account required.

**02 · Log Your World** — Capture sessions, observations, symptoms, and decisions as they happen.

**03 · Surface Insights** — Use AI analysis and search to find the patterns that data alone would hide.

**04 · Execute with Clarity** — Turn insight into intention with the strategy modules. Plan, move, review — repeat.

---

## ✦ Get Started in 60 Seconds

### Use it now
1. Open **[the app](https://johnlaz.github.io/wellnessapp/app/index)**.
2. Tap the **⚙ Settings** gear (top right) → **Groq API Key**, and paste a free key from [console.groq.com](https://console.groq.com).
3. Start logging. That's it.

### Install it
| Device | How |
|---|---|
| **iPhone / iPad** | Share → **Add to Home Screen** |
| **Android** | Browser menu → **Install App** |
| **Desktop (Chrome / Edge)** | Click the install icon in the address bar |

### Host your own copy
Run it from your own GitHub Pages in four steps:

1. Fork or push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch, root `/`.
4. Your suite is live at `https://<your-username>.github.io/<repo-name>/`.

---

## ✦ Privacy & Security, Plainly Stated

- **Vault data** — stored in your browser's `localStorage`. It never touches a server we run (there isn't one).
- **AI prompts** — sent only to `api.groq.com`, only when *you* trigger an AI feature.
- **Your Groq API key** — saved in your browser's `localStorage` so it persists between sessions. It's sent only to Groq. If you're on a shared computer, clear it from Settings when you're done.
- **Back up regularly.** Browser storage can be cleared by the browser or by you. Use **Export Vault (JSON)** and keep a copy somewhere safe.
- **Not a substitute for professional care.** The Medical and AI tools are for organizing information and prompting better questions — not for diagnosis or treatment decisions.

---

## ✦ Under the Hood

```
wellnessapp/
├── index.html          # Marketing landing page
├── README.md
├── LWS_Icon.png        # Brand mark
└── app/
    ├── index.html      # The full suite — single-file PWA
    ├── manifest.json   # PWA manifest
    ├── sw.js           # Service worker (offline, cache-first)
    └── icon-*.png      # App icons, 16px → 512px
```

- **Single-file app** — HTML, CSS, and JS in one document. No build step, no framework, no dependencies to rot.
- **Offline-first** — a cache-first service worker keeps the app shell available without a connection.
- **AI** — Groq's OpenAI-compatible chat API, called directly from your browser with your own key.

---

## ✦ Ready?

<div align="center">

**Built for clarity. Designed for precision. Yours completely.**

[**⚜ Launch LWS**](https://johnlaz.github.io/wellnessapp/app/index)

<br />

*Mind, strategy, and body — aligned.*

<br />

---

**LWS — Laz Wellness Suite** is a [LAZLAB Creations](https://johnlaz.github.io) product.
© LAZLAB Creations. All rights reserved.

</div>
