import { SITE, ICONS, pillars, serviceUrl, sLink, gLink, zLink, zone, zoneChips, zonesGroups, callBox, steps } from "../components.mjs";
import { SERVICES, ZONES, GROUPS } from "../data.mjs";

function page(o) {
  const z = zone(o.key);
  const n = z.name;
  const a = o.a || `à ${n}`;
  const de = o.de || `de ${n}`;
  const focus = o.focus || ["remorquage-automobile", "remorquage-accident", "survoltage-batterie", "sortie-de-fosse-desenlisement"];
  const body = `<section><div class="container layout-aside"><div class="prose">
${o.intro}
<h2>Remorquer ${a} : ce qu'il faut savoir</h2>
${o.local}
<h2>Nos services les plus demandés ${a}</h2>
<ul>
${focus.map((s) => { const sv = SERVICES.find((x) => x.slug === s); return `  <li><a href="${serviceUrl(s)}"><strong>${sv.name}</strong></a> : ${sv.short}</li>`; }).join("\n")}
</ul>
<p>Nous offrons aussi ${a} : ${SERVICES.filter((s) => !focus.includes(s.slug)).map((s) => `<a href="${serviceUrl(s.slug)}">${s.nav.toLowerCase()}</a>`).join(", ")}.</p>
<h2>Prix d'un remorquage ${a}</h2>
${o.price}
<h2>Municipalités voisines desservies</h2>
<p>Nos partenaires interviennent aussi autour ${de} :</p>
${zoneChips(o.neighbors)}
<p style="margin-top:1rem">Voir toutes nos <a href="/zones-desservies/">zones desservies autour de Joliette</a>.</p>
</div>
<aside class="aside-sticky" aria-label="Liens utiles">
  ${callBox("aside-zone", `Remorquage ${a}`, "Ligne ouverte 24 h sur 24, 7 jours sur 7. Soumission gratuite.")}
  <div class="aside-box"><h2>${n} en bref</h2><ul class="facts">${o.facts.map((f) => `<li style="padding:.45rem 0">${f}</li>`).join("")}</ul></div>
  <div class="aside-box"><h2>Nos services</h2><ul>${SERVICES.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.nav}</a></li>`).join("")}</ul></div>
</aside>
</div></section>
${pillars([
  { fact: "Connaissance du secteur", h: `Des remorqueurs qui connaissent ${o.nom || n}`, p: o.pillarLocal },
  { fact: "24 h sur 24, 7 jours sur 7", h: "Une ligne toujours ouverte", p: `Panne au petit matin, accident en soirée ou tempête la fin de semaine : notre ligne répond en tout temps pour les automobilistes ${de} et des environs.` },
  { fact: "Soumission gratuite", h: "Le prix avant l'intervention", p: "Vous connaissez le montant avant l'envoi de la remorqueuse, selon votre véhicule, la situation et la destination. Gratuit et sans obligation." },
], `Pourquoi appeler Remorquage Joliette ${a}`)}`;
  return {
    kind: "zone",
    path: z.path,
    title: o.title || `Remorquage ${n} 24/7 | Remorquage Joliette`,
    description: o.description,
    h1: `Remorquage ${a}`,
    lead: o.lead,
    checks: o.checks || ["Remorquage automobile et sur plateau", "Remorquage après accident", "Survoltage, déverrouillage, essence", "Service 24 h sur 24, 7 jours sur 7"],
    formVille: n,
    geoPlace: n,
    breadcrumbs: [{ name: "Zones desservies", path: "/zones-desservies/" }, { name: n, path: z.path }],
    service: { name: `Remorquage ${a}`, serviceType: "Remorquage et assistance routière", description: o.description, areaServed: [n] },
    faq: o.faq,
    faqTitle: `Questions sur le remorquage ${a}`,
    ctaTitle: `Besoin d'une remorqueuse ${a}?`,
    ctaText: `Appelez-nous au ${SITE.phone}, 24 heures sur 24, 7 jours sur 7. Soumission gratuite et sans obligation pour les automobilistes ${de}.`,
    body,
  };
}

const priceLocal = (a, km) => `<p>${a}, la plupart des remorquages d'auto ou de VUS vers un garage de la région entrent dans la fourchette d'un remorquage local, soit généralement entre 110 $ et 180 $ avant taxes. ${km} Le prix exact dépend de votre véhicule (traction, poids), de la destination, de l'heure et de la situation (accident, fossé, véhicule non roulant). Consultez notre <a href="/prix-remorquage-joliette/">guide des prix du remorquage</a> et demandez une soumission gratuite.</p>`;
const priceFar = (a, km) => `<p>${a}, le prix d'un remorquage comprend des frais de base, généralement entre 110 $ et 180 $ avant taxes pour une auto ou un VUS, auxquels s'ajoutent quelques dollars par kilomètre lorsque la destination est éloignée. ${km} Le véhicule, l'heure et la situation (accident, fossé, plateau) influencent aussi le montant. Voyez notre <a href="/prix-remorquage-joliette/">guide des prix</a>, puis appelez-nous pour une soumission gratuite et sans obligation.</p>`;

