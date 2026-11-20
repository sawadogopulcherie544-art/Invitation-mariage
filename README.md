# Invitation de Mariage – Eurolie & Elvis

Site web d'invitation en ligne pour la célébration du mariage d'**Eurolie & Elvis**, prévue le **Samedi 04 Décembre 2027** à Ouagadougou, Burkina Faso.

## Aperçu

Une page web élégante et responsive présentant :
- Une page d'accueil avec image de fond et titre d'invitation
- Le message de bienvenue et les noms des mariés
- Les informations pratiques (date, heure, lieu)
- Un **compte à rebours** en temps réel jusqu'au grand jour
- Le **programme détaillé** de la cérémonie
- Les informations sur le **dress code** et la **localisation**
- Un **formulaire de confirmation de présence** (RSVP)

## Technologies utilisées

- **HTML5** — structure de la page
- **CSS3** — mise en forme et responsive design
- **JavaScript (Vanilla)** — compte à rebours dynamique et gestion du formulaire RSVP

## Structure du projet

```
invitation-mariage/
├── index.html          # Page principale
├── css/
│   └── style.css        # Styles de la page
├── script/
│   └── script.js         # Compte à rebours + logique RSVP
├── wedding.jpg          # Image de fond de la section d'accueil
├── tissu.jpeg           # Image illustrant le dress code
└── README.md
```

> ⚠️ Veillez à bien placer `style.css` dans un dossier `css/` et `script.js` dans un dossier `script/`, conformément aux chemins référencés dans `index.html`.

## Utilisation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/sawadogopulcherie544-art/Invitation-de-mariage.git
   ```
2. Ouvrez `index.html` dans votre navigateur, ou publiez le site avec **GitHub Pages** :
   - Allez dans **Settings > Pages**
   - Sélectionnez la branche `main` et le dossier `/root`
   - Le site sera accessible à l'adresse générée automatiquement par GitHub

## Fonctionnalités

- **Compte à rebours automatique** vers la date du mariage
- **Formulaire RSVP** : les invités peuvent confirmer ou décliner leur présence (enregistrement local via `localStorage`)
- **Design responsive** adapté aux mobiles et ordinateurs

## Auteur

Créé par [Pulcho](https://github.com/sawadogopulcherie544-art
