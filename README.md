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
- `/booking` — Demande de rendez-vous, avec approbation manuelle

## Organisation du code

- `src/app/` — routes, traductions et préférences globales
- `src/components/` — mise en page et navigation latérale
- `src/data/` — configuration des pages
- `src/pages/` — pages du portfolio
- `src/styles/` — styles de l’application

Les libellés d’interface sont dans `src/app/translations.ts`, les données
factuelles dans `src/data/portfolio.ts`, et les chemins dans
`src/data/sections.ts`.

## Réservations

La page `/booking` n’affiche jamais de faux créneaux. Son interface est prête,
mais le service reste indisponible tant que `VITE_BOOKING_API_URL` n’est pas
configuré lors du build. Le code Google Apps Script et les instructions de
déploiement sont dans [`apps-script/README.md`](apps-script/README.md).

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
direct. Il détecte automatiquement le nom du dépôt : le dépôt actuel produit
les assets sous `/portfolio-babacar/`, tandis que le dépôt
`babacarthioye.github.io` les produira à la racine. Pour un build local qui
reproduit le site de projet actuel : `VITE_BASE_PATH=/portfolio-babacar/ npm run build`.
