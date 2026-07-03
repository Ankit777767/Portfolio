# Ankit — Portfolio

A personal portfolio site with a dark, cinematic "movie marquee" identity —
built to show off software engineering and data science projects alongside
a genuine love of film.

**Live site:** _add your deployed URL here once you've shipped it_

## Features

- Marquee-style hero with chasing bulb lights and an ambient spotlight sweep
- Scrolling cinema-ticker of short movie quotes
- Featured work section for your strongest projects, with a secondary grid for the rest
- A "Cast & Influences" section for the actors/directors that shape your taste
- Film-strip section dividers (the site's signature motif — structured like acts of a film)
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`

## Tech stack

| Layer      | Choice                                   |
| ---------- | ----------------------------------------- |
| Build tool | [Vite](https://vite.dev)                  |
| Framework  | [React 19](https://react.dev)             |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config) |
| Animation  | [Motion](https://motion.dev) (formerly Framer Motion) |
| Icons      | [lucide-react](https://lucide.dev)        |
| Hosting    | [Vercel](https://vercel.com) (free tier)  |

## Getting started

```bash
npm install
npm run dev       # starts a dev server at http://localhost:5173
```

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## Customizing this for yourself

Everything personal lives in `src/data/` — you shouldn't need to touch a
component file just to update content:

| File                     | What it controls                                  |
| ------------------------ | --------------------------------------------------- |
| `src/data/profile.js`    | Your name, bio, education, contact info, resume link |
| `src/data/projects.js`   | Featured + secondary project cards                   |
| `src/data/quotes.js`     | The scrolling quote ticker                           |
| `src/data/influences.js` | The "Cast & Influences" section                      |
| `src/data/skills.js`     | Grouped skill tags                                   |

Search the codebase for `TODO` to find every placeholder that still needs a
real value (email, resume PDF, GitHub/LinkedIn URLs, project links).

To add your resume, drop a PDF into `public/` (e.g. `public/resume.pdf`) and
make sure `resumeUrl` in `profile.js` points to it.

## Deployment (Vercel, free)

1. Push this repo to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite; leave the defaults (`npm run build`, output `dist`).
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.
5. Every future push to `main` auto-deploys — no extra config needed.

## License

MIT — see [LICENSE](./LICENSE). Use this as a starting point for your own site.
