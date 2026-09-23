# deneigeurlevis.ca

Site statique « rank and rent » pour **Déneigeur Lévis** : déneigement résidentiel et services connexes à Lévis (QC).
Français (Québec), 36 pages indexables, hébergé sur Cloudflare Pages.

## Structure

```
deneigeurlevis.ca/
├── public/            ← site généré, prêt à déployer (dossier de sortie Cloudflare Pages)
├── src/
│   ├── data.mjs       ← marque, téléphone, heures, services, zones, guides
│   ├── components.mjs ← formulaire, CTA, FAQ, grilles, icônes
│   ├── build.mjs      ← gabarit, schema JSON-LD, sitemap, robots, _headers, _redirects
│   ├── assets.mjs     ← logo, favicon, illustrations, image Open Graph, polices
│   └── content/       ← textes : home, services, zones, guides, pages
└── static/            ← CSS, JS, polices et images copiés tels quels
```

## Commandes

```bash
npm install
npm run build:all   # régénère les images et le site
npm run build       # régénère seulement les pages
```

Modifier un texte : éditer le fichier dans `src/content/`, puis `npm run build`.

## Déploiement Cloudflare (Workers, actifs statiques)

Le Worker `rank-and-rent-sites` est relié à ce dépôt GitHub (Workers Builds).
La configuration est dans `wrangler.jsonc` à la racine du dépôt : elle publie `deneigeurlevis.ca/public`.

Réglages de build attendus dans Cloudflare :
- Build command : *(vide)* : `public/` est déjà généré et versionné
- Deploy command : `npx wrangler deploy`
- Root directory : `/`

Chaque push sur la branche configurée redéploie le site. Après une modification de texte :
`npm run build` dans `deneigeurlevis.ca/`, puis commit et push.

### Domaines personnalisés

Worker → Settings → Domains & Routes → Add → Custom domain : ajouter `deneigeurlevis.ca`, puis `www.deneigeurlevis.ca`.
Toutes les URL canoniques pointent vers `https://deneigeurlevis.ca/` (sans www). Pour rediriger le www :
zone deneigeurlevis.ca → Rules → Redirect Rules → modèle *Redirect from WWW to root*, code 301.

## Formulaire (FormSubmit)

- Champs : nom, téléphone, ville/secteur, type de projet, message.
- Envoi AJAX vers `https://formsubmit.co/ajax/contact@deneigeurlevis.ca`, puis redirection vers `/merci/`.
- **Activation obligatoire** : la toute première soumission déclenche un courriel « Activate Form » à `contact@deneigeurlevis.ca`. Cliquer sur le lien avant la mise en ligne réelle.
- Après activation, FormSubmit fournit un identifiant aléatoire : remplacer l'adresse dans `SITE.email` → action du formulaire (`src/components.mjs`) pour masquer le courriel dans le code source.
- Anti-pourriel : champ piège `_honey`, captcha désactivé pour la conversion mobile.

## Google Analytics 4 (G-43NRGZQ8MW)

Balise installée sur toutes les pages. Événements personnalisés :

| Événement | Déclencheur | À marquer comme conversion |
|---|---|---|
| `generate_lead` | envoi réussi du formulaire (paramètres `ville`, `type_projet`) | ✅ |
| `click_to_call` | clic sur un lien `tel:` (paramètre `link_location`) | ✅ |
| `form_start` | première saisie dans un formulaire | |

Dans GA4 : Admin → Événements clés → marquer `generate_lead` et `click_to_call`.

## Architecture SEO

| Gabarit | URL | Mot-clé principal |
|---|---|---|
| Accueil | `/` | déneigement Lévis, déneigeur Lévis |
| Service | `/services/deneigement-residentiel-levis/` | déneigement résidentiel Lévis |
| Service | `/services/contrat-deneigement-saisonnier/` | contrat de déneigement Lévis |
| Service | `/services/deneigement-a-l-unite/` | déneigement à l'unité Lévis |
| Service | `/services/deneigement-manuel-balcons-escaliers/` | déneigement balcon / escalier Lévis |
| Service | `/services/epandage-abrasif-deglacage/` | épandage abrasif Lévis |
| Service | `/services/deneigement-condos-multilogements/` | déneigement condo / multilogement Lévis |
| Service | `/services/deneigement-commercial-levis/` | déneigement commercial Lévis |
| Service | `/services/soufflage-transport-neige/` | transport / soufflage de neige Lévis |
| Zones (12) | `/zones-desservies/deneigement-{secteur}/` | déneigement {secteur} |
| Prix | `/prix-deneigement-levis/` | prix déneigement Lévis |
| Guides (5) | `/conseils/...` | règlements, choisir un déneigeur, contrat, piquets |

Schema : `HomeAndConstructionBusiness` (zone de service, sans adresse civique), `Service`, `FAQPage`,
`BreadcrumbList`, `Article`. Sitemap : `/sitemap.xml`. Page `/merci/` en noindex.

Choix de périmètre (revente en bloc à un seul partenaire) : 12 secteurs de la ville de Lévis seulement
(pas de municipalités voisines) et aucun déneigement de toiture, service souvent confié à des spécialistes distincts.

## Après la mise en ligne

1. Activer FormSubmit (voir plus haut) et faire un test complet.
2. Google Search Console : ajouter le domaine, soumettre `https://deneigeurlevis.ca/sitemap.xml`.
3. Test des résultats enrichis (Rich Results Test) sur l'accueil et une page de service.
4. PageSpeed Insights (mobile).
5. Citations : PagesJaunes, Yelp, Hotfrog, Cylex, etc. avec le même nom et le même numéro (365-334-9481).

## Images

Les illustrations sont des SVG originaux (libres de droits), générés par `src/assets.mjs`.
Pour ajouter des photos : déposer des fichiers WebP nommés avec des mots-clés (ex. `deneigement-entree-levis.webp`)
dans `static/assets/img/`, les référencer dans `src/content/`, puis `npm run build`.
