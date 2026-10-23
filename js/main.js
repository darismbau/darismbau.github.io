/* =========================================================
   main.js : tout ce qui bouge sur le site
   Chaque page a un attribut data-page sur <body> (accueil,
   travaux, projet, parcours, competences, contact, erreur).
   Ce fichier construit l'en-tête, le menu et le pied de page,
   puis remplit seulement ce qui existe sur la page ouverte.
   Les textes sont dans donnees.js, les projets dans projets.js
   ========================================================= */


/* =========================================================
   1. Réglages et petits outils
   ========================================================= */

// Les projets marqués archive: true (hors objectif) sont mis "à côté" :
// on les sort de la liste principale (accueil, filtres, glossaire, compteurs)
// et on les garde dans une petite liste montrée en bas de la page Travaux
// Valeurs par défaut : un projet ajouté à la main peut oublier un champ sans casser le site
projets.forEach((p) => {
  p.domaines = p.domaines && p.domaines.length ? p.domaines : ["dev"];   // au moins un domaine
  p.competences = p.competences || [];                                    // compétences du BUT (facultatif)
  p.techno = p.techno || [];
  p.code = p.code || "";
  p.equipe = p.equipe || "";
  p.annee = p.annee || "";
});
const tousProjets = projets.slice();                                   // copie complète, pour retrouver n'importe quel projet
const projetsArchives = projets.filter((p) => p.archive);              // les projets mis de côté
for (let i = projets.length - 1; i >= 0; i--) {
  if (projets[i].archive) projets.splice(i, 1);                        // on les retire de la liste principale
}

// Service gratuit qui transforme le formulaire en email (formsubmit.co)
const adresseFormulaire = "https://formsubmit.co/ajax/" + profil.email;

