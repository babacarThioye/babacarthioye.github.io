# Charte graphique — Portfolio Academic & Tech

**Direction artistique : Modern Academic Tech — Premium Minimalist**  
**Projet :** portfolio académique et professionnel (React + Vite + TypeScript + Tailwind CSS v4)  
**Version :** 1.0 — 28 octobre 2026

## 1. Vision et identité

Le portfolio doit réunir trois univers : **rigueur académique**, **expertise technologique** et **élégance professionnelle**. Il s'adresse aux chercheurs, recruteurs, entreprises et partenaires potentiels.

| Valeur | Traduction graphique |
|---|---|
| Expertise | Typographie structurée, hiérarchie claire |
| Recherche | Présentation sobre, contenu scientifique lisible |
| Innovation | Accents technologiques et interactions modernes |
| Professionnalisme | Palette maîtrisée et composants cohérents |
| Accessibilité | Contrastes élevés et navigation intuitive |
| Élégance | Espaces généreux et animations discrètes |

**À éviter :** effets néon, 3D omniprésente, fonds chargés, animations permanentes, icônes multicolores incohérentes et présentation de publications sous forme de produits e-commerce.

## 2. Palette de couleurs

### Palette de base

| Nom | HEX | Usage |
|---|---|---|
| Midnight Navy | `#2C3E50` | Couleur principale, titres et boutons |
| Slate Blue | `#34495E` | Couleur secondaire |
| Steel Gray | `#7F8C8D` | Éléments décoratifs et informations non essentielles |
| Silver Gray | `#BDC3C7` | Séparateurs |
| Cloud White | `#ECF0F1` | Fonds alternatifs |

> La dernière valeur fournie initialement (`#ECFOF1`) est corrigée en `#ECF0F1` : le caractère après F est le chiffre zéro.

### Couleurs complémentaires

| Nom | HEX | Usage |
|---|---|---|
| Research Blue | `#2563EB` | Liens, éléments actifs, accents |
| Pure White | `#FFFFFF` | Surface principale |
| Deep Navy | `#172330` | Fond secondaire sombre |
| Soft Blue | `#EFF6FF` | Mise en évidence légère |

**Répartition indicative :** 65 % de surfaces blanches ou claires, 25 % de bleu nuit et gris ardoise, 10 % d'accent bleu. Il s'agit d'un repère de composition, pas d'une règle stricte.

### Thème clair

| Élément | HEX |
|---|---|
| Fond principal | `#FFFFFF` |
| Fond secondaire | `#ECF0F1` |
| Cartes | `#FFFFFF` |
| Titres | `#2C3E50` |
| Texte principal | `#34495E` |
| Texte secondaire | `#526475` |
| Bordures | `#DCE3E8` |
| Accent | `#2563EB` |
| Boutons principaux | `#2C3E50` |
| Texte sur boutons principaux | `#FFFFFF` |

### Thème sombre

| Élément | HEX |
|---|---|
| Fond principal | `#111B25` |
| Fond secondaire | `#172330` |
| Cartes | `#223243` |
| Titres | `#F1F5F9` |
| Texte principal | `#E2E8F0` |
| Texte secondaire | `#BDC3C7` |
| Bordures | `#34495E` |
| Accent | `#60A5FA` |
| Boutons d'accent | `#60A5FA` |
| Texte sur boutons d'accent | `#111B25` |

Le thème clair est celui proposé par défaut. Respecter les préférences système et permettre un choix manuel mémorisé. Pour les textes ordinaires, viser un contraste d'au moins **4,5:1** ; pour les grands textes, **3:1** (WCAG AA).

## 3. Typographie

- **Manrope** : titres, hero, en-têtes de section.
- **Inter** : navigation, paragraphes, boutons, formulaires, métadonnées.
- Interlignage des paragraphes longs : environ **1,7**.
- Largeur de lecture conseillée : environ **65 à 75 caractères**.

| Élément | Desktop | Mobile | Graisse |
|---|---:|---:|---:|
| Hero H1 | 56 px | 36 px | 700 |
| Page H1 | 44 px | 32 px | 700 |
| Section H2 | 32 px | 26 px | 700 |
| H3 | 24 px | 21 px | 600 |
| H4 | 20 px | 18 px | 600 |
| Texte principal | 16 px | 16 px | 400 |
| Texte secondaire | 14 px | 14 px | 400 |
| Boutons | 14–16 px | 14–16 px | 600 |

## 4. Grille, dimensions et espacement

| Élément | Valeur recommandée |
|---|---|
| Hauteur de la navbar | 76 px |
| Largeur maximale du contenu | 1200 px |
| Padding horizontal desktop | 32 px |
| Padding horizontal mobile | 20 px |
| Espacement entre sections | 96 px desktop, réduit sur mobile |
| Espacement entre cartes | 24 px |
| Rayon des cartes | 16 px |
| Rayon des boutons | 10 px |

Privilégier les espaces blancs, les bordures fines, les ombres discrètes et une hiérarchie visuelle constante.