const zones = [
  page({
    key: "saint-charles-borromee",
    description: "Remorquage à Saint-Charles-Borromée 24 h sur 24 : auto, plateau, accident, survoltage et déverrouillage, près de l'hôpital et partout en ville. 450-915-0067.",
    lead: "Voisine immédiate de Joliette, Saint-Charles-Borromée compte parmi nos secteurs les plus actifs. Remorquage, survoltage ou déverrouillage : on intervient partout dans la ville, 24 heures sur 24.",
    focus: ["remorquage-automobile", "survoltage-batterie", "deverrouillage-voiture", "remorquage-accident"],
    facts: ["MRC de Joliette", "Environ 15 000 habitants", "Voisine immédiate de Joliette, au nord", "Traversée par la route 343"],
    intro: `<p>Saint-Charles-Borromée forme avec Joliette et Notre-Dame-des-Prairies le cœur urbain de la région. On passe d'une ville à l'autre sans même s'en rendre compte, et nos interventions suivent le même mouvement : un remorquage qui commence dans une entrée de Saint-Charles-Borromée se termine souvent dans un garage de Joliette, à quelques minutes de route.</p>
<p>Que votre auto refuse de démarrer devant la maison, que vos clés soient restées dans le véhicule au stationnement de l'hôpital ou qu'un accrochage vous immobilise à une intersection, le remorquage à Saint-Charles-Borromée se règle avec un seul appel au ${SITE.phone}.</p>`,
    local: `<p>Plusieurs particularités de la ville influencent nos interventions :</p>
<ul>
  <li><strong>Le Centre hospitalier régional de Lanaudière</strong>, sur le boulevard Sainte-Anne, attire chaque jour des milliers de patients, de visiteurs et de travailleurs. Batteries à plat après un long quart de travail et clés oubliées dans l'auto y sont des appels fréquents.</li>
  <li><strong>La route 343</strong> traverse la ville en direction de Saint-Ambroise-de-Kildare et du nord de la MRC. Elle concentre une bonne partie de la circulation de transit.</li>
  <li><strong>Les quartiers résidentiels</strong> ont souvent des entrées étroites et des rues bordées de bancs de neige l'hiver : nous choisissons une dépanneuse compacte ou un plateau selon l'espace disponible.</li>
  <li><strong>La proximité de Joliette</strong> permet d'amener votre véhicule rapidement à la plupart des garages et concessionnaires de la région.</li>
</ul>`,
    price: priceLocal("À Saint-Charles-Borromée", "Comme la plupart des garages de Joliette sont à quelques kilomètres, la distance fait rarement grimper la facture."),
    neighbors: ["notre-dame-des-prairies", "saint-ambroise-de-kildare", "saint-thomas", "saint-paul", "notre-dame-de-lourdes"],
    pillarLocal: "Nos partenaires circulent chaque jour entre Joliette et Saint-Charles-Borromée. Ils connaissent les rues résidentielles, les stationnements de l'hôpital et les accès les plus simples pour charger votre véhicule sans bloquer la circulation.",
    faq: [
      { q: "Intervenez-vous dans les stationnements du Centre hospitalier régional de Lanaudière?", a: "Oui. Survoltage, déverrouillage ou remorquage : nous intervenons dans les stationnements accessibles au public. Indiquez-nous le stationnement et la section où se trouve votre véhicule pour faciliter le repérage." },
      { q: "Pouvez-vous remorquer mon auto de Saint-Charles-Borromée vers un garage de Joliette?", a: "Bien sûr. C'est l'un de nos trajets les plus courants. Vous choisissez le garage, et nous livrons le véhicule. Si le garage est fermé, nous discutons avec vous de la meilleure option (boîte à clés ou livraison à domicile)." },
      { q: "Faites-vous le survoltage à domicile à Saint-Charles-Borromée?", a: `Oui, dans votre entrée ou dans le stationnement de votre immeuble. Pour en savoir plus, voyez notre page sur le ${sLink("survoltage-batterie", "survoltage de batterie")}.` },
    ],
  }),

  page({
    key: "notre-dame-des-prairies",
    description: "Remorquage à Notre-Dame-des-Prairies, 24 h sur 24 : auto, VUS, plateau, accident, survoltage et sortie de fossé. Soumission gratuite au 450-915-0067.",
    lead: "À deux pas de Joliette, Notre-Dame-des-Prairies combine quartiers résidentiels, commerces et accès rapide à la route 131. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "remorquage-plateau", "survoltage-batterie", "remorquage-accident"],
    facts: ["MRC de Joliette", "Environ 9 500 habitants", "Voisine immédiate de Joliette, à l'ouest", "Traversée par la route 131"],
    intro: `<p>Notre-Dame-des-Prairies a beaucoup grandi au cours des dernières décennies, avec de nouveaux développements résidentiels et une activité commerciale en croissance. Plus de résidents, plus de véhicules, et donc plus de pannes : le remorquage à Notre-Dame-des-Prairies représente une part importante de nos appels dans la MRC de Joliette.</p>
<p>Familles avec VUS à traction intégrale, travailleurs qui partent tôt vers Montréal par l'autoroute 31, aînés qui ont besoin d'un coup de main pour un survoltage : on s'adapte à chaque situation, de jour comme de nuit.</p>`,
    local: `<ul>
  <li><strong>La route 131</strong> relie Notre-Dame-des-Prairies à Joliette au sud et à Notre-Dame-de-Lourdes et Saint-Félix-de-Valois au nord. C'est un axe achalandé, où surviennent pannes et accrochages.</li>
  <li><strong>Les quartiers récents</strong> comptent beaucoup de VUS et de véhicules à traction intégrale, qui doivent être transportés sur ${sLink("remorquage-plateau", "plateau")}.</li>
  <li><strong>Les rues bordées d'arbres et de bancs de neige</strong> l'hiver compliquent parfois les manœuvres : nous prévoyons l'équipement selon l'accès.</li>
  <li><strong>Les secteurs plus ouverts</strong> en périphérie sont exposés à la poudrerie, ce qui entraîne des sorties de route lors des tempêtes.</li>
</ul>`,
    price: priceLocal("À Notre-Dame-des-Prairies", "La proximité des garages de Joliette et de Saint-Charles-Borromée garde la plupart des trajets courts."),
    neighbors: ["saint-charles-borromee", "notre-dame-de-lourdes", "sainte-melanie", "saint-ambroise-de-kildare", "crabtree"],
    pillarLocal: "Nos partenaires connaissent les rues de Notre-Dame-des-Prairies, ses nouveaux quartiers et ses liens avec la route 131. Ils arrivent avec la dépanneuse adaptée à votre véhicule et à l'accès de votre entrée.",
    faq: [
      { q: "Mon VUS AWD est en panne à Notre-Dame-des-Prairies : que faire?", a: `Appelez-nous en précisant que votre véhicule est à traction intégrale. Nous envoyons une dépanneuse à plateau pour protéger la transmission. Plus d'information sur notre page ${sLink("remorquage-plateau", "remorquage sur plateau")}.` },
      { q: "Faites-vous le déverrouillage de portière à Notre-Dame-des-Prairies?", a: `Oui, à la maison, au travail ou dans un stationnement commercial, 24 heures sur 24. Voir notre service de ${sLink("deverrouillage-voiture", "déverrouillage de voiture")}.` },
      { q: "Pouvez-vous transporter mon auto vers un concessionnaire hors de la région?", a: `Oui. Pour Repentigny, Montréal ou Trois-Rivières, nous organisons un ${sLink("transport-vehicule-longue-distance", "transport longue distance")} sur plateau, avec un prix fixe convenu à l'avance.` },
    ],
  }),

  page({
    key: "saint-paul",
    description: "Remorquage à Saint-Paul (MRC de Joliette), 24 h sur 24 : auto, plateau, accident, survoltage et sortie de fossé près de l'A-31. Appelez le 450-915-0067.",
    lead: "Au sud de Joliette, près de l'autoroute 31, Saint-Paul mêle quartiers résidentiels et secteurs agricoles. Remorquage, assistance routière et sortie de fossé, 24 heures sur 24.",
    focus: ["remorquage-automobile", "remorquage-accident", "sortie-de-fosse-desenlisement", "survoltage-batterie"],
    facts: ["MRC de Joliette", "Environ 6 500 habitants", "Au sud de Joliette, près de l'autoroute 31", "Traversée par la route 343"],
    intro: `<p>Saint-Paul occupe une position stratégique au sud de Joliette : entre la ville-centre et l'autoroute 31, sur le trajet de la route 343 vers L'Assomption. Beaucoup de ses résidents font la navette chaque jour vers Joliette, Repentigny ou Montréal, et une panne au mauvais moment peut chambouler la journée.</p>
<p>Le remorquage à Saint-Paul couvre autant les rues résidentielles que les rangs agricoles de la municipalité, où les sorties de route sont plus fréquentes l'hiver.</p>`,
    local: `<ul>
  <li><strong>L'autoroute 31</strong>, qui passe à proximité, concentre des pannes et des accidents à vitesse élevée. Voir notre page ${zLink("autoroute-31", "remorquage sur l'autoroute 31")}.</li>
  <li><strong>La route 343</strong> relie Saint-Paul à Joliette au nord et à L'Assomption au sud-ouest : un axe secondaire achalandé.</li>
  <li><strong>Les rangs et terres agricoles</strong> sont exposés au vent et à la poudrerie. En hiver et au dégel, les ${sLink("sortie-de-fosse-desenlisement", "sorties de fossé")} y sont courantes.</li>
  <li><strong>Les secteurs résidentiels</strong> proches de Joliette génèrent surtout des demandes de survoltage et de remorquage vers le garage.</li>
</ul>`,
    price: priceLocal("À Saint-Paul", "Les garages de Joliette sont tout près, ce qui limite les frais de distance."),
    neighbors: ["crabtree", "saint-thomas", "saint-charles-borromee", "lavaltrie", "l-assomption"],
    pillarLocal: "Entre les rues résidentielles, les rangs agricoles et l'autoroute 31, Saint-Paul demande de la polyvalence. Nos partenaires connaissent ces trois réalités et arrivent avec l'équipement qui convient.",
    faq: [
      { q: "Je suis en panne sur l'autoroute 31 près de Saint-Paul : que faire?", a: `Allumez vos feux de détresse, rangez-vous le plus loin possible de la circulation et restez dans le véhicule, ceinture bouclée, si c'est sécuritaire. En cas de danger ou de blessés, composez le 9-1-1. Appelez-nous ensuite au ${SITE.phone}. Lisez aussi ${gLink("panne-sur-autoroute-securite", "nos conseils de sécurité sur l'autoroute")}.` },
      { q: "Mon auto a glissé dans un fossé dans un rang de Saint-Paul : pouvez-vous la sortir?", a: `Oui. Le treuillage professionnel permet de ramener le véhicule sur la chaussée sans l'abîmer davantage. Voir notre service de ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")}.` },
      { q: "Transportez-vous de la machinerie agricole légère à Saint-Paul?", a: `Oui, pour l'équipement léger et compact (tracteur compact, mini-chargeuse, VTT). Voir notre service de ${sLink("transport-machinerie", "transport de machinerie")}.` },
    ],
  }),

  page({
    key: "crabtree",
    description: "Remorquage à Crabtree, 24 h sur 24 : auto, plateau, accident, survoltage et véhicules commerciaux, au sud de Joliette. Soumission gratuite au 450-915-0067.",
    lead: "Ville industrielle au bord de la rivière Ouareau, au sud de Joliette, Crabtree voit passer résidents, travailleurs et camions. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "remorquage-lourd", "remorquage-accident", "survoltage-batterie"],
    facts: ["MRC de Joliette", "Environ 4 000 habitants", "Sur la rivière Ouareau, au sud de Joliette", "Ville nommée d'après Edwin Crabtree, fondateur des moulins"],
    intro: `<p>Crabtree doit son nom à Edwin Crabtree, propriétaire des moulins à scie et à papier établis sur la rivière Ouareau au tournant du 20e siècle. L'industrie papetière y est toujours présente aujourd'hui, ce qui fait de Crabtree une ville où cohabitent quartiers résidentiels, usine, camions de livraison et travailleurs de quarts.</p>
<p>Le remorquage à Crabtree doit donc répondre autant à l'automobiliste dont la batterie a lâché après un quart de nuit qu'au transporteur dont le camion est immobilisé. Un seul numéro pour tout ça : ${SITE.phone}.</p>`,
    local: `<ul>
  <li><strong>L'activité industrielle</strong> amène une circulation de camions régulière. Pour ces véhicules, voyez notre service de ${sLink("remorquage-lourd", "remorquage lourd")}.</li>
  <li><strong>Les travailleurs de quarts</strong> démarrent souvent leur auto à des heures où il fait le plus froid : les survoltages de nuit et de petit matin sont fréquents.</li>
  <li><strong>L'accès</strong> se fait par les routes régionales qui rejoignent la 158 et la 131, ou par l'autoroute 31, ce qui permet d'amener rapidement votre véhicule vers les garages de Joliette.</li>
  <li><strong>La rivière Ouareau</strong> et ses berges rendent certains secteurs plus humides : au printemps, les accotements peuvent être mous.</li>
</ul>`,
    price: priceLocal("À Crabtree", "La distance vers Joliette reste courte, ce qui garde la plupart des remorquages dans la fourchette locale."),
    neighbors: ["saint-paul", "saint-jacques", "notre-dame-des-prairies", "sainte-melanie", "l-assomption"],
    pillarLocal: "Nos partenaires connaissent Crabtree, ses rues résidentielles et ses accès industriels. Qu'il s'agisse d'une auto ou d'un camion, ils se présentent avec la dépanneuse de la bonne capacité.",
    faq: [
      { q: "Remorquez-vous les camions de livraison à Crabtree?", a: `Oui. Les camions cubes, fourgons et véhicules commerciaux sont pris en charge avec l'équipement adapté au poids. Voir le ${sLink("remorquage-lourd", "remorquage lourd")}.` },
      { q: "Faites-vous des survoltages la nuit à Crabtree?", a: "Oui. Notre ligne est ouverte 24 heures sur 24, ce qui convient aux travailleurs de quarts dont l'auto refuse de démarrer à la fin d'un quart de nuit." },
      { q: "Pouvez-vous remorquer ma voiture de Crabtree jusqu'à Joliette?", a: "Oui, c'est un trajet courant. Vous choisissez le garage, et nous nous occupons du reste." },
    ],
  }),

  page({
    key: "saint-thomas",
    description: "Remorquage à Saint-Thomas (Lanaudière), 24 h sur 24 : auto, sortie de fossé, accident et machinerie légère sur la route 158. Appelez le 450-915-0067.",
    lead: "À l'est de Joliette, sur la route 158 en direction de Berthierville, Saint-Thomas est une municipalité agricole aux longs rangs ouverts. Remorquage, sortie de fossé et assistance routière, 24 heures sur 24.",
    focus: ["sortie-de-fosse-desenlisement", "remorquage-automobile", "remorquage-accident", "transport-machinerie"],
    facts: ["MRC de Joliette", "Environ 3 500 habitants", "À l'est de Joliette", "Traversée par la route 158"],
    intro: `<p>Saint-Thomas, c'est la campagne aux portes de Joliette : de grandes terres agricoles, des rangs droits et exposés au vent, et la route 158 qui file vers Berthierville et l'autoroute 40. Ce paysage ouvert est magnifique l'été, mais il réserve des surprises l'hiver, quand la poudrerie réduit la visibilité à presque rien.</p>
<p>Le remorquage à Saint-Thomas, ce sont souvent des sorties de fossé, des véhicules pris dans la neige et des accidents sur la 158, mais aussi des survoltages et des remorquages d'auto vers les garages de Joliette.</p>`,
    local: `<ul>
  <li><strong>La route 158</strong> relie Saint-Thomas à Joliette à l'ouest et à Berthierville à l'est. Voir notre page ${zLink("route-158", "remorquage sur la route 158")}.</li>
  <li><strong>La poudrerie dans les rangs ouverts</strong> provoque des sorties de route et des enlisements dans les bancs de neige. Notre service de ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")} est très demandé ici.</li>
  <li><strong>Les exploitations agricoles</strong> ont parfois besoin de déplacer un tracteur compact, un VTT ou de l'équipement léger : voir le ${sLink("transport-machinerie", "transport de machinerie")}.</li>
  <li><strong>Les distances</strong> entre les rangs et le village peuvent être longues : donnez-nous le nom du rang et un repère (numéro civique, ferme, intersection).</li>
</ul>`,
    price: priceLocal("À Saint-Thomas", "Les garages de Joliette sont à une dizaine de kilomètres, ce qui reste dans la fourchette d'un remorquage local dans la plupart des cas."),
    neighbors: ["saint-charles-borromee", "sainte-elisabeth", "saint-paul", "berthierville", "notre-dame-de-lourdes"],
    pillarLocal: "Nos partenaires connaissent les rangs de Saint-Thomas, leurs fossés profonds et les secteurs où la poudrerie frappe le plus fort. Ils arrivent avec treuil et sangles pour les sorties de route.",
    faq: [
      { q: "Mon auto est dans le fossé dans un rang de Saint-Thomas, que faire en attendant?", a: `Restez dans le véhicule, ceinture bouclée, feux de détresse allumés. Si l'échappement est bloqué par la neige, coupez le moteur pour éviter le monoxyde de carbone. Appelez-nous en donnant le nom du rang et un repère. Voir aussi notre guide ${gLink("voiture-dans-le-fosse-hiver", "Votre voiture a pris le fossé")}.` },
      { q: "Déplacez-vous des tracteurs compacts à Saint-Thomas?", a: `Oui, sur plateau, selon le poids et les dimensions de l'équipement. Voir notre service de ${sLink("transport-machinerie", "transport de machinerie")}.` },
      { q: "Intervenez-vous sur la route 158 entre Joliette et Berthierville?", a: `Oui, sur tout ce tronçon. Consultez notre page ${zLink("route-158", "remorquage sur la route 158")} pour les conseils en cas de panne.` },
    ],
  }),

  page({
    key: "sainte-melanie",
    description: "Remorquage à Sainte-Mélanie 24 h sur 24 : auto, sortie de fossé, VR et survoltage sur la route 348, près des chutes Monte-à-Peine. Appelez le 450-915-0067.",
    lead: "Au nord-ouest de Joliette, sur la route 348, Sainte-Mélanie marque le début du relief de Lanaudière. Remorquage, sortie de fossé et assistance routière, 24 heures sur 24.",
    focus: ["sortie-de-fosse-desenlisement", "remorquage-automobile", "remorquage-vr-roulotte", "survoltage-batterie"],
    facts: ["MRC de Joliette", "Municipalité aux portes du relief lanaudois", "Au nord-ouest de Joliette", "Traversée par la route 348"],
    intro: `<p>Sainte-Mélanie, c'est là que la plaine de Joliette commence à céder la place aux collines. La municipalité partage avec Saint-Jean-de-Matha et Sainte-Béatrix le Parc régional des Chutes-Monte-à-Peine-et-des-Dalles, où la rivière L'Assomption dévale en cascades. Résultat : des résidents permanents, des chalets, des visiteurs et une route 348 plus sinueuse qu'en plaine.</p>
<p>Le remorquage à Sainte-Mélanie demande de connaître ces réalités : côtes glacées l'hiver, chemins de chalets étroits et véhicules récréatifs l'été.</p>`,
    local: `<ul>
  <li><strong>La route 348</strong> traverse Sainte-Mélanie entre Rawdon à l'ouest et la route 131 à l'est. Ses courbes et ses côtes deviennent délicates par temps de verglas.</li>
  <li><strong>Le Parc régional des Chutes-Monte-à-Peine-et-des-Dalles</strong> attire des visiteurs toute l'année; les pannes dans les stationnements de sentiers ne sont pas rares.</li>
  <li><strong>Les chemins de chalets</strong>, souvent étroits et en gravier, demandent une dépanneuse adaptée et une bonne description de l'accès.</li>
  <li><strong>Les roulottes et VR</strong> se déplacent vers les campings et les terrains privés en saison : voir le ${sLink("remorquage-vr-roulotte", "remorquage de VR et de roulotte")}.</li>
</ul>`,
    price: priceLocal("À Sainte-Mélanie", "Pour un remorquage vers Joliette, à une quinzaine de kilomètres, quelques dollars par kilomètre peuvent s'ajouter selon la destination."),
    neighbors: ["notre-dame-des-prairies", "rawdon", "saint-ambroise-de-kildare", "saint-jean-de-matha", "saint-felix-de-valois"],
    pillarLocal: "Nos partenaires connaissent la route 348, les côtes de Sainte-Mélanie et les chemins de chalets du secteur. Donnez-nous un repère, ils sauront s'y rendre avec l'équipement qui convient.",
    faq: [
      { q: "Pouvez-vous vous rendre à un chalet sur un chemin privé à Sainte-Mélanie?", a: "Oui, si le chemin est carrossable et déneigé l'hiver. Décrivez-nous l'accès (largeur, pente, gravier ou asphalte) pour que la bonne dépanneuse se présente." },
      { q: "Mon auto est en panne au stationnement du parc des chutes : pouvez-vous intervenir?", a: "Oui. Survoltage, déverrouillage, changement de pneu ou remorquage : indiquez-nous l'entrée du parc où vous vous trouvez." },
      { q: "Faites-vous les sorties de fossé dans les côtes de la route 348?", a: `Oui, avec treuil et sangles. En attendant, restez dans le véhicule avec vos feux de détresse allumés si c'est sécuritaire. Voir notre service de ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")}.` },
    ],
  }),

  page({
    key: "notre-dame-de-lourdes",
    description: "Remorquage à Notre-Dame-de-Lourdes (Lanaudière) 24 h sur 24 : auto, sortie de fossé, accident et survoltage sur la route 131. Appelez le 450-915-0067.",
    lead: "Au nord-est de Joliette, sur la route 131, Notre-Dame-de-Lourdes est une municipalité agricole paisible. Remorquage, sortie de fossé et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "sortie-de-fosse-desenlisement", "remorquage-accident", "survoltage-batterie"],
    facts: ["MRC de Joliette", "Municipalité agricole", "Au nord-est de Joliette", "Traversée par la route 131"],
    intro: `<p>Notre-Dame-de-Lourdes est l'une des portes d'entrée du nord de Lanaudière. La route 131, qui monte de Joliette vers Saint-Félix-de-Valois et Saint-Jean-de-Matha, traverse la municipalité et y amène une circulation bien plus importante que sa population ne le laisse deviner : navetteurs, camions, villégiateurs et véhicules récréatifs.</p>
<p>Le remorquage à Notre-Dame-de-Lourdes combine donc des appels de résidents (survoltages, remorquages au garage) et des pannes ou accidents de passage sur la 131.</p>`,
    local: `<ul>
  <li><strong>La route 131</strong> est l'axe principal. Voir notre page ${zLink("route-131", "remorquage sur la route 131")}.</li>
  <li><strong>Les terres agricoles</strong> et les rangs ouverts sont propices à la poudrerie et aux sorties de route.</li>
  <li><strong>La circulation saisonnière</strong> vers les lacs et les campings du nord augmente les pannes de VR et de roulottes l'été.</li>
  <li><strong>La proximité de Joliette</strong> permet d'amener votre véhicule rapidement vers les garages de la ville.</li>
</ul>`,
    price: priceLocal("À Notre-Dame-de-Lourdes", "Les garages de Joliette et de Notre-Dame-des-Prairies sont à une dizaine de kilomètres."),
    neighbors: ["notre-dame-des-prairies", "saint-felix-de-valois", "saint-ambroise-de-kildare", "saint-thomas", "sainte-elisabeth"],
    pillarLocal: "Nos partenaires empruntent la route 131 tous les jours. Ils connaissent ses accotements, ses entrées de rangs et les secteurs les plus exposés au vent de Notre-Dame-de-Lourdes.",
    faq: [
      { q: "Intervenez-vous sur la route 131 à Notre-Dame-de-Lourdes?", a: `Oui, sur tout le tronçon entre Joliette et Saint-Félix-de-Valois, et plus au nord. Voir notre page ${zLink("route-131", "remorquage sur la route 131")}.` },
      { q: "Pouvez-vous déplacer ma roulotte vers un camping du nord de Lanaudière?", a: `Oui. Voir notre service de ${sLink("remorquage-vr-roulotte", "remorquage de VR et de roulotte")}, et demandez une soumission en indiquant la longueur et le poids de la roulotte.` },
      { q: "Faites-vous le survoltage à la ferme?", a: "Oui, pour les autos, camionnettes et plusieurs véhicules de ferme routiers. Précisez le type de véhicule et la tension de la batterie (12 ou 24 volts) si vous la connaissez." },
    ],
  }),

  page({
    key: "saint-ambroise-de-kildare",
    description: "Remorquage à Saint-Ambroise-de-Kildare 24 h sur 24 : auto, sortie de fossé, survoltage et accident sur la route 343. Soumission gratuite au 450-915-0067.",
    lead: "Au nord de Joliette, sur la route 343, Saint-Ambroise-de-Kildare allie terres agricoles et premiers reliefs des Laurentides. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "sortie-de-fosse-desenlisement", "survoltage-batterie", "remorquage-vehicule-ferraille"],
    facts: ["MRC de Joliette", "Entre plaine agricole et collines", "Au nord de Joliette", "Traversée par la route 343"],
    intro: `<p>Saint-Ambroise-de-Kildare s'étend au nord de Saint-Charles-Borromée, le long de la route 343 qui mène vers Sainte-Marcelline-de-Kildare, Saint-Alphonse-Rodriguez et Saint-Côme. C'est un secteur de transition entre la plaine agricole et les collines, avec des résidences dispersées, des fermes et un trafic de villégiature.</p>
<p>Le remorquage à Saint-Ambroise-de-Kildare, c'est souvent une auto qui refuse de démarrer loin de tout, un véhicule qui a glissé dans une côte ou une vieille voiture à sortir de la cour.</p>`,
    local: `<ul>
  <li><strong>La route 343</strong> relie Saint-Ambroise-de-Kildare à Joliette au sud et aux municipalités de villégiature au nord. En hiver, ses côtes et ses courbes demandent de la prudence.</li>
  <li><strong>Les résidences dispersées</strong> rendent un repère précis essentiel : numéro civique, nom du rang, intersection.</li>
  <li><strong>Les terrains plus grands</strong> accueillent parfois de vieux véhicules immobilisés depuis longtemps : notre service de ${sLink("remorquage-vehicule-ferraille", "remorquage de véhicule hors d'usage")} les amène chez un recycleur autorisé.</li>
  <li><strong>Au dégel</strong>, les accotements et chemins de terre deviennent mous : les enlisements sont fréquents en avril.</li>
</ul>`,
    price: priceLocal("À Saint-Ambroise-de-Kildare", "Pour un garage de Joliette ou de Saint-Charles-Borromée, la distance reste modérée."),
    neighbors: ["saint-charles-borromee", "notre-dame-des-prairies", "sainte-melanie", "notre-dame-de-lourdes", "saint-felix-de-valois"],
    pillarLocal: "Nos partenaires connaissent la route 343 et les rangs de Saint-Ambroise-de-Kildare, ainsi que les chemins qui deviennent difficiles au dégel. Ils prévoient l'équipement en fonction de l'accès.",
    faq: [
      { q: "Pouvez-vous enlever une vieille auto sur mon terrain à Saint-Ambroise-de-Kildare?", a: `Oui. Même sans batterie, avec des pneus à plat ou prise dans la glace, le véhicule peut être treuillé sur un plateau et amené chez un recycleur autorisé. Voir le ${sLink("remorquage-vehicule-ferraille", "remorquage de véhicule hors d'usage")}.` },
      { q: "Intervenez-vous sur la route 343 au nord de Saint-Ambroise?", a: "Oui, vers Sainte-Marcelline-de-Kildare et Saint-Alphonse-Rodriguez notamment. Indiquez-nous votre position exacte lors de l'appel." },
      { q: "Mon auto est enlisée dans mon entrée au printemps : pouvez-vous aider?", a: `Oui, c'est une situation courante au dégel. Voir notre service de ${sLink("sortie-de-fosse-desenlisement", "désenlisement")}.` },
    ],
  }),

  page({
    key: "saint-felix-de-valois",
    description: "Remorquage à Saint-Félix-de-Valois 24 h sur 24 : auto, plateau, accident, VR et sortie de fossé sur les routes 131 et 348. Appelez le 450-915-0067.",
    lead: "Au nord de Joliette, au croisement des routes 131 et 348, Saint-Félix-de-Valois est un carrefour pour le nord de Lanaudière. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "remorquage-accident", "remorquage-vr-roulotte", "sortie-de-fosse-desenlisement"],
    facts: ["MRC de Matawinie", "Carrefour du nord de Lanaudière", "Au nord de Joliette", "Routes 131 et 348"],
    intro: `<p>Saint-Félix-de-Valois est la plus importante municipalité sur la route 131 entre Joliette et Saint-Jean-de-Matha. C'est aussi le point de rencontre avec la route 348, qui file vers Saint-Gabriel-de-Brandon à l'est et Sainte-Mélanie à l'ouest. Commerces, services et circulation de transit y convergent, surtout les fins de semaine d'été, quand les villégiateurs montent vers les lacs.</p>
<p>Le remorquage à Saint-Félix-de-Valois couvre la ville elle-même et les grands axes qui la traversent, de jour comme de nuit.</p>`,
    local: `<ul>
  <li><strong>La route 131</strong> amène une circulation importante vers le nord, avec son lot d'accrochages et de pannes. Voir notre page ${zLink("route-131", "remorquage sur la route 131")}.</li>
  <li><strong>La route 348</strong>, qui partage un tronçon avec la 131 près de Saint-Félix, relie la municipalité à Sainte-Mélanie et à Saint-Gabriel-de-Brandon.</li>
  <li><strong>La circulation saisonnière</strong> de roulottes, de bateaux et de VR augmente les appels de ${sLink("remorquage-vr-roulotte", "remorquage de VR")} de mai à octobre.</li>
  <li><strong>Les secteurs ruraux</strong> autour du village sont exposés à la poudrerie l'hiver.</li>
</ul>`,
    price: priceFar("À Saint-Félix-de-Valois", "Pour un remorquage vers Joliette, à une vingtaine de kilomètres, la distance est prise en compte dans la soumission; un garage local peut aussi être une option."),
    neighbors: ["notre-dame-de-lourdes", "saint-jean-de-matha", "sainte-melanie", "saint-ambroise-de-kildare", "sainte-elisabeth"],
    pillarLocal: "Nos partenaires connaissent le carrefour des routes 131 et 348 et la circulation saisonnière du secteur. Ils se présentent avec la dépanneuse adaptée à votre véhicule, auto, camion ou VR.",
    faq: [
      { q: "Pouvez-vous remorquer mon auto de Saint-Félix-de-Valois vers Joliette?", a: "Oui. Vous pouvez aussi choisir un garage de Saint-Félix-de-Valois. C'est vous qui décidez de la destination, et la distance est incluse dans la soumission." },
      { q: "Mon VR est en panne sur la 131 près de Saint-Félix : que faire?", a: `Rangez-vous le plus loin possible de la circulation, allumez vos feux de détresse et appelez-nous en précisant la classe, la longueur et le poids du VR. Voir le ${sLink("remorquage-vr-roulotte", "remorquage de VR et de roulotte")}.` },
      { q: "Êtes-vous disponibles la fin de semaine?", a: "Oui, notre ligne est ouverte 24 heures sur 24, 7 jours sur 7, y compris les fins de semaine d'été où la circulation est la plus dense sur la 131." },
    ],
  }),

  page({
    key: "rawdon",
    description: "Remorquage à Rawdon 24 h sur 24 : auto, plateau, sortie de fossé, VR et accident sur les routes 337, 341 et 348. Soumission gratuite au 450-915-0067.",
    lead: "Au pied des Laurentides, Rawdon est une ville de lacs, de chutes et de côtes. Remorquage, sortie de fossé et assistance routière, 24 heures sur 24, pour résidents et villégiateurs.",
    focus: ["remorquage-automobile", "sortie-de-fosse-desenlisement", "remorquage-plateau", "remorquage-vr-roulotte"],
    facts: ["MRC de Matawinie", "Près de 12 000 habitants", "À l'ouest de Joliette", "Routes 337, 341 et 348, près de la 125"],
    intro: `<p>Rawdon est un carrefour routier : les routes 337, 341 et 348 s'y croisent, et la route 125 passe tout près, à l'ouest. La ville est réputée pour ses lacs, ses chutes (dont les chutes Dorwin) et ses nombreux chalets. Sa population grimpe chaque été avec l'arrivée des villégiateurs, et la circulation suit.</p>
<p>Le remorquage à Rawdon a ses défis : côtes glacées l'hiver, chemins de lac étroits, véhicules à traction intégrale et VR l'été. On connaît.</p>`,
    local: `<ul>
  <li><strong>Les routes 337, 341 et 348</strong> se chevauchent en partie dans Rawdon avant de repartir vers Saint-Jean-de-Matha, L'Assomption, Terrebonne ou Sainte-Mélanie.</li>
  <li><strong>Le relief</strong> : les côtes de Rawdon deviennent délicates avec le verglas. Les ${sLink("sortie-de-fosse-desenlisement", "sorties de fossé")} y sont fréquentes l'hiver.</li>
  <li><strong>Les chemins de lac</strong>, souvent privés, étroits ou en gravier, demandent une description précise de l'accès.</li>
  <li><strong>Beaucoup de VUS et de 4x4</strong> dans le secteur : le ${sLink("remorquage-plateau", "remorquage sur plateau")} est souvent requis.</li>
</ul>`,
    price: priceFar("À Rawdon", "Pour un remorquage vers Joliette, à environ 25 kilomètres, la distance s'ajoute aux frais de base; un garage de Rawdon peut être plus avantageux selon la réparation."),
    neighbors: ["sainte-melanie", "saint-jacques", "saint-jean-de-matha", "saint-ambroise-de-kildare", "crabtree"],
    pillarLocal: "Nos partenaires connaissent les côtes de Rawdon, les chemins de lac et le carrefour des routes 337, 341 et 348. Ils savent quelle dépanneuse envoyer selon l'accès et le véhicule.",
    faq: [
      { q: "Pouvez-vous vous rendre à mon chalet au bord d'un lac à Rawdon?", a: "Oui, si le chemin est carrossable (et déneigé l'hiver). Décrivez-nous l'accès : largeur, pente, surface et espace pour manœuvrer près du véhicule." },
      { q: "Mon 4x4 est pris dans une côte glacée : que faire?", a: `Ne forcez pas le moteur ni les roues : vous risquez de glisser davantage ou d'abîmer la transmission. Allumez vos feux de détresse et appelez-nous. Voir notre service de ${sLink("sortie-de-fosse-desenlisement", "désenlisement")}.` },
      { q: "Remorquez-vous vers Montréal depuis Rawdon?", a: `Oui, avec notre service de ${sLink("transport-vehicule-longue-distance", "transport longue distance")}, sur plateau et à prix fixe convenu à l'avance.` },
    ],
  }),

  page({
    key: "saint-jean-de-matha",
    description: "Remorquage à Saint-Jean-de-Matha 24 h sur 24 : auto, plateau, sortie de fossé, VR et survoltage sur la route 131. Appelez le 450-915-0067.",
    lead: "Porte d'entrée de la haute Matawinie sur la route 131, Saint-Jean-de-Matha accueille résidents, villégiateurs et amateurs de plein air. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "sortie-de-fosse-desenlisement", "remorquage-vr-roulotte", "livraison-essence"],
    facts: ["MRC de Matawinie", "Porte d'entrée de la haute Matawinie", "Au nord de Joliette", "Route 131, terminus nord de la route 337"],
    intro: `<p>Saint-Jean-de-Matha est un lieu de passage obligé pour qui monte vers Sainte-Émélie-de-l'Énergie, Saint-Zénon et Saint-Michel-des-Saints par la route 131. La municipalité partage avec Sainte-Mélanie et Sainte-Béatrix le Parc régional des Chutes-Monte-à-Peine-et-des-Dalles, et elle attire les visiteurs en toute saison.</p>
<p>Plus on monte vers le nord, plus les stations-service et les garages s'espacent. Le remorquage à Saint-Jean-de-Matha, c'est souvent la solution pour ramener un véhicule vers un garage de Saint-Félix-de-Valois ou de Joliette.</p>`,
    local: `<ul>
  <li><strong>La route 131</strong> relie Saint-Jean-de-Matha à Joliette au sud et à la haute Matawinie au nord. Voir notre page ${zLink("route-131", "remorquage sur la route 131")}.</li>
  <li><strong>La route 337</strong> se termine à Saint-Jean-de-Matha après être passée par Rawdon.</li>
  <li><strong>Le relief et les forêts</strong> rendent certaines routes glissantes et sombres l'hiver : les sorties de route sont fréquentes.</li>
  <li><strong>Les stations-service plus espacées</strong> expliquent de nombreux appels pour la ${sLink("livraison-essence", "livraison d'essence")}.</li>
</ul>`,
    price: priceFar("À Saint-Jean-de-Matha", "Pour un remorquage vers Joliette, à près de 30 kilomètres, la distance est incluse dans la soumission; on peut aussi viser un garage plus proche."),
    neighbors: ["saint-felix-de-valois", "sainte-melanie", "rawdon", "notre-dame-de-lourdes", "saint-ambroise-de-kildare"],
    pillarLocal: "Nos partenaires connaissent la route 131 jusqu'à Saint-Jean-de-Matha et au-delà, ainsi que les chemins de villégiature du secteur. Ils prévoient l'équipement selon l'accès et le véhicule.",
    faq: [
      { q: "Intervenez-vous au nord de Saint-Jean-de-Matha?", a: "Oui, selon la situation, vers Sainte-Émélie-de-l'Énergie et plus loin sur la route 131. Appelez-nous avec votre position exacte : nous vous donnerons le prix avant l'intervention." },
      { q: "Je suis en panne sèche près de Saint-Jean-de-Matha : pouvez-vous m'apporter de l'essence?", a: `Oui. Précisez le type de carburant (ordinaire, super ou diesel). Voir notre service de ${sLink("livraison-essence", "livraison d'essence")}.` },
      { q: "Pouvez-vous déplacer un VR vers un camping du secteur?", a: `Oui. Voir notre service de ${sLink("remorquage-vr-roulotte", "remorquage de VR et de roulotte")} pour les détails.` },
    ],
  }),

  page({
    key: "lavaltrie",
    description: "Remorquage à Lavaltrie 24 h sur 24 : auto, accident, plateau et survoltage près de l'échangeur A-40 et A-31 (sortie 122). Appelez le 450-915-0067.",
    lead: "Au croisement de l'autoroute 40 et de l'autoroute 31, Lavaltrie est la porte d'entrée de Joliette. Remorquage, remorquage après accident et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-accident", "remorquage-automobile", "remorquage-plateau", "survoltage-batterie"],
    facts: ["MRC de D'Autray", "Plus de 14 000 habitants", "Au sud de Joliette, sur le fleuve", "Échangeur A-40 et A-31 (sortie 122), routes 131 et 138"],
    intro: `<p>Lavaltrie, c'est là que l'autoroute 31 quitte l'autoroute 40 pour monter vers Joliette, à la sortie 122. C'est aussi le terminus sud de la route 131, qui rejoint la route 138 le long du fleuve. Tout ce qui circule entre Montréal, Trois-Rivières et Joliette passe à proximité, ce qui fait de Lavaltrie un secteur où pannes et accidents surviennent à toute heure.</p>
<p>Le remorquage à Lavaltrie couvre la ville, ses quartiers résidentiels en croissance et les grands axes qui la traversent.</p>`,
    local: `<ul>
  <li><strong>L'échangeur de l'A-40 et de l'A-31 (sortie 122)</strong> concentre la circulation vers Joliette. Voir nos pages ${zLink("autoroute-40", "autoroute 40")} et ${zLink("autoroute-31", "autoroute 31")}.</li>
  <li><strong>La route 138</strong>, le long du fleuve, relie Lavaltrie à Lanoraie et Berthierville d'un côté, à Repentigny de l'autre.</li>
  <li><strong>Les quartiers résidentiels récents</strong> comptent de nombreuses familles navetteuses : survoltages du matin et remorquages au garage y sont courants.</li>
  <li><strong>La position entre Joliette et Repentigny</strong> permet d'amener votre véhicule vers les garages de l'une ou l'autre des régions.</li>
</ul>`,
    price: priceFar("À Lavaltrie", "Pour un remorquage vers Joliette, à une vingtaine de kilomètres par l'autoroute 31, la distance est incluse dans la soumission; un garage de Lavaltrie ou de Repentigny est aussi possible."),
    neighbors: ["saint-paul", "l-assomption", "berthierville", "sainte-elisabeth", "saint-thomas"],
    pillarLocal: "Nos partenaires connaissent l'échangeur de la sortie 122, les bretelles de l'A-31 et la route 138. Ils savent comment intervenir en sécurité sur ces axes rapides.",
    faq: [
      { q: "Intervenez-vous sur l'autoroute 40 près de Lavaltrie?", a: `Oui. En cas d'accident avec blessés ou de véhicule qui bloque une voie, composez d'abord le 9-1-1. Consultez notre page ${zLink("autoroute-40", "remorquage sur l'autoroute 40")}.` },
      { q: "Pouvez-vous remorquer mon auto de Lavaltrie jusqu'à Joliette?", a: "Oui, par l'autoroute 31. Vous pouvez aussi choisir un garage de Lavaltrie ou de Repentigny : la destination est votre choix." },
      { q: "Faites-vous le survoltage à domicile à Lavaltrie?", a: `Oui, 24 heures sur 24. Voir notre page ${sLink("survoltage-batterie", "survoltage de batterie")}.` },
    ],
  }),

  page({
    key: "berthierville",
    description: "Remorquage à Berthierville 24 h sur 24 : auto, accident, plateau et remorquage lourd près de l'A-40 (sortie 144) et de la route 158. Appelez le 450-915-0067.",
    lead: "Sur l'autoroute 40, à la sortie 144, Berthierville est le point de départ vers la traverse de Sorel-Tracy. Remorquage, remorquage lourd et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-accident", "remorquage-automobile", "remorquage-lourd", "remorquage-plateau"],
    facts: ["MRC de D'Autray", "Ville natale de Gilles Villeneuve", "À l'est de Joliette, sur le fleuve", "A-40 (sortie 144), routes 138 et 158"],
    intro: `<p>Berthierville est un carrefour : l'autoroute 40, la route 138 et la route 158 s'y rejoignent, et la route 158 se prolonge jusqu'à Saint-Ignace-de-Loyola, d'où part la traverse vers Sorel-Tracy. Ville natale du pilote Gilles Villeneuve, Berthierville voit passer autos, camions lourds et voyageurs à longueur de journée.</p>
<p>Le remorquage à Berthierville touche donc autant les résidents que les automobilistes et camionneurs de passage sur l'A-40.</p>`,
    local: `<ul>
  <li><strong>L'autoroute 40 et la sortie 144</strong> concentrent les pannes et les accidents à vitesse élevée. Voir notre page ${zLink("autoroute-40", "remorquage sur l'autoroute 40")}.</li>
  <li><strong>La route 158</strong> relie Berthierville à Saint-Thomas et Joliette à l'ouest. Voir ${zLink("route-158", "remorquage sur la route 158")}.</li>
  <li><strong>La traverse Sorel-Tracy – Saint-Ignace-de-Loyola</strong> amène une circulation régulière vers les îles de Berthier.</li>
  <li><strong>Les camions lourds</strong> sont nombreux sur l'A-40 : notre service de ${sLink("remorquage-lourd", "remorquage lourd")} est souvent sollicité dans ce secteur.</li>
</ul>`,
    price: priceFar("À Berthierville", "Pour un remorquage vers Joliette, à environ 25 kilomètres par la route 158, la distance est incluse dans la soumission; un garage de Berthierville peut aussi être choisi."),
    neighbors: ["saint-thomas", "sainte-elisabeth", "lavaltrie", "notre-dame-de-lourdes", "saint-paul"],
    pillarLocal: "Nos partenaires connaissent l'A-40, la sortie 144, la route 158 et les accès vers la traverse. Ils interviennent sur ces axes avec l'équipement et la signalisation nécessaires.",
    faq: [
      { q: "Remorquez-vous les camions lourds en panne sur l'A-40 près de Berthierville?", a: `Oui, avec des dépanneuses de forte capacité. Donnez-nous le type de véhicule, le poids et la direction. Voir le ${sLink("remorquage-lourd", "remorquage lourd")}.` },
      { q: "Mon véhicule est en panne à Saint-Ignace-de-Loyola, près de la traverse : intervenez-vous?", a: "Oui, du côté de Berthier. Indiquez-nous votre position exacte. Pour un véhicule qui doit traverser vers Sorel-Tracy, parlez-nous-en lors de l'appel." },
      { q: "Pouvez-vous remorquer mon auto de Berthierville jusqu'à Joliette?", a: "Oui, par la route 158. La destination est votre choix, et la distance est incluse dans la soumission avant l'intervention." },
    ],
  }),

  page({
    key: "sainte-elisabeth",
    description: "Remorquage à Sainte-Élisabeth (D'Autray) 24 h sur 24 : auto, sortie de fossé, survoltage et machinerie légère dans les rangs. Appelez le 450-915-0067.",
    lead: "Entre Joliette et Berthierville, Sainte-Élisabeth est une municipalité agricole aux grands espaces. Remorquage, sortie de fossé et assistance routière, 24 heures sur 24.",
    focus: ["sortie-de-fosse-desenlisement", "remorquage-automobile", "survoltage-batterie", "transport-machinerie"],
    facts: ["MRC de D'Autray", "Municipalité agricole", "À l'est de Joliette", "Accès par la route 345"],
    intro: `<p>Sainte-Élisabeth est une municipalité rurale où les terres agricoles s'étendent à perte de vue. On y accède notamment par la route 345, qui la relie à la route 138 et à l'autoroute 40 au sud. Ses rangs droits et dégagés sont magnifiques, mais le vent y soulève la neige en rafales l'hiver, et la visibilité peut tomber à presque rien en quelques secondes.</p>
<p>Le remorquage à Sainte-Élisabeth, ce sont surtout des sorties de fossé, des véhicules pris dans la neige, des survoltages à la ferme et le déplacement d'équipement léger.</p>`,
    local: `<ul>
  <li><strong>La poudrerie</strong> dans les rangs ouverts est la première cause de nos appels l'hiver : voir notre service de ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")}.</li>
  <li><strong>Les distances</strong> entre les rangs et le village demandent un repère précis : numéro civique, nom du rang, ferme ou intersection.</li>
  <li><strong>Les exploitations agricoles</strong> ont parfois besoin de déplacer un VTT, un tracteur compact ou de l'équipement léger : voir le ${sLink("transport-machinerie", "transport de machinerie")}.</li>
  <li><strong>La proximité de Joliette</strong>, à une douzaine de kilomètres, facilite le remorquage vers les garages de la ville.</li>
</ul>`,
    price: priceLocal("À Sainte-Élisabeth", "Les garages de Joliette sont à une douzaine de kilomètres, ce qui reste raisonnable pour un remorquage local."),
    neighbors: ["saint-thomas", "notre-dame-de-lourdes", "berthierville", "saint-felix-de-valois", "lavaltrie"],
    pillarLocal: "Nos partenaires connaissent les rangs de Sainte-Élisabeth et les secteurs où la poudrerie frappe le plus fort. Ils arrivent avec treuil et sangles pour vous sortir de là en sécurité.",
    faq: [
      { q: "Je suis pris dans un banc de neige dans un rang de Sainte-Élisabeth : que faire?", a: `Restez dans votre véhicule, ceinture bouclée, feux de détresse allumés. Si l'échappement est bloqué par la neige, coupez le moteur. Appelez-nous en donnant le nom du rang et un repère. Voir aussi ${gLink("voiture-dans-le-fosse-hiver", "notre guide sur les sorties de fossé")}.` },
      { q: "Faites-vous le survoltage de camionnette à la ferme?", a: "Oui, pour les autos, camionnettes et plusieurs véhicules de ferme routiers. Précisez le type de véhicule lors de l'appel." },
      { q: "Pouvez-vous transporter un tracteur compact vers le concessionnaire?", a: `Oui, sur plateau, selon le poids et les dimensions. Voir notre service de ${sLink("transport-machinerie", "transport de machinerie")}.` },
    ],
  }),

  page({
    key: "saint-jacques",
    description: "Remorquage à Saint-Jacques (Montcalm) 24 h sur 24 : auto, accident, sortie de fossé et survoltage sur les routes 158 et 341. Appelez le 450-915-0067.",
    lead: "Au sud-ouest de Joliette, au croisement des routes 158 et 341, Saint-Jacques est le cœur de la Nouvelle-Acadie. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "remorquage-accident", "sortie-de-fosse-desenlisement", "survoltage-batterie"],
    facts: ["MRC de Montcalm", "Fondée en 1774 par des Acadiens", "Au sud-ouest de Joliette", "Routes 158 et 341"],
    intro: `<p>Saint-Jacques a été fondée en 1774 par des familles acadiennes arrivées après la Déportation, ce qui en fait l'une des municipalités de la Nouvelle-Acadie. Aujourd'hui, elle se trouve au croisement de deux axes importants : la route 158, qui relie Joliette à Saint-Lin–Laurentides et Saint-Jérôme, et la route 341, qui descend vers L'Épiphanie, L'Assomption et Repentigny.</p>
<p>Le remorquage à Saint-Jacques couvre le village, les rangs agricoles et ces deux routes régionales souvent achalandées.</p>`,
    local: `<ul>
  <li><strong>La route 158</strong> relie Saint-Jacques à Joliette à l'est. Voir notre page ${zLink("route-158", "remorquage sur la route 158")}.</li>
  <li><strong>La route 341</strong> file vers Rawdon au nord et L'Assomption au sud.</li>
  <li><strong>Les terres agricoles</strong> des alentours sont exposées au vent : les sorties de route et enlisements sont fréquents l'hiver.</li>
  <li><strong>Le choix du garage</strong> : selon la réparation, votre véhicule peut être amené à Saint-Jacques, à Joliette ou vers la région de L'Assomption.</li>
</ul>`,
    price: priceFar("À Saint-Jacques", "Pour un remorquage vers Joliette, à une vingtaine de kilomètres par la route 158, la distance est incluse dans la soumission."),
    neighbors: ["crabtree", "l-assomption", "rawdon", "saint-paul", "sainte-melanie"],
    pillarLocal: "Nos partenaires connaissent le carrefour des routes 158 et 341, les rangs de Saint-Jacques et les garages de la région. Ils interviennent avec l'équipement adapté à votre véhicule.",
    faq: [
      { q: "Intervenez-vous sur la route 158 entre Saint-Jacques et Joliette?", a: `Oui, sur tout le tronçon. Voir notre page ${zLink("route-158", "remorquage sur la route 158")} pour les conseils de sécurité.` },
      { q: "Pouvez-vous remorquer mon auto de Saint-Jacques vers L'Assomption?", a: "Oui. La destination est votre choix : Saint-Jacques, Joliette, L'Assomption ou ailleurs. La distance est incluse dans la soumission." },
      { q: "Faites-vous les sorties de fossé dans les rangs de Saint-Jacques?", a: `Oui, avec treuil et sangles professionnels. Voir notre service de ${sLink("sortie-de-fosse-desenlisement", "sortie de fossé")}.` },
    ],
  }),

  page({
    key: "l-assomption",
    a: "à L'Assomption",
    de: "de L'Assomption",
    description: "Remorquage à L'Assomption 24 h sur 24 : auto, plateau, accident et survoltage près de l'A-40 et des routes 343 et 341. Soumission gratuite au 450-915-0067.",
    lead: "Ville historique sur la rivière L'Assomption, entre Joliette et Repentigny, L'Assomption est bien reliée à l'autoroute 40. Remorquage et assistance routière, 24 heures sur 24.",
    focus: ["remorquage-automobile", "remorquage-accident", "remorquage-plateau", "survoltage-batterie"],
    facts: ["MRC de L'Assomption", "Plus de 20 000 habitants", "Au sud-ouest de Joliette", "Routes 343 et 341, près de l'A-40"],
    intro: `<p>L'Assomption est l'une des plus anciennes villes de Lanaudière, reconnue notamment pour son collège fondé au 19e siècle et son centre historique au bord de la rivière. C'est aussi un carrefour routier : la route 343 la relie à Joliette au nord-est, la route 341 à Saint-Jacques et Rawdon, et l'autoroute 40 passe tout près, vers Repentigny et Montréal.</p>
<p>Le remorquage à L'Assomption dessert une population nombreuse et des navetteurs qui roulent chaque jour vers la région métropolitaine.</p>`,
    local: `<ul>
  <li><strong>La route 343</strong> relie L'Assomption à Saint-Paul et Joliette. C'est un trajet courant pour amener un véhicule vers un garage de Joliette.</li>
  <li><strong>L'autoroute 40</strong>, à proximité, génère des pannes et des accidents à vitesse élevée. Voir ${zLink("autoroute-40", "remorquage sur l'autoroute 40")}.</li>
  <li><strong>Le centre historique</strong> a des rues plus étroites où une dépanneuse compacte est parfois préférable.</li>
  <li><strong>Les quartiers résidentiels</strong> comptent de nombreux VUS et véhicules à traction intégrale : le ${sLink("remorquage-plateau", "plateau")} est souvent requis.</li>
</ul>`,
    price: priceFar("À L'Assomption", "Pour un remorquage vers Joliette, à une vingtaine de kilomètres par la route 343, la distance est incluse dans la soumission; un garage de L'Assomption ou de Repentigny est aussi possible."),
    neighbors: ["saint-paul", "saint-jacques", "lavaltrie", "crabtree", "saint-charles-borromee"],
    pillarLocal: "Nos partenaires connaissent L'Assomption, son centre historique, la route 343 et les accès à l'autoroute 40. Ils choisissent la dépanneuse selon la rue et votre véhicule.",
    faq: [
      { q: "Pouvez-vous remorquer mon auto de L'Assomption vers un garage de Joliette?", a: "Oui, par la route 343. Vous pouvez aussi choisir un garage de L'Assomption ou de Repentigny : la destination est toujours votre choix." },
      { q: "Intervenez-vous dans le centre historique de L'Assomption?", a: "Oui. Dans les rues plus étroites, nous prévoyons une dépanneuse adaptée à l'espace disponible. Mentionnez les contraintes d'accès lors de l'appel." },
      { q: "Mon véhicule électrique est en panne à L'Assomption : que faire?", a: `Appelez-nous en précisant le modèle : il sera transporté sur plateau, vers une borne de recharge ou un atelier. Voir le ${sLink("remorquage-vehicule-electrique", "remorquage de véhicule électrique")}.` },
    ],
  }),
];

