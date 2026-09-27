# remorquagejoliette.ca

Site statique « rank and rent » pour **Remorquage Joliette** : remorquage, assistance routière et transport de véhicules
à Joliette (QC) et dans 16 municipalités voisines. Français (Québec), 54 pages indexables, hébergé sur Cloudflare.

- Téléphone (suivi GHL) : **450-915-0067**, seul numéro affiché sur le site
- Courriel et formulaire : `contact@remorquagejoliette.ca`
- Google Analytics 4 : `G-306EBJ83EP`
- Zone de service seulement : aucune adresse civique, pas de fiche Google Business Profile

## Structure

```
remorquagejoliette.ca/
├── public/            ← site généré, prêt à déployer (versionné)
├── src/
│   ├── data.mjs       ← marque, téléphone, heures, services, zones, axes routiers, guides
│   ├── components.mjs ← formulaire, CTA, FAQ, grilles, icônes, photos facultatives
│   ├── build.mjs      ← gabarit, schema JSON-LD, sitemap, robots, _headers, _redirects
│   ├── assets.mjs     ← logo, favicon, illustration de route, image Open Graph, polices
│   └── content/       ← textes : accueil, services, zones, routes, guides, pages
├── static/            ← CSS, JS, polices et images copiés tels quels
├── docs/recherche-seo.md ← recherche de mots-clés et analyse des compétiteurs
└── wrangler.jsonc     ← configuration Cloudflare (Worker « remorquage-joliette »)
```

## Commandes

```bash
npm install
npm run build:all   # régénère les images et le site
npm run build       # régénère seulement les pages
```

Modifier un texte : éditer le fichier dans `src/content/`, puis `npm run build`, commit et push.

## Identité visuelle

