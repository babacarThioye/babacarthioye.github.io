# Babacar Thioye — Portfolio

Portfolio bilingue (français/anglais) réalisé avec React, TypeScript et Vite.
La navigation utilise des pages dédiées, avec un menu latéral adaptatif et un
thème clair/sombre mémorisé dans le navigateur.

## Développement

```sh
npm install
npm run dev
```

## Vérification et production

```sh
npm run lint
npm run build
npm run preview
```

## Pages

- `/overview` — Vue d’ensemble
- `/research` — Recherche
- `/projects` — Projets
- `/publication` — Publications
- `/teaching` — Enseignement
- `/services` — Services
- `/awards` — Prix et distinctions
- `/experiences` — Expériences
- `/education` — Formation
- `/contacts` — Contacts

## Organisation du code

- `src/app/` — routes, traductions et préférences globales
- `src/components/` — mise en page et navigation latérale
- `src/data/` — configuration des pages
- `src/pages/` — pages du portfolio
- `src/styles/` — styles de l’application

Les contenus spécifiques aux pages sont à compléter dans
`src/app/translations.ts`. Les libellés de navigation et leurs chemins se
trouvent dans `src/data/sections.ts`.
