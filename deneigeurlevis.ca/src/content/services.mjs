import { SITE, ICONS, pillars, steps, serviceUrl, sLink, gLink, zLink, zoneChips } from "../components.mjs";
import { SERVICES, ZONES } from "../data.mjs";

function aside(slug) {
  const others = SERVICES.filter((s) => s.slug !== slug);
  return `<aside class="aside-sticky" aria-label="Liens utiles">
    <div class="aside-box"><h2>Nos autres services</h2><ul>${others.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.nav}</a></li>`).join("")}</ul></div>
    <div class="aside-box"><h2>Secteurs desservis</h2>${zoneChips(ZONES.map((z) => z.key))}</div>
    <div class="aside-box" style="background:var(--navy);border-color:var(--navy);color:#DCE7F3"><h2 style="color:#fff">Une question?</h2><p>Parlez à notre équipe, du lundi au samedi.</p><p style="margin-top:1rem"><a href="tel:${SITE.phoneE164}" data-loc="aside" class="btn btn-primary" style="width:100%">${ICONS.phone}${SITE.phone}</a></p></div>
  </aside>`;
}

function page(o) {
  const s = SERVICES.find((x) => x.slug === o.slug);
  return {
    kind: "service",
    path: serviceUrl(o.slug),
    title: o.title,
    description: o.description,
    h1: o.h1,
    lead: o.lead,
    checks: o.checks,
    formType: o.formType,
    breadcrumbs: [{ name: "Services", path: "/services/" }, { name: s.nav, path: serviceUrl(o.slug) }],
    service: { name: o.h1, serviceType: o.serviceType, description: o.description, areaServed: ["Lévis", ...ZONES.map((z) => `${z.name}, Lévis`)] },
    faq: o.faq,
    faqTitle: o.faqTitle,
    ctaTitle: o.ctaTitle,
    ctaText: o.ctaText,
    body: `<section><div class="container layout-aside"><div class="prose">${o.prose}</div>${aside(o.slug)}</div></section>\n${pillars(o.pillars, o.pillarsTitle)}`,
  };
}

const pillarAssure = { fact: "Assurance responsabilité civile", h: "Assurés, preuve à l'appui", p: "La machinerie de déneigement travaille près des clôtures, des bordures et des portes de garage. Les équipes qui interviennent chez vous sont assurées en responsabilité civile et la preuve d'assurance vous est remise sur demande, avant la signature du contrat." };
const pillarContrat = { fact: "Contrat écrit", h: "Tout est écrit avant l'hiver", p: "Prix, seuil de déclenchement, dates de la saison, zones incluses, extras et modalités d'annulation : le contrat précise chaque point. C'est la meilleure protection pour vous comme pour nous, et c'est ce que recommande l'Office de la protection du consommateur." };

export default [
  // 1. Déneigement résidentiel
  page({
    slug: "deneigement-residentiel-levis",
    title: "Déneigement résidentiel à Lévis | Déneigeur Lévis",
    description: "Déneigement résidentiel à Lévis : entrée de cour et stationnement dégagés après chaque bordée, banc de charrue inclus. Soumission gratuite au 365-334-9481.",
    h1: "Déneigement résidentiel à Lévis",
    serviceType: "Déneigement résidentiel",
    formType: "Contrat saisonnier résidentiel",
    lead: "Votre entrée de cour dégagée après chaque bordée, du premier flocon jusqu'au printemps. Un service de déneigement résidentiel à Lévis pensé pour les bungalows, les maisons de ville et les jumelés de la Rive-Sud.",
    checks: ["Entrée de cour et stationnement", "Banc de la charrue municipale inclus", "Seuil de déclenchement écrit au contrat", "Soumission gratuite et sans obligation"],
    prose: `
<p>Si vous avez besoin d'un service de déneigement résidentiel à Lévis, vous voulez surtout une chose : pouvoir sortir votre voiture le matin sans avoir à pelleter pendant 45 minutes. C'est exactement ce que nous faisons. Après chaque chute de neige qui atteint le seuil prévu à votre contrat, votre entrée de cour est dégagée au tracteur ou à la souffleuse, y compris le banc compact laissé par la charrue de la Ville au bout de l'entrée.</p>
<p>Nous desservons les propriétaires des 12 secteurs de Lévis, de ${zLink("saint-nicolas")} à ${zLink("pintendre")}, avec des circuits organisés par secteur pour intervenir efficacement pendant les tempêtes.</p>

<h2>Ce qui est inclus dans notre déneigement résidentiel</h2>
<ul>
  <li><strong>L'entrée de cour complète</strong>, sur toute sa longueur et sa largeur, jusqu'à la porte de garage s'il y a lieu.</li>
  <li><strong>Le banc de la charrue municipale</strong> au bout de l'entrée, souvent la partie la plus lourde et la plus glacée.</li>
  <li><strong>Les passages supplémentaires</strong> lors des longues tempêtes, selon les modalités prévues au contrat.</li>
  <li><strong>La pose des piquets de repérage</strong> avant le gel, pour protéger votre gazon, vos bordures et vos aménagements.</li>
  <li><strong>L'entreposage de la neige sur votre terrain</strong>, aux endroits convenus avec vous, sans jamais la repousser dans la rue.</li>
</ul>
<p>Des extras peuvent s'ajouter selon vos besoins : ${sLink("deneigement-manuel-balcons-escaliers", "pelletage des balcons, escaliers et trottoirs")}, ${sLink("epandage-abrasif-deglacage", "épandage d'abrasif")} ou déneigement d'une deuxième entrée.</p>

<h2>Les signes qu'il est temps d'engager un déneigeur</h2>
<p>Beaucoup de propriétaires de Lévis déneigent eux-mêmes pendant des années, puis décident un jour de confier la tâche. Les raisons reviennent souvent :</p>
<ul>
  <li>Votre souffleuse a plus de 10 ans et vous hésitez à investir dans une nouvelle machine.</li>
  <li>Vous partez travailler tôt, souvent vers Québec par les ponts, et vous n'avez pas le temps de déneiger avant de partir.</li>
  <li>Le banc de la charrue vous oblige à pelleter une deuxième fois après le passage de la Ville.</li>
  <li>Vous avez des douleurs au dos, aux épaules ou au cœur, ou vous voulez simplement éviter les risques du pelletage.</li>
  <li>Votre entrée est longue, large ou en pente, et le déneigement vous prend plus d'une heure à chaque bordée.</li>
</ul>

<h2>Notre façon de faire</h2>
${steps([
  ["Évaluation", "Nous confirmons les dimensions de votre entrée, les obstacles (bordures, haies, lampadaires) et l'endroit où placer la neige."],
  ["Contrat écrit", "Vous recevez un prix fixe pour la saison, le seuil de déclenchement et la liste des zones incluses."],
  ["Piquets avant le gel", "Les piquets sont installés à l'automne pour baliser votre terrain et guider l'opérateur."],
  ["Déneigement après chaque bordée", "Passage dès que le seuil est atteint, et retours supplémentaires lors des grosses tempêtes selon l'entente."],
], false)}

<h2>Tracteur, souffleuse ou pelle : quelle méthode pour votre entrée?</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Méthode</th><th>Idéale pour</th><th>À savoir</th></tr></thead>
  <tbody>
    <tr><td>Tracteur avec souffleuse</td><td>La majorité des entrées de banlieue à Lévis</td><td>Projette la neige loin sur le terrain; limite la hauteur des bancs au fil de l'hiver.</td></tr>
    <tr><td>Tracteur avec lame (gratte)</td><td>Grandes entrées et terrains avec espace pour pousser la neige</td><td>Rapide, mais les bancs grossissent plus vite; demande de l'espace de dépôt.</td></tr>
    <tr><td>Souffleuse à main</td><td>Petites entrées, accès étroits, cours arrière</td><td>Précise autour des obstacles; utilisée en complément de la machinerie.</td></tr>
    <tr><td>Pelletage manuel</td><td>Escaliers, balcons, trottoirs privés</td><td>Le seul moyen de dégager proprement les marches et les accès piétons.</td></tr>
  </tbody>