const index = {
  kind: "page",
  path: "/zones-desservies/",
  title: "Zones desservies | Remorquage autour de Joliette",
  description: "Remorquage à Joliette et dans 16 municipalités voisines de Lanaudière, ainsi que sur l'A-40, l'A-31 et les routes 158 et 131. Service 24 h sur 24.",
  h1: "Zones desservies autour de Joliette",
  lead: "Nous desservons Joliette, toute la MRC de Joliette et les municipalités voisines de Matawinie, de D'Autray, de Montcalm et de L'Assomption, ainsi que les grands axes routiers de la région.",
  checks: ["Joliette et 16 municipalités voisines", "Autoroutes 40 et 31", "Routes 158 et 131", "Service 24 h sur 24, 7 jours sur 7"],
  breadcrumbs: [{ name: "Zones desservies", path: "/zones-desservies/" }],
  faq: [
    { q: "Desservez-vous des municipalités qui ne sont pas dans la liste?", a: `Oui, dans plusieurs cas. Nous intervenons aussi à Saint-Pierre, Sainte-Marcelline-de-Kildare, Saint-Alphonse-Rodriguez, Saint-Liguori, Lanoraie, Saint-Cuthbert, Saint-Alexis ou Sainte-Béatrix, notamment. Appelez-nous au ${SITE.phone} avec votre position : on vous confirme si nous pouvons intervenir et à quel prix.` },
    { q: "Le prix change-t-il selon la municipalité?", a: `Les frais de base sont les mêmes, mais la distance entre l'endroit où se trouve le véhicule et la destination peut s'ajouter. Voir notre <a href="/prix-remorquage-joliette/">guide des prix</a>.` },
    { q: "Intervenez-vous sur les autoroutes?", a: `Oui, sur l'${zLink("autoroute-40", "autoroute 40")} et l'${zLink("autoroute-31", "autoroute 31")}, sauf lorsque les autorités imposent un remorqueur désigné. En cas de danger ou de blessés, composez d'abord le 9-1-1.` },
  ],
  body: `<section><div class="container">
  <div class="section-head"><span class="overline">Territoire</span><h2>Remorquage à Joliette et dans les environs</h2>
  <p style="margin-top:.75rem">Joliette est au centre de notre territoire. Avec l'autoroute 31 qui descend vers l'autoroute 40 à Lavaltrie, la route 158 qui traverse la région d'ouest en est, la route 131 qui monte vers le nord et la route 343 qui relie L'Assomption à Saint-Ambroise-de-Kildare, la ville est à la croisée de tous les chemins de Lanaudière. Choisissez votre municipalité ou votre route pour en savoir plus.</p></div>
  ${zonesGroups()}
</div></section>
<section class="bg-soft"><div class="container grid-2">
  <div class="prose">
    <h2>Joliette, notre point de départ</h2>
    <p>La ville de Joliette, chef-lieu de la MRC du même nom, forme avec Saint-Charles-Borromée et Notre-Dame-des-Prairies une agglomération de plus de 45 000 habitants. C'est là que se trouvent la majorité des garages, des concessionnaires et des centres de carrosserie de la région, et donc la destination de la plupart de nos remorquages.</p>
    <p>Des boulevards Base-de-Roc, Firestone et Manseau jusqu'aux rues du centre-ville autour de la cathédrale, nos partenaires connaissent chaque secteur de la ville. Ils interviennent aussi dans les stationnements des commerces, des écoles, du cégep et des immeubles à logements.</p>
  </div>
  <div class="prose">
    <h2>Les grands axes de la région</h2>
    <ul>
      <li>${zLink("autoroute-40", "Autoroute 40")} : de Repentigny à Berthierville, le long du fleuve.</li>
      <li>${zLink("autoroute-31", "Autoroute 31")} : 14 km entre l'A-40 à Lavaltrie (sortie 122) et Joliette.</li>
      <li>${zLink("route-158", "Route 158")} : de Saint-Jacques à Berthierville en passant par Joliette.</li>
      <li>${zLink("route-131", "Route 131")} : de Lavaltrie à Saint-Michel-des-Saints, par Joliette et Saint-Félix-de-Valois.</li>
    </ul>
  </div>
</div></section>`,
};

export default [index, ...zones];
