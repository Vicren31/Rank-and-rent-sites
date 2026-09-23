// Données centrales du site : marque, services, zones, guides.
export const SITE = {
  name: "Déneigeur Lévis",
  domain: "deneigeurlevis.ca",
  url: "https://deneigeurlevis.ca",
  phone: "365-334-9481",
  phoneE164: "+13653349481",
  email: "contact@deneigeurlevis.ca",
  ga4: "G-43NRGZQ8MW",
  city: "Lévis",
  region: "QC",
  // Heures de réponse au téléphone (similaires aux entreprises de la région)
  hours: [
    { days: "Lundi au vendredi", label: "8 h à 18 h", spec: { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" } },
    { days: "Samedi", label: "9 h à 16 h", spec: { dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" } },
    { days: "Dimanche", label: "Fermé", spec: null },
  ],
};

export const SERVICES = [
  { slug: "deneigement-residentiel-levis", name: "Déneigement résidentiel", nav: "Déneigement résidentiel", icon: "house",
    short: "Entrée de cour et stationnement déneigés après chaque bordée, du premier flocon jusqu'au printemps.", form: "Déneigement résidentiel (entrée de cour)" },
  { slug: "contrat-deneigement-saisonnier", name: "Contrat de déneigement saisonnier", nav: "Contrat saisonnier", icon: "calendar",
    short: "Un prix fixe pour tout l'hiver, peu importe le nombre de tempêtes. Contrat écrit et clair.", form: "Contrat saisonnier" },
  { slug: "deneigement-a-l-unite", name: "Déneigement à l'unité", nav: "Déneigement à l'unité", icon: "bolt",
    short: "Un passage ponctuel, sur appel, quand vous en avez besoin. Idéal en dépannage ou pour une maison secondaire.", form: "Déneigement à l'unité (sur appel)" },
  { slug: "deneigement-manuel-balcons-escaliers", name: "Déneigement manuel : balcons, escaliers et trottoirs", nav: "Balcons, escaliers et trottoirs", icon: "shovel",
    short: "Pelletage à la main des accès que la machinerie ne peut pas atteindre, pour sortir de chez vous en sécurité.", form: "Balcons, escaliers et trottoirs" },
  { slug: "epandage-abrasif-deglacage", name: "Épandage d'abrasif et déglaçage", nav: "Épandage d'abrasif", icon: "salt",
    short: "Sable, gravier ou sel selon la surface, pour limiter les chutes lors des redoux et des pluies verglaçantes.", form: "Épandage d'abrasif et déglaçage" },
  { slug: "deneigement-condos-multilogements", name: "Déneigement de condos et multilogements", nav: "Condos et multilogements", icon: "building",
    short: "Stationnements partagés, allées et accès piétons pour syndicats de copropriété et propriétaires d'immeubles.", form: "Condo ou multilogement" },
  { slug: "deneigement-commercial-levis", name: "Déneigement commercial", nav: "Déneigement commercial", icon: "store",
    short: "Stationnements de commerces, bureaux et petites entreprises dégagés avant l'arrivée des clients et des employés.", form: "Déneigement commercial" },
  { slug: "soufflage-transport-neige", name: "Soufflage et transport de neige", nav: "Soufflage et transport de neige", icon: "truck",
    short: "Quand les bancs de neige débordent : soufflage des accumulations et transport hors du terrain.", form: "Soufflage ou transport de neige" },
];

// Zones desservies, regroupées par arrondissement de la Ville de Lévis
export const BOROUGHS = [
  { name: "Desjardins", zones: ["vieux-levis", "lauzon", "saint-david", "pintendre", "saint-joseph-de-la-pointe-de-levy"] },
  { name: "Les Chutes-de-la-Chaudière-Est", zones: ["saint-romuald", "saint-jean-chrysostome", "charny", "breakeyville"] },
  { name: "Les Chutes-de-la-Chaudière-Ouest", zones: ["saint-nicolas", "saint-redempteur", "saint-etienne-de-lauzon"] },
];

export const ZONES = [
  { key: "vieux-levis", name: "Vieux-Lévis", borough: "Desjardins" },
  { key: "lauzon", name: "Lauzon", borough: "Desjardins" },
  { key: "saint-david", name: "Saint-David", borough: "Desjardins" },
  { key: "pintendre", name: "Pintendre", borough: "Desjardins" },
  { key: "saint-joseph-de-la-pointe-de-levy", name: "Saint-Joseph-de-la-Pointe-de-Lévy", short: "Saint-Joseph-de-Lévis", borough: "Desjardins" },
  { key: "saint-romuald", name: "Saint-Romuald", borough: "Les Chutes-de-la-Chaudière-Est" },
  { key: "saint-jean-chrysostome", name: "Saint-Jean-Chrysostome", borough: "Les Chutes-de-la-Chaudière-Est" },
  { key: "charny", name: "Charny", borough: "Les Chutes-de-la-Chaudière-Est" },
  { key: "breakeyville", name: "Breakeyville", borough: "Les Chutes-de-la-Chaudière-Est" },
  { key: "saint-nicolas", name: "Saint-Nicolas", borough: "Les Chutes-de-la-Chaudière-Ouest" },
  { key: "saint-redempteur", name: "Saint-Rédempteur", borough: "Les Chutes-de-la-Chaudière-Ouest" },
  { key: "saint-etienne-de-lauzon", name: "Saint-Étienne-de-Lauzon", borough: "Les Chutes-de-la-Chaudière-Ouest" },
].map((z) => ({ ...z, slug: `deneigement-${z.key}`, path: `/zones-desservies/deneigement-${z.key}/` }));

export const GUIDES = [
  { slug: "reglements-deneigement-levis", name: "Règlements de déneigement à Lévis : ce que tout propriétaire doit savoir" },
  { slug: "contrat-saisonnier-ou-a-l-unite", name: "Contrat saisonnier ou déneigement à l'unité : lequel choisir?" },
  { slug: "choisir-deneigeur-levis", name: "Comment choisir un déneigeur à Lévis : la liste de vérification" },
  { slug: "piquets-balises-deneigement", name: "Piquets et balises de déneigement : protéger votre terrain" },
  { slug: "preparer-entree-avant-hiver", name: "Préparer votre entrée avant l'hiver : 8 gestes simples" },
];

export const PROJECT_TYPES = [
  "Contrat saisonnier résidentiel",
  "Déneigement à l'unité (sur appel)",
  "Balcons, escaliers et trottoirs",
  "Épandage d'abrasif et déglaçage",
  "Condo ou multilogement",
  "Déneigement commercial",
  "Soufflage ou transport de neige",
  "Autre",
];