</table></div>

<h2>Ce qui influence le prix du déneigement résidentiel</h2>
<p>Le prix d'un contrat résidentiel dépend surtout de la <strong>taille de l'entrée</strong> (nombre de voitures en longueur et en largeur), de la <strong>facilité d'accès</strong> (pente, virage, obstacles), de l'<strong>espace disponible pour la neige</strong> et des <strong>extras</strong> choisis. À titre indicatif, une entrée simple se situe généralement entre 450 $ et 650 $ par saison dans la région, taxes en sus. Consultez notre page sur les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a> pour toutes les fourchettes.</p>

<h2>Le déneigement résidentiel à Lévis : ce qui change d'un secteur à l'autre</h2>
<p>Lévis s'étend sur un vaste territoire et les conditions varient beaucoup. Dans le ${zLink("vieux-levis")}, les entrées sont souvent étroites, collées aux voisins et en pente, ce qui demande de la précision. À ${zLink("saint-jean-chrysostome")} et ${zLink("saint-nicolas")}, les quartiers plus récents ont des entrées doubles et des bordures de pavé uni à protéger. En milieu plus ouvert comme ${zLink("saint-etienne-de-lauzon")} ou ${zLink("saint-joseph-de-la-pointe-de-levy")}, la poudrerie forme des congères qui se reforment après le passage. Nos opérateurs adaptent leur façon de faire à chacune de ces réalités.</p>
<p class="source">Pour connaître les règles municipales à respecter, lisez notre guide sur les ${gLink("reglements-deneigement-levis", "règlements de déneigement à Lévis")}.</p>`,
    pillars: [
      pillarAssure,
      { fact: "Banc de charrue inclus", h: "Le bout de l'entrée, on s'en occupe", p: "Le cordon de neige dure laissé par la charrue municipale est souvent ce qui décourage le plus. Dans nos contrats résidentiels, il est dégagé lors de nos passages. Vous n'avez pas à ressortir la pelle après le passage de la Ville, même au petit matin." },
      pillarContrat,
    ],
    faq: [
      { q: "Est-ce que le déneigement est fait avant que je parte travailler?", a: "Nous planifions nos circuits pour dégager le plus d'entrées possible tôt le matin. Lors d'une tempête qui dure toute la nuit ou toute la journée, l'ordre de passage dépend du circuit et de l'accumulation. Les modalités exactes sont précisées dans votre contrat." },
      { q: "Qui est responsable si ma bordure ou mon gazon est endommagé?", a: "Les piquets posés avant le gel servent justement à éviter ces bris. Si un dommage est causé par l'équipement, il doit être signalé rapidement, idéalement avec photo, et il est pris en charge selon les conditions du contrat et l'assurance responsabilité civile de l'entrepreneur." },
      { q: "Est-ce que vous déneigez la porte de garage et l'entrée du garage double?", a: "Oui. L'entrée est dégagée jusqu'aux portes de garage. Pour un garage double ou une entrée plus large que la moyenne, les dimensions sont simplement prises en compte dans le prix de la soumission." },
      { q: "Est-ce que je peux ajouter les escaliers en cours de saison?", a: "Souvent oui, selon la disponibilité de l'équipe de pelletage manuel dans votre secteur. Il est toutefois plus simple de l'inclure dès la signature du contrat, pour que votre adresse soit intégrée au circuit dès le début de l'hiver." },
      { q: "Faut-il être à la maison lors du déneigement?", a: "Non. Il suffit que l'entrée soit libre de véhicules lorsque c'est possible et que les objets (bacs, jouets, rallonges) soient rangés. Une voiture stationnée dans l'entrée sera contournée, puis l'espace sera dégagé au passage suivant." },
    ],
    faqTitle: "Questions sur le déneigement résidentiel à Lévis",
  }),

  // 2. Contrat saisonnier
  page({
    slug: "contrat-deneigement-saisonnier",
    title: "Contrat de déneigement saisonnier à Lévis | Déneigeur Lévis",
    description: "Contrat de déneigement saisonnier à Lévis : prix fixe pour tout l'hiver, seuil de déclenchement écrit, extras au choix. Soumission gratuite au 365-334-9481.",
    h1: "Contrat de déneigement saisonnier à Lévis",
    serviceType: "Contrat de déneigement saisonnier",
    formType: "Contrat saisonnier résidentiel",
    lead: "Un seul prix pour toute la saison, peu importe le nombre de tempêtes. Le contrat de déneigement saisonnier est la formule la plus choisie par les propriétaires de Lévis.",
    checks: ["Prix fixe du début à la fin de l'hiver", "Nombre de passages illimité selon le seuil", "Conditions claires, écrites et signées", "Paiement en un ou plusieurs versements"],
    prose: `
<p>Un contrat de déneigement saisonnier à Lévis vous garantit que votre entrée sera dégagée tout l'hiver, pour un prix fixé à l'avance. Qu'il tombe 200 cm ou 350 cm de neige, vous payez le même montant. Pour la plupart des résidences principales, c'est la façon la plus simple et la plus prévisible de gérer l'hiver sur la Rive-Sud.</p>
<p>Chaque contrat que nous proposons est écrit, signé et précis. Vous savez exactement ce qui est inclus avant la première neige.</p>

<h2>Ce que contient un bon contrat de déneigement</h2>
<p>L'Office de la protection du consommateur recommande fortement un contrat écrit. Voici les éléments que nous inscrivons systématiquement dans le nôtre :</p>
<ul>
  <li><strong>Les dates de la saison</strong> : en général de la mi-novembre à la mi-avril, avec les modalités si la neige arrive plus tôt ou part plus tard.</li>
  <li><strong>Le seuil de déclenchement</strong> : l'accumulation à partir de laquelle un passage est effectué, habituellement autour de 5 cm.</li>
  <li><strong>Les zones déneigées</strong> : entrée, largeur, banc de la charrue, stationnement secondaire, accès au garage.</li>
  <li><strong>Les extras</strong> : escaliers, balcon, trottoir, abrasif, avec leur prix respectif.</li>
  <li><strong>Le prix total et les modalités de paiement</strong> : montant, taxes, dates des versements.</li>
  <li><strong>La responsabilité en cas de dommages</strong> et la façon de signaler un problème.</li>
  <li><strong>Les conditions d'annulation</strong>, pour vous comme pour l'entrepreneur.</li>
</ul>

<h2>Contrat saisonnier ou à l'unité : quand choisir le saisonnier?</h2>
<p>Le contrat saisonnier est presque toujours le bon choix si :</p>
<ul>
  <li>il s'agit de votre résidence principale et vous utilisez votre voiture tous les jours;</li>
  <li>vous voulez un budget fixe, sans mauvaise surprise lors d'un hiver très enneigé;</li>
  <li>vous voulez être servi en priorité pendant les tempêtes, avant les demandes ponctuelles.</li>
</ul>
<p>Le ${sLink("deneigement-a-l-unite", "déneigement à l'unité")} est plutôt adapté aux situations ponctuelles. Notre guide ${gLink("contrat-saisonnier-ou-a-l-unite", "contrat saisonnier ou à l'unité")} compare les deux formules en détail.</p>

<h2>Comment se déroule votre contrat, de la signature au printemps</h2>
${steps([
  ["Soumission", "Vous décrivez votre entrée et vos besoins. Nous confirmons les dimensions et vous proposons un prix fixe."],
  ["Signature", "Le contrat est rédigé avec toutes les conditions. Vous le lisez, posez vos questions, puis signez."],
  ["Préparation", "Les piquets sont posés à l'automne, avant que le sol ne gèle, pour baliser votre terrain."],
  ["Saison et fin de contrat", "Passages après chaque bordée jusqu'à la date de fin, puis retrait des piquets au printemps."],
], false)}