## 5. Navigation et architecture des pages

Les **dix pages** principales sont :

1. Overview (`/`)
2. Research (`/research`)
3. Projects (`/projects`)
4. Publications (`/publications`)
5. Teaching (`/teaching`)
6. Services (`/services`)
7. Awards (`/awards`)
8. Experiences (`/experiences`)
9. Education (`/education`)
10. Contacts (`/contacts`)

**Navigation desktop :** navbar horizontale fixe, fond légèrement translucide, état actif visible, menus déroulants accessibles.

```text
[LOGO] Overview  Research  Projects  Publications  Academic ▾  Professional ▾  Contact  [☾] [EN]

Academic ▾       Professional ▾
- Teaching        - Services
- Awards          - Experiences
- Education
```

**Mobile :** tiroir de navigation avec gestion du focus, fermeture par `Escape`, navigation clavier et états actifs explicites.

## 6. Direction visuelle des pages

| Page | Composition recommandée |
|---|---|
| Overview | Hero à deux colonnes + sélections de contenu |
| Research | Domaines de recherche et projets scientifiques |
| Projects | Grille visuelle de cartes avec filtres |
| Publications | Liste académique chronologique compacte |
| Teaching | Cartes de cours et chronologie |
| Services | Grille de prestations et appels à collaboration |
| Awards | Timeline des distinctions |
| Experiences | Timeline professionnelle verticale |
| Education | Timeline académique verticale |
| Contacts | Coordonnées + formulaire + prise de rendez-vous |

### Overview : hero

- Colonne gauche (~60 %) : étiquette professionnelle, nom, titre, courte introduction, intérêts de recherche, boutons, réseaux sociaux.
- Colonne droite (~40 %) : portrait professionnel cadré sobrement.
- Boutons proposés : **Explore My Research**, **Download CV**, **Book a Meeting**.
- Réseaux : GitHub, LinkedIn, Google Scholar, ORCID (afficher uniquement ceux configurés).

```text
┌───────────────────────────────────────────────────────────────┐
│ CYBERSECURITY RESEARCHER                                     │
│                                                               │
│ Building Secure Digital Financial Systems       [ PORTRAIT ]  │
│ Software Engineer & PhD Researcher                           │
│ Mobile Money Security · Fraud Detection · AI Agents          │
│ [Explore Research]  [Download CV]                             │
│ GitHub · LinkedIn · Google Scholar · ORCID                    │
└───────────────────────────────────────────────────────────────┘
```

### Research

Cartes sobres avec icône, titre et description. Mettre l'accent sur les problématiques scientifiques et les contributions réelles ; éviter les illustrations génériques d'IA.

### Publications

Ordre recommandé : **Titre → Auteurs → Conférence/Journal → Année → DOI/PDF/Code**. Présentation dense mais lisible, regroupée par année, avec typographie et espacement cohérents.

### Projects

Cartes avec image, description, badges technologiques et liens GitHub/démonstration. Filtres et recherche client-side.

### Experiences / Education / Awards

Timelines verticales à ligne fine, repères chronologiques nets et contenu extensible si nécessaire.

### Contacts

Deux colonnes sur desktop : informations à gauche, formulaire à droite. Réservation mise en évidence, sans prétendre garantir des créneaux tant qu'aucune intégration de calendrier n'est active.

## 7. Composants et boutons

Trois variantes de boutons :

| Variante | Aspect | Usage |
|---|---|---|
| Primary | Fond `#2C3E50`, texte blanc | Actions principales |
| Secondary | Fond transparent, bordure fine | Actions alternatives |
| Accent | Bleu `#2563EB` en clair, `#60A5FA` en sombre | Réservation et actions ponctuelles |

Prévoir systématiquement les états `hover`, `focus-visible`, `disabled`, `loading` et les contrastes adaptés aux deux thèmes.

```tsx
// Exemples utilisant les tokens sémantiques définis plus bas
<button className="rounded-button bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary">
  Explore My Research
</button>

<button className="rounded-button border border-app-border px-6 py-3 font-semibold text-app-text transition-colors hover:bg-app-surface">
  Download CV
</button>

<button className="rounded-button bg-app-accent px-6 py-3 font-semibold text-white transition-colors dark:text-app-bg">
  Book a Meeting
</button>
```

## 8. Icônes, logos et images

- **Lucide React** pour les icônes d'interface : 20 px par défaut, 24 px dans les cartes, 16 px pour les petites actions ; épaisseur 1,75.
- **Simple Icons** pour les logos de technologies, en respectant les licences et les marques.
- **Logos officiels** pour les universités, laboratoires et organisations.
- **Logo personnel** : monogramme géométrique minimaliste, décliné en logo complet, compact et favicon SVG.
- **Photos** : WebP ou AVIF ; logos : SVG.

