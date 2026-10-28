# Charte graphique — Portfolio Academic Tech

**Version 1.0 · Octobre 2026**  
**Direction artistique :** minimaliste, académique, technologique et professionnelle.

## 1. Couleurs

### Palette principale

| Rôle | Nom | HEX | Usage |
|---|---|---|---|
| Primaire | Midnight Navy | `#2C3E50` | Titres, identité, boutons principaux |
| Secondaire | Slate Blue | `#34495E` | Éléments secondaires, survols |
| Accent | Research Blue | `#2563EB` | Liens, navigation active, actions importantes |
| Gris | Steel Gray | `#7F8C8D` | Éléments décoratifs, pictogrammes discrets (pas de petit texte sur blanc) |
| Bordure historique | Silver Gray | `#BDC3C7` | Séparateurs décoratifs |
| Fond doux | Cloud White | `#ECF0F1` | Sections alternées |
| Blanc | White | `#FFFFFF` | Fond principal, cartes |

### Couleurs sémantiques — mode clair

| Élément | HEX |
|---|---|
| Fond principal | `#FFFFFF` |
| Fond secondaire | `#ECF0F1` |
| Surface / carte | `#FFFFFF` |
| Texte principal et titres | `#2C3E50` |
| Texte courant | `#34495E` |
| Texte secondaire | `#526475` |
| Bordures d'interface | `#DCE3E8` |
| Accent interactif | `#2563EB` |
| Fond d'accent discret | `#EFF6FF` |
| Texte sur fond primaire | `#FFFFFF` |

### Couleurs sémantiques — mode sombre

| Élément | HEX |
|---|---|
| Fond principal | `#111B25` |
| Fond secondaire | `#172330` |
| Surface / carte | `#223243` |
| Titres | `#F1F5F9` |
| Texte courant | `#E2E8F0` |
| Texte secondaire | `#BDC3C7` |
| Bordures | `#34495E` |
| Accent interactif | `#60A5FA` |
| Texte sur bouton d'accent | `#111B25` |

**Règle :** le bleu d'accent doit rester ponctuel ; les fonds clairs dominent en mode clair. Éviter le gris `#7F8C8D` pour du petit texte sur fond blanc.

## 2. Typographie

| Usage | Police | Graisse |
|---|---|---|
| Titres et en-têtes | **Manrope** | 600–700 |
| Paragraphes, navigation, boutons, formulaires | **Inter** | 400–600 |
| Code, commandes, références techniques | **JetBrains Mono** (facultative) | 400–500 |

Polices de secours : `sans-serif` pour Manrope et Inter ; `monospace` pour JetBrains Mono.

### Échelle typographique

| Élément | Desktop | Mobile | Interligne |
|---|---:|---:|---:|
| Titre principal / Hero | 56 px | 36 px | 1.1 |
| Titre de page | 44 px | 32 px | 1.15 |
| Titre de section (H2) | 32 px | 26 px | 1.2 |
| Sous-titre (H3) | 24 px | 21 px | 1.3 |
| Petit titre (H4) | 20 px | 18 px | 1.35 |
| Texte courant | 16 px | 16 px | 1.7 |
| Texte secondaire | 14 px | 14 px | 1.6 |
| Boutons et navigation | 14–16 px | 14–16 px | 1.3 |

**Règles :** privilégier l'alignement à gauche ; limiter la largeur des paragraphes à environ **65–75 caractères** ; ne pas multiplier les graisses.

## 3. Grille et espacements

| Propriété | Valeur |
|---|---|
| Largeur maximale du contenu | `1200px` |
| Marges latérales desktop | `32px` |
| Marges latérales mobile | `20px` |
| Hauteur de la navigation | `76px` |
| Espacement entre grandes sections | `96px` desktop / `64px` mobile |
| Espacement entre cartes | `24px` |
| Padding interne des cartes | `24px` |
| Échelle d'espacement | multiples de `4px` (8, 12, 16, 24, 32, 48, 64, 96) |

**Grille :** 12 colonnes sur desktop ; cartes en 3 colonnes maximum, 2 sur tablette et 1 sur mobile selon le contenu.

