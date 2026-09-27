import { SITE, servicePage, P24, PCERT, PPRIX, PDEST } from "./_service.mjs";
import { steps, sLink, gLink, zLink, photo } from "../components.mjs";

export default [
  // 9. Sortie de fossé
  servicePage({
    slug: "sortie-de-fosse-desenlisement",
    title: "Sortie de fossé et désenlisement à Joliette | 24/7",
    description: "Auto dans le fossé ou enlisée dans la neige, la boue ou un champ près de Joliette? Treuillage professionnel 24 h sur 24. Soumission gratuite au 450-915-0067.",
    h1: "Sortie de fossé et désenlisement à Joliette",
    serviceType: "Treuillage, sortie de fossé et désenlisement",
    lead: "Votre véhicule a glissé dans le fossé, s'est enlisé dans un banc de neige, dans la boue d'un chemin de terre ou dans un champ? On le sort avec un treuil et des sangles adaptés, sans l'abîmer davantage.",
    checks: ["Fossés, bancs de neige, boue et sable", "Treuil, sangles et poulies professionnels", "Autos, VUS, camionnettes et camions", "Remorquage au garage si nécessaire"],
    prose: `
<p>Dans Lanaudière, la sortie de route fait partie de l'hiver. Un rang balayé par la poudrerie entre ${zLink("saint-thomas")} et ${zLink("sainte-elisabeth")}, une courbe glacée sur la route 348 près de ${zLink("sainte-melanie")}, un accotement mou au dégel près de ${zLink("saint-ambroise-de-kildare")} : il suffit d'un instant pour que les roues quittent la chaussée. La sortie de fossé à Joliette demande un treuillage bien fait pour éviter d'endommager la suspension, les pare-chocs ou le dessous du véhicule.</p>
${photo("sortie-de-fosse-joliette.webp", "Véhicule sorti d'un fossé enneigé par une dépanneuse près de Joliette")}
<h2>Pourquoi ne pas tirer l'auto avec un autre véhicule?</h2>
<p>Tirer une auto enlisée avec une camionnette et une corde de fortune semble simple, mais c'est l'une des manœuvres les plus risquées qui soient. Une corde ou une sangle qui cède peut fouetter avec une force suffisante pour blesser gravement quelqu'un ou briser une vitre. Un crochet fixé au mauvais endroit peut arracher un pare-chocs ou tordre un bras de suspension. Le treuillage professionnel utilise des points d'ancrage sûrs, des sangles homologuées et une traction lente et contrôlée.</p>

<h2>Comment se déroule une sortie de fossé</h2>
${steps([
  ["Évaluation", "Le remorqueur évalue l'angle du véhicule, la profondeur du fossé, la nature du sol et les obstacles (clôture, poteau, arbre)."],
  ["Ancrage", "Les sangles sont fixées aux points de remorquage ou de levage prévus par le fabricant, jamais aux pièces fragiles."],
  ["Treuillage", "Le véhicule est ramené lentement sur la chaussée, avec une poulie de renvoi au besoin pour changer l'angle de traction."],
  ["Inspection", "On vérifie roues, pneus, direction et fuites. Si l'auto n'est pas sécuritaire, elle est remorquée au garage."],
], false)}

<h2>Situations fréquentes</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Situation</th><th>Ce qu'il faut savoir</th></tr></thead>
  <tbody>
    <tr><td>Auto dans un fossé enneigé</td><td>La neige cache souvent de l'eau ou de la glace au fond du fossé. Ne forcez pas le moteur, vous risquez de surchauffer la transmission.</td></tr>
    <tr><td>Véhicule pris dans un banc de charrue</td><td>Fréquent après le passage de la déneigeuse. Un simple treuillage suffit la plupart du temps.</td></tr>
    <tr><td>Enlisement dans la boue (printemps, chemin de terre)</td><td>Le sol peut être très mou en période de dégel. Un ancrage solide est nécessaire.</td></tr>
    <tr><td>VUS ou camionnette dans un champ</td><td>Un 4x4 ne passe pas partout. La traction doit parfois se faire sur une bonne distance.</td></tr>
    <tr><td>Véhicule sur le côté ou sur le toit</td><td>Remise sur roues délicate, souvent suivie d'un remorquage sur plateau. Composez d'abord le 9-1-1 s'il y a des blessés.</td></tr>
  </tbody>
</table></div>

<div class="callout callout-danger"><strong>Votre sécurité d'abord :</strong> si vous êtes dans le fossé au bord d'une route achalandée, restez dans le véhicule, ceinture bouclée, feux de détresse allumés, à moins de sentir une odeur d'essence ou de voir de la fumée. Si l'échappement est bloqué par la neige, ne laissez pas tourner le moteur : le monoxyde de carbone peut s'accumuler dans l'habitacle.</div>

<h2>Après la sortie du fossé</h2>
<p>Même si l'auto semble correcte, un passage dans le fossé peut avoir déréglé la géométrie, endommagé un pneu ou un bras de suspension. Si le volant n'est plus droit, si vous entendez un bruit anormal ou si le véhicule tire d'un côté, faites-le inspecter. Nos conseils détaillés se trouvent dans le guide ${gLink("voiture-dans-le-fosse-hiver", "Votre voiture a pris le fossé cet hiver")}.</p>`,
    faq: [
      { q: "La sortie de fossé est-elle couverte par mon assurance?", a: "Cela dépend de votre contrat et des protections choisies. Plusieurs polices ou services d'assistance routière couvrent le désenlisement. Gardez votre facture détaillée pour faire votre demande de remboursement." },
      { q: "Pouvez-vous sortir un véhicule enlisé dans un champ agricole?", a: "Oui, dans la plupart des cas, en autant que la dépanneuse puisse s'approcher à une distance raisonnable sur un sol stable. Un câble de treuil long et des sangles de rallonge permettent de travailler à distance. Décrivez-nous l'accès lors de l'appel." },
      { q: "Mon véhicule s'est retrouvé sur le côté : que faire?", a: "Si quelqu'un est blessé ou coincé, composez immédiatement le 9-1-1. Ensuite, la remise sur roues doit être faite par un professionnel, avec des sangles et parfois deux points de traction, pour éviter d'aggraver les dommages. Le véhicule est ensuite habituellement remorqué sur plateau." },
      { q: "Sortez-vous aussi les camions et les VR?", a: `Oui, avec l'équipement adapté au poids. Les camions lourds, les autobus et les grands motorisés demandent une dépanneuse de plus forte capacité : voyez notre service de ${sLink("remorquage-lourd", "remorquage lourd")}.` },
    ],
    pillars: [PCERT, P24, PPRIX],
  }),

  // 10. Moto
  servicePage({
    slug: "remorquage-moto",
    title: "Remorquage de moto à Joliette | Moto, scooter et VTT",
    description: "Remorquage de moto, scooter, VTT et motoneige à Joliette et dans Lanaudière, sur plateau avec arrimage adapté. Service 24/7 et soumission gratuite.",
    h1: "Remorquage de moto à Joliette",
    serviceType: "Remorquage de moto",
    lead: "Une moto ne se remorque pas comme une auto. On la transporte sur plateau, debout, avec des sangles fixées aux bons endroits pour protéger la fourche, le carénage et les rétroviseurs.",
    checks: ["Motos routières, sport, custom et hors-route", "Scooters, VTT, côte-à-côte et motoneiges", "Arrimage professionnel sur plateau", "Transport vers le garage ou à la maison"],
    prose: `
<p>La saison de moto est courte au Québec, et une panne en plein mois de juillet sur la route 131 vers ${zLink("saint-jean-de-matha")} ou sur les routes sinueuses autour de ${zLink("rawdon")} peut vite gâcher une sortie. Le remorquage de moto à Joliette demande du doigté : une moto mal arrimée peut basculer, et une sangle mal placée peut plier un guidon ou marquer un réservoir.</p>

<h2>Quels véhicules transportons-nous?</h2>
<ul>
  <li><strong>Motos routières, sport, custom et de tourisme</strong>, y compris les grosses cylindrées.</li>
  <li><strong>Scooters et motocyclettes à trois roues</strong>.</li>
  <li><strong>Motos hors route et double usage</strong>.</li>
  <li><strong>VTT (quads) et côte-à-côte</strong>, par exemple vers le concessionnaire pour l'entretien.</li>
  <li><strong>Motoneiges</strong>, sur plateau ou avec leur remorque, en saison hivernale.</li>
</ul>

<h2>Comment on transporte une moto en sécurité</h2>
${steps([
  ["Chargement", "La moto est montée sur le plateau à l'aide d'une rampe ou du plateau incliné, jamais soulevée par la fourche."],
  ["Calage", "La roue avant est calée dans un sabot ou contre un point d'appui pour garder la moto droite."],
  ["Arrimage", "Des sangles à cliquet sont fixées aux points solides (tés de fourche, cadre), avec des boucles souples pour ne pas marquer."],
  ["Transport", "La moto voyage debout, suspension légèrement compressée, jusqu'au garage, au concessionnaire ou chez vous."],
], false)}

<h2>Moto accidentée</h2>
<p>Après une chute ou une collision, une moto peut avoir une fourche tordue, une roue voilée ou un guidon brisé qui empêchent de la faire rouler. Le remorqueur utilise alors des sangles supplémentaires et, au besoin, un chariot pour la charger. Si vous êtes blessé, composez d'abord le 9-1-1 : la moto peut attendre. Pour la réclamation, gardez votre facture détaillée et prenez des photos des lieux, comme expliqué dans notre guide ${gLink("que-faire-apres-accident-auto", "sur les accidents")}.</p>

<h2>Déplacements planifiés</h2>
<p>Pas besoin d'être en panne pour nous appeler. Nous transportons aussi des motos pour :</p>
<ul>
  <li>l'entretien du printemps ou le remisage d'automne chez le concessionnaire;</li>
  <li>l'achat d'une moto usagée non immatriculée;</li>
  <li>un déménagement, ou un projet de restauration qui ne roule pas encore.</li>
</ul>
<p>Pour les longs trajets, voyez notre service de ${sLink("transport-vehicule-longue-distance", "transport longue distance")}.</p>`,
    faq: [
      { q: "Peut-on remorquer une moto avec une dépanneuse conventionnelle?", a: "Ce n'est pas recommandé. Une moto se transporte sur plateau ou dans une remorque adaptée, debout et bien arrimée. La dépanneuse à roues levées est conçue pour les autos, pas pour les deux-roues." },
      { q: "Dois-je enlever mes sacoches et mes accessoires?", a: "Retirez vos objets de valeur et les sacoches amovibles si possible. Les accessoires fixes (pare-brise, valises rigides) peuvent rester en place : le remorqueur en tiendra compte pour placer les sangles." },
      { q: "Pouvez-vous transporter deux motos à la fois?", a: "Selon la taille du plateau et des motos, c'est parfois possible. Mentionnez-le lors de votre demande de soumission." },
      { q: "Remorquez-vous les motoneiges en panne dans les sentiers?", a: "Nous intervenons là où la dépanneuse peut accéder de façon sécuritaire, comme un stationnement de relais, une halte ou le bord d'une route. La récupération en plein sentier relève généralement des clubs de motoneige ou de services spécialisés." },
    ],
    pillars: [PCERT, PDEST, P24],
  }),

  // 11. VR et roulottes
  servicePage({
    slug: "remorquage-vr-roulotte",
    title: "Remorquage de VR et de roulotte à Joliette | Lanaudière",
    description: "Remorquage et déplacement de roulotte, tente-roulotte, fifth wheel et motorisé à Joliette et dans Lanaudière : camping, garage ou entreposage.",
    h1: "Remorquage de VR et de roulotte à Joliette",
    serviceType: "Remorquage de véhicules récréatifs",
    lead: "Roulotte à déplacer vers le camping, fifth wheel à amener au garage ou motorisé en panne sur la route des vacances : on s'occupe du déplacement avec le bon équipement.",
    checks: ["Roulottes de voyage et tentes-roulottes", "Fifth wheel (sellette) selon l'équipement", "Motorisés classe B et C", "Camping, entreposage, garage ou concessionnaire"],
    prose: `
<p>Lanaudière est une région de campings et de villégiature, des lacs de ${zLink("rawdon")} jusqu'à ${zLink("saint-jean-de-matha")} et au-delà. Chaque printemps et chaque automne, des centaines de roulottes et de véhicules récréatifs se déplacent entre l'entreposage, le terrain de camping et le garage. Le remorquage de VR et de roulotte à Joliette s'adresse à ceux qui n'ont pas de véhicule assez puissant pour tirer leur roulotte, et à ceux qui sont tombés en panne en route.</p>

<h2>Types de véhicules récréatifs</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Véhicule</th><th>Comment on le déplace</th></tr></thead>
  <tbody>
    <tr><td>Tente-roulotte et petite roulotte</td><td>Attelée à une camionnette équipée ou transportée sur plateau selon la taille.</td></tr>
    <tr><td>Roulotte de voyage</td><td>Attelée par boule (pare-chocs) avec barre de répartition de charge au besoin.</td></tr>
    <tr><td>Fifth wheel (sellette)</td><td>Tractée par un camion muni d'une sellette d'attelage, selon la disponibilité de l'équipement.</td></tr>
    <tr><td>Motorisé classe B ou C</td><td>Remorquage conventionnel ou sur plateau, selon le poids et la longueur.</td></tr>
    <tr><td>Motorisé classe A</td><td>${sLink("remorquage-lourd", "Remorquage lourd")} : dépanneuse de forte capacité.</td></tr>
  </tbody>
</table></div>
<p>Donnez-nous le type, la longueur et le poids approximatif de votre VR (inscrit sur l'étiquette du fabricant, souvent près de la porte d'entrée) : c'est ce qui détermine l'équipement à envoyer.</p>

<h2>Déplacements saisonniers</h2>
<ul>
  <li><strong>Sortie d'entreposage au printemps</strong> et installation au camping saisonnier.</li>
  <li><strong>Retour à l'entreposage à l'automne</strong>, avant les premières neiges.</li>
  <li><strong>Déplacement au garage ou chez le concessionnaire</strong> pour l'entretien, une inspection ou une réparation.</li>
  <li><strong>Livraison après un achat</strong>, par exemple d'un particulier de la région de Montréal jusqu'à votre terrain.</li>
</ul>

<h2>Avant le déplacement : liste de vérification</h2>
${steps([
  ["Fermeture", "Rentrez les extensions (slide-out), l'auvent, les marches et l'antenne. Verrouillez portes et compartiments."],
  ["Arrimage intérieur", "Rangez et calez tout ce qui peut bouger : vaisselle, télé, bonbonnes, objets sur les comptoirs."],
  ["Propane et eau", "Fermez les bonbonnes de propane et videz les réservoirs d'eaux usées si possible."],
  ["Accès", "Assurez-vous que la roulotte est accessible pour l'attelage, et que la voie est dégagée."],
], false)}

<h2>Panne de motorisé sur la route</h2>
<p>Un motorisé en panne sur l'${zLink("autoroute-40", "autoroute 40")} ou sur la route 131 est un véhicule long et lourd, difficile à contourner pour les autres usagers. Rangez-vous le plus loin possible de la circulation, allumez vos feux de détresse et faites sortir les passagers du côté opposé à la circulation si c'est sécuritaire. Appelez-nous en précisant la classe et le poids du véhicule.</p>`,
    faq: [
      { q: "Pouvez-vous déplacer ma roulotte à l'intérieur d'un terrain de camping?", a: "Oui, selon l'espace de manœuvre disponible et les règles du camping. Certains terrains exigent d'être avisés à l'avance : vérifiez avec l'administration du camping avant la date du déplacement." },
      { q: "Ma roulotte n'a pas été déplacée depuis des années : est-ce un problème?", a: "Ça peut l'être. Des pneus craquelés, des roulements secs ou des freins grippés rendent le déplacement risqué. Dans certains cas, le transport sur plateau est préférable. Décrivez-nous l'état de la roulotte pour une soumission adaptée." },
      { q: "Remorquez-vous les roulottes qui n'ont pas de freins électriques?", a: "Les petites remorques et roulottes légères n'ont pas toujours de freins. Au-delà d'un certain poids, des freins fonctionnels sont nécessaires pour la route. Le remorqueur évaluera la solution sécuritaire : attelage ou plateau." },
      { q: "Faites-vous le transport de bateaux?", a: "Pour un bateau sur sa remorque, contactez-nous avec les dimensions et le poids : selon l'équipement disponible, le déplacement peut être organisé. Pour un bateau sans remorque, un transporteur spécialisé sera nécessaire." },
    ],
    pillars: [PPRIX, PCERT, P24],
    pillarsTitle: "Un déplacement de VR bien planifié",
  }),

  // 12. Véhicule électrique
  servicePage({
    slug: "remorquage-vehicule-electrique",
    title: "Remorquage de véhicule électrique à Joliette | Plateau",
    description: "Remorquage de voitures électriques et hybrides à Joliette sur plateau, selon les recommandations des fabricants. Service 24/7, soumission gratuite.",
    h1: "Remorquage de véhicule électrique à Joliette",
    serviceType: "Remorquage de véhicules électriques et hybrides",
    lead: "Tesla, Bolt, Ioniq, Leaf, F-150 Lightning ou hybride rechargeable : un véhicule électrique se remorque sur plateau, les quatre roues soulevées, avec des points d'ancrage précis. On s'en occupe.",
    checks: ["Transport sur plateau, quatre roues soulevées", "Points d'ancrage et de treuillage du fabricant", "Batterie vide : vers une borne de recharge", "Service 24 h sur 24, 7 jours sur 7"],
    prose: `
<p>Le Québec compte parmi les régions d'Amérique du Nord où l'on trouve le plus de véhicules électriques, et Lanaudière ne fait pas exception. Ces véhicules tombent moins souvent en panne mécanique qu'une auto à essence, mais ils ont leurs propres besoins : batterie à plat, panne de logiciel, crevaison sur un modèle sans roue de secours ou accident. Le remorquage de véhicule électrique à Joliette se fait selon des règles précises.</p>

<h2>Pourquoi un véhicule électrique doit-il voyager sur plateau?</h2>
<p>Dans un véhicule électrique, les roues sont reliées directement au moteur. Si on remorque le véhicule avec des roues motrices au sol, le moteur tourne et agit comme une génératrice : il produit du courant et de la chaleur qui peuvent endommager le moteur, l'onduleur ou la batterie. C'est pourquoi la plupart des guides des fabricants recommandent le transport sur ${sLink("remorquage-plateau", "plateau")}, les quatre roues soulevées. Il en va de même pour plusieurs hybrides, surtout ceux à traction intégrale.</p>
<div class="callout"><strong>Mode transport ou mode remorquage :</strong> plusieurs véhicules électriques ont un mode qui libère le frein de stationnement pour permettre de les treuiller sur le plateau. Le manuel du propriétaire ou l'écran central l'indique. Le remorqueur vous guidera au besoin.</div>

<h2>Les situations les plus courantes</h2>
<ul>
  <li><strong>Batterie de traction vide</strong> : le véhicule est amené à la borne de recharge la plus proche ou à votre domicile.</li>
  <li><strong>Batterie 12 volts à plat</strong> : oui, les électriques en ont une aussi. Un ${sLink("survoltage-batterie", "survoltage")} sur les bornes prévues par le fabricant suffit souvent.</li>
  <li><strong>Crevaison sans roue de secours</strong> : fréquente sur les électriques, qui en sont rarement équipées. Le véhicule est remorqué au centre de pneus.</li>
  <li><strong>Panne électronique ou message d'erreur</strong> : remorquage chez le concessionnaire ou un atelier qualifié en véhicules électriques.</li>
  <li><strong>Accident</strong> : une attention particulière est portée à la batterie haute tension. Voir le ${sLink("remorquage-accident", "remorquage après accident")}.</li>
</ul>

<h2>Véhicule électrique accidenté : prudence</h2>
<p>Une batterie haute tension endommagée peut, dans de rares cas, chauffer ou s'enflammer plusieurs heures après une collision. Si vous remarquez de la fumée, des crépitements, une odeur inhabituelle ou un liquide qui s'écoule sous le véhicule, éloignez-vous et composez le 9-1-1. Après un accident, un véhicule électrique doit être entreposé à l'extérieur, à distance des bâtiments, jusqu'à ce qu'il soit inspecté.</p>

<h2>Comment nous préparer à l'appel</h2>
${steps([
  ["Modèle", "Indiquez la marque, le modèle, l'année et la traction (propulsion, traction avant ou intégrale)."],
  ["État", "Dites-nous si le véhicule s'allume, s'il accepte de passer au neutre et le niveau de charge affiché."],
  ["Destination", "Borne de recharge, domicile, concessionnaire ou atelier : précisez l'adresse."],
], false)}`,
    faq: [
      { q: "Pouvez-vous recharger ma voiture électrique sur place?", a: "Notre service consiste à transporter le véhicule jusqu'à une borne de recharge, votre domicile ou un atelier. Une recharge d'appoint sur le bord de la route n'est généralement pas possible avec une dépanneuse." },
      { q: "Et si mon véhicule électrique ne veut pas passer au neutre?", a: "Si le système électrique est complètement hors tension, le véhicule peut rester bloqué en stationnement. Le remorqueur utilise alors des chariots de roues (dollies) ou une technique adaptée au modèle pour le charger sans forcer la transmission." },
      { q: "Le remorquage d'un véhicule électrique coûte-t-il plus cher?", a: `Il se fait sur plateau, ce qui peut coûter un peu plus cher qu'un remorquage à roues levées, mais le prix reste comparable à celui d'un véhicule à traction intégrale. Consultez notre <a href="/prix-remorquage-joliette/">page des prix</a>.` },
      { q: "Remorquez-vous aussi les hybrides?", a: "Oui. Plusieurs hybrides, surtout à traction intégrale, doivent aussi être transportés sur plateau. Nous suivons les recommandations du fabricant pour chaque modèle." },
    ],
    pillars: [PCERT, P24, PDEST],
  }),

  // 13. Remorquage lourd
  servicePage({
    slug: "remorquage-lourd",
    title: "Remorquage lourd à Joliette | Camions et autobus 24/7",
    description: "Remorquage lourd à Joliette et dans Lanaudière : camions, cubes, autobus, véhicules commerciaux et motorisés classe A. Service 24/7 au 450-915-0067.",
    h1: "Remorquage lourd à Joliette",
    serviceType: "Remorquage de véhicules lourds",
    lead: "Un camion de livraison en panne, un autobus immobilisé, un cube accidenté ou un tracteur routier à déplacer : le remorquage lourd demande un équipement de forte capacité et des opérateurs expérimentés.",
    checks: ["Camions cubes, fourgons et camions de livraison", "Autobus, minibus et motorisés classe A", "Camions de service et véhicules municipaux", "Récupération après accident ou sortie de route"],
    prose: `
<p>Joliette et ses environs sont traversés chaque jour par des camions de livraison, des véhicules de construction, des autobus scolaires et du transport interurbain. Quand un de ces véhicules tombe en panne ou quitte la route, il faut plus qu'une dépanneuse ordinaire. Le remorquage lourd à Joliette est confié à des partenaires équipés de dépanneuses de forte capacité et habitués aux interventions complexes.</p>

<h2>Véhicules pris en charge</h2>
<ul>
  <li><strong>Camions cubes et fourgons</strong> de livraison ou de déménagement.</li>
  <li><strong>Camions de service</strong> : plombiers, électriciens, entrepreneurs, avec leur équipement à bord.</li>
  <li><strong>Autobus et minibus</strong> : transport scolaire, adapté ou nolisé.</li>
  <li><strong>Motorisés de classe A</strong> et grands véhicules récréatifs.</li>
  <li><strong>Tracteurs routiers et camions lourds</strong>, selon la configuration et l'équipement disponible.</li>
  <li><strong>Véhicules municipaux et agricoles</strong> pouvant circuler sur la route.</li>
</ul>

<h2>Des interventions qui demandent de la planification</h2>
<p>Un véhicule lourd ne se remorque pas n'importe comment. Avant de partir, le remorqueur a besoin de connaître le poids, la configuration (nombre d'essieux, type de suspension, freins pneumatiques), le chargement et la position exacte du véhicule. Selon le cas, il faudra :</p>
<ul>
  <li>débrancher l'arbre de transmission ou retirer les essieux moteurs pour éviter d'endommager la transmission;</li>
  <li>alimenter le système de freins pneumatiques du véhicule remorqué;</li>
  <li>transborder ou sécuriser la marchandise avant de déplacer le véhicule;</li>
  <li>coordonner avec les policiers si la chaussée est bloquée.</li>
</ul>
<div class="callout"><strong>Pour les gestionnaires de flotte :</strong> nous pouvons convenir d'une procédure d'appel pour vos véhicules (personne-ressource, garages autorisés, informations de facturation) afin d'accélérer le traitement de chaque panne.</div>

<h2>Récupération après accident</h2>
<p>Un camion sorti de route ou renversé exige une récupération planifiée : sangles et points d'ancrage multiples, parfois deux dépanneuses, et gestion des débris et de la marchandise. Ces interventions sont souvent coordonnées avec la Sûreté du Québec, surtout sur l'${zLink("autoroute-40", "autoroute 40")} et l'${zLink("autoroute-31", "autoroute 31")}.</p>

<h2>Comment demander un remorquage lourd</h2>
${steps([
  ["Informations", "Type de véhicule, poids approximatif, nombre d'essieux, chargement et position exacte."],
  ["Soumission", "On vous indique l'équipement requis et le prix, souvent calculé à l'heure pour les interventions lourdes."],
  ["Intervention", "Le partenaire se présente avec une dépanneuse de capacité adaptée et sécurise la zone."],
  ["Livraison", "Le véhicule est amené au garage de poids lourds, au concessionnaire ou à la cour de votre choix."],
], false)}`,
    faq: [
      { q: "Comment est calculé le prix d'un remorquage lourd?", a: `Le remorquage lourd est souvent facturé à l'heure, en plus de frais d'équipement selon la complexité (récupération, transbordement). C'est pourquoi une soumission sur mesure est nécessaire. Voir aussi notre <a href="/prix-remorquage-joliette/">page des prix</a>.` },
      { q: "Remorquez-vous les semi-remorques chargées?", a: "Selon la configuration et l'équipement disponible, oui. Pour une remorque chargée, la marchandise doit parfois être transbordée avant le déplacement. Décrivez la situation en détail lors de l'appel." },
      { q: "Pouvez-vous survolter un camion lourd?", a: "Oui. Les camions lourds fonctionnent souvent en 24 volts et demandent un appareil de démarrage adapté. Précisez-le lors de votre appel." },
      { q: "Offrez-vous des ententes pour les entreprises?", a: "Oui. Les entreprises de transport, de construction ou de livraison peuvent établir une procédure d'appel pour leur flotte. Contactez-nous pour en discuter." },
    ],
    pillars: [P24, PCERT, PPRIX],
  }),

  // 14. Longue distance
  servicePage({
    slug: "transport-vehicule-longue-distance",
    title: "Transport de véhicule longue distance | Remorquage Joliette",
    description: "Transport de voiture sur plateau de Joliette vers Montréal, Québec, Trois-Rivières ou ailleurs au Québec. Achat, déménagement, garage. Soumission gratuite.",
    h1: "Transport de véhicule longue distance depuis Joliette",
    serviceType: "Transport de véhicule longue distance",
    lead: "Achat d'une auto à Montréal, déménagement à Québec, véhicule à rapatrier après une panne loin de la maison : on transporte votre véhicule sur plateau, partout au Québec, au départ de Joliette ou vers Joliette.",
    checks: ["Transport sur plateau, sans kilométrage ajouté", "Montréal, Laval, Québec, Trois-Rivières et plus", "Autos, VUS, motos et véhicules non roulants", "Prix fixe convenu à l'avance"],
    prose: `
<p>Le transport de véhicule longue distance, c'est un remorquage planifié. Plutôt que de conduire vous-même un véhicule sur des centaines de kilomètres, ou de demander à un proche de vous suivre, votre véhicule voyage sur une dépanneuse à plateau, d'un point A à un point B, sans accumuler de kilomètres ni d'usure.</p>

<h2>Pourquoi faire transporter votre véhicule?</h2>
<ul>
  <li><strong>Achat d'un véhicule usagé</strong> loin de Joliette, qui n'est pas encore immatriculé ou dont l'état mécanique est incertain.</li>
  <li><strong>Déménagement</strong> : vous avez deux voitures et un seul conducteur.</li>
  <li><strong>Panne loin de la maison</strong> : votre auto a été remorquée dans un garage de Montréal ou de Québec et vous voulez la faire réparer chez votre garagiste de Joliette.</li>
  <li><strong>Véhicule de collection ou projet de restauration</strong> à amener chez un spécialiste.</li>
  <li><strong>Véhicule non roulant</strong> à livrer à un acheteur ou à un recycleur.</li>
</ul>

<h2>Destinations fréquentes au départ de Joliette</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Destination</th><th>Itinéraire habituel</th></tr></thead>
  <tbody>
    <tr><td>Repentigny, Terrebonne, Mascouche</td><td>Autoroute 31, puis autoroute 40 ouest ou route 125</td></tr>
    <tr><td>Montréal et Laval</td><td>Autoroute 31, puis autoroute 40 ouest</td></tr>
    <tr><td>Trois-Rivières</td><td>Autoroute 31, puis autoroute 40 est</td></tr>
    <tr><td>Québec et la Rive-Sud</td><td>Autoroute 40 est</td></tr>
    <tr><td>Saint-Jérôme et les Laurentides</td><td>Route 158 ouest</td></tr>
    <tr><td>Saint-Michel-des-Saints et le nord de Lanaudière</td><td>Route 131 nord</td></tr>
  </tbody>
</table></div>
<p>Nous faisons aussi le trajet inverse : un véhicule acheté ou en panne ailleurs au Québec peut être livré chez vous, à Joliette ou dans une des ${`<a href="/zones-desservies/">municipalités que nous desservons</a>`}.</p>

<h2>Comment réserver un transport</h2>
${steps([
  ["Demande", "Indiquez le véhicule, l'adresse de départ, l'adresse d'arrivée et la date souhaitée."],
  ["Prix fixe", "On vous propose un prix global selon la distance et le véhicule, avant toute réservation."],
  ["Prise en charge", "Le véhicule est inspecté visuellement, photographié au besoin, puis chargé et arrimé sur le plateau."],
  ["Livraison", "Le véhicule est livré à l'adresse convenue. Une personne doit être présente pour le recevoir."],
], false)}
<div class="callout"><strong>Achat à distance :</strong> si vous achetez un véhicule d'un particulier, assurez-vous que la transaction est complétée et que le vendeur autorise la prise en charge avant la date du transport. Une copie du contrat de vente peut être demandée.</div>`,
    faq: [
      { q: "Le véhicule doit-il être immatriculé pour être transporté?", a: "Non. Un véhicule transporté sur plateau ne circule pas par ses propres moyens. C'est d'ailleurs une solution courante pour un véhicule acheté mais pas encore immatriculé, ou remisé." },
      { q: "Combien coûte un transport de Joliette à Montréal?", a: `Le prix dépend de l'adresse exacte de départ et d'arrivée, du véhicule et de l'horaire. Pour une idée des tarifs au kilomètre, consultez notre <a href="/prix-remorquage-joliette/">page des prix</a>, puis demandez une soumission gratuite et sans obligation.` },
      { q: "Puis-je laisser des objets dans le véhicule?", a: "Il est préférable de vider le véhicule de vos effets personnels et objets de valeur. Des objets lourds ou non attachés peuvent bouger pendant le transport et endommager l'intérieur." },
      { q: "Transportez-vous hors du Québec?", a: "Nos transports se font principalement au Québec. Pour une destination hors province, contactez-nous : selon la distance et les disponibilités, nous vous proposerons une solution ou un transporteur adapté." },
    ],
    pillars: [PPRIX, PCERT, PDEST],
    pillarsTitle: "Un transport de véhicule sans surprise",
  }),

  // 15. Machinerie
  servicePage({
    slug: "transport-machinerie",
    title: "Transport de machinerie et d'équipement à Joliette",
    description: "Transport sur plateau de mini-excavatrice, tracteur, chariot élévateur et équipement de chantier à Joliette et dans Lanaudière. Soumission gratuite.",
    h1: "Transport de machinerie et d'équipement à Joliette",
    serviceType: "Transport de machinerie légère sur plateau",
    lead: "Mini-excavatrice à livrer au chantier, tracteur à faire réparer, chariot élévateur à déménager : on transporte votre machinerie légère sur plateau, avec un arrimage conforme.",
    checks: ["Mini-excavatrices et mini-chargeuses", "Tracteurs compacts et équipement agricole léger", "Chariots élévateurs et nacelles", "Arrimage par chaînes et tendeurs"],
    prose: `
<p>Entrepreneurs, agriculteurs, municipalités et particuliers de la région ont régulièrement besoin de déplacer une pièce d'équipement sur quelques kilomètres : du garage au chantier, de la ferme au concessionnaire, de l'entrepôt au client. Le transport de machinerie à Joliette se fait sur une dépanneuse à plateau, parfaitement adaptée à l'équipement léger et compact.</p>

<h2>Équipement transporté</h2>
<ul>
  <li><strong>Mini-excavatrices</strong> et mini-chargeuses (de type « bobcat »).</li>
  <li><strong>Tracteurs compacts</strong>, tracteurs à gazon et équipement agricole léger.</li>
  <li><strong>Chariots élévateurs</strong> et transpalettes motorisés.</li>
  <li><strong>Nacelles, plateformes élévatrices</strong> et génératrices sur roues.</li>
  <li><strong>Conteneurs et cabanons</strong> de petite taille, selon les dimensions.</li>
  <li><strong>Voiturettes de golf</strong> et véhicules utilitaires.</li>
</ul>
<p>Pour l'équipement lourd (pelles mécaniques, bouteurs, grues), un transporteur spécialisé avec fardier est nécessaire. Nous pouvons vous orienter.</p>

<h2>Ce qu'il nous faut savoir</h2>
${steps([
  ["Poids et dimensions", "Poids de l'équipement (sur la plaque du fabricant), longueur, largeur et hauteur."],
  ["Autonomie", "L'équipement peut-il monter sur le plateau par lui-même, ou faut-il le treuiller?"],
  ["Accès", "Terrain de chargement, pente, sol mou, hauteur libre, espace de manœuvre au départ et à l'arrivée."],
  ["Date", "Date et plage horaire souhaitées pour la prise en charge et la livraison."],
], false)}

<h2>Un arrimage conforme</h2>
<p>La machinerie doit être arrimée selon les normes d'arrimage des charges en vigueur au Québec, avec des chaînes et des tendeurs aux points prévus par le fabricant, godet ou fourches abaissés et appuyés sur le plateau. Un arrimage inadéquat peut entraîner des amendes lors d'un contrôle routier, mais surtout un accident grave. Nos partenaires certifiés sont habitués à ces exigences.</p>
<div class="callout"><strong>Au printemps :</strong> pendant la période de dégel, des restrictions de charge s'appliquent sur plusieurs routes du Québec. Elles concernent surtout les véhicules lourds, mais peuvent influencer l'itinéraire. On en tient compte dans la planification.</div>

<h2>Pour les entreprises de la région</h2>
<p>Nous travaillons avec des entrepreneurs de Joliette, de ${zLink("saint-paul")}, de ${zLink("crabtree")} et de ${zLink("saint-charles-borromee")}, ainsi qu'avec des fermes des secteurs de ${zLink("saint-thomas")}, ${zLink("sainte-elisabeth")} et ${zLink("saint-jacques")}. Pour un besoin récurrent, parlons-en : une procédure simple peut être établie pour vos déplacements.</p>`,
    faq: [
      { q: "Quel est le poids maximal que vous pouvez transporter?", a: "La capacité dépend du plateau utilisé. La machinerie légère et compacte, comme une mini-excavatrice ou un tracteur compact, se transporte généralement sans problème. Donnez-nous le poids exact indiqué sur la plaque du fabricant pour confirmer." },
      { q: "Pouvez-vous transporter un équipement qui ne démarre pas?", a: "Oui, dans plusieurs cas, l'équipement peut être treuillé sur le plateau. Il faut toutefois des points d'ancrage solides et un accès suffisant. Décrivez la situation lors de la demande." },
      { q: "Livrez-vous directement sur les chantiers?", a: "Oui, si l'accès est sécuritaire pour la dépanneuse : sol ferme, espace de manœuvre et absence de fils électriques bas au point de déchargement." },
      { q: "Faites-vous la location d'équipement?", a: "Non. Notre service concerne le transport. Pour la location, adressez-vous à un commerce de location de la région; nous pouvons ensuite transporter l'équipement loué." },
    ],
    pillars: [PPRIX, PCERT, P24],
    pillarsTitle: "Un transport d'équipement bien planifié",
  }),

  // 16. Ferraille
  servicePage({
    slug: "remorquage-vehicule-ferraille",
    title: "Remorquage de véhicule hors d'usage à Joliette",
    description: "Vieille voiture qui ne roule plus? Remorquage de véhicule hors d'usage vers un recycleur autorisé à Joliette et dans Lanaudière. Soumission gratuite.",
    h1: "Remorquage de véhicule hors d'usage à Joliette",
    serviceType: "Remorquage de véhicules hors d'usage",
    lead: "Une vieille auto immobilisée dans la cour, un véhicule trop endommagé pour être réparé ou une épave qui prend de la place : on la remorque vers un recycleur autorisé, en règle.",
    checks: ["Véhicules non roulants, sans batterie ou sans pneus", "Remorquage vers un recycleur autorisé", "Cours résidentielles, garages et terrains", "Soumission gratuite et sans obligation"],
    prose: `
<p>Au Québec, des centaines de milliers de véhicules arrivent en fin de vie chaque année. Plusieurs finissent par dormir dans une cour ou derrière un garage, faute de temps pour s'en occuper. Pourtant, un véhicule hors d'usage peut laisser fuir de l'huile, de l'antigel ou du liquide de frein dans le sol, et certaines municipalités encadrent l'entreposage de véhicules non immatriculés sur un terrain résidentiel. Le remorquage de véhicule hors d'usage à Joliette règle la question simplement.</p>

<h2>Comment ça se passe</h2>
${steps([
  ["Description", "Marque, modèle, année, état (roule, ne roule pas, pièces manquantes) et accès au véhicule."],
  ["Soumission", "On vous indique le coût du remorquage. Selon l'état et le modèle, le véhicule peut avoir une valeur de récupération : nous vous en parlons."],
  ["Enlèvement", "Le véhicule est treuillé et chargé, même sans batterie, avec des pneus à plat ou pris dans la glace."],
  ["Recyclage", "Il est livré à un recycleur autorisé qui s'occupe de la dépollution et de la récupération des matériaux."],
], false)}

<h2>Documents à prévoir</h2>
<ul>
  <li><strong>Le certificat d'immatriculation</strong> du véhicule, à votre nom.</li>
  <li><strong>Une pièce d'identité</strong> de la personne qui remet le véhicule.</li>
  <li>Si le véhicule n'est pas à votre nom (succession, véhicule abandonné par un locataire), communiquez avec la SAAQ pour connaître la démarche à suivre avant l'enlèvement.</li>
</ul>
<div class="callout"><strong>N'oubliez pas la SAAQ :</strong> si votre véhicule était encore immatriculé, pensez à faire les démarches pour le remiser ou mettre fin à l'immatriculation, afin de ne plus payer de frais inutilement. Consultez le site de la SAAQ pour la procédure à jour.</div>

<h2>Préparer le véhicule</h2>
<ul>
  <li>Retirez vos effets personnels, documents, transpondeurs de péage et plaque d'immatriculation, selon les consignes de la SAAQ.</li>
  <li>Dégagez l'accès au véhicule (neige, branches, objets autour).</li>
  <li>Signalez tout liquide qui fuit ou toute pièce détachée qui pourrait tomber pendant le transport.</li>
</ul>

<h2>Pourquoi passer par un recycleur autorisé?</h2>
<p>Un recycleur autorisé récupère et élimine correctement les fluides, la batterie, les pneus et le réfrigérant du climatiseur avant de recycler le métal. C'est la façon responsable de disposer d'un véhicule, et c'est ce qui vous protège si le véhicule est encore lié à votre nom. Nous desservons Joliette et toutes les ${`<a href="/zones-desservies/">municipalités voisines</a>`}, des cours résidentielles de ${zLink("notre-dame-des-prairies")} aux terres agricoles de ${zLink("saint-thomas")} ou de ${zLink("saint-ambroise-de-kildare")}.</p>`,
    faq: [
      { q: "Allez-vous me payer pour ma vieille auto?", a: "Cela dépend du véhicule, de son état, du prix des métaux et des pièces récupérables. Certains véhicules ont une valeur de récupération, d'autres non. Décrivez-nous le véhicule : nous vous dirons honnêtement à quoi vous attendre avant l'enlèvement." },
      { q: "Pouvez-vous enlever une auto sans clés et sans pneus?", a: "Oui. Le treuil et le plateau permettent de charger un véhicule sans clés, avec des pneus à plat ou même sans roues, en autant que l'accès soit suffisant." },
      { q: "Le véhicule n'est pas à mon nom : puis-je le faire enlever?", a: "Il faut être propriétaire du véhicule, ou autorisé par le propriétaire, pour en disposer. Dans le cas d'une succession ou d'un véhicule abandonné sur votre terrain, vérifiez d'abord la démarche auprès de la SAAQ." },
      { q: "Enlevez-vous aussi les remorques, bateaux et VR hors d'usage?", a: "Oui, selon leur taille et leur état. Une vieille roulotte, une remorque ou un bateau sur sa remorque peuvent être enlevés. Demandez une soumission en précisant les dimensions." },
    ],
    pillars: [PPRIX, PCERT, P24],
  }),
];