// Langue de départ : celle enregistrée, sinon celle du navigateur
let langue = lireStockage("langue") || (navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en");

// Nom de la page ouverte (écrit dans <body data-page="...">)
const pageActuelle = document.body.dataset.page;

// Raccourci pour récupérer un élément par son id
const element = (id) => document.getElementById(id);

// Vrai si la personne préfère moins d'animations
const moinsAnimations = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Vrai si on a une vraie souris (pas un écran tactile)
const sourisFine = window.matchMedia("(pointer: fine)").matches;

// Les pages du menu, dans l'ordre
const pages = [
  { id: "accueil", fichier: "index.html", cle: "nav.accueil" },
  { id: "travaux", fichier: "travaux.html", cle: "nav.travaux" },
  { id: "parcours", fichier: "parcours.html", cle: "nav.parcours" },
  { id: "competences", fichier: "competences.html", cle: "nav.competences" },
  { id: "contact", fichier: "contact.html", cle: "nav.contact" },
  { id: "glossaire", fichier: "glossaire.html", cle: "nav.glossaire" }
];

// Lit une valeur enregistrée dans le navigateur (sans planter si c'est bloqué)
function lireStockage(cle) {
  try { return localStorage.getItem(cle); } catch (e) { return null; }
}

// Enregistre une valeur dans le navigateur
function ecrireStockage(cle, valeur) {
  try { localStorage.setItem(cle, valeur); } catch (e) { /* stockage bloqué, pas grave */ }
}

// Renvoie le texte dans la bonne langue pour un objet { fr, en }
function traduire(objet) {
  if (objet === undefined || objet === null) return "";   // champ oublié : texte vide
  if (typeof objet === "string") return objet;   // même texte dans les deux langues
  return objet[langue] || objet.fr;              // sinon la langue choisie, ou le français
}

// Renvoie un texte de l'interface à partir de sa clé
function texteUi(cle) {
  return textes[langue][cle] || textes.fr[cle] || cle;
}

// Protège un texte avant de l'insérer dans le HTML
function echapper(texte) {
  return String(texte).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Crée le code d'une icône du sprite
function icone(nom, classe) {
  return '<svg class="icone ' + (classe || "") + '" aria-hidden="true"><use href="#i-' + nom + '"/></svg>';
}

// Garde une valeur entre un minimum et un maximum
function borner(valeur, minimum, maximum) {
  return Math.min(Math.max(valeur, minimum), maximum);
}

// Ajoute un zéro devant les nombres à un chiffre (1 devient 01)
function deuxChiffres(nombre) {
  return String(nombre).padStart(2, "0");
}

// Trouve l'année d'un projet à partir de sa date (ex : "Déc. 2025" donne 2025)
function anneeProjet(projet) {
  const annees = traduire(projet.date).match(/20\d\d/g);           // toutes les années écrites
  if (annees) return annees[annees.length - 1];                     // on garde la dernière
  return { "BUT 1": "2024", "BUT 2": "2025", "BUT 3": "2025", "ENSISA": "2026" }[projet.annee] || "";
}

// Nom lisible du domaine principal d'un projet (ex : "Réseaux")
function domaineProjet(projet) {
  return texteUi("filtre." + projet.domaines[0]);
}

// Affiche une petite notification en bas de l'écran
let minuteurNotification;
function notifier(message) {
  const boite = element("notification");
  boite.textContent = message;                                       // le texte à montrer
  boite.classList.add("visible");                                    // on la fait monter
  clearTimeout(minuteurNotification);
  minuteurNotification = setTimeout(() => boite.classList.remove("visible"), 2000);
}


/* =========================================================
   2. Icônes (dessinées une seule fois pour tout le site)
   ========================================================= */

const spriteIcones = `
<svg class="sprite" aria-hidden="true" focusable="false">
  <defs>
    <filter id="grain-couverture" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <symbol id="i-fleche" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M7 17 17 7M8 7h9v9"/></symbol>
  <symbol id="i-droite" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M4 12h16M14 6l6 6-6 6"/></symbol>
  <symbol id="i-gauche" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M20 12H4M10 6l-6 6 6 6"/></symbol>
  <symbol id="i-bas" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 4v16M6 14l6 6 6-6"/></symbol>
  <symbol id="i-haut" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 20V4M6 10l6-6 6 6"/></symbol>
  <symbol id="i-copier" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/></g></symbol>
  <symbol id="i-ok" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
  <symbol id="i-soleil" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></g></symbol>
  <symbol id="i-lune" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></symbol>
</svg>`;


/* =========================================================
   3. Couvertures des projets
   Si une image existe dans assets/img/projets/<id>.jpg,
   c'est elle qui s'affiche. Sinon, une affiche sobre est
   dessinée en SVG : la couleur du domaine, le code du projet
   et son titre (pas de motif décoratif).
   ========================================================= */

// Couleur de fond et couleur d'encre pour chaque domaine
const palettes = {
  ia: ["#c4512c", "#f3e9dc"],        // terre cuite
  reseau: ["#26402f", "#e6dfd0"],    // vert forêt
  dev: ["#2b3644", "#e4e0d8"],       // ardoise
  telecom: ["#c49a3c", "#1d1a15"],   // ocre
  iot: ["#59663a", "#ece5d4"],       // olive
  securite: ["#5b2621", "#efe3d6"]   // sang de bœuf
};

// Générateur de nombres "au hasard" mais toujours identiques pour un même mot
function creerHasard(graine) {
  let valeur = 0;
  for (const lettre of graine) valeur = (valeur * 31 + lettre.charCodeAt(0)) >>> 0;   // transforme le mot en nombre
  return function () {
    valeur = (valeur * 1664525 + 1013904223) >>> 0;                                   // calcule le nombre suivant
    return valeur / 4294967296;                                                        // ramène entre 0 et 1
  };
}

// Coupe un titre en lignes courtes (3 lignes au maximum)
function couperTitre(titre, longueurMax) {
  const lignes = [];
  let ligne = "";
  titre.split(" ").forEach((mot) => {
    if ((ligne + " " + mot).trim().length > longueurMax && ligne) {   // la ligne serait trop longue
      lignes.push(ligne);                                              // on la range
      ligne = mot;                                                     // et on commence la suivante
    } else {
      ligne = (ligne + " " + mot).trim();                              // sinon on ajoute le mot
    }
  });
  if (ligne) lignes.push(ligne);
  if (lignes.length > 3) lignes.splice(3, lignes.length, lignes[2] + "…");   // on coupe au-delà de 3 lignes
  return lignes.slice(0, 3);
}

// Dessine l'affiche SVG d'un projet (utilisée quand il n'y a pas d'image)
// Le texte reste dans la zone centrale (x 150 à 1050, y 190 à 570),
// la seule toujours visible quel que soit le cadrage (carte, bandeau, mobile)
function creerCouverture(projet) {
  const domaine = projet.domaines[0];
  const [fond, encre] = palettes[domaine] || palettes.reseau;
  const lignes = couperTitre(traduire(projet.titre), 24);
  const premiereLigne = 560 - (lignes.length - 1) * 70;               // la dernière ligne finit en bas de la zone
  const titre = lignes.map((l, i) => `<tspan x="150" dy="${i ? 70 : 0}">${echapper(l)}</tspan>`).join("");
  return `
    <svg viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="1200" height="750" fill="${fond}"/>
      <text x="150" y="215" fill="${encre}" font-family="Geist Mono, monospace" font-size="24" letter-spacing="2">${echapper(projet.code)}</text>
      <text x="1050" y="215" fill="${encre}" font-family="Geist Mono, monospace" font-size="24" text-anchor="end" opacity="0.7">${echapper(texteUi("filtre." + domaine).toUpperCase())}</text>
      <line x1="150" y1="240" x2="1050" y2="240" stroke="${encre}" stroke-width="1.5" opacity="0.4"/>
      <text class="titre-affiche" x="150" y="${premiereLigne}" fill="${encre}" font-family="Geist, sans-serif" font-size="62" font-weight="600" letter-spacing="-1.5">${titre}</text>
      <rect width="1200" height="750" filter="url(#grain-couverture)" opacity="0.16" style="mix-blend-mode: overlay"/>
    </svg>`;
}

// Le visuel complet : l'affiche, puis la photo par-dessus si elle existe
function creerVisuel(projet) {
  const source = projet.image || "assets/img/projets/" + projet.id + ".jpg";
  return creerCouverture(projet) + `<img src="${echapper(source)}" alt="" loading="lazy" onload="this.classList.add('chargee')" onerror="this.remove()">`;
}


/* =========================================================
   4. Structure commune : en-tête, menu, pied de page
   ========================================================= */

function construireStructure() {
  // Icônes, grain, curseur, aperçu flottant, notification et rideau
  document.body.insertAdjacentHTML("afterbegin", spriteIcones + '<div class="rideau" id="rideau"></div>');
  document.body.insertAdjacentHTML("beforeend", `
    <div class="grain" aria-hidden="true"></div>
    <div class="curseur" id="curseur" aria-hidden="true"><span>${texteUi("voir")}</span></div>
    <div class="apercu" id="apercu" aria-hidden="true"></div>
    <div class="notification" id="notification" role="status" aria-live="polite"></div>
    <div class="visionneuse" id="visionneuse" role="dialog" aria-modal="true">
      <button type="button" class="bouton-fermer mono" data-fermer-visionneuse>${texteUi("projet.fermer")}</button>
      <figure><img alt=""><figcaption class="mono"></figcaption></figure>
    </div>`);

  // Nom de la page dans la pilule (la page projet compte comme "Travaux")
  const idPage = pageActuelle === "projet" ? "travaux" : pageActuelle;
  const page = pages.find((p) => p.id === idPage);

  // L'en-tête : pilule de gauche (nom + menu), pilule de droite (réglages + statut)
  element("entete").innerHTML = `
    <div class="pilule">
      <a href="index.html" class="pilule-nom">Daris Mbau <span class="mono">/ <span ${page ? `data-i18n="${page.cle}"` : ""}>${page ? texteUi(page.cle) : "404"}</span></span></a>
      <button class="bouton-menu" id="bouton-menu" type="button" aria-expanded="false" aria-controls="menu">
        <span class="traits" aria-hidden="true"><i></i><i></i></span>
        <span class="glisse"><span data-i18n="menu.ouvrir"></span><span data-i18n="menu.ouvrir"></span></span>
      </button>
    </div>
    <div class="pilule">
      <div class="reglages">
        <button class="reglage" type="button" data-langue="fr">FR</button>
        <button class="reglage" type="button" data-langue="en">EN</button>
        <button class="reglage" type="button" data-theme-bouton data-i18n-aria="theme.basculer">${icone("soleil", "icone-soleil")}${icone("lune", "icone-lune")}</button>
      </div>
      <span class="separateur-v"></span>
      <span class="statut"><span class="point-vivant"></span><span data-i18n="statut"></span></span>
      <a href="contact.html" class="bouton"><span class="glisse"><span data-i18n="statut.cta"></span><span data-i18n="statut.cta"></span></span>${icone("fleche")}</a>
    </div>`;

  // Le menu plein écran
  const liensMenu = pages.map((p, i) => `
    <a href="${p.fichier}" class="${p.id === idPage ? "actif" : ""}"><span class="mono">0${i + 1}</span><span class="texte-lien" data-i18n="${p.cle}"></span></a>`).join("");
  document.body.insertAdjacentHTML("beforeend", `
    <div class="menu" id="menu" aria-hidden="true">
      <button class="bouton bouton-contour menu-fermer" id="menu-fermer" type="button"><span data-i18n="menu.fermer"></span></button>
      <nav class="menu-liens" aria-label="Menu">${liensMenu}</nav>
      <div class="menu-infos">
        <div class="menu-bloc"><span class="mono" data-i18n="contact.direct"></span><a href="mailto:${profil.email}" class="souligne">${profil.email}</a><a href="tel:${profil.telephoneLien}" class="souligne">${profil.telephone}</a></div>
        <div class="menu-bloc" data-cv="souligne"><span class="mono" data-i18n="pied.ailleurs"></span>${liensSociaux("souligne")}</div>
        <div class="menu-bloc"><span class="mono" data-i18n="pied.heure"></span><p><span data-i18n="lieu"></span> · <span data-heure></span></p></div>
        <div class="menu-bloc menu-reglages">
          <button class="bouton bouton-contour" type="button" data-langue-suivante><span>FR / EN</span></button>
          <button class="bouton bouton-contour" type="button" data-theme-bouton>${icone("soleil", "icone-soleil")}${icone("lune", "icone-lune")}<span data-i18n="theme.basculer"></span></button>
        </div>
      </div>
    </div>`);

  // Le pied de page : appel à écrire, liens, heure, et le grand nom
  const liensPied = pages.map((p) => `<a href="${p.fichier}" class="souligne" data-i18n="${p.cle}"></a>`).join("");
  element("pied").innerHTML = `
    <div class="pied-cta">
      <span class="etiquette" data-i18n="contact.etiquette"></span>
      <h2><span data-i18n="pied.cta1"></span><br><span data-i18n="pied.cta2"></span></h2>
      <div class="pied-actions">
        <a href="contact.html" class="ecrire" id="ecrire" data-curseur="lien" aria-label="${texteUi("pied.ecrire")}"></a>
        <div class="pied-email">
          <a href="mailto:${profil.email}" class="souligne">${profil.email}</a>
          <button class="bouton-copier" type="button" data-copier="email" data-i18n-aria="contact.copier">${icone("copier", "icone-copier")}${icone("ok", "icone-ok")}</button>
        </div>
      </div>
    </div>
    <div class="pied-grille">
      <div><span class="mono" data-i18n="pied.naviguer"></span>${liensPied}</div>
      <div data-cv="souligne"><span class="mono" data-i18n="pied.ailleurs"></span>${liensSociaux("souligne")}<a href="mailto:${profil.email}" class="souligne">Email</a></div>
      <div><span class="mono" data-i18n="pied.heure"></span><p data-i18n="lieu"></p><p data-heure></p></div>
      <div><span class="mono">© ${new Date().getFullYear()}</span><p data-i18n="pied.role"></p><button class="bouton-haut souligne" id="bouton-haut" type="button"><span data-i18n="pied.haut"></span>${icone("haut")}</button></div>
    </div>
    <span class="marque" id="marque" aria-hidden="true">Daris Mbau</span>
    <div class="pied-copyright mono"><span>Daris Mbau · ENSISA</span><span data-i18n="lieu"></span></div>`;
}

// Lien vers le CV : on vérifie d'abord que le fichier existe vraiment
function preparerCv() {
  const sociaux = element("liens-sociaux");
  if (sociaux) sociaux.dataset.cv = "puce";                // la page contact aussi reçoit le lien
  fetch(profil.cv, { method: "HEAD" })                     // HEAD : on demande juste si le fichier est là
    .then((reponse) => {
      if (!reponse.ok) return;                             // pas de CV en ligne : on n'affiche rien
      document.querySelectorAll("[data-cv]").forEach((zone) => {
        zone.insertAdjacentHTML("beforeend", `<a href="${profil.cv}" target="_blank" rel="noopener" class="${zone.dataset.cv}">CV</a>`);
      });
    })
    .catch(() => {});                                      // hors ligne : on ignore
}

// Liens vers GitHub, LinkedIn... (on saute ceux qui n'ont pas d'url)
function liensSociaux(classe) {
  return liens.filter((lien) => lien.url)
    .map((lien) => `<a href="${echapper(lien.url)}" target="_blank" rel="noopener" class="${classe}">${echapper(lien.nom)}</a>`).join("");
}


/* =========================================================
   5. Langue et thème
   ========================================================= */

function appliquerLangue(nouvelleLangue) {
  langue = nouvelleLangue;                                   // on retient la langue
  ecrireStockage("langue", langue);                          // et on l'enregistre
  document.documentElement.lang = langue;                    // pour les lecteurs d'écran et Google

  // Remplace tous les textes marqués data-i18n
  document.querySelectorAll("[data-i18n]").forEach((noeud) => { noeud.textContent = texteUi(noeud.dataset.i18n); });
  // Remplace les descriptions pour les lecteurs d'écran
  document.querySelectorAll("[data-i18n-aria]").forEach((noeud) => noeud.setAttribute("aria-label", texteUi(noeud.dataset.i18nAria)));
  // Les grands titres traduits sont redécoupés en lettres
  document.querySelectorAll("[data-lettres-cle]").forEach((n) => { n.textContent = texteUi(n.dataset.lettresCle); decouperLettres(n, 0.1); });
  // Met en valeur le bouton FR ou EN choisi
  document.querySelectorAll("[data-langue]").forEach((bouton) => bouton.classList.toggle("actif", bouton.dataset.langue === langue));
  // Le texte "Voir" du curseur
  element("curseur").querySelector("span").textContent = texteUi("voir");

  // Titre de l'onglet
  const page = pages.find((p) => p.id === pageActuelle);
  if (pageActuelle === "accueil") document.title = "Daris Mbau · " + (langue === "fr" ? "IA et réseaux informatiques" : "AI and computer networks");
  else if (page) document.title = texteUi(page.cle) + " · Daris Mbau";

  afficherContenuPage();                                     // redessine le contenu dans la nouvelle langue
  mettreHeure();                                             // l'heure change de format selon la langue
}

function basculerTheme() {
  const nouveau = document.documentElement.getAttribute("data-theme") === "clair" ? "sombre" : "clair";
  document.documentElement.setAttribute("data-theme", nouveau);   // change les couleurs
  ecrireStockage("theme", nouveau);                                // et retient le choix
}


/* =========================================================
   6. Contenu de chaque page
   ========================================================= */

// Appelle seulement les fonctions utiles à la page ouverte
function afficherContenuPage() {
  if (pageActuelle === "accueil") afficherAccueil();
  if (pageActuelle === "travaux") afficherTravaux();
  if (pageActuelle === "projet") afficherProjet();
  if (pageActuelle === "parcours") afficherParcours();
  if (pageActuelle === "competences") afficherCompetences();
  if (pageActuelle === "contact") mettreAJourWhatsapp();
  if (pageActuelle === "glossaire") afficherGlossaire();
  preparerLettresEcrire();                                   // les lettres "Écrivez-moi" du pied
  observerApparitions();                                     // les nouveaux éléments apparaissent au défilement
}

// Crée une liste de petites étiquettes
function creerPuces(liste) {
  return '<ul class="puces">' + liste.map((mot) => '<li class="puce">' + echapper(traduire(mot)) + "</li>").join("") + "</ul>";
}

// Une ligne de l'index des projets (utilisée sur la page Travaux)
function creerLigneIndex(projet, numero) {
  return `
    <a class="index-ligne entree" href="projet.html?id=${projet.id}" data-apercu="${projet.id}" style="animation-delay:${numero * 30}ms">
      <span class="numero">${deuxChiffres(numero + 1)}</span>
      <span class="titre">${echapper(traduire(projet.titre))}</span>
      <span class="domaine">${echapper(domaineProjet(projet))}</span>
      <span class="annee">${anneeProjet(projet)}</span>
      ${icone("fleche")}
    </a>`;
}

// Une grande carte de projet (accueil et vue grille)
function creerCarte(projet, numero, classe) {
  return `
    <a class="oeuvre ${classe || ""}" href="projet.html?id=${projet.id}" data-curseur="voir">
      <div class="oeuvre-visuel">
        ${creerVisuel(projet)}
        <span class="etiquette-oeuvre"><span class="mono">[${deuxChiffres(numero + 1)}]</span>${echapper(traduire(projet.titre))}<span class="mono">${echapper(projet.code)}</span></span>
      </div>
      <div class="oeuvre-info">
        <h3>${echapper(traduire(projet.titre))}</h3>${icone("fleche")}
        <p>${echapper(traduire(projet.resume))}</p>
      </div>
    </a>`;
}

/* ---------- Accueil ---------- */

function afficherAccueil() {
  // Nombre de projets dans l'en-tête du héros
  element("nombre-travaux").textContent = "[" + projets.length + "]";

  // La liste des disciplines avec le nombre de projets de chacune
  const domaines = ["reseau", "securite", "telecom", "ia", "iot", "dev"];
  element("disciplines").innerHTML = `<span class="mono" data-i18n="hero.disciplines">${texteUi("hero.disciplines")}</span>` +
    domaines.map((d) => `<a href="travaux.html?filtre=${d}"><span>${texteUi("filtre." + d)}</span><span class="mono">(${deuxChiffres(projets.filter((p) => p.domaines.includes(d)).length)})</span></a>`).join("");

  // Le manifeste découpé en mots qui s'allument au défilement
  element("manifeste").innerHTML = texteUi("apropos.manifeste").split(" ").map((mot) => `<span class="mot">${echapper(mot)}</span>`).join(" ");
  allumerManifeste();

  // Le nombre de projets dans les chiffres
  element("compteur-projets").dataset.cible = projets.length;

  // Les travaux choisis : grande, moitié, moitié décalée...
  const formes = ["large", "", "decale", "", "decale", "large"];
  const choisis = projets.filter((p) => p.phare).slice(0, 6);
  element("oeuvres").innerHTML = choisis.map((p, i) => creerCarte(p, i, formes[i])).join("");
  element("lien-tous").querySelector("sup").textContent = "(" + projets.length + ")";

  // Les deux passions
  element("passions").innerHTML = passions.map((passion, i) => `
    <div class="passion apparition">
      <span class="mono">0${i + 1} · ${passion.id === "ia" ? "IA" : "NET"}</span>
      <h3>${echapper(traduire(passion.titre))}</h3>
      <p>${echapper(traduire(passion.texte))}</p>
      ${creerPuces(passion.mots)}
    </div>`).join("");

  // Le bandeau qui défile
  remplirBandeau();
}

// Remplit le bandeau avec les mots, répétés pour boucler sans trou
function remplirBandeau() {
  const piste = element("bandeau-piste");
  const morceau = motsBandeau[langue].map((mot, i) => `<span class="${i % 2 ? "creux" : ""}">${echapper(mot)}<i>✳</i></span>`).join("");
  piste.innerHTML = morceau + morceau + morceau;             // trois copies pour ne jamais voir le bout
}

/* ---------- Travaux ---------- */

// Filtre et vue choisis (on lit l'adresse et le navigateur)
let filtreActif = new URLSearchParams(location.search).get("filtre") || "tous";
let vueActive = lireStockage("vue") || "liste";

// Vrai si le projet correspond au filtre
function correspondAuFiltre(projet) {
  if (filtreActif === "tous") return true;                                          // pas de filtre
  if (filtreActif.startsWith("c:")) return projet.competences.includes(filtreActif.slice(2));   // filtre par compétence
  return projet.domaines.includes(filtreActif);                                     // filtre par domaine
}

function afficherTravaux() {
  element("nombre-total").textContent = "(" + projets.length + ")";

  // Les boutons de filtre avec le nombre de projets
  const domaines = ["tous", "reseau", "securite", "telecom", "ia", "iot", "dev"];
  let boutons = domaines.map((d) => {
    const nombre = d === "tous" ? projets.length : projets.filter((p) => p.domaines.includes(d)).length;
    return `<button class="filtre ${filtreActif === d ? "actif" : ""}" type="button" data-filtre="${d}" aria-pressed="${filtreActif === d}">${texteUi("filtre." + d)}<sup>${nombre}</sup></button>`;
  }).join("");
  const competence = filtreActif.startsWith("c:") && competences.find((c) => c.id === filtreActif.slice(2));
  if (competence) boutons += `<button class="filtre actif" type="button" data-filtre="tous">${texteUi("filtre.competence")} : ${echapper(traduire(competence.nom))} ×</button>`;
  element("filtres").innerHTML = boutons;

  // Le sélecteur Liste / Grille
  element("vues").dataset.vue = vueActive;
  element("vues").querySelectorAll("button").forEach((b) => b.classList.toggle("actif", b.dataset.vue === vueActive));

  // Les projets, en liste ou en grille
  const liste = projets.filter(correspondAuFiltre).sort((a, b) => Number(Boolean(b.phare)) - Number(Boolean(a.phare)));
  const zone = element("zone-travaux");
  if (!liste.length) zone.innerHTML = `<p class="aucun">${texteUi("travaux.aucun")}</p>`;
  else if (vueActive === "liste") {
    zone.innerHTML = `
      <div class="index-tete mono"><span>${texteUi("col.numero")}</span><span>${texteUi("col.projet")}</span><span>${texteUi("col.domaine")}</span><span>${texteUi("col.annee")}</span><span></span></div>
      <div class="index-liste">${liste.map(creerLigneIndex).join("")}</div>`;
  } else {
    zone.innerHTML = `<div class="grille-travaux">${liste.map((p, i) => creerCarte(p, i, "carte-travail entree").replace('class="oeuvre carte-travail entree"', `class="oeuvre carte-travail entree" style="animation-delay:${i * 50}ms"`)).join("")}</div>`;
  }

  // Les projets mis à côté : une petite liste discrète, seulement sans filtre
  if (filtreActif === "tous" && projetsArchives.length) {
    zone.insertAdjacentHTML("beforeend", `
      <div class="a-cote">
        <span class="etiquette mono">${texteUi("travaux.aCote")} (${projetsArchives.length})</span>
        <p>${texteUi("travaux.aCoteIntro")}</p>
        <div class="liste-a-cote">${projetsArchives.map((p) => `
          <a href="projet.html?id=${p.id}" data-apercu="${p.id}"><span>${echapper(traduire(p.titre))}</span><span class="mono">${anneeProjet(p)}</span></a>`).join("")}
        </div>
      </div>`);
  }
}

// Change le filtre, garde-le dans l'adresse et redessine
function choisirFiltre(nouveau) {
  filtreActif = nouveau;
  history.replaceState(null, "", nouveau === "tous" ? "travaux.html" : "travaux.html?filtre=" + nouveau);
  afficherTravaux();
}

/* ---------- Page d'un projet ---------- */

function afficherProjet() {
  const id = new URLSearchParams(location.search).get("id");
  const zone = element("detail-projet");
  // Un projet mis à côté se parcourt dans sa propre liste
  const archive = projetsArchives.some((p) => p.id === id);
  const serie = archive ? projetsArchives : projets;
  const index = serie.findIndex((p) => p.id === id);

  // Projet inconnu : message et lien vers la liste
  if (index === -1) {
    zone.innerHTML = `<section class="projet-haut"><a class="retour" href="travaux.html">${icone("gauche")}${texteUi("projet.retour")}</a><h1 class="projet-titre">${texteUi("projet.introuvable")}</h1></section>`;
    return;
  }

  const projet = serie[index];
  const suivant = serie[(index + 1) % serie.length];          // le projet d'après (on reboucle à la fin)
  document.title = traduire(projet.titre) + " · Daris Mbau";

  // Liste numérotée (vide si rien à afficher)
  const liste = (contenu) => {
    const lignes = contenu ? traduire(contenu) : [];
    return lignes.length ? `<ul class="liste-points">${lignes.map((l) => "<li>" + echapper(l) + "</li>").join("")}</ul>` : "";
  };

  // Les sections, dans l'ordre de Notion ; une section vide n'apparaît pas
  const sections = [];
  sections.push({ id: "contexte", titre: texteUi("projet.contexte"), html: `<p>${echapper(traduire(projet.contexte || projet.resume))}</p>` });
  if (projet.fiche && projet.fiche.length) {
    sections.push({ id: "fiche", titre: texteUi("projet.fiche"), html: `<dl class="fiche">${projet.fiche.map((l) => `<div><dt>${echapper(traduire(l.cle))}</dt><dd>${echapper(traduire(l.valeur))}</dd></div>`).join("")}</dl>` });
  }
  // Les notions du projet, une phrase chacune (avec un lien vers le glossaire complet)
  if (projet.glossaire && projet.glossaire.length) {
    sections.push({ id: "notions", titre: texteUi("projet.notions"), html: creerNotions(projet.glossaire) + `<a class="fleche-lien" href="glossaire.html">${texteUi("projet.toutGlossaire")}${icone("fleche")}</a>` });
  }
  if (projet.role) sections.push({ id: "role", titre: texteUi("projet.role"), html: `<p>${echapper(traduire(projet.role))}</p>` });
  sections.push({ id: "realise", titre: texteUi("projet.realise"), html: liste(projet.realise) });
  if (projet.ac && projet.ac.length) {
    sections.push({
      id: "apprentissages", titre: texteUi("projet.acTitre"),
      html: `<table class="tableau-ac"><thead><tr><th>${texteUi("projet.colFait")}</th><th>${texteUi("projet.colAc")}</th></tr></thead>
        <tbody>${projet.ac.map((l) => `<tr><td>${echapper(traduire(l.fait))}</td><td><span class="code-ac">${echapper(l.ref)}</span>${echapper(traduire(l.libelle))}</td></tr>`).join("")}</tbody></table>`
    });
  }
  if (projet.apports) sections.push({ id: "apports", titre: texteUi("projet.apports"), html: liste(projet.apports) });
  let pliables = "";
  if (projet.limites && traduire(projet.limites).length) pliables += `<details class="pliable" open><summary>${texteUi("projet.limites")}<span class="plus"></span></summary><div class="pliable-corps">${liste(projet.limites)}</div></details>`;
  if (projet.autrement && traduire(projet.autrement).length) pliables += `<details class="pliable"><summary>${texteUi("projet.autrement")}<span class="plus"></span></summary><div class="pliable-corps">${liste(projet.autrement)}</div></details>`;
  if (pliables) sections.push({ id: "recul", titre: texteUi("projet.recul"), html: pliables });
  if (projet.bilan) sections.push({ id: "bilan", titre: texteUi("projet.bilan"), html: `<div class="bilan"><p>${echapper(traduire(projet.bilan))}</p></div>` });
  // Les preuves : images, documents, maquettes, configurations
  if (projet.preuves && projet.preuves.length) sections.push({ id: "preuves", titre: texteUi("projet.preuves"), html: creerPreuves(projet) });

  // Les compétences du BUT : chacune mène à la liste filtrée
  const liensCompetences = projet.competences
    .map((idc) => competences.find((x) => x.id === idc))                 // on retrouve chaque compétence
    .filter(Boolean)                                                       // on ignore un nom inconnu
    .map((c) => `<a class="puce" href="travaux.html?filtre=c:${c.id}">${echapper(traduire(c.nom))}</a>`).join("");

  zone.innerHTML = `
    <section class="projet-haut">
      <a class="retour" href="travaux.html">${icone("gauche")}<span>${texteUi("projet.retour")}</span></a>
      <span class="etiquette">${archive ? texteUi("travaux.aCote") : "[" + deuxChiffres(index + 1) + "]"} · ${echapper(projet.annee)}</span>
      <h1 class="projet-titre">${echapper(traduire(projet.titre))}</h1>
      <div class="projet-meta">
        <div><span class="mono">${texteUi("projet.annee")}</span><p>${echapper(traduire(projet.date))}</p></div>
        <div><span class="mono">${texteUi("projet.code")}</span><p>${echapper(projet.code)}</p></div>
        <div><span class="mono">${texteUi("projet.equipe")}</span><p>${echapper(traduire(projet.equipe))}</p></div>
        <div><span class="mono">${texteUi("projet.domaines")}</span><p>${projet.domaines.map((d) => texteUi("filtre." + d)).join(", ")}</p></div>
      </div>
      ${projet.preuves && projet.preuves.length ? `<a class="lien-preuves mono" href="#preuves">${texteUi("projet.voirPreuves")} (${projet.preuves.length})<span aria-hidden="true">↓</span></a>` : ""}
    </section>
    <div class="projet-couverture" id="couverture">${creerVisuel(projet)}</div>
    <section class="projet-resume grille-12"><p class="apparition">${echapper(traduire(projet.resume))}</p></section>
    <section class="projet-corps grille-12">
      <aside class="projet-cote">
        <nav class="sommaire" aria-label="${texteUi("projet.sommaire")}">
          <span class="mono">${texteUi("projet.sommaire")}</span>
          ${sections.map((s, i) => `<a href="#${s.id}"><span class="mono">${deuxChiffres(i + 1)}</span>${s.titre}</a>`).join("")}
        </nav>
        <div><h3>${texteUi("projet.techno")}</h3>${creerPuces(projet.techno)}</div>
        ${liensCompetences ? `<div><h3>${texteUi("projet.competences")}</h3><div class="puces">${liensCompetences}</div></div>` : ""}
      </aside>
      <div class="projet-sections">
        ${sections.map((s, i) => `<section class="projet-section apparition" id="${s.id}"><h2><span class="mono">[${deuxChiffres(i + 1)}]</span>${s.titre}</h2>${s.html}</section>`).join("")}
      </div>
    </section>
    <a class="suivant" href="projet.html?id=${suivant.id}" data-curseur="voir">
      <div class="fond-suivant">${creerVisuel(suivant).replace('loading="lazy"', "")}</div>
      <span class="mono">${texteUi("projet.suivant")} · ${echapper(suivant.code)}</span>
      <h2>${echapper(traduire(suivant.titre))}</h2>
    </a>`;

  suivreSommaire();
  verifierPreuves();
}

// Liste de notions : le terme en gras, sa définition en une phrase
function creerNotions(liste) {
  return `<dl class="notions">${liste.map((n) => `<div><dt>${echapper(n.terme)}</dt><dd>${echapper(traduire(n.definition))}</dd></div>`).join("")}</dl>`;
}

// Les preuves d'un projet, rangées dans assets/preuves/<id>/
function creerPreuves(projet) {
  const dossier = "assets/preuves/" + projet.id + "/";
  const images = projet.preuves.filter((p) => p.type === "image");
  const documents = projet.preuves.filter((p) => p.type === "pdf" || p.type === "fichier" || p.type === "lien");
  const configs = projet.preuves.filter((p) => p.type === "config");
  let html = "";
  // Les images : une galerie, un clic ouvre l'image en grand
  if (images.length) {
    html += `<div class="galerie">${images.map((p) => `
      <button type="button" class="preuve-image" data-verifier="${dossier + p.fichier}" data-agrandir="${dossier + p.fichier}" data-legende="${echapper(traduire(p.titre))}">
        <img src="${dossier + p.fichier}" alt="${echapper(traduire(p.titre))}" loading="lazy" onerror="this.closest('.preuve-image').remove()">
        <span>${echapper(traduire(p.titre))}</span>
      </button>`).join("")}</div>`;
  }
  // Les documents : une carte par fichier, qui s'ouvre dans un nouvel onglet
  if (documents.length) {
    html += `<div class="documents">${documents.map((p) => {
      // Un lien externe (vidéo...) : pas de fichier à vérifier, il s'ouvre dans un onglet
      if (p.type === "lien") {
        const video = /youtu\.?be|vimeo/.test(p.fichier);                 // une vidéo ou un simple lien
        return `<a class="preuve-doc" href="${echapper(p.fichier)}" target="_blank" rel="noopener">
          <span class="mono type-doc">${texteUi(video ? "projet.video" : "projet.lien")}</span>
          <span class="nom-doc">${echapper(traduire(p.titre))}</span>
          <span class="mono action-doc">${texteUi(video ? "projet.regarder" : "projet.ouvrir")}${icone("fleche")}</span>
        </a>`;
      }
      const pdf = p.type === "pdf";
      const extension = p.fichier.split(".").pop().toUpperCase();         // ZIP, PKT... affiché sur la carte
      return `<a class="preuve-doc" data-verifier="${dossier + p.fichier}" href="${dossier + p.fichier}" ${pdf ? 'target="_blank" rel="noopener"' : "download"}>
        <span class="mono type-doc">${pdf ? "PDF" : echapper(extension)}</span>
        <span class="nom-doc">${echapper(traduire(p.titre))}</span>
        <span class="mono action-doc">${texteUi(pdf ? "projet.ouvrir" : "projet.telecharger")}${icone("fleche")}</span>
      </a>`;
    }).join("")}</div>`;
  }
  // Les configurations : du texte, toujours disponible
  html += configs.map((p) => `
    <details class="pliable"><summary>${echapper(traduire(p.titre))}<span class="plus"></span></summary>
      <div class="pliable-corps"><pre class="code"><code>${echapper(p.code)}</code></pre></div>
    </details>`).join("");
  return html;
}

// Cache les preuves dont le fichier n'est pas (encore) en ligne
function verifierPreuves() {
  // Site ouvert en double-cliquant sur le fichier (adresse file://) : le navigateur
  // interdit la vérification, on affiche donc toutes les preuves sans tester
  if (location.protocol === "file:") return;
  const elements = document.querySelectorAll("[data-verifier]");
  elements.forEach((el) => {
    fetch(el.dataset.verifier, { method: "HEAD" })                 // on demande juste si le fichier existe
      .then((reponse) => { if (!reponse.ok) el.remove(); })
      .catch(() => el.remove())
      .finally(nettoyerPreuves);
  });
  nettoyerPreuves();
}

// Si la section des preuves est vide, on la retire (et son lien du sommaire)
function nettoyerPreuves() {
  const section = element("preuves");
  if (!section) return;
  section.querySelectorAll(".galerie, .documents").forEach((bloc) => { if (!bloc.children.length) bloc.remove(); });
  if (!section.querySelector(".preuve-image, .preuve-doc, details")) {
    section.remove();
    document.querySelectorAll('a[href="#preuves"]').forEach((lien) => lien.remove());   // sommaire et bouton du haut
  }
}

// Affiche une image en grand par-dessus la page
function ouvrirVisionneuse(source, legende) {
  const boite = element("visionneuse");
  boite.querySelector("img").src = source;
  boite.querySelector("img").alt = legende;
  boite.querySelector("figcaption").textContent = legende;
  boite.classList.add("ouverte");
  document.body.classList.add("sans-defilement");
}
function fermerVisionneuse() {
  element("visionneuse").classList.remove("ouverte");
  document.body.classList.remove("sans-defilement");
}

/* ---------- Glossaire ---------- */

function afficherGlossaire() {
  // On rassemble les notions de tous les projets, sans doublon
  const notions = new Map();
  projets.forEach((projet) => (projet.glossaire || []).forEach((n) => {
    const cle = n.terme.toLowerCase();
    if (!notions.has(cle)) notions.set(cle, { terme: n.terme, definition: n.definition, projets: [] });
    notions.get(cle).projets.push(projet);
  }));
  const liste = [...notions.values()].sort((a, b) => a.terme.localeCompare(b.terme, "fr", { sensitivity: "base" }));
  const champ = element("recherche-glossaire");
  champ.placeholder = texteUi("glossaire.recherche");

  // Affiche les notions qui contiennent le texte cherché, groupées par lettre
  const afficher = () => {
    const cherche = champ.value.trim().toLowerCase();
    const filtrees = liste.filter((n) => !cherche || n.terme.toLowerCase().includes(cherche) || traduire(n.definition).toLowerCase().includes(cherche));
    const lettres = {};
    filtrees.forEach((n) => {
      const lettre = n.terme[0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      (lettres[lettre] = lettres[lettre] || []).push(n);
    });
    element("liste-glossaire").innerHTML = filtrees.length ? Object.keys(lettres).map((lettre) => `
      <section class="groupe-lettre">
        <h2 class="lettre-glossaire">${lettre}</h2>
        <dl class="notions">${lettres[lettre].map((n) => `
          <div>
            <dt>${echapper(n.terme)}</dt>
            <dd>${echapper(traduire(n.definition))}
              <span class="vu-dans mono">${texteUi("glossaire.vu")} : ${n.projets.map((p) => `<a href="projet.html?id=${p.id}">${echapper(traduire(p.titre))}</a>`).join(", ")}</span>
            </dd>
          </div>`).join("")}</dl>
      </section>`).join("") : `<p class="doux">${texteUi("glossaire.vide")}</p>`;
  };
  champ.oninput = afficher;
  element("nombre-notions").textContent = "(" + liste.length + ")";
  afficher();
}

// Met en valeur, dans le sommaire, la section en cours de lecture
function suivreSommaire() {
  const liensSommaire = document.querySelectorAll(".sommaire a");
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      liensSommaire.forEach((lien) => lien.classList.toggle("actif", lien.getAttribute("href") === "#" + entree.target.id));
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  document.querySelectorAll(".projet-section").forEach((section) => observateur.observe(section));
}

/* ---------- Parcours ---------- */

function afficherParcours() {
  // Une seule frise : formations et expérience, de la plus récente à la plus ancienne
  const etapes = [
    { annee: "2026", type: "formation", donnee: formations[0] },
    { annee: "2025", type: "formation", donnee: formations[1] },
    { annee: "2024", type: "experience", donnee: experiences[0] },
    { annee: "2023", type: "formation", donnee: formations[2] }
  ];

  element("frise").innerHTML = etapes.map((etape) => {
    const d = etape.donnee;
    const enCours = d.enCours ? `<span class="badge en-cours">${texteUi("parcours.enCours")}</span> ` : "";
    const badge = `<span class="badge">${texteUi(etape.type === "formation" ? "parcours.formation" : "parcours.experience")}</span>`;

    // L'expérience a un détail qui se déplie
    let contenu;
    if (etape.type === "experience") {
      contenu = `
        <span class="mono">${echapper(traduire(d.periode))}</span>
        <h2>${echapper(traduire(d.poste))}</h2>
        <p class="lieu">${echapper(d.entreprise)} · ${echapper(traduire(d.contrat))}</p>
        <p>${echapper(traduire(d.resume))}</p>
        <details class="pliable">
          <summary>${texteUi("parcours.details")}<span class="plus"></span></summary>
          <div class="pliable-corps">
            <h3>${texteUi("parcours.missions")}</h3>
            <ul class="liste-points">${traduire(d.missions).map((m) => "<li>" + echapper(m) + "</li>").join("")}</ul>
            <div class="encadre"><strong>${echapper(traduire(d.exemple.titre))}</strong><p>${echapper(traduire(d.exemple.texte))}</p></div>
            <h3>${texteUi("parcours.apports")}</h3>${creerPuces(traduire(d.apports))}
          </div>
        </details>`;
    } else {
      contenu = `
        <span class="mono">${echapper(traduire(d.periode))}</span>
        <h2>${echapper(traduire(d.titre))}</h2>
        <p class="lieu">${echapper(traduire(d.lieu))}</p>
        <p>${echapper(traduire(d.texte))}</p>`;
    }

    return `
      <article class="etape apparition">
        <div class="etape-annee">${etape.annee}</div>
        <div class="etape-contenu">${contenu}</div>
        <div class="etape-type">${enCours}${badge}</div>
      </article>`;
  }).join("");
}

/* ---------- Compétences ---------- */

function afficherCompetences() {
  // Les cinq compétences du BUT, en lignes qui se déplient
  element("competences-liste").innerHTML = competences.map((c, i) => {
    const lies = projets.filter((p) => p.competences.includes(c.id));
    return `
      <details class="competence" ${i === 0 ? "open" : ""}>
        <summary>
          <span class="mono">${deuxChiffres(i + 1)}</span>
          <h2>${echapper(traduire(c.nom))}</h2>
          <span class="compte">${echapper(traduire(c.groupe))} · ${lies.length} ${texteUi("comp.projets")}</span>
          <span class="plus"></span>
        </summary>
        <div class="competence-corps">
          <div><h3>${echapper(traduire(c.titre))}</h3><p>${echapper(traduire(c.texte))}</p>
            <a class="fleche-lien souligne" href="travaux.html?filtre=c:${c.id}">${texteUi("comp.voir")}${icone("fleche")}</a></div>
          <div class="liens-projets">${lies.map((p) => `<a href="projet.html?id=${p.id}" data-apercu="${p.id}"><span>${echapper(traduire(p.titre))}</span><span class="mono">${anneeProjet(p)}</span></a>`).join("")}</div>
        </div>
      </details>`;
  }).join("");

  // Ce que j'apprends, avec une jauge
  element("roadmap").innerHTML = roadmap.map((etape) => `
    <div class="etape-roadmap">
      <div class="ligne-haut"><h3>${echapper(traduire(etape.titre))}</h3><span class="mono">${etape.progression}%</span></div>
      <p>${echapper(traduire(etape.texte))}</p>
      <div class="jauge"><span data-valeur="${etape.progression}"></span></div>
    </div>`).join("");
  observerJauges();

  // Les certificats
  // Chaque certificat : son nom (cliquable s'il y a un lien ou un PDF), l'organisme, la date et l'état
  element("certificats").innerHTML = certificats.map((c) => {
    const adresse = c.lien || (c.fichier ? "assets/certificats/" + c.fichier : "");   // badge en ligne ou PDF déposé
    const nom = echapper(traduire(c.nom));
    const titre = adresse ? `<a href="${echapper(adresse)}" target="_blank" rel="noopener">${nom}${icone("fleche")}</a>` : nom;
    const details = [c.organisme, traduire(c.date)].filter(Boolean).map(echapper).join(" · ");
    const etat = c.statut ? `<span class="etat-certif etat-${c.statut}">${texteUi("certif." + c.statut)}</span>` : "";
    return `<div class="certificat"><strong>${titre}</strong><span class="mono doux">${details}${etat}</span></div>`;
  }).join("");
}


/* =========================================================
   7. Animations
   ========================================================= */

// Fait apparaître en douceur les éléments .apparition quand ils arrivent à l'écran
const observateurApparition = new IntersectionObserver((entrees) => {
  entrees.forEach((entree) => {
    if (!entree.isIntersecting) return;
    entree.target.classList.add("visible");               // déclenche l'animation
    observateurApparition.unobserve(entree.target);       // une seule fois
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

function observerApparitions() {
  document.querySelectorAll(".apparition:not(.visible)").forEach((n) => observateurApparition.observe(n));
}

// Découpe un texte en lettres qui montent une par une
function decouperLettres(noeud, delaiDepart) {
  const texte = noeud.textContent;
  noeud.innerHTML = [...texte].map((lettre, i) =>
    `<span class="lettre"><span style="transition-delay:${(delaiDepart || 0) + i * 0.035}s">${lettre === " " ? "&nbsp;" : echapper(lettre)}</span></span>`).join("");
}

// Fait monter les lettres d'un bloc quand il arrive à l'écran
function monterQuandVisible(noeud) {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      entree.target.classList.add("monte");
      observateur.unobserve(entree.target);
    });
  }, { threshold: 0.2 });
  observateur.observe(noeud);
}

// Prépare les grands titres : le nom du héros, les titres de pages, le grand nom du pied
function preparerTitres() {
  document.querySelectorAll("[data-lettres]").forEach((titre, i) => decouperLettres(titre, i * 0.12));
  decouperLettres(element("marque"));
  monterQuandVisible(element("pied"));
}

// Lance l'animation des titres du haut de page
function lancerTitres() {
  document.querySelectorAll(".hero, .entete-page").forEach((bloc) => bloc.classList.add("monte"));
}

// L'heure locale de Colmar, mise à jour chaque minute
function mettreHeure() {
  const maintenant = new Date();
  const heure = new Intl.DateTimeFormat(langue === "fr" ? "fr-FR" : "en-GB", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit" }).format(maintenant);
  let decalage = "GMT+1";
  try {
    decalage = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", timeZoneName: "shortOffset" }).formatToParts(maintenant).find((p) => p.type === "timeZoneName").value;
  } catch (e) { /* vieux navigateur : on garde GMT+1 */ }
  document.querySelectorAll("[data-heure]").forEach((n) => { n.textContent = heure + " " + decalage; });
}

// Le bandeau défile tout seul, plus vite quand on fait défiler la page
function animerBandeau() {
  const piste = element("bandeau-piste");
  if (!piste || moinsAnimations) return;
  let position = 0;            // décalage actuel en pixels
  let sens = 1;                // 1 vers la gauche, -1 vers la droite
  let vitesseDefilement = 0;   // bonus de vitesse quand on défile
  let dernierY = window.scrollY;

  window.addEventListener("scroll", () => {
    const delta = window.scrollY - dernierY;      // de combien on a défilé
    dernierY = window.scrollY;
    if (delta !== 0) sens = delta > 0 ? 1 : -1;   // le sens suit le défilement
    vitesseDefilement = Math.min(Math.abs(delta) * 0.6, 30);
  }, { passive: true });

  function etape() {
    const largeurMorceau = piste.scrollWidth / 3;                 // une des trois copies
    position -= (0.6 + vitesseDefilement) * sens;                  // on avance
    vitesseDefilement *= 0.92;                                     // le bonus retombe doucement
    if (position <= -largeurMorceau) position += largeurMorceau;   // on reboucle sans saut
    if (position > 0) position -= largeurMorceau;
    piste.style.transform = "translateX(" + position + "px)";
    requestAnimationFrame(etape);
  }
  requestAnimationFrame(etape);
}

// Les mots du manifeste s'allument au fil du défilement
function allumerManifeste() {
  const manifeste = element("manifeste");
  if (!manifeste) return;
  const mots = manifeste.querySelectorAll(".mot");
  const cadre = manifeste.getBoundingClientRect();
  const hauteur = window.innerHeight;
  const avancement = borner((hauteur * 0.85 - cadre.top) / (cadre.height + hauteur * 0.3), 0, 1);   // entre 0 et 1
  const allumes = Math.round(avancement * mots.length);
  mots.forEach((mot, i) => mot.classList.toggle("allume", i < allumes));
}

// Fait monter les chiffres de 0 à leur valeur quand on les voit
function animerCompteurs() {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      const compteur = entree.target;
      const cible = Number(compteur.dataset.cible);
      const debut = performance.now();
      const duree = moinsAnimations ? 1 : 1600;
      function etape(maintenant) {
        const t = Math.min((maintenant - debut) / duree, 1);
        compteur.textContent = deuxChiffres(Math.round(cible * (1 - Math.pow(1 - t, 4))));   // ralentit à la fin
        if (t < 1) requestAnimationFrame(etape);
      }
      requestAnimationFrame(etape);
      observateur.unobserve(compteur);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".compteur").forEach((c) => observateur.observe(c));
}

// Remplit les jauges quand on les voit
function observerJauges() {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      entree.target.style.width = entree.target.dataset.valeur + "%";
      observateur.unobserve(entree.target);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".jauge span").forEach((j) => observateur.observe(j));
}

// Les lettres "Écrivez-moi" : éparpillées, elles se rassemblent quand on arrive en bas
let lettresEcrire = [];
function preparerLettresEcrire() {
  const zone = element("ecrire");
  if (!zone) return;
  const hasard = creerHasard("ecrivez");
  zone.innerHTML = [...texteUi("pied.ecrire")].map((lettre, i) =>
    `<span class="lettre-libre" style="animation-delay:${i * 30}ms">${lettre === " " ? " " : echapper(lettre)}</span>`).join("");
  // chaque lettre reçoit un décalage et une rotation au hasard
  lettresEcrire = [...zone.children].map((n) => ({ noeud: n, x: (hasard() - 0.5) * 260, y: (hasard() - 0.5) * 160, r: (hasard() - 0.5) * 90 }));
  rassemblerLettres();
}

function rassemblerLettres() {
  const zone = element("ecrire");
  if (!zone || !lettresEcrire.length) return;
  const cadre = zone.getBoundingClientRect();
  const t = moinsAnimations ? 1 : borner((window.innerHeight - cadre.top) / (window.innerHeight * 0.6), 0, 1);   // 0 loin, 1 arrivé
  const reste = 1 - t * t * (3 - 2 * t);                                                                            // courbe douce
  lettresEcrire.forEach((l) => { l.noeud.style.transform = `translate(${l.x * reste}px, ${l.y * reste}px) rotate(${l.r * reste}deg)`; });
}

// La couverture du projet glisse un peu moins vite que la page (effet de profondeur)
function parallaxeCouverture() {
  const couverture = element("couverture");
  if (!couverture || moinsAnimations) return;
  const cadre = couverture.getBoundingClientRect();
  const decalage = borner(-cadre.top * 0.08, -60, 60);
  couverture.querySelectorAll("svg, img").forEach((n) => { n.style.transform = "translateY(" + decalage + "px)"; });
}

// Tout ce qui dépend du défilement, regroupé
function suivreDefilement() {
  let enAttente = false;
  window.addEventListener("scroll", () => {
    if (enAttente) return;
    enAttente = true;
    requestAnimationFrame(() => {
      allumerManifeste();
      rassemblerLettres();
      parallaxeCouverture();
      enAttente = false;
    });
  }, { passive: true });
  rassemblerLettres();
  parallaxeCouverture();
}

// Brouille puis révèle un texte au survol (effet "décodage")
function brouiller(noeud) {
  if (noeud.dataset.brouillage === "oui" || moinsAnimations) return;
  noeud.dataset.brouillage = "oui";
  const original = noeud.textContent;
  const signes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*";
  let image = 0;
  const total = 14;
  function etape() {
    image++;
    noeud.textContent = [...original].map((lettre, i) => {
      if (lettre === " " || i < (image / total) * original.length) return lettre;   // déjà révélée
      return signes[Math.floor(Math.random() * signes.length)];                    // encore brouillée
    }).join("");
    if (image < total) requestAnimationFrame(etape);
    else { noeud.textContent = original; noeud.dataset.brouillage = ""; }
  }
  requestAnimationFrame(etape);
}


/* =========================================================
   8. Écran de chargement et rideau entre les pages
   ========================================================= */

function demarrerEntree() {
  const rideau = element("rideau");
  const chargement = element("chargement");
  let dejaVu = false;
  try { dejaVu = sessionStorage.getItem("vu") === "oui"; } catch (e) { /* pas grave */ }

  // Pas d'écran de chargement : on ouvre le rideau et on lance les titres
  if (!chargement || dejaVu || moinsAnimations) {
    if (chargement) chargement.remove();
    requestAnimationFrame(() => {
      rideau.classList.add("ouvert");
      setTimeout(lancerTitres, 250);
    });
    return;
  }

  // Premier passage sur l'accueil : compteur de 0 à 100
  rideau.classList.add("ouvert");
  const nombre = element("chargement-nombre");
  const barre = element("chargement-barre");
  const debut = performance.now();
  const duree = 1500;
  function etape(maintenant) {
    const t = Math.min((maintenant - debut) / duree, 1);
    const valeur = Math.round(100 * (1 - Math.pow(1 - t, 3)));
    nombre.textContent = String(valeur).padStart(3, "0");
    barre.style.width = valeur + "%";
    if (t < 1) { requestAnimationFrame(etape); return; }
    chargement.classList.add("fini");                     // l'écran remonte
    setTimeout(lancerTitres, 350);                        // et le nom apparaît
    setTimeout(() => chargement.remove(), 1200);
    try { sessionStorage.setItem("vu", "oui"); } catch (e) { /* pas grave */ }
  }
  requestAnimationFrame(etape);
}

// Quand on clique sur un lien interne : le rideau descend, puis on change de page
function preparerRideau() {
  const rideau = element("rideau");
  document.addEventListener("click", (evenement) => {
    const lien = evenement.target.closest("a");
    if (!lien || moinsAnimations) return;
    const adresse = lien.getAttribute("href") || "";
    const interne = /^[a-z0-9-]+\.html/i.test(adresse);                  // un lien vers une page du site
    if (!interne || lien.target === "_blank" || evenement.ctrlKey || evenement.metaKey || evenement.shiftKey) return;
    evenement.preventDefault();
    rideau.classList.remove("ouvert");
    rideau.classList.add("depart");                                        // le rideau se place en bas
    void rideau.offsetWidth;                                               // force le navigateur à en tenir compte
    rideau.classList.remove("depart");
    rideau.classList.add("ferme");                                         // puis il monte et couvre l'écran
    setTimeout(() => { location.href = adresse; }, 520);
  });
  // Retour arrière du navigateur : on rouvre le rideau
  window.addEventListener("pageshow", (e) => { if (e.persisted) { rideau.classList.remove("ferme"); rideau.classList.add("ouvert"); } });
}


/* =========================================================
   9. Curseur, aperçu flottant et effets de souris
   ========================================================= */

function activerSouris() {
  if (!sourisFine || moinsAnimations) return;
  const curseur = element("curseur");
  const apercu = element("apercu");
  let sourisX = innerWidth / 2, sourisY = innerHeight / 2;   // position de la souris
  let curseurX = sourisX, curseurY = sourisY;                 // position du curseur (en retard)
  let apercuX = sourisX, apercuY = sourisY;                   // position de l'aperçu (encore plus en retard)
  let idApercu = "";

  document.addEventListener("pointermove", (e) => {
    sourisX = e.clientX;
    sourisY = e.clientY;
    document.body.classList.add("curseur-actif");
    // Le curseur change selon ce qu'il survole
    const voir = e.target.closest('[data-curseur="voir"]');
    const lien = e.target.closest("a, button, summary, input, textarea, label");
    document.body.classList.toggle("curseur-voir", Boolean(voir));
    document.body.classList.toggle("curseur-lien", !voir && Boolean(lien));
    // L'aperçu flottant au-dessus des lignes de projets
    const ligne = e.target.closest("[data-apercu]");
    if (ligne) {
      if (ligne.dataset.apercu !== idApercu) {
        idApercu = ligne.dataset.apercu;
        apercu.innerHTML = creerVisuel(tousProjets.find((p) => p.id === idApercu));
      }
      apercu.classList.add("visible");
    } else {
      apercu.classList.remove("visible");
      idApercu = "";
    }
  });
  document.addEventListener("pointerleave", () => document.body.classList.remove("curseur-actif"));

  // Le curseur et l'aperçu rattrapent la souris en douceur
  function etape() {
    curseurX += (sourisX - curseurX) * 0.22;
    curseurY += (sourisY - curseurY) * 0.22;
    apercuX += (sourisX - apercuX) * 0.12;
    apercuY += (sourisY - apercuY) * 0.12;
    curseur.style.transform = `translate(${curseurX}px, ${curseurY}px)`;
    apercu.style.left = (apercuX + 28) + "px";
    apercu.style.top = (apercuY - 110) + "px";
    requestAnimationFrame(etape);
  }
  requestAnimationFrame(etape);

  // Effet "décodage" au survol des petits textes mono et des liens du pied
  document.addEventListener("mouseover", (e) => {
    const cible = e.target.closest(".hero-meta span, .pied-grille a, .menu-bloc a, .pilule-nom .mono span");
    if (cible && !cible.children.length) brouiller(cible);
  });
}


/* =========================================================
   10. Menu, boutons, contact, terminal
   ========================================================= */

function ouvrirMenu(ouvrir) {
  const menu = element("menu");
  menu.classList.toggle("ouvert", ouvrir);
  menu.setAttribute("aria-hidden", String(!ouvrir));
  element("bouton-menu").setAttribute("aria-expanded", String(ouvrir));
  document.documentElement.style.overflow = ouvrir ? "hidden" : "";   // la page ne défile plus derrière
}

function brancherEvenements() {
  // Menu plein écran
  element("bouton-menu").addEventListener("click", () => ouvrirMenu(true));
  element("menu-fermer").addEventListener("click", () => ouvrirMenu(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { ouvrirMenu(false); fermerVisionneuse(); } });

  // Visionneuse des preuves : un clic sur une image l'agrandit, un clic sur le fond la ferme
  document.addEventListener("click", (e) => {
    const vignette = e.target.closest("[data-agrandir]");
    if (vignette) ouvrirVisionneuse(vignette.dataset.agrandir, vignette.dataset.legende);
    if (e.target.closest("[data-fermer-visionneuse]") || e.target.id === "visionneuse") fermerVisionneuse();
  });

  // Langue et thème (plusieurs boutons sur la page)
  document.querySelectorAll("[data-langue]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.langue !== langue) appliquerLangue(b.dataset.langue); }));
  document.querySelectorAll("[data-langue-suivante]").forEach((b) => b.addEventListener("click", () => appliquerLangue(langue === "fr" ? "en" : "fr")));
  document.querySelectorAll("[data-theme-bouton]").forEach((b) => b.addEventListener("click", basculerTheme));

  // Retour en haut
  element("bouton-haut").addEventListener("click", () => window.scrollTo({ top: 0, behavior: moinsAnimations ? "auto" : "smooth" }));

  // Boutons copier (pied de page et page contact)
  document.addEventListener("click", (e) => {
    const bouton = e.target.closest("[data-copier]");
    if (!bouton) return;
    copierTexte(bouton.dataset.copier === "email" ? profil.email : profil.telephone);
    bouton.classList.add("copie-ok");                                     // affiche une coche
    setTimeout(() => bouton.classList.remove("copie-ok"), 1600);
  });

  // Page Travaux : filtres et vues
  const filtres = element("filtres");
  if (filtres) {
    filtres.addEventListener("click", (e) => { const b = e.target.closest("[data-filtre]"); if (b) choisirFiltre(b.dataset.filtre); });
    element("vues").addEventListener("click", (e) => {
      const b = e.target.closest("[data-vue]");
      if (!b) return;
      vueActive = b.dataset.vue;
      ecrireStockage("vue", vueActive);
      afficherTravaux();
    });
  }
}

// Copie un texte dans le presse-papiers
function copierTexte(valeur) {
  if (navigator.clipboard) navigator.clipboard.writeText(valeur).then(() => notifier(texteUi("contact.copie")));
  else {
    const zone = document.createElement("textarea");   // vieille méthode pour les vieux navigateurs
    zone.value = valeur;
    document.body.appendChild(zone);
    zone.select();
    document.execCommand("copy");
    zone.remove();
    notifier(texteUi("contact.copie"));
  }
}

// Photo de profil : les initiales s'affichent si la photo n'est pas encore là
function preparerPhoto() {
  document.querySelectorAll(".cadre-photo").forEach((cadre) => {
    const photo = cadre.querySelector("img");
    photo.src = profil.photo;
    photo.addEventListener("error", () => cadre.classList.add("sans-photo"));
  });
}

/* ---------- Contact ---------- */

function preparerContact() {
  if (pageActuelle !== "contact") return;
  element("lien-email").href = "mailto:" + profil.email;
  element("lien-email").textContent = profil.email;
  element("lien-tel").href = "tel:" + profil.telephoneLien;
  element("lien-tel").textContent = profil.telephone;
  element("liens-sociaux").innerHTML = liensSociaux("puce");
  mettreAJourWhatsapp();
  element("formulaire-contact").addEventListener("submit", envoyerFormulaire);
}

// Lien WhatsApp avec un premier message déjà écrit, dans la bonne langue
function mettreAJourWhatsapp() {
  const lien = element("lien-whatsapp");
  if (!lien) return;
  const message = langue === "fr" ? "Bonjour Daris, je viens de voir votre portfolio." : "Hi Daris, I just saw your portfolio.";
  lien.href = "https://wa.me/" + profil.whatsapp + "?text=" + encodeURIComponent(message);
}

// Envoie le formulaire par email grâce à formsubmit.co
async function envoyerFormulaire(evenement) {
  evenement.preventDefault();
  const formulaire = evenement.target;
  const zoneMessage = element("message-formulaire");
  const bouton = element("bouton-envoyer");
  if (formulaire.site.value) return;                       // champ piège rempli : c'est un robot

  const donnees = {
    nom: formulaire.nom.value.trim(),
    email: formulaire.email.value.trim(),
    sujet: formulaire.sujet.value.trim(),
    message: formulaire.message.value.trim()
  };

  // Vérifie que tout est rempli et que l'email ressemble à un email
  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donnees.email);
  let toutEstBon = true;
  ["nom", "email", "sujet", "message"].forEach((champ) => {
    const vide = !donnees[champ] || (champ === "email" && !emailValide);
    formulaire[champ].parentElement.classList.toggle("invalide", vide);
    if (vide) toutEstBon = false;
  });
  if (!toutEstBon) {
    zoneMessage.className = "message-formulaire erreur";
    zoneMessage.textContent = texteUi("contact.invalide");
    return;
  }

  // Bouton en mode "envoi en cours", avec trois petits points qui sautent
  bouton.disabled = true;
  element("texte-envoyer").innerHTML = texteUi("contact.envoi") + ' <span class="points-envoi"><i></i><i></i><i></i></span>';
  zoneMessage.textContent = "";

  try {
    const reponse = await fetch(adresseFormulaire, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ nom: donnees.nom, email: donnees.email, sujet: "[Portfolio] " + donnees.sujet, message: donnees.message, langue: langue })
    });
    const resultat = await reponse.json();
    if (!reponse.ok || String(resultat.success) !== "true") throw new Error(resultat.message);
    zoneMessage.className = "message-formulaire succes";
    zoneMessage.textContent = texteUi("contact.succes");
    formulaire.reset();
  } catch (erreur) {
    zoneMessage.className = "message-formulaire erreur";
    zoneMessage.innerHTML = texteUi("contact.erreur") + ' <a class="souligne" href="mailto:' + profil.email + '">' + profil.email + "</a>";
  } finally {
    bouton.disabled = false;
    element("texte-envoyer").textContent = texteUi("contact.envoyer");
  }
}

