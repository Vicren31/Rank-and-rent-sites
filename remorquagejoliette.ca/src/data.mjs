// Données centrales du site : marque, services, zones, guides.
export const SITE = {
  name: "Remorquage Joliette",
  domain: "remorquagejoliette.ca",
  url: "https://remorquagejoliette.ca",
  phone: "450-915-0067",
  phoneE164: "+14509150067",
  email: "contact@remorquagejoliette.ca",
  ga4: "G-306EBJ83EP",
  city: "Joliette",
  region: "QC",
  geo: { lat: 46.0217, lng: -73.4402 },
  // Service d'urgence : ligne ouverte en tout temps, comme les remorqueurs de la région
  hours: [
    { days: "Lundi au dimanche", label: "24 h sur 24", spec: { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } },
    { days: "Jours fériés", label: "Ouvert", spec: null },
  ],
};

export const SERVICES = [
  { slug: "remorquage-automobile", name: "Remorquage automobile", nav: "Remorquage automobile", icon: "tow",
    short: "Voiture, VUS ou camionnette en panne : remorquage vers le garage, le concessionnaire ou la destination de votre choix.", form: "Remorquage d'automobile" },
  { slug: "remorquage-plateau", name: "Remorquage sur plateau", nav: "Remorquage sur plateau", icon: "flatbed",
    short: "Dépanneuse à plateau pour transporter votre véhicule sans que les roues touchent la route : 4x4, AWD, voitures basses.", form: "Remorquage d'automobile" },
  { slug: "remorquage-accident", name: "Remorquage après un accident", nav: "Remorquage après accident", icon: "crash",
    short: "Véhicule accidenté déplacé en sécurité, débris ramassés et documents fournis pour votre réclamation d'assurance.", form: "Remorquage après un accident" },
  { slug: "depannage-routier", name: "Dépannage et assistance routière", nav: "Assistance routière", icon: "wrench",
    short: "Survoltage, déverrouillage, essence, crevaison : on règle le problème sur place quand c'est possible.", form: "Autre" },
  { slug: "survoltage-batterie", name: "Survoltage de batterie (boost)", nav: "Survoltage (boost)", icon: "battery",
    short: "Batterie à plat par grand froid? Survoltage sur place avec un appareil professionnel, à la maison ou sur la route.", form: "Survoltage (batterie à plat)" },
  { slug: "deverrouillage-voiture", name: "Déverrouillage de voiture", nav: "Déverrouillage de portière", icon: "key",
    short: "Clés oubliées dans l'auto ou coffre verrouillé : ouverture de la portière avec des outils qui ne brisent rien.", form: "Déverrouillage de portière" },
  { slug: "livraison-essence", name: "Livraison d'essence", nav: "Livraison d'essence", icon: "fuel",
    short: "Panne sèche sur la route ou dans un rang? On vous apporte assez de carburant pour vous rendre à la station.", form: "Livraison d'essence" },
  { slug: "changement-pneu-crevaison", name: "Changement de pneu et crevaison", nav: "Changement de pneu", icon: "tire",
    short: "Pneu crevé ou à plat : installation de votre roue de secours sur place, ou remorquage si le pneu ne peut pas être remplacé.", form: "Changement de pneu" },
  { slug: "sortie-de-fosse-desenlisement", name: "Sortie de fossé et désenlisement", nav: "Sortie de fossé", icon: "winch",
    short: "Véhicule dans le fossé, pris dans la neige, la boue ou un champ : treuillage professionnel pour le sortir sans l'abîmer.", form: "Sortie de fossé / désenlisement" },
  { slug: "remorquage-moto", name: "Remorquage de moto", nav: "Remorquage de moto", icon: "moto",
    short: "Moto, scooter, VTT ou motoneige transportés sur plateau, bien arrimés, sans risque pour la fourche ou le carénage.", form: "Remorquage de moto" },
  { slug: "remorquage-vr-roulotte", name: "Remorquage de VR et de roulotte", nav: "VR et roulottes", icon: "rv",
    short: "Roulotte, tente-roulotte, fifth wheel ou motorisé : déplacement vers le camping, l'entreposage ou le garage.", form: "Remorquage de VR ou roulotte" },
  { slug: "remorquage-vehicule-electrique", name: "Remorquage de véhicule électrique", nav: "Véhicule électrique", icon: "plug",
    short: "Véhicules électriques et hybrides remorqués sur plateau, selon les recommandations des fabricants.", form: "Véhicule électrique ou hybride" },
  { slug: "remorquage-lourd", name: "Remorquage lourd", nav: "Remorquage lourd", icon: "truck",
    short: "Camions, cubes, autobus et véhicules commerciaux : remorquage et récupération avec l'équipement adapté au poids.", form: "Remorquage lourd (camion, autobus)" },
  { slug: "transport-vehicule-longue-distance", name: "Transport de véhicule longue distance", nav: "Longue distance", icon: "route",
    short: "Achat d'une auto à Montréal, déménagement ou retour de voyage : transport de votre véhicule partout au Québec.", form: "Transport longue distance" },
  { slug: "transport-machinerie", name: "Transport de machinerie et d'équipement", nav: "Transport de machinerie", icon: "excavator",
    short: "Mini-excavatrice, tracteur, chariot élévateur ou équipement de chantier transportés sur plateau.", form: "Transport de machinerie" },
  { slug: "remorquage-vehicule-ferraille", name: "Remorquage de véhicule hors d'usage", nav: "Véhicule pour la ferraille", icon: "recycle",
    short: "Vieille voiture qui ne roule plus? On la sort de votre cour et on l'amène au recycleur autorisé.", form: "Véhicule hors d'usage (ferraille)" },
];