## 4. Composants

| Composant | Règle |
|---|---|
| Carte | Fond de surface, bordure 1 px, rayon `16px` |
| Bouton | Rayon `10px`, hauteur minimale `44px`, texte semi-gras |
| Champ de formulaire | Rayon `10px`, bordure 1 px, hauteur minimale `44px` |
| Badge | Rayon `999px`, fond d'accent discret ou fond secondaire |
| Ombre | Très légère, seulement si nécessaire pour séparer les surfaces |
| Icônes | **Lucide**, 20 px standard, trait 1.75 |
| Logos technologiques | **Simple Icons** ou SVG officiels |
| Logos institutionnels | Fichiers officiels, proportions et couleurs conservées |

**Bouton principal :** fond `#2C3E50`, texte blanc ; survol `#34495E`.  
**Bouton d'accent :** fond `#2563EB`, texte blanc en mode clair ; fond `#60A5FA`, texte `#111B25` en mode sombre.  
**Bouton secondaire :** fond transparent, bordure visible, texte de couleur principale.

## 5. Images et identité

- **Logo personnel :** monogramme géométrique sobre ; prévoir versions claire, sombre et favicon.
- **Portrait :** photographie professionnelle, fond neutre, cadrage cohérent.
- **Projets :** visuels au ratio **16:9**, homogènes et optimisés.
- **Formats :** SVG pour logos et icônes ; WebP/AVIF pour photographies et captures.
- **Éviter :** illustrations génériques, dégradés excessifs, logos déformés et effets néon.

## 6. Interactions et accessibilité

- Transitions de couleurs : **150–200 ms**.
- Animations d'apparition discrètes : **300–350 ms maximum**.
- Prévoir les états **hover**, **focus-visible**, **disabled** et **loading**.
- Respecter `prefers-reduced-motion`.
- Contraste cible : **WCAG AA** — au moins **4,5:1** pour le texte courant, **3:1** pour le grand texte et les éléments d'interface concernés.
- Thème clair par défaut ; mode sombre disponible, avec mémorisation du choix.

## 7. Tokens CSS — Tailwind CSS v4

À placer dans `src/index.css` :

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2C3E50;
  --color-secondary: #34495E;
  --color-accent: #2563EB;
  --color-cloud: #ECF0F1;
  --font-sans: "Inter", sans-serif;
  --font-heading: "Manrope", sans-serif;
  --radius-card: 1rem;
  --radius-button: 0.625rem;
}

:root {
  color-scheme: light;
  --ui-bg: #FFFFFF;
  --ui-surface: #ECF0F1;
  --ui-card: #FFFFFF;
  --ui-text: #2C3E50;
  --ui-text-secondary: #526475;
  --ui-border: #DCE3E8;
  --ui-accent: #2563EB;
  --ui-accent-foreground: #FFFFFF;
}

.dark {
  color-scheme: dark;
  --ui-bg: #111B25;
  --ui-surface: #172330;
  --ui-card: #223243;
  --ui-text: #F1F5F9;
  --ui-text-secondary: #BDC3C7;
  --ui-border: #34495E;
  --ui-accent: #60A5FA;
  --ui-accent-foreground: #111B25;
}

@theme inline {
  --color-ui-bg: var(--ui-bg);
  --color-ui-surface: var(--ui-surface);
  --color-ui-card: var(--ui-card);
  --color-ui-text: var(--ui-text);
  --color-ui-text-secondary: var(--ui-text-secondary);
  --color-ui-border: var(--ui-border);
  --color-ui-accent: var(--ui-accent);
  --color-ui-accent-foreground: var(--ui-accent-foreground);
}

@layer base {
  body { @apply bg-ui-bg text-ui-text font-sans antialiased; }
  h1, h2, h3, h4, h5, h6 { @apply font-heading; }
  :focus-visible { outline: 2px solid var(--ui-accent); outline-offset: 3px; }
}
```

**Principe directeur :** sobriété, contraste, hiérarchie et cohérence. Le portfolio doit mettre les travaux, publications et expériences en avant — jamais les effets graphiques.
