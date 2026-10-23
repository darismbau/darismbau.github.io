# Portfolio de Daris Mbau

Site perso statique (sans framework), bilingue français / anglais, thème sombre et clair, prêt pour GitHub Pages.

## Organisation des fichiers

```
index.html            accueil : nom géant, à propos, travaux choisis, passions, console
travaux.html          tous les projets, en liste (aperçu au survol) ou en grille, avec filtres
projet.html           la page d'un projet (ex : projet.html?id=frigate)
parcours.html         la frise : ENSISA, immersion, alternance Orange, BUT
competences.html      compétences du BUT, ce que j'apprends, certificats
contact.html          formulaire et contacts directs
glossaire.html        toutes les notions des projets, expliquées en une phrase, avec recherche
404.html              page affichée si une adresse n'existe pas
css/style.css         l'apparence (couleurs en haut du fichier : --fond, --texte, --accent)
js/donnees.js         le contenu : profil, liens, formations, compétences, et tous les textes FR/EN
js/projets.js         les projets détaillés (12 liés à l'objectif, 5 mis à côté)
js/main.js            en-tête, menu, pied de page, animations, curseur, filtres, terminal, formulaire
assets/fonts/         polices Geist et Geist Mono (licence libre OFL)
assets/img/           photo, images de projets, aperçu pour les réseaux sociaux
assets/preuves/       les preuves de chaque projet (images, PDF, maquettes), un dossier par projet
```

L'en-tête, le menu plein écran et le pied de page sont construits par `js/main.js` : une modification là-bas s'applique à toutes les pages.

## Mettre le site en ligne sur GitHub Pages