<h2>Les formules de contrat saisonnier</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Formule</th><th>Ce qui est inclus</th><th>Pour qui</th></tr></thead>
  <tbody>
    <tr><td>Essentiel</td><td>Entrée de cour et banc de la charrue</td><td>Propriétaires qui s'occupent eux-mêmes des escaliers</td></tr>
    <tr><td>Confort</td><td>Essentiel + escaliers, balcon avant et trottoir privé</td><td>Familles, travailleurs qui partent tôt</td></tr>
    <tr><td>Tranquillité</td><td>Confort + épandage d'abrasif sur l'entrée et les accès</td><td>Aînés, entrées en pente, propriétés exposées au verglas</td></tr>
  </tbody>
</table></div>
<p class="source">Les formules sont personnalisées selon votre terrain; le contenu exact est toujours précisé au contrat.</p>

<h2>Qu'est-ce qui fait varier le prix d'un contrat saisonnier?</h2>
<p>Quatre facteurs pèsent le plus : la <strong>longueur et la largeur de l'entrée</strong>, la <strong>complexité du terrain</strong> (pente, virage, bordures de pavé uni, voitures stationnées), l'<strong>espace disponible pour déposer la neige</strong> et les <strong>extras</strong>. Dans la région, un contrat pour une entrée standard se situe le plus souvent entre 450 $ et 850 $ par hiver, taxes en sus. Les fourchettes complètes sont sur notre page des <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>