/* ---------- Petit terminal (accueil) ---------- */

const historique = [];
let positionHistorique = 0;

// Écrit une ligne dans le terminal
function ecrireTerminal(texte, classe) {
  const corps = element("terminal-corps");
  const ligne = document.createElement("div");
  if (classe) ligne.className = classe;
  ligne.textContent = texte;
  corps.appendChild(ligne);
  corps.scrollTop = corps.scrollHeight;                     // on reste en bas
}

// Exécute une commande tapée par le visiteur
function executerCommande(saisie) {
  const [commande, ...parametres] = saisie.trim().toLowerCase().split(/\s+/);
  const fr = langue === "fr";
  ecrireTerminal("› " + saisie, "info");
  switch (commande) {
    case "": break;
    case "help": case "aide":
      ecrireTerminal(texteUi("terminal.aide"));
      ecrireTerminal(fr ? "Bonus : ls, cd <page>, ping" : "Bonus: ls, cd <page>, ping");
      break;
    case "whoami":
      ecrireTerminal(fr ? "Daris Mbau · élève ingénieur Informatique & Réseaux (ENSISA) · futur ingénieur réseau et infrastructure pour l'IA." : "Daris Mbau · Computer Science & Networks engineering student (ENSISA) · future network and infrastructure engineer for AI.", "ok");
      break;
    case "projets": case "projects":
      projets.filter((p) => p.phare).forEach((p) => ecrireTerminal("· " + traduire(p.titre)));
      ecrireTerminal((fr ? "Et " : "And ") + projets.filter((p) => !p.phare).length + (fr ? " autres. Tapez cd travaux" : " more. Type cd travaux"), "ok");
      break;
    case "competences": case "skills":
      competences.forEach((c) => ecrireTerminal("· " + traduire(c.titre)));
      break;
    case "contact":
      ecrireTerminal("email : " + profil.email);
      ecrireTerminal((fr ? "tél   : " : "phone : ") + profil.telephone);
      break;
    case "ia": case "ai":
      ecrireTerminal(fr ? "Objectif : construire les réseaux et les infrastructures sur lesquels tourne l'IA (data center, GPU, Kubernetes)." : "Goal: building the networks and infrastructure AI runs on (data centers, GPUs, Kubernetes).", "ok");
      break;
    case "reseaux": case "networks":
      ecrireTerminal(fr ? "Mon domaine : réseaux d'entreprise et d'opérateur, data center, automatisation, sécurité." : "My field: enterprise and carrier networks, data centers, automation, security.", "ok");
      break;
    case "ls":
      ecrireTerminal(pages.map((p) => p.fichier.replace(".html", "") + "/").join("  "));
      break;
    case "cd": {
      const nom = (parametres[0] || "").replace("/", "");
      const cible = pages.find((p) => p.id === nom || p.fichier === nom + ".html");
      if (cible) location.href = cible.fichier;
      else ecrireTerminal((fr ? "dossier introuvable : " : "no such directory: ") + nom, "erreur");
      break;
    }
    case "ping":
      ecrireTerminal("64 bytes from daris: icmp-seq=1 ttl=64 time=0.42 ms", "ok");
      ecrireTerminal(fr ? "Le réseau tient la route." : "The network holds up.");
      break;
    case "theme": basculerTheme(); ecrireTerminal(fr ? "Thème changé." : "Theme switched.", "ok"); break;
    case "lang": appliquerLangue(fr ? "en" : "fr"); ecrireTerminal(langue === "fr" ? "Langue : français." : "Language: English.", "ok"); break;
    case "sudo": ecrireTerminal(fr ? "Bien essayé. Permission refusée." : "Nice try. Permission denied.", "erreur"); break;
    case "clear": case "cls": element("terminal-corps").innerHTML = ""; break;
    default: ecrireTerminal((fr ? "commande introuvable : " : "command not found: ") + commande + (fr ? ". Tapez help." : ". Type help."), "erreur");
  }
}