1. Sur GitHub, crée un dépôt **public** nommé exactement `darismbau.github.io` (ou vide-le s'il contient l'ancienne version : supprime tous les anciens fichiers, sinon des pages de l'ancien site resteraient en ligne).
2. **Add file > Upload files**, glisse tout le contenu du dossier (`index.html` doit être à la racine), puis **Commit changes**.
3. **Settings > Pages** : **Deploy from a branch**, branche `main`, dossier `/ (root)`, **Save**.
4. Une ou deux minutes plus tard, le site est en ligne sur https://darismbau.github.io

### Mettre à jour le site déjà en ligne

1. Dans ton dépôt `darismbau.github.io`, **Add file > Upload files**.
2. Glisse les dossiers et fichiers modifiés (ou tout le contenu du dossier) : les fichiers de même nom sont remplacés. GitHub accepte 100 fichiers et 25 Mo par fichier à chaque envoi.
3. **Commit changes**, attends une à deux minutes, puis recharge le site avec Ctrl + F5 (sinon le navigateur garde l'ancienne version en mémoire).

Plus confortable à la longue : GitHub Desktop (gratuit). Tu clones le dépôt une fois, tu modifies les fichiers dans le dossier, puis **Commit** et **Push**.

## Activer le formulaire de contact (une seule fois)

Le formulaire passe par formsubmit.co (gratuit, sans compte).

1. Une fois le site en ligne, envoie-toi un premier message depuis la page Contact.
2. Tu reçois un mail de FormSubmit sur dariusmbawu05@gmail.com : clique sur **Activate Form**.
3. Les messages suivants arrivent directement dans ta boîte.

Le tout premier envoi peut afficher une erreur, c'est normal tant que le formulaire n'est pas activé.

## Ajouter ou modifier du contenu

- **Ta photo** : dépose `assets/img/photo.jpg` (carrée). Sans photo, tes initiales s'affichent.
- **Ton CV** : dépose `assets/cv-daris-mbau.pdf`, le lien "CV" apparaît tout seul dans le menu, le pied de page et la page contact.
- **LinkedIn, Notion ou d'autres liens** : remplis le champ `url` dans `liens` (`js/donnees.js`). Un lien vide n'est pas affiché.
- **L'image de couverture d'un projet** : dépose `assets/img/projets/<id>.jpg` (même nom que l'`id` du projet, format 16/10 environ, idéalement 1600 x 1000 pixels, ex : `assets/img/projets/frigate.jpg`). Elle s'affiche sur l'accueil, dans la grille, au survol de la liste, en haut de la page du projet et dans le bloc "Projet suivant". Sans image, une affiche sobre avec le code et le titre s'affiche.
- **Un nouveau projet** : dans `js/projets.js`, copie un bloc, change l'`id`, les textes `fr` et `en`, les `domaines` (ia, reseau, dev, telecom, iot, securite). Mets `phare: true` pour l'afficher sur l'accueil (les 6 premiers phares sont montrés).
- **Mettre un projet à côté** : ajoute `archive: true`. Il sort de l'accueil, des filtres, des compteurs et du glossaire, et apparaît dans la petite liste "À côté" en bas de la page Travaux (sa page reste accessible).
- **L'ordre des projets** : l'ordre des blocs dans `js/projets.js` est l'ordre d'affichage. Les 6 premiers projets avec `phare: true` vont sur l'accueil.
- **Les notions d'un projet** (glossaire) : champ `glossaire` du projet, une phrase par notion. La page `glossaire.html` les rassemble toutes automatiquement, avec une recherche.
- **Les preuves d'un projet** : champ `preuves` du projet, et les fichiers dans `assets/preuves/<id>/` (ex : `assets/preuves/mpls/rapport.pdf`). Types possibles : `image` (galerie, s'agrandit au clic), `pdf` (s'ouvre dans un onglet), `fichier` (téléchargement, ex : une maquette GNS3 en .zip), `config` (texte d'une configuration, affiché directement), `lien` (adresse externe dans `fichier`, ex : une vidéo YouTube). Une preuve dont le fichier manque est simplement cachée.
- **Les textes de l'interface** (titres, boutons) : objet `textes` dans `js/donnees.js`, en `fr` et en `en`.
- **Un certificat** : un bloc dans `certificats` (`js/donnees.js`), avec `statut` à `obtenu`, `encours` ou `prevu`. Pour le justificatif : soit l'adresse du badge en ligne dans `lien`, soit le PDF dans `assets/certificats/` et son nom dans `fichier`.
- **Ta progression** : pourcentages dans `roadmap` (`js/donnees.js`).
- **L'image de fond de l'accueil** : `assets/img/fond-datacenter-1280.jpg`, `-2560.jpg` et `-4k.jpg` (même image en 3 tailles, le navigateur charge la bonne selon l'écran). Pour la changer, remplace ces 3 fichiers en gardant les noms. Le voile qui assombrit l'image se règle avec `--voile-haut` et `--voile-milieu` en haut de `css/style.css`.

## Modèles à copier

Un projet (à coller dans `js/projets.js`, dans la liste, avec une virgule après le `}` du projet d'avant). Seuls `id`, `annee`, `date`, `code`, `titre`, `resume` et `domaines` sont obligatoires, tu peux supprimer les autres lignes.

```js
  {
    id: "mon-projet",                       // court, sans espace ni accent : sert pour l'adresse et les dossiers
    annee: "ENSISA 2A",                     // ou "Perso"
    date: { fr: "Oct. 2026", en: "Oct. 2026" },
    code: "PROJET PERSO",                   // ou le nom du module ENSISA
    titre: { fr: "Titre en français", en: "English title" },
    resume: { fr: "Une ou deux phrases pour la carte.", en: "One or two sentences for the card." },
    techno: ["Linux", "Ansible"],
    equipe: { fr: "Seul", en: "Solo" },
    domaines: ["reseau"],                   // reseau, securite, telecom, ia, iot, dev
    competences: [],
    phare: false,                           // true pour le mettre sur l'accueil
    contexte: { fr: "Pourquoi ce projet, quel problème.", en: "Why this project, what problem." },
    role: { fr: "Ce que j'ai fait, moi.", en: "What I did." },
    realise: { fr: ["Étape 1", "Étape 2"], en: ["Step 1", "Step 2"] },
    apports: { fr: ["Ce que j'ai appris"], en: ["What I learned"] },
    bilan: { fr: "Une phrase de bilan.", en: "One closing sentence." },
    glossaire: [
      { terme: "VLAN", definition: { fr: "Réseau virtuel qui sépare les machines d'un même switch.", en: "Virtual network separating machines on one switch." } }
    ],
    preuves: [
      { type: "image", fichier: "schema.png", titre: { fr: "Schéma", en: "Diagram" } },
      { type: "pdf", fichier: "rapport.pdf", titre: { fr: "Rapport", en: "Report" } },
      { type: "lien", fichier: "https://youtu.be/...", titre: { fr: "Vidéo de démo", en: "Demo video" } }
    ]
  },
```

Puis : l'image de couverture dans `assets/img/projets/mon-projet.jpg` et les preuves dans `assets/preuves/mon-projet/`.

Un certificat (dans `certificats`, `js/donnees.js`) :

```js
  {
    nom: { fr: "Cisco CCNA", en: "Cisco CCNA" },
    organisme: "Cisco",
    date: "Oct. 2027",
    statut: "obtenu",                       // obtenu, encours ou prevu
    lien: "https://www.credly.com/badges/...",
    fichier: ""                             // ou "ccna.pdf" déposé dans assets/certificats/
  },
```

## Tester en local

Dans un terminal ouvert dans le dossier :

```
python -m http.server 8000
```

puis ouvre http://localhost:8000

Tu peux aussi ouvrir `index.html` en double-cliquant dessus : tout s'affiche, mais le formulaire de contact ne marche qu'en ligne.