| Rôle | Code |
|---|---|
| Charbon (texte, pied de page) | `#121417` |
| Asphalte (héros, sections sombres) | `#1B1F24` |
| Jaune sécurité (appels à l'action) | `#FFC20E` |
| Rouge gyrophare (accents) | `#D7261E` |
| Gris clair (sections) | `#F3F4F6` |

Logo : carré jaune avec un crochet de remorquage en forme de « J » et une bande de signalisation.
Polices : Barlow Condensed (titres) et Inter (texte), auto-hébergées.

## Déploiement Cloudflare

Le dossier `public/` est déjà généré : aucune commande de build n'est nécessaire côté Cloudflare.

### Option A : Workers Builds (relié au dépôt GitHub, recommandé)

1. Cloudflare → **Workers & Pages** → **Create** → **Import a repository** → `vicren31/rank-and-rent-sites`.
2. Réglages :
   - Project name : `remorquage-joliette`
   - Root directory : `remorquagejoliette.ca`
   - Build command : *(vide)*
   - Deploy command : `npx wrangler deploy`
   - Production branch : la branche qui contient ce dossier
3. Au premier déploiement, `wrangler.jsonc` attache automatiquement les domaines personnalisés
   `remorquagejoliette.ca` et `www.remorquagejoliette.ca` (la zone doit être dans le même compte Cloudflare).
   Si un domaine est déjà relié à un ancien projet Pages, retirez-le de ce projet avant.

### Option B : depuis un terminal

```bash
cd remorquagejoliette.ca
npx wrangler login      # ou variable CLOUDFLARE_API_TOKEN
npx wrangler deploy
```

### Redirection www → racine

Toutes les URL canoniques pointent vers `https://remorquagejoliette.ca/` (sans www).
Zone `remorquagejoliette.ca` → **Rules** → **Redirect Rules** → modèle *Redirect from WWW to root*, code 301.

## Formulaire (FormSubmit)

- Champs : nom, téléphone, ville, type de service (`type_projet`), message.
- Envoi AJAX vers `https://formsubmit.co/ajax/contact@remorquagejoliette.ca`, puis redirection vers `/merci/`.
- **Activation obligatoire** : la toute première soumission envoie un courriel « Activate Form » à
  `contact@remorquagejoliette.ca`. La boîte doit donc recevoir les courriels (ex. Cloudflare Email Routing).
  Cliquer sur le lien d'activation avant la mise en ligne réelle.
- Après activation, FormSubmit fournit un identifiant aléatoire : le mettre à la place de l'adresse dans
  `src/components.mjs` (action du formulaire) pour masquer le courriel dans le code source.
- Anti-pourriel : champ piège `_honey`, captcha désactivé pour ne pas nuire à la conversion mobile.

## Google Analytics 4 (G-306EBJ83EP)

Balise installée sur toutes les pages. Événements personnalisés :

| Événement | Déclencheur | À marquer comme événement clé |
|---|---|
| `generate_lead` | envoi réussi du formulaire (paramètres `ville`, `type_projet`) | ✅ |
| `click_to_call` | clic sur un lien `tel:` (paramètre `link_location`) | ✅ |
| `form_start` | première saisie dans un formulaire | |

Dans GA4 : Admin → Événements clés → marquer `generate_lead` et `click_to_call`.

## Architecture SEO

| Gabarit | URL | Mot-clé principal |
|---|---|
| Accueil | `/` | remorquage Joliette, remorqueuse Joliette, remorquage 24h Joliette |
| Services (index) | `/services/` | services de remorquage Joliette |
| Service (16) | `/services/{service}/` | remorquage automobile, plateau, accident, assistance routière, survoltage, déverrouillage, livraison d'essence, changement de pneu, sortie de fossé, moto, VR et roulotte, véhicule électrique, lourd, longue distance, machinerie, véhicule hors d'usage + « Joliette » |
| Zones (16) | `/zones-desservies/remorquage-{ville}/` | remorquage {ville} |
| Axes routiers (4) | `/zones-desservies/remorquage-{autoroute-40, autoroute-31, route-158, route-131}/` | remorquage autoroute 40, panne autoroute 31… |
| Prix | `/prix-remorquage-joliette/` | prix remorquage Joliette, combien coûte un remorquage |
| Guides (7) | `/conseils/{guide}/` | accident, panne sur l'autoroute, batterie à plat, choisir un remorqueur, plateau, fossé, véhicule saisi |
| Pages | `/a-propos/`, `/contact/`, `/faq/`, `/plan-du-site/`, légales | |

Schema : `AutomotiveBusiness` (zone de service, sans adresse civique, ouvert 24/7), `Service`, `FAQPage`,
`BreadcrumbList`, `Article`, `WebSite`. Sitemap : `/sitemap.xml`. Page `/merci/` en noindex.

## Photos

Les illustrations actuelles sont des SVG originaux (libres de droits). Des emplacements de photos sont déjà prévus
dans le contenu : il suffit de déposer ces fichiers (WebP, 1200 × 800) dans `static/assets/img/photos/`,
puis `npm run build`. Choisir des photos neutres (aucun logo ni nom d'entreprise visible).

| Fichier | Sujet |
|---|---|
| `remorquage-automobile-joliette.webp` | Dépanneuse remorquant une voiture |
| `remorquage-plateau-joliette.webp` | Voiture chargée sur une dépanneuse à plateau |
| `survoltage-batterie-joliette.webp` | Survoltage d'une batterie en hiver |
| `sortie-de-fosse-joliette.webp` | Véhicule sorti d'un fossé enneigé |

## Après la mise en ligne

1. Activer FormSubmit (voir plus haut) et faire un test complet (formulaire + clic sur le numéro).
2. Google Search Console : ajouter la propriété de domaine, soumettre `https://remorquagejoliette.ca/sitemap.xml`.
3. Test des résultats enrichis (Rich Results Test) sur l'accueil, une page de service et `/faq/`.
4. PageSpeed Insights (mobile).
5. Citations (sans adresse, même nom, même numéro, même site) : PagesJaunes, Yelp, 411.ca, Cylex, Hotfrog,
   iBegin, Canpages, répertoires de Lanaudière. Voir `docs/recherche-seo.md` pour la liste.