<h2>Pourquoi signer tôt à Lévis</h2>
<p>Avec près de 159 000 habitants et une croissance résidentielle soutenue dans des secteurs comme ${zLink("saint-jean-chrysostome")}, ${zLink("saint-nicolas")} et ${zLink("pintendre")}, la demande en déneigement augmente chaque année. Les entrepreneurs bâtissent leurs circuits à l'automne et ferment souvent leurs listes avant la première neige. Signer entre septembre et octobre vous assure une place et vous laisse le temps de comparer calmement.</p>`,
    pillars: [
      pillarContrat,
      { fact: "Prix fixe", h: "Aucune surprise, même lors d'un gros hiver", p: "Le montant convenu à la signature ne change pas en cours de saison, peu importe le nombre de tempêtes. Pas de supplément par bordée, pas de facture imprévue en mars. Vous connaissez votre coût de déneigement dès l'automne et vous pouvez planifier votre budget." },
      pillarAssure,
    ],
    faq: [
      { q: "Quelles sont les dates habituelles d'un contrat saisonnier?", a: "La plupart des contrats couvrent la période de la mi-novembre à la mi-avril. Les dates exactes et ce qui se passe en cas de neige précoce ou tardive sont inscrites au contrat." },
      { q: "Le nombre de passages est-il limité?", a: "Non. Avec un contrat saisonnier, un passage est effectué chaque fois que l'accumulation atteint le seuil prévu, sans limite de nombre. Lors des longues tempêtes, des passages supplémentaires sont faits selon les modalités de l'entente." },
      { q: "Est-ce que je peux payer en plusieurs versements?", a: "Oui, le paiement en un ou plusieurs versements est possible selon l'entente. Les dates et les montants de chaque versement sont précisés au contrat." },
      { q: "Puis-je annuler mon contrat?", a: "Les conditions d'annulation sont inscrites au contrat. La Loi sur la protection du consommateur prévoit aussi certains droits selon la façon dont le contrat a été conclu. N'hésitez pas à nous poser la question avant de signer." },
      { q: "Le contrat se renouvelle-t-il automatiquement?", a: "Non. Chaque saison fait l'objet d'un nouveau contrat. Nos clients sont contactés avant l'automne pour réserver leur place pour l'hiver suivant, sans aucune obligation." },
    ],
    faqTitle: "Questions sur le contrat de déneigement saisonnier",
  }),

  // 3. À l'unité
  page({
    slug: "deneigement-a-l-unite",
    title: "Déneigement à l'unité à Lévis, sur appel | Déneigeur Lévis",
    description: "Déneigement à l'unité à Lévis : un passage ponctuel, sur appel, sans contrat saisonnier. Tempête, dépannage, maison à vendre. Appelez le 365-334-9481.",
    h1: "Déneigement à l'unité à Lévis",
    serviceType: "Déneigement à l'unité",
    formType: "Déneigement à l'unité (sur appel)",
    lead: "Besoin d'un seul passage? Le déneigement à l'unité, sur appel, vous dépanne lors d'une grosse tempête ou pour une propriété que vous n'utilisez pas tous les jours.",
    checks: ["Sans contrat saisonnier", "Entrée, stationnement ou accès", "Selon les disponibilités", "Prix confirmé avant le passage"],
    prose: `
<p>Le déneigement à l'unité à Lévis s'adresse à ceux qui ont besoin d'un passage ponctuel plutôt que d'un contrat pour tout l'hiver. Vous nous appelez, nous confirmons le prix selon la taille de l'entrée et l'accumulation, puis une équipe se déplace selon ses disponibilités dans votre secteur.</p>
<p>Il faut le dire franchement : pendant une grosse tempête, les clients sous contrat saisonnier sont servis en priorité. Le service à l'unité est donc idéal pour les besoins planifiables ou non urgents, et un peu moins pour la personne qui doit absolument partir à 6 h un matin de tempête.</p>

<h2>Dans quelles situations choisir le déneigement à l'unité?</h2>
<ul>
  <li><strong>Maison à vendre ou à louer</strong> : une entrée dégagée pour une visite ou une séance photo.</li>
  <li><strong>Retour de voyage</strong> : vous rentrez des vacances des Fêtes et l'entrée est ensevelie.</li>
  <li><strong>Chalet, résidence secondaire ou propriété inoccupée</strong> : accès dégagé avant votre arrivée.</li>
  <li><strong>Dépannage</strong> : votre souffleuse vient de briser en pleine saison.</li>
  <li><strong>Événement</strong> : réception, déménagement, livraison importante.</li>
  <li><strong>Après une tempête exceptionnelle</strong> : trop de neige pour la pelle, même si vous déneigez habituellement vous-même.</li>
</ul>

<h2>Ce qui est inclus dans un passage à l'unité</h2>
<p>Chaque passage comprend le déneigement de l'entrée de cour sur la surface convenue et, au besoin, le dégagement du banc de la charrue au bout de l'entrée. Selon votre demande, nous pouvons ajouter le ${sLink("deneigement-manuel-balcons-escaliers", "pelletage des escaliers et du balcon")} ou un ${sLink("epandage-abrasif-deglacage", "épandage d'abrasif")}. Le prix est toujours confirmé avant le déplacement.</p>

<h2>Comment demander un déneigement à l'unité</h2>
${steps([
  ["Appel ou formulaire", "Indiquez votre adresse, votre secteur et ce qu'il faut déneiger. Le téléphone est plus rapide lors d'une tempête."],
  ["Confirmation du prix", "Nous confirmons le prix selon la surface et l'accumulation, avant tout déplacement."],
  ["Passage", "L'équipe se déplace selon ses disponibilités dans votre secteur."],
  ["Paiement", "Le paiement se fait selon les modalités convenues lors de la confirmation."],
], false)}

<h2>À l'unité ou saisonnier : la comparaison</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Critère</th><th>À l'unité</th><th>Contrat saisonnier</th></tr></thead>
  <tbody>
    <tr><td>Engagement</td><td>Aucun</td><td>Toute la saison</td></tr>
    <tr><td>Priorité pendant les tempêtes</td><td>Selon les disponibilités</td><td>Priorité aux clients sous contrat</td></tr>
    <tr><td>Coût par passage</td><td>Plus élevé</td><td>Plus bas lorsqu'on le divise par le nombre de bordées</td></tr>
    <tr><td>Budget</td><td>Variable selon l'hiver</td><td>Fixe et connu d'avance</td></tr>
    <tr><td>Idéal pour</td><td>Besoins ponctuels, propriétés secondaires</td><td>Résidence principale</td></tr>
  </tbody>
</table></div>
<p>Pour un hiver typique dans la région de Québec, où il tombe près de 300 cm de neige, le nombre de passages nécessaires dépasse souvent 20. À ce rythme, le ${sLink("contrat-deneigement-saisonnier", "contrat saisonnier")} devient presque toujours plus économique pour une résidence principale.</p>

<h2>Le prix d'un déneigement à l'unité à Lévis</h2>
<p>Un passage à l'unité pour une entrée résidentielle se situe généralement entre 50 $ et 110 $ dans la région, selon la taille de l'entrée, l'accumulation et le moment de la demande. Une accumulation importante, un banc de charrue très compact ou une neige mouillée et lourde peuvent faire augmenter le prix. Voyez toutes les fourchettes sur notre page des <a href="/prix-deneigement-levis/">prix du déneigement</a>.</p>

<h2>Pour les propriétés inoccupées à Lévis</h2>
<p>Une propriété vide l'hiver n'est pas à l'abri : les assureurs demandent souvent qu'une maison inoccupée soit visitée régulièrement, et une entrée enneigée pendant des semaines signale l'absence des occupants. Le déneigement à l'unité, planifié à intervalles réguliers, est une solution simple pour les propriétaires en voyage ou les successions en attente de vente, que ce soit à ${zLink("lauzon")}, à ${zLink("charny")} ou ailleurs à Lévis.</p>`,
    pillars: [
      { fact: "Prix confirmé d'avance", h: "Vous savez combien avant qu'on se déplace", p: "Aucun passage n'est facturé sans que le prix ait été confirmé avec vous. Il dépend de la surface à dégager et de l'accumulation au sol. Pas de frais surprise ajoutés après coup, même lors d'une tempête exceptionnelle." },
      pillarAssure,
      { fact: "12 secteurs", h: "Une équipe déjà dans votre secteur", p: "Nos circuits couvrent les trois arrondissements de Lévis. Lorsqu'une équipe est déjà dans votre secteur, un passage à l'unité peut s'ajouter à son parcours plus facilement, ce qui augmente vos chances d'être servi rapidement entre deux tempêtes." },
    ],
    faq: [
      { q: "Combien de temps à l'avance faut-il appeler?", a: "Le plus tôt possible. Pour un besoin planifié, comme une visite de maison, appelez quelques jours avant. Pendant une tempête, les disponibilités sont plus limitées, car les clients sous contrat sont servis en priorité." },
      { q: "Est-ce que le déneigement à l'unité coûte plus cher?", a: "Par passage, oui. Un entrepreneur doit réserver de la capacité pour les demandes ponctuelles et se déplacer hors de son circuit habituel. Sur un hiver complet, le contrat saisonnier revient généralement moins cher pour une résidence principale." },
      { q: "Pouvez-vous passer à intervalles réguliers pendant mon absence?", a: "Oui. Pour une propriété inoccupée, nous pouvons convenir de passages planifiés, par exemple après chaque bordée importante, pendant la durée de votre absence." },
      { q: "Est-ce que vous faites aussi les stationnements commerciaux à l'unité?", a: "Oui, selon les disponibilités et l'équipement requis. Pour un commerce ouvert tout l'hiver, le déneigement commercial avec entente saisonnière reste toutefois la formule recommandée." },
    ],
    faqTitle: "Questions sur le déneigement à l'unité",
    ctaTitle: "Besoin d'un passage? Appelez-nous",
    ctaText: "Pour un déneigement à l'unité, le téléphone est le moyen le plus rapide de connaître nos disponibilités dans votre secteur.",
  }),

  // 4. Manuel : balcons, escaliers, trottoirs
  page({
    slug: "deneigement-manuel-balcons-escaliers",
    title: "Déneigement de balcons et escaliers à Lévis",
    description: "Déneigement manuel à Lévis : balcons, escaliers, galeries et trottoirs pelletés à la main après chaque bordée. Soumission gratuite au 365-334-9481.",
    h1: "Déneigement de balcons, escaliers et trottoirs à Lévis",
    serviceType: "Déneigement manuel de balcons, escaliers et trottoirs",
    formType: "Balcons, escaliers et trottoirs",
    lead: "Les marches, le balcon et le trottoir, c'est là que la machinerie ne passe pas et que les chutes arrivent. Notre équipe de pelletage manuel s'en occupe pour vous.",
    checks: ["Escaliers avant et arrière", "Balcons, galeries et perrons", "Trottoirs privés et allées", "Seul ou ajouté à votre contrat"],
    prose: `
<p>Le déneigement de balcons et d'escaliers à Lévis est le complément essentiel d'une entrée bien dégagée. Une souffleuse ne peut pas monter des marches ni dégager un balcon au deuxième étage. Pourtant, ce sont ces surfaces qui causent le plus de chutes l'hiver. Notre équipe de pelletage manuel passe après chaque bordée pour dégager à la main les accès piétons de votre propriété.</p>

<h2>Ce que nous pelletons à la main</h2>
<ul>
  <li><strong>Les escaliers extérieurs</strong>, avant, arrière et latéraux, incluant les paliers.</li>
  <li><strong>Les balcons et galeries</strong>, au rez-de-chaussée ou à l'étage, très courants dans les plex du Vieux-Lévis et de Lauzon.</li>
  <li><strong>Le perron et l'accès à la porte d'entrée</strong>.</li>
  <li><strong>Les trottoirs privés et allées piétonnes</strong> entre l'entrée et la maison, ou vers la cour arrière.</li>
  <li><strong>L'accès au cabanon, au bac à ordures et au compteur</strong> au besoin.</li>
  <li><strong>Les sorties de secours</strong> dans les immeubles à logements.</li>
</ul>

<h2>Pour qui ce service fait une vraie différence</h2>
<p>Au Canada, les chutes sont la principale cause d'hospitalisation liée à une blessure chez les personnes âgées, selon l'Agence de la santé publique du Canada. Les marches glacées en hiver sont un facteur de risque bien connu. Le pelletage manuel est particulièrement utile pour :</p>
<ul>
  <li>les aînés qui veulent rester chez eux en toute sécurité;</li>
  <li>les personnes qui ont des problèmes de dos, de genoux ou de cœur, pour qui le pelletage est déconseillé;</li>
  <li>les familles qui partent tôt avec les enfants et n'ont pas le temps de pelleter;</li>
  <li>les propriétaires de plex, qui doivent garder les accès des locataires sécuritaires;</li>
  <li>les maisons avec un long escalier ou un balcon à l'étage exposé à la poudrerie.</li>
</ul>

<h2>Comment ça se passe</h2>
${steps([
  ["Inventaire des accès", "Nous notons chaque escalier, balcon et trottoir à inclure, avec le nombre de marches et la surface."],
  ["Ajout au circuit", "Votre adresse est intégrée au circuit de l'équipe de pelletage de votre secteur."],
  ["Pelletage après chaque bordée", "Les accès sont dégagés à la pelle et au balai à neige, jusqu'à la surface."],
  ["Abrasif au besoin", "Un abrasif peut être appliqué sur les marches lorsque c'est prévu à votre entente."],
], false)}

<h2>Pelle, balai ou déglaçant : la bonne méthode selon la surface</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Surface</th><th>Méthode</th><th>Précaution</th></tr></thead>
  <tbody>
    <tr><td>Escalier de béton</td><td>Pelle, puis abrasif ou fondant au besoin</td><td>Le sel en excès peut écailler le béton récent; un abrasif est souvent préférable.</td></tr>
    <tr><td>Escalier ou balcon de bois</td><td>Pelle en plastique et balai</td><td>Éviter les pelles de métal qui marquent le bois.</td></tr>
    <tr><td>Balcon en fibre de verre ou membrane</td><td>Balai et pelle en plastique, sans gratter</td><td>Laisser une fine couche pour protéger la membrane.</td></tr>
    <tr><td>Trottoir de pavé uni</td><td>Pelle ou souffleuse légère</td><td>Attention aux joints et aux bordures.</td></tr>
  </tbody>
</table></div>

<h2>Le prix du déneigement manuel</h2>
<p>Ajouté à un contrat saisonnier, le pelletage d'un escalier avant et d'un balcon se situe généralement entre 150 $ et 400 $ par saison dans la région, selon le nombre de marches, la surface des balcons et le nombre d'accès. Offert seul, le service est évalué selon le temps requis à chaque passage. Consultez notre page des <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>

<h2>Balcons et escaliers typiques de Lévis</h2>
<p>Dans les secteurs plus anciens comme le ${zLink("vieux-levis")}, ${zLink("lauzon")} ou le cœur de ${zLink("saint-romuald")}, beaucoup de maisons et de plex ont des escaliers extérieurs menant à l'étage et des galeries en façade. Dans les quartiers plus récents de ${zLink("saint-jean-chrysostome")} ou ${zLink("saint-nicolas")}, ce sont plutôt les perrons de béton et les trottoirs de pavé uni. Notre équipe adapte ses outils à chaque type de surface pour la dégager sans l'abîmer.</p>`,
    pillars: [
      { fact: "Accès piétons sécuritaires", h: "Là où les chutes arrivent", p: "Une entrée dégagée ne sert à rien si l'escalier reste enneigé. Notre équipe manuelle se concentre sur les marches, les paliers et les balcons, les endroits où la neige tassée devient glissante le plus rapidement, pour que vous et vos visiteurs puissiez circuler sans risque." },
      { fact: "Outils adaptés", h: "Le bon outil pour chaque surface", p: "Pelle en plastique pour le bois et les membranes, balai à neige pour les balcons, abrasif plutôt que sel sur le béton récent : nous choisissons l'outil selon la surface pour dégager efficacement sans égratigner, écailler ou endommager vos installations." },
      pillarAssure,
    ],
    faq: [
      { q: "Pouvez-vous déneiger un balcon au deuxième étage?", a: "Oui, tant que l'accès est sécuritaire pour notre équipe, par un escalier extérieur ou intérieur selon l'entente. Les balcons à l'étage sont fréquents dans les plex de Lévis et sont souvent inclus dans nos contrats." },
      { q: "Déneigez-vous les toitures?", a: "Non. Le déneigement de toiture est un travail spécialisé qui exige un équipement de protection contre les chutes et une assurance adaptée. Nous nous concentrons sur les accès au sol, les escaliers, les balcons et les trottoirs." },
      { q: "Est-ce que le service manuel peut être pris sans contrat d'entrée?", a: "Oui. Certains clients déneigent eux-mêmes leur entrée avec une souffleuse, mais confient les escaliers et le balcon à notre équipe. La soumission est alors basée sur les accès à dégager." },
      { q: "Mettez-vous du sel sur les marches?", a: "Nous privilégions l'abrasif ou un fondant adapté à la surface. Le sel de voirie peut abîmer le béton récent, le bois et certaines membranes. Le produit utilisé est convenu avec vous." },
    ],
    faqTitle: "Questions sur le déneigement de balcons et d'escaliers",
  }),

  // 5. Abrasif
  page({
    slug: "epandage-abrasif-deglacage",
    title: "Épandage d'abrasif et déglaçage à Lévis | Déneigeur Lévis",
    description: "Épandage d'abrasif et déglaçage à Lévis : sable, gravier ou sel sur l'entrée et les accès pour réduire les chutes après un redoux. Soumission au 365-334-9481.",
    h1: "Épandage d'abrasif et déglaçage à Lévis",
    serviceType: "Épandage d'abrasif et déglaçage",
    formType: "Épandage d'abrasif et déglaçage",
    lead: "Redoux, pluie verglaçante, regel pendant la nuit : sur la Rive-Sud, l'entrée peut se transformer en patinoire en quelques heures. L'épandage d'abrasif vous redonne de l'adhérence.",
    checks: ["Entrées de cour et stationnements", "Escaliers, trottoirs et accès", "Produit choisi selon la surface", "Au besoin ou inclus au contrat"],
    prose: `
<p>L'épandage d'abrasif à Lévis est le meilleur allié contre la glace qui se forme après un redoux ou une pluie verglaçante. Même une entrée parfaitement déneigée peut devenir dangereuse quand l'eau de fonte regèle pendant la nuit. Nous appliquons l'abrasif ou le fondant adapté à votre surface pour réduire le risque de glissade, pour vous, votre famille et vos visiteurs.</p>

<h2>Abrasif, fondant ou sel : quelle différence?</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Produit</th><th>Ce qu'il fait</th><th>Idéal pour</th><th>À surveiller</th></tr></thead>
  <tbody>
    <tr><td>Abrasif (sable, gravier fin, pierre concassée)</td><td>Donne de l'adhérence sans faire fondre la glace</td><td>Grands froids, entrées en pente, béton récent</td><td>Doit être balayé au printemps</td></tr>
    <tr><td>Sel de déglaçage (chlorure de sodium)</td><td>Fait fondre la glace mince</td><td>Températures modérées, surfaces d'asphalte</td><td>Perd son efficacité par grand froid; peut abîmer le béton, les pelouses et les haies</td></tr>
    <tr><td>Mélange sable et sel</td><td>Adhérence immédiate et fonte partielle</td><td>Stationnements et entrées très fréquentées</td><td>Dosage à ajuster selon la surface</td></tr>
    <tr><td>Fondants moins corrosifs</td><td>Fondent la glace plus doucement</td><td>Escaliers, balcons, pavé uni</td><td>Coût plus élevé, réservés aux petites surfaces</td></tr>
  </tbody>
</table></div>
<p class="source">Le sel de voirie perd beaucoup de son efficacité lorsque la température descend sous environ -10 °C; l'abrasif prend alors le relais.</p>

<h2>Quand faut-il épandre de l'abrasif?</h2>
<ul>
  <li>Après une <strong>pluie verglaçante</strong> ou de la bruine sur une surface froide.</li>
  <li>Lors d'un <strong>redoux suivi d'un regel</strong>, quand l'eau de fonte des bancs coule sur l'entrée.</li>
  <li>Sur les <strong>entrées en pente</strong>, fréquentes dans le Vieux-Lévis, à Saint-Romuald et près des falaises de Saint-Nicolas.</li>
  <li>Sur les <strong>zones d'ombre</strong> où la glace ne fond jamais, comme le côté nord d'une maison ou sous de grands conifères.</li>
  <li>Aux <strong>accès utilisés par des aînés</strong> ou des visiteurs, et devant les commerces.</li>
</ul>

<h2>Notre façon de faire</h2>
${steps([
  ["Évaluation des surfaces", "Asphalte, béton, pavé uni, bois : nous notons chaque surface pour choisir le bon produit."],
  ["Choix du produit", "Abrasif, sel, mélange ou fondant doux, selon la surface, l'usage et vos préférences."],
  ["Épandage ciblé", "Application sur les zones à risque : pente, virage, marches, accès aux portes."],
  ["Suivi selon la météo", "Nouvel épandage lors des épisodes de verglas ou de regel, selon l'entente."],
], false)}

<h2>Protéger votre terrain en même temps</h2>
<p>Le sel qui s'accumule dans les bancs de neige finit dans votre pelouse et au pied de vos haies au printemps. Nous limitons son usage près des plates-bandes, des cèdres et des surfaces sensibles, et nous privilégions l'abrasif là où la fonte n'est pas nécessaire. Sur le pavé uni et le béton de moins de deux ans, nous évitons le sel autant que possible pour prévenir l'écaillage.</p>

<h2>Le prix de l'épandage d'abrasif</h2>
<p>L'épandage peut être inclus dans un ${sLink("contrat-deneigement-saisonnier", "contrat saisonnier")} ou offert à la demande. Pour une entrée résidentielle, l'option saisonnière se situe généralement entre 100 $ et 250 $ dans la région selon la surface et le nombre d'applications prévues; à l'unité, un épandage se situe habituellement entre 25 $ et 60 $. Pour les stationnements commerciaux et de multilogements, le prix est établi selon la superficie. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>

<h2>La glace sur la Rive-Sud : un défi particulier</h2>
<p>Lévis est bordée par le fleuve et traversée par la rivière Chaudière. L'humidité du fleuve, les redoux fréquents de décembre et de mars et les écarts de température entre le jour et la nuit favorisent la formation de glace noire. Les entrées en pente qui descendent vers le fleuve à ${zLink("saint-romuald")} ou dans le ${zLink("vieux-levis")} sont particulièrement exposées. Un épandage au bon moment fait toute la différence.</p>`,
    pillars: [
      { fact: "Produit adapté", h: "Le bon produit pour chaque surface", p: "Nous ne mettons pas du sel partout par défaut. L'abrasif, le sel, les mélanges et les fondants doux ont chacun leur usage selon la température et la surface. Ce choix protège votre béton, votre pavé uni et vos végétaux tout en gardant vos accès praticables." },
      { fact: "Zones à risque ciblées", h: "Là où ça glisse vraiment", p: "Pentes, virages, marches, seuils de porte, zones d'ombre : l'épandage est concentré aux endroits où les glissades arrivent. Résultat : une meilleure adhérence là où elle compte, sans gaspiller de produit sur les surfaces qui n'en ont pas besoin." },
      pillarAssure,
    ],
    faq: [
      { q: "L'abrasif laisse-t-il des saletés dans la maison?", a: "Un peu de sable peut être ramené à l'intérieur, c'est inévitable. Un bon tapis à l'entrée limite le problème. Pour les escaliers, un fondant doux peut être préféré au sable si vous le souhaitez." },
      { q: "Est-ce que le sel abîme mon entrée?", a: "Le sel peut écailler le béton, surtout s'il a moins de deux ans, et accélérer l'usure du pavé uni. Sur l'asphalte, il est généralement sans problème. Nous choisissons le produit selon votre surface." },
      { q: "Qui ramasse l'abrasif au printemps?", a: "L'abrasif qui reste sur l'entrée au printemps se balaie facilement. Si vous le souhaitez, le nettoyage printanier peut être discuté lors de la soumission." },
      { q: "Faites-vous l'épandage pour les commerces?", a: "Oui. Pour les commerces, l'épandage d'abrasif est souvent un élément central du contrat, car le propriétaire doit garder les accès sécuritaires pour sa clientèle. Voir notre page sur le déneigement commercial." },
    ],
    faqTitle: "Questions sur l'épandage d'abrasif",
  }),

  // 6. Condos et multilogements
  page({
    slug: "deneigement-condos-multilogements",
    title: "Déneigement de condos et multilogements à Lévis",
    description: "Déneigement de condos et multilogements à Lévis : stationnements partagés, allées, sorties de secours et abrasif. Soumission gratuite et sans obligation.",
    h1: "Déneigement de condos et multilogements à Lévis",
    serviceType: "Déneigement de copropriétés et d'immeubles à logements",
    formType: "Condo ou multilogement",
    lead: "Syndicats de copropriété, propriétaires de plex et gestionnaires d'immeubles : un déneigement planifié pour que tous les résidents puissent partir le matin.",
    checks: ["Stationnements partagés et allées", "Trottoirs, escaliers et sorties de secours", "Abrasif sur les accès communs", "Contrat adapté au syndicat ou au propriétaire"],
    prose: `
<p>Le déneigement de condos et de multilogements à Lévis demande une organisation différente d'une simple entrée de maison. Il faut dégager un stationnement partagé où les voitures ne partent pas toutes à la même heure, garder les allées et les sorties de secours accessibles et gérer l'accumulation de neige sur un terrain souvent limité. Nous offrons des contrats adaptés aux syndicats de copropriété, aux propriétaires de duplex, triplex et plus, ainsi qu'aux gestionnaires d'immeubles locatifs.</p>

<h2>Ce que comprend notre service pour les immeubles</h2>
<ul>
  <li><strong>Le stationnement extérieur</strong> et ses allées de circulation, avec dégagement autour des véhicules présents.</li>
  <li><strong>Les entrées de garage souterrain</strong> et les rampes d'accès.</li>
  <li><strong>Les trottoirs, escaliers et portes d'entrée</strong> communs.</li>
  <li><strong>Les sorties de secours</strong>, qui doivent rester dégagées en tout temps.</li>
  <li><strong>L'accès aux conteneurs</strong> à déchets, au recyclage et au compost.</li>
  <li><strong>L'épandage d'abrasif</strong> sur les zones piétonnes et les pentes.</li>
  <li><strong>Le soufflage ou le transport</strong> de la neige quand l'espace de dépôt est plein.</li>
</ul>

<h2>Les défis typiques des stationnements partagés</h2>
<p>Dans un stationnement de condos ou de plex, les problèmes reviennent d'un hiver à l'autre : cases perdues à cause des bancs de neige qui grossissent, voitures qui restent en place pendant le passage, glace dans les zones d'ombre entre les bâtiments, plaintes de résidents qui partent avant le déneigement. Une bonne planification règle la plupart de ces irritants :</p>
<ul>
  <li>un <strong>horaire de passage</strong> communiqué aux résidents;</li>
  <li>un <strong>plan de dépôt de la neige</strong> qui préserve les cases de stationnement;</li>
  <li>un <strong>retour de dégagement</strong> pour les cases occupées lors du premier passage;</li>
  <li>un <strong>seuil de déclenchement</strong> clair, inscrit au contrat.</li>
</ul>

<h2>Notre processus pour les syndicats et les propriétaires</h2>
${steps([
  ["Visite du site", "Nous relevons la superficie, les accès, les obstacles et les zones possibles de dépôt de neige."],
  ["Plan de déneigement", "Ordre des opérations, zones de dépôt, accès prioritaires et horaire de passage."],
  ["Soumission et contrat", "Une soumission détaillée que le conseil d'administration ou le propriétaire peut comparer facilement."],
  ["Saison et suivi", "Passages après chaque bordée, abrasif au besoin et une personne-ressource pour les demandes."],
], false)}

<h2>Types d'immeubles desservis</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Type d'immeuble</th><th>Besoins principaux</th></tr></thead>
  <tbody>
    <tr><td>Duplex et triplex</td><td>Entrée partagée, escaliers extérieurs, balcons à l'étage</td></tr>
    <tr><td>Maisons en rangée et condos de ville</td><td>Entrées individuelles rapprochées, allée commune</td></tr>
    <tr><td>Immeubles de 6 à 24 logements</td><td>Stationnement extérieur, trottoirs, sorties de secours</td></tr>
    <tr><td>Grands complexes de copropriété</td><td>Stationnement, rampe de garage, entrées multiples, transport de neige</td></tr>
  </tbody>
</table></div>

<h2>Le prix du déneigement pour un immeuble</h2>
<p>Pour les immeubles, le prix est établi sur mesure selon la superficie à déneiger, le nombre d'accès, le travail manuel requis et l'espace disponible pour la neige. Un duplex ou un triplex avec une entrée partagée commence généralement autour de 700 $ à 1 200 $ par saison dans la région; un stationnement de copropriété de taille moyenne se chiffre plutôt en milliers de dollars. Seule une visite permet un prix précis. Voir aussi les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>

<h2>Les multilogements à Lévis</h2>
<p>La croissance de Lévis a fait apparaître de nombreux projets de copropriétés et d'immeubles locatifs, notamment près des grands axes de ${zLink("saint-nicolas")}, de ${zLink("saint-romuald")} et du boulevard Guillaume-Couture dans le secteur de Lévis. Dans les quartiers plus anciens comme le ${zLink("vieux-levis")} et ${zLink("lauzon")}, ce sont surtout les plex avec escaliers extérieurs qui demandent un soin particulier. Dans tous les cas, rappelons que la neige d'un terrain privé ne peut pas être déposée dans la rue : un bon plan de dépôt est essentiel.</p>`,
    pillarsTitle: "Pourquoi les syndicats et propriétaires nous choisissent",
    pillars: [
      { fact: "Plan de déneigement", h: "Un stationnement organisé, pas improvisé", p: "Avant la saison, nous établissons l'ordre des opérations, les zones de dépôt et les accès prioritaires. Ce plan limite la perte de cases de stationnement au fil de l'hiver et réduit les plaintes des résidents, parce que tout le monde sait à quoi s'attendre." },
      { fact: "Soumission détaillée", h: "Facile à présenter au conseil", p: "Nos soumissions détaillent les surfaces, les services inclus, les extras et les conditions. Un conseil d'administration peut les comparer clairement avec d'autres offres et prendre une décision éclairée lors de son assemblée." },
      pillarAssure,
    ],
    faq: [
      { q: "Pouvez-vous déneiger pendant que les voitures sont dans le stationnement?", a: "Oui. Le stationnement est dégagé autour des véhicules présents, puis les cases occupées sont dégagées lors d'un retour, selon les modalités convenues. Un horaire communiqué aux résidents facilite beaucoup les choses." },
      { q: "Offrez-vous une soumission pour le conseil d'administration?", a: "Oui. Nous préparons une soumission écrite détaillée, que le conseil peut présenter et comparer. Une visite des lieux permet d'établir un prix précis." },
      { q: "Que faire quand il n'y a plus de place pour la neige?", a: "Nous proposons le soufflage des accumulations vers les zones prévues, ou le chargement et le transport de la neige hors du site. Déposer la neige dans la rue est interdit à Lévis." },
      { q: "Les balcons des condos sont-ils inclus?", a: "Les balcons privatifs sont généralement la responsabilité de chaque copropriétaire, mais des ententes individuelles sont possibles. Les accès communs, eux, sont inclus au contrat du syndicat." },
    ],
    faqTitle: "Questions sur le déneigement de condos et de multilogements",
  }),

  // 7. Commercial
  page({
    slug: "deneigement-commercial-levis",
    title: "Déneigement commercial à Lévis | Déneigeur Lévis",
    description: "Déneigement commercial à Lévis : stationnements, accès clients et trottoirs dégagés avant l'ouverture, abrasif au besoin. Soumission gratuite au 365-334-9481.",
    h1: "Déneigement commercial à Lévis",
    serviceType: "Déneigement commercial",
    formType: "Déneigement commercial",
    lead: "Des clients qui arrivent à l'heure, des employés en sécurité et une façade accueillante, même au lendemain d'une tempête. Déneigement pour commerces, bureaux et petites entreprises.",
    checks: ["Stationnement dégagé avant l'ouverture", "Accès clients et trottoirs", "Abrasif sur les zones piétonnes", "Transport de neige au besoin"],
    prose: `
<p>Le déneigement commercial à Lévis a une exigence que le résidentiel n'a pas : votre stationnement doit être prêt avant l'arrivée de vos premiers clients et employés. Un stationnement enneigé fait fuir la clientèle, et un trottoir glacé devant votre porte expose votre entreprise à des réclamations. Nous déneigeons les stationnements de commerces, de bureaux, de cliniques, de restaurants et de petites entreprises dans tous les secteurs de Lévis.</p>

<h2>Ce que comprend le déneigement commercial</h2>
<ul>
  <li><strong>Le stationnement et les allées de circulation</strong>, avant l'heure d'ouverture convenue.</li>
  <li><strong>Les accès clients, trottoirs et entrées</strong>, dégagés à la pelle au besoin.</li>
  <li><strong>Les quais de chargement et les accès de livraison</strong>.</li>
  <li><strong>L'épandage d'abrasif ou de sel</strong> sur les zones piétonnes et les pentes.</li>
  <li><strong>Le soufflage ou le transport de la neige</strong> lorsque les bancs réduisent le nombre de cases.</li>
  <li><strong>Les passages de rattrapage</strong> pendant les tempêtes prolongées.</li>
</ul>

<h2>Les entreprises que nous desservons</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Type d'entreprise</th><th>Priorités</th></tr></thead>
  <tbody>
    <tr><td>Commerces de détail et restaurants</td><td>Stationnement et entrée clients prêts avant l'ouverture</td></tr>
    <tr><td>Bureaux et cliniques</td><td>Accès sécuritaires pour les employés et les patients, abrasif</td></tr>
    <tr><td>Garages et ateliers</td><td>Portes de service et aire de manœuvre dégagées</td></tr>
    <tr><td>Petits entrepôts et locaux industriels</td><td>Quais de chargement, circulation des camions</td></tr>
    <tr><td>Églises, salles et organismes</td><td>Déneigement planifié selon les activités</td></tr>
  </tbody>
</table></div>

<h2>Notre façon de travailler avec les entreprises</h2>
${steps([
  ["Visite et relevé", "Superficie, nombre de cases, accès, zones de dépôt, heures d'ouverture et contraintes particulières."],
  ["Plan d'intervention", "Ordre des opérations, zones prioritaires, fréquence d'épandage et gestion des accumulations."],
  ["Entente écrite", "Prix, seuil de déclenchement, heures d'intervention, services inclus et facturation."],
  ["Saison et communication", "Interventions selon le plan et une personne-ressource pour vos demandes en cours d'hiver."],
], false)}

<h2>Réduire les risques de chute devant votre commerce</h2>
<p>Comme propriétaire ou locataire d'un local commercial, vous avez l'obligation de garder vos accès raisonnablement sécuritaires pour votre clientèle. Un stationnement bien déneigé, un épandage d'abrasif régulier sur les trottoirs et une bonne gestion de l'eau de fonte réduisent considérablement les risques. Nous portons une attention particulière aux seuils de porte, aux rampes d'accès et aux zones où l'eau de fonte des bancs regèle la nuit.</p>

<h2>Le prix du déneigement commercial</h2>
<p>Le déneigement commercial est toujours évalué sur mesure. Les principaux facteurs sont la superficie du stationnement, les heures d'intervention exigées, le travail manuel sur les trottoirs, la fréquence d'épandage et le besoin de transporter la neige. Les ententes peuvent être saisonnières (prix fixe), à l'heure ou au passage selon votre situation. Une visite permet de vous remettre un prix précis, sans obligation. Pour des repères généraux, consultez les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>

<h2>Déneigement commercial dans les secteurs de Lévis</h2>
<p>Nous desservons les commerces et bureaux des grands axes de Lévis, comme le boulevard Guillaume-Couture, la route du Président-Kennedy à ${zLink("pintendre")}, les rues commerciales de ${zLink("saint-romuald")} et de ${zLink("charny")}, ainsi que les secteurs commerciaux de ${zLink("saint-nicolas")} près des ponts. Dans chaque cas, le défi est le même : un stationnement prêt tôt le matin, même après une tempête de nuit.</p>
<p>Vous gérez un immeuble résidentiel plutôt qu'un commerce? Voyez notre service de ${sLink("deneigement-condos-multilogements", "déneigement de condos et multilogements")}.</p>`,
    pillarsTitle: "Pourquoi les entreprises de Lévis nous font confiance",
    pillars: [
      { fact: "Avant l'ouverture", h: "Votre stationnement prêt pour vos clients", p: "Les interventions sont planifiées en fonction de vos heures d'ouverture, pas l'inverse. L'objectif est simple : que vos clients et vos employés trouvent un stationnement dégagé et des accès sécuritaires dès leur arrivée, même après une bordée de nuit." },
      { fact: "Entente écrite", h: "Des conditions claires pour votre comptabilité", p: "Prix, heures d'intervention, services inclus, fréquence d'épandage et modalités de facturation sont écrits noir sur blanc. Vous pouvez prévoir votre budget d'hiver et justifier la dépense sans mauvaise surprise." },
      pillarAssure,
    ],
    faq: [
      { q: "Pouvez-vous intervenir avant 7 h?", a: "Oui, les interventions pour les commerces sont planifiées selon vos heures d'ouverture. L'heure cible est inscrite à l'entente. Lors des tempêtes exceptionnelles qui durent toute la nuit, des passages de rattrapage sont prévus." },
      { q: "Offrez-vous des ententes à l'heure plutôt que saisonnières?", a: "Oui, selon la situation. Les grands stationnements sont parfois déneigés à l'heure ou au passage. Pour un commerce de petite ou moyenne taille, l'entente saisonnière à prix fixe est souvent la plus simple." },
      { q: "Pouvez-vous transporter la neige hors du site?", a: "Oui. Lorsque les bancs occupent trop de cases de stationnement, nous pouvons charger et transporter la neige hors du site. Voir notre service de soufflage et transport de neige." },
      { q: "Fournissez-vous une preuve d'assurance?", a: "Oui. Une preuve d'assurance responsabilité civile peut être remise sur demande, ce que plusieurs propriétaires d'immeubles et assureurs exigent." },
    ],
    faqTitle: "Questions sur le déneigement commercial à Lévis",
    ctaTitle: "Un stationnement prêt avant vos clients",
    ctaText: "Demandez une visite et une soumission gratuite pour le déneigement de votre commerce à Lévis.",
  }),

  // 8. Soufflage et transport
  page({
    slug: "soufflage-transport-neige",
    title: "Soufflage et transport de neige à Lévis | Déneigeur Lévis",
    description: "Soufflage et transport de neige à Lévis : bancs trop hauts, stationnement qui rétrécit? Nous soufflons ou transportons la neige. Soumission gratuite.",
    h1: "Soufflage et transport de neige à Lévis",
    serviceType: "Soufflage et transport de neige",
    formType: "Soufflage ou transport de neige",
    lead: "Quand les bancs de neige dépassent la clôture et que le stationnement rétrécit à vue d'œil, il est temps de souffler ou de transporter la neige ailleurs.",
    checks: ["Soufflage des bancs sur le terrain", "Chargement et transport hors site", "Résidentiel, multilogement et commercial", "Ponctuel ou inclus au contrat"],
    prose: `
<p>Le soufflage et le transport de neige à Lévis règlent un problème que connaissent bien les propriétaires en février : il n'y a tout simplement plus de place pour la neige. Les bancs atteignent la hauteur des fenêtres, l'entrée rétrécit, les cases de stationnement disparaissent et la visibilité devient dangereuse en sortant de l'entrée. Et comme il est interdit de déposer la neige dans la rue à Lévis, il faut une solution.</p>

<h2>Deux solutions selon votre terrain</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Solution</th><th>Comment ça fonctionne</th><th>Idéal pour</th></tr></thead>
  <tbody>
    <tr><td>Soufflage des bancs</td><td>Une souffleuse projette la neige des bancs plus loin sur votre terrain, dans la cour ou sur les zones convenues.</td><td>Terrains avec de l'espace libre à l'arrière ou sur les côtés</td></tr>
    <tr><td>Chargement et transport</td><td>La neige est chargée dans un camion et transportée hors du site, vers un lieu de dépôt autorisé.</td><td>Terrains pleins, stationnements commerciaux, multilogements, secteurs denses</td></tr>
  </tbody>
</table></div>

<h2>Quand faire appel à ce service</h2>
<ul>
  <li>Les bancs de chaque côté de l'entrée sont si hauts que vous ne voyez plus la rue en reculant.</li>
  <li>Votre entrée ou votre stationnement a perdu de la largeur au fil de l'hiver.</li>
  <li>La neige s'accumule contre la maison, les fenêtres du sous-sol ou le revêtement.</li>
  <li>Un stationnement de commerce ou d'immeuble a perdu plusieurs cases.</li>
  <li>Vous prévoyez un redoux important et craignez les infiltrations d'eau près des fondations.</li>
  <li>Les bancs bloquent l'accès à une borne-fontaine, à un compteur ou à une sortie de secours.</li>
</ul>

<h2>Notre façon de faire</h2>
${steps([
  ["Évaluation", "Volume de neige, espace disponible, accès pour la machinerie et contraintes du site."],
  ["Choix de la méthode", "Soufflage sur le terrain lorsque l'espace le permet, sinon chargement et transport."],
  ["Intervention", "Réduction des bancs, dégagement des cases et des zones de visibilité."],
  ["Dépôt conforme", "La neige transportée est déposée dans un lieu autorisé, jamais dans la rue."],
], false)}

<h2>Un enjeu de sécurité, pas seulement d'espace</h2>
<p>Des bancs de neige trop hauts au bout de l'entrée cachent les piétons, les enfants et les voitures qui circulent dans la rue. C'est particulièrement vrai près des écoles et dans les rues en courbe. En réduisant la hauteur des bancs, le soufflage améliore la visibilité à la sortie de votre entrée. Dégager la neige accumulée contre la maison limite aussi les infiltrations d'eau au sous-sol lors des redoux et à la fonte printanière.</p>

<h2>Le prix du soufflage et du transport de neige</h2>
<p>Le soufflage des bancs sur un terrain résidentiel est généralement facturé au passage ou à l'heure, selon le volume. Le transport de neige est habituellement facturé selon le temps de machinerie et le nombre de voyages de camion. Chaque intervention est évaluée avant le début des travaux et le prix vous est confirmé à l'avance. Ce service peut aussi être inclus dans une entente de ${sLink("deneigement-commercial-levis", "déneigement commercial")} ou de ${sLink("deneigement-condos-multilogements", "multilogement")}. Voir les <a href="/prix-deneigement-levis/">prix du déneigement à Lévis</a>.</p>

<h2>Les secteurs où l'espace manque le plus</h2>
<p>Dans le ${zLink("vieux-levis")} et à ${zLink("lauzon")}, les terrains sont petits et les maisons rapprochées : la neige n'a souvent nulle part où aller. Dans les quartiers de maisons en rangée et de condos de ${zLink("saint-romuald")} et de ${zLink("saint-nicolas")}, ce sont les stationnements partagés qui débordent. À l'inverse, dans les secteurs plus ouverts comme ${zLink("breakeyville")} ou ${zLink("saint-etienne-de-lauzon")}, le soufflage sur le terrain suffit généralement.</p>`,
    pillars: [
      { fact: "Dépôt conforme", h: "Jamais dans la rue", p: "À Lévis, déposer la neige d'un terrain privé dans la rue ou sur le trottoir est interdit. La neige que nous déplaçons est soufflée sur votre terrain aux endroits convenus ou transportée vers un lieu de dépôt autorisé. Vous évitez ainsi les constats d'infraction." },
      { fact: "Prix confirmé d'avance", h: "Évaluation avant les travaux", p: "Le volume de neige et le temps de machinerie varient beaucoup d'un site à l'autre. C'est pourquoi chaque intervention est évaluée et le prix vous est confirmé avant le début des travaux. Aucune facture imprévue après coup." },
      pillarAssure,
    ],
    faq: [
      { q: "Où va la neige transportée?", a: "La neige chargée est transportée vers un lieu de dépôt autorisé. Elle n'est jamais déposée dans la rue ou sur un terrain public, ce qui est interdit." },
      { q: "Est-ce que le soufflage peut endommager ma pelouse ou mes arbustes?", a: "La neige soufflée est dirigée vers les zones convenues avec vous, en évitant les arbustes fragiles et les haies. Les zones à protéger sont identifiées lors de l'évaluation." },
      { q: "Faut-il attendre la fin de l'hiver pour faire souffler les bancs?", a: "Non, au contraire. Il vaut mieux intervenir dès que les bancs nuisent à la visibilité ou réduisent l'espace, plutôt que d'attendre qu'ils deviennent de la glace compacte, plus difficile et plus longue à déplacer." },
      { q: "Offrez-vous ce service aux particuliers?", a: "Oui. Le soufflage des bancs est offert aux propriétaires résidentiels, de façon ponctuelle ou en complément d'un contrat saisonnier." },
    ],
    faqTitle: "Questions sur le soufflage et le transport de neige",
  }),
];
