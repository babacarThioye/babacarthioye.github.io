# Babacar Thioye — Portfolio

Portfolio bilingue (français/anglais) réalisé avec React, TypeScript, Vite,
Tailwind CSS et Lucide React. Le contenu publiable est centralisé dans
`src/data/portfolio.ts`.

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

- `/` — Vue d’ensemble
- `/research` — Recherche
- `/projects` — Projets
- `/publications` — Publications
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

Les libellés d’interface sont dans `src/app/translations.ts`, les données
factuelles dans `src/data/portfolio.ts`, et les chemins dans
`src/data/sections.ts`.

## Déploiement GitHub Pages à la racine

Pour publier le site à `https://babacarthioye.github.io/`, le dépôt qui porte
ce code doit impérativement être nommé `babacarthioye.github.io`. GitHub Pages
publie un dépôt de projet à `https://babacarthioye.github.io/<nom-du-dépôt>/`;
ce préfixe ne peut pas être supprimé depuis Vite ou GitHub Actions.

1. Créer (ou renommer vers) le dépôt `babacarthioye.github.io` sous le compte
   `babacarthioye`.
2. Pousser la branche `main`.
3. Dans **Settings → Pages**, choisir **GitHub Actions** comme source.

Le workflow inclus construit le site, publie l’artefact Pages et ajoute une
copie `404.html` pour que les routes React soient rendues lors d’un accès
direct. Pour un déploiement volontaire dans un sous-chemin, définir
`VITE_BASE_PATH=/nom-du-dépôt/` au moment du build.