Références : [Lucide](https://lucide.dev/), [Simple Icons](https://simpleicons.org/), [Inter](https://rsms.me/inter/), [Manrope](https://fonts.google.com/specimen/Manrope).

## 9. Animations et micro-interactions

| Interaction | Effet | Durée |
|---|---|---|
| Bouton | Transition couleur | 150 ms |
| Carte | Élévation légère | 200 ms |
| Navigation | Changement d'état | 180 ms |
| Apparition de section | Fondu + translation légère | 350 ms |
| Menu mobile | Ouverture fluide | 250 ms |
| Changement de thème | Transition de couleur | 200 ms |

Respecter `prefers-reduced-motion`. Éviter les animations permanentes ou distrayantes.

## 10. Configuration Tailwind CSS v4

Placer la configuration suivante dans `src/index.css` :

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2C3E50;
  --color-secondary: #34495E;
  --color-muted: #7F8C8D;
  --color-silver: #BDC3C7;
  --color-cloud: #ECF0F1;

  --color-accent: #2563EB;
  --color-accent-light: #EFF6FF;

  --font-sans: "Inter", sans-serif;
  --font-heading: "Manrope", sans-serif;

  --radius-card: 1rem;
  --radius-button: 0.625rem;
}

:root {
  color-scheme: light;
  --app-bg: #FFFFFF;
  --app-surface: #ECF0F1;
  --app-card: #FFFFFF;
  --app-text: #2C3E50;
  --app-text-secondary: #526475;
  --app-border: #DCE3E8;
  --app-accent: #2563EB;
}

.dark {
  color-scheme: dark;
  --app-bg: #111B25;
  --app-surface: #172330;
  --app-card: #223243;
  --app-text: #F1F5F9;
  --app-text-secondary: #BDC3C7;
  --app-border: #34495E;
  --app-accent: #60A5FA;
}

@theme inline {
  --color-app-bg: var(--app-bg);
  --color-app-surface: var(--app-surface);
  --color-app-card: var(--app-card);
  --color-app-text: var(--app-text);
  --color-app-text-secondary: var(--app-text-secondary);
  --color-app-border: var(--app-border);
  --color-app-accent: var(--app-accent);
}

@layer base {
  body {
    @apply bg-app-bg text-app-text font-sans antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }

  button {
    @apply cursor-pointer;
  }

  :focus-visible {
    outline: 2px solid var(--app-accent);
    outline-offset: 3px;
  }
}
```

Exemple de carte adaptative :

```tsx
<div className="rounded-card border border-app-border bg-app-card p-6">
  <h2 className="text-2xl font-bold text-app-text">Research Interests</h2>
  <p className="mt-3 text-app-text-secondary">
    Exploring security challenges in digital financial systems.
  </p>
</div>
```

**Note d'implémentation :** charger effectivement les polices Inter et Manrope (fichiers locaux ou fournisseur de polices). Le mode sombre est activé en appliquant la classe `dark` à `<html>`. Tester les contrastes réels de chaque combinaison de texte, fond et état de composant.

## 11. Accessibilité et qualité

- Cible : **WCAG 2.2 AA** lorsque applicable.
- Navigation entièrement utilisable au clavier.
- Focus visible, ordre de tabulation cohérent, états actifs explicites.
- Formulaires avec libellés et erreurs accessibles.
- Alt text pour les images porteuses d'information.
- Support des préférences de réduction du mouvement.
- Responsive mobile-first.
- Optimisation des images et chargement des ressources nécessaires uniquement.
- Contenus réels : ne pas inventer de publications, diplômes, prix ou institutions.

## 12. Récapitulatif de la charte

| Élément | Décision |
|---|---|
| Direction | Modern Academic Tech |
| Couleur principale | `#2C3E50` |
| Couleur secondaire | `#34495E` |
| Accent clair / sombre | `#2563EB` / `#60A5FA` |
| Fond clair principal | `#FFFFFF` |
| Fond clair alternatif | `#ECF0F1` |
| Fond sombre principal | `#111B25` |
| Titres | Manrope |
| Texte | Inter |
| Icônes | Lucide |
| Cartes | Bordure fine, rayon 16 px |
| Boutons | Rayon 10 px |
| Animations | Discrètes, 150–350 ms |
| Navigation | Barre horizontale + menus regroupés |
| Thème | Clair par défaut, sombre disponible |
| Style général | Minimaliste, académique et technologique |

## 13. Ressources de référence

- [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/)
- [Understanding Contrast (Minimum) — W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- [Material Design 3](https://m3.material.io/)
- [Lucide Icons](https://lucide.dev/)
- [Simple Icons](https://simpleicons.org/)
- [Inter](https://rsms.me/inter/)
- [Manrope](https://fonts.google.com/specimen/Manrope)
- [Tailwind CSS v4 — Theme variables](https://tailwindcss.com/docs/theme/)

---

**Décision finale :** conserver le bleu nuit comme identité dominante, réserver le bleu lumineux aux interactions, privilégier les fonds clairs et la lisibilité, et construire une interface académique contemporaine cohérente sur les dix pages.
