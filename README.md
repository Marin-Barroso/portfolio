# Portfolio de Marin Barroso

Site : https://marin-barroso.github.io/portfolio/ (Next.js, export statique sur GitHub Pages).

## Modifier le contenu

- **Missions, compétences, langues et parcours** : depuis l'admin, https://marin-barroso.github.io/portfolio/admin/ (connexion avec un jeton GitHub). Les données sont dans `data/missions.json`, `data/skills.json` et `data/parcours.json`.
- **Reste du site** (accueil, à propos, contact, formation) : `data/content.ts`.

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui corrige l'orthographe des textes de l'admin (`scripts/spellcheck.mjs`), régénère le PDF (`npm run pdf`) puis publie le site.

## En local

```bash
npm install
npm run dev
```

- `npm run pdf` : régénère `public/portfolio-marin-barroso.pdf` à partir de la page `/impression/` (Chrome ou Edge requis).
- `node scripts/spellcheck.mjs` : corrige les fautes sûres dans `data/*.json`.
