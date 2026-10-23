# akuru-web

The website for [Akuru](https://akuru-web.vercel.app), the HEXHAD Sinhala and English keyboard for Android.

| Route | What it is |
| --- | --- |
| `/` | App overview, a live Singlish "Try it" box, and the Google Play link |
| `/privacy` | Privacy policy (linked from the Play listing; keep the route) |

Built with Next.js (App Router), fully static. Geist, Geist Mono and Abhaya Libre (the app's fonts) are self-hosted from
`app/fonts`, so pages load no third-party resources. Motion is CSS only (scroll-driven where supported).

- `app/lib/singlish.ts` is a line-for-line port of the app's Singlish engine; `npm test` runs the app's own test cases
  against it. When the app's rules change, port the change and copy the new cases.
- The keyboards on the page are drawn in HTML by `app/components/AkuruKeyboard.tsx`, from the app's theme and layout
  (`ime/KeyTheme.kt`, `KeyboardView.kt`, `Layouts.kt`). Keep its colours in step when the app's theme changes.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static build; npm run lint, npm test
```

## Deploy

Deploy on Vercel from this repo's `main` branch (framework preset: Next.js). Every push to `main` redeploys.

## License

GPL-3.0-or-later, like the app (the Singlish engine is shared). Geist and Abhaya Libre: SIL OFL 1.1.

---

<p align="center">
  <a href="https://hexhad.github.io"><img src=".github/hexhad.svg" width="40" height="40" alt="HEXHAD"></a>
  <br>
  <sub>Built by <a href="https://hexhad.github.io"><b>HEXHAD</b></a> · Made in Sri Lanka</sub>
</p>
