# Pablo FM — Official website

Professional landing site for [pablofm.com](https://pablofm.com): electronic music radio, DJ sets, and live broadcast presence. Built as a fast, static-first experience with interactive islands only where they add value.

## Tech stack

- **[Astro 5](https://astro.build/)** — Static site generation, minimal JavaScript by default
- **[React](https://react.dev/)** — Islands for the live audio player (`client:visible`)
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling with a custom cyber-neon theme
- **[shadcn/ui](https://ui.shadcn.com/)** — Accessible UI primitives (Button, Card) adapted for this project
- **[Framer Motion](https://www.framer.com/motion/)** — Motion only inside React islands (player), not on the static shell
- **[Lucide React](https://lucide.dev/)** — Icons in interactive components

## Run locally

Requirements: **Node.js ≥ 22.12**

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # production build → ./dist/
npm run preview  # serve ./dist locally
```

### Environment variables

Optional:

| Variable | Description |
| -------- | ----------- |
| `PUBLIC_STREAM_URL` | URL of your live audio stream (e.g. Icecast MP3). If unset, the player uses a demo stream. |

Copy `.env.example` to `.env` and adjust as needed.

## Open source

This project is intended to be released under the **MIT License** once a `LICENSE` file is added. Until then, all rights reserved by the author; third-party dependencies remain under their respective licenses.

## Links

- **Site:** [pablofm.com](https://pablofm.com)
- **Games:** [numen.games](https://numen.games)
- **Store:** [numinia.store](https://numinia.store)
