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

- Email e link social: `src/components/ContactSection.jsx`
- Testi Hero e About: `src/components/HeroSection.jsx`, `AboutSection.jsx`
- Elenco progetti (placeholder): `src/data/projects.js`
- Colori e font: `src/index.css` (`@theme`)