function preparerTerminal() {
  const saisie = element("terminal-saisie");
  if (!saisie) return;
  ecrireTerminal(langue === "fr" ? "Bienvenue ! Tapez help pour voir les commandes." : "Welcome! Type help to see the commands.", "ok");
  element("terminal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (saisie.value.trim()) historique.push(saisie.value);
    positionHistorique = historique.length;
    executerCommande(saisie.value);
    saisie.value = "";
  });
  // Flèches haut et bas pour retrouver les anciennes commandes
  saisie.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && positionHistorique > 0) { positionHistorique--; saisie.value = historique[positionHistorique]; e.preventDefault(); }
    else if (e.key === "ArrowDown") { positionHistorique = Math.min(positionHistorique + 1, historique.length); saisie.value = historique[positionHistorique] || ""; e.preventDefault(); }
  });
  element("terminal").addEventListener("click", () => saisie.focus({ preventScroll: true }));
}


/* =========================================================
   11. Démarrage
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  construireStructure();       // en-tête, menu, pied de page, curseur
  preparerTitres();            // découpe les grands titres en lettres
  brancherEvenements();        // boutons, menu, filtres
  appliquerLangue(langue);     // affiche tout le contenu dans la bonne langue
  preparerPhoto();
  preparerContact();
  preparerCv();
  preparerTerminal();
  animerCompteurs();
  animerBandeau();
  suivreDefilement();
  activerSouris();
  preparerRideau();
  mettreHeure();
  setInterval(mettreHeure, 15000);
  demarrerEntree();            // écran de chargement ou rideau, puis titres
});
