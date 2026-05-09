# Portfolio — Matilde

Sito portfolio statico fatto con **React**, **Vite** e **Tailwind CSS**.

## Script

```bash
npm install    # Dipendenze
npm run dev    # Sviluppo (http://localhost:5173)
npm run build  # Build produzione in cartella `dist`
npm run preview # Anteprima locale del build
npm run lint   # ESLint
```

### Avviso npm `Unknown env config "devdir"`

Se nel terminale compare un messaggio rosso/giallo da npm su `devdir`, viene da una variabile d’ambiente impostata dall’ambiente (es. IDE). Il repo include `.vscode/settings.json` che la neutralizza per Cursor/VS Code: **chiudi le finestre del terminale integrate e aprine una nuova**, oppure ricarica la finestra (`Developer: Reload Window`).

In PowerShell, come alternativa temporanea:

```powershell
Remove-Item Env:NPM_CONFIG_DEVDIR -ErrorAction SilentlyContinue
npm run dev
```

## Pubblicazione

### Vercel o Netlify

1. Collega il repository al servizio scelto.
2. Impostazioni build:
   - **Build command**: `npm run build`
   - **Output / publish directory**: `dist`

Nessuna configurazione aggiuntiva è necessaria: `base` in Vite è la root `/`.

### GitHub Pages (progetto sotto `/nome-repo/`)

In `vite.config.js` imposta il `base` corrispondente al nome del repository:

```js
export default defineConfig({
  base: '/nome-repo/',
  plugins: [/* ... */],
})
```

Ricostruisci con `npm run build` e pubblica il contenuto di `dist`.

## Personalizzazione

- Email (opzionale via env): `VITE_CONTACT_EMAIL` in `.env` — fallback in `ContactSection.jsx`
- Link social: `src/components/ContactSection.jsx`
- Narrativa strategica / hero: `src/components/HeroSection.jsx`
- Modalità operative: `src/components/HowIWorkSection.jsx`
- Strategic fit copy: `src/components/StrategicFitSection.jsx`
- Case studies: `src/data/caseStudies.js`
- Colore industriale-dark e font IBM Plex: `src/index.css` (`@theme`)