// Zones desservies, regroupées par MRC
export const GROUPS = [
  { name: "MRC de Joliette", zones: ["saint-charles-borromee", "notre-dame-des-prairies", "saint-paul", "crabtree", "saint-thomas", "sainte-melanie", "notre-dame-de-lourdes", "saint-ambroise-de-kildare"] },
  { name: "Matawinie", zones: ["saint-felix-de-valois", "rawdon", "saint-jean-de-matha"] },
  { name: "D'Autray", zones: ["lavaltrie", "berthierville", "sainte-elisabeth"] },
  { name: "Montcalm et L'Assomption", zones: ["saint-jacques", "l-assomption"] },
];

export const ZONES = [
  { key: "saint-charles-borromee", name: "Saint-Charles-Borromée", mrc: "MRC de Joliette" },
  { key: "notre-dame-des-prairies", name: "Notre-Dame-des-Prairies", mrc: "MRC de Joliette" },
  { key: "saint-paul", name: "Saint-Paul", mrc: "MRC de Joliette" },
  { key: "crabtree", name: "Crabtree", mrc: "MRC de Joliette" },
  { key: "saint-thomas", name: "Saint-Thomas", mrc: "MRC de Joliette" },
  { key: "sainte-melanie", name: "Sainte-Mélanie", mrc: "MRC de Joliette" },
  { key: "notre-dame-de-lourdes", name: "Notre-Dame-de-Lourdes", mrc: "MRC de Joliette" },
  { key: "saint-ambroise-de-kildare", name: "Saint-Ambroise-de-Kildare", mrc: "MRC de Joliette" },
  { key: "saint-felix-de-valois", name: "Saint-Félix-de-Valois", mrc: "MRC de Matawinie" },
  { key: "rawdon", name: "Rawdon", mrc: "MRC de Matawinie" },
  { key: "saint-jean-de-matha", name: "Saint-Jean-de-Matha", mrc: "MRC de Matawinie" },
  { key: "lavaltrie", name: "Lavaltrie", mrc: "MRC de D'Autray" },
  { key: "berthierville", name: "Berthierville", mrc: "MRC de D'Autray" },
  { key: "sainte-elisabeth", name: "Sainte-Élisabeth", mrc: "MRC de D'Autray" },
  { key: "saint-jacques", name: "Saint-Jacques", mrc: "MRC de Montcalm" },
  { key: "l-assomption", name: "L'Assomption", mrc: "MRC de L'Assomption" },
].map((z) => ({ ...z, slug: `remorquage-${z.key}`, path: `/zones-desservies/remorquage-${z.key}/` }));

// Axes routiers (pages dédiées aux pannes et accidents sur la route)
export const ROUTES = [
  { key: "autoroute-40", name: "Autoroute 40", short: "A-40" },
  { key: "autoroute-31", name: "Autoroute 31", short: "A-31" },
  { key: "route-158", name: "Route 158", short: "Route 158" },
  { key: "route-131", name: "Route 131", short: "Route 131" },
].map((r) => ({ ...r, slug: `remorquage-${r.key}`, path: `/zones-desservies/remorquage-${r.key}/` }));

export const GUIDES = [
  { slug: "que-faire-apres-accident-auto", name: "Accident d'auto dans Lanaudière : que faire dans les 30 premières minutes" },
  { slug: "panne-sur-autoroute-securite", name: "Panne sur l'autoroute 40 ou 31 : les bons réflexes de sécurité" },
  { slug: "batterie-a-plat-par-grand-froid", name: "Batterie à plat par grand froid : causes, survoltage et prévention" },
  { slug: "choisir-un-remorqueur", name: "Comment choisir un remorqueur fiable : la liste de vérification" },
  { slug: "plateau-ou-remorquage-conventionnel", name: "Plateau ou remorquage conventionnel : quelle méthode pour votre véhicule?" },
  { slug: "voiture-dans-le-fosse-hiver", name: "Votre voiture a pris le fossé cet hiver : quoi faire et quoi éviter" },
  { slug: "vehicule-remorque-ou-saisi", name: "Véhicule remorqué ou saisi : comment le récupérer au Québec" },
];

export const PROJECT_TYPES = [
  "Remorquage d'automobile",
  "Remorquage après un accident",
  "Survoltage (batterie à plat)",
  "Déverrouillage de portière",
  "Livraison d'essence",
  "Changement de pneu",
  "Sortie de fossé / désenlisement",
  "Remorquage de moto",
  "Remorquage de VR ou roulotte",
  "Véhicule électrique ou hybride",
  "Remorquage lourd (camion, autobus)",
  "Transport longue distance",
  "Transport de machinerie",
  "Véhicule hors d'usage (ferraille)",
  "Autre",
];
