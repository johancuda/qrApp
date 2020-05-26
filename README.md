# Decoder [Corriger le nom]

Un projet réalisé dans le cadre du cours _Programmation pour Internet II - Meteor.js._
Université de Lausane, Faculté des Lettres, semestre de printemps 2020.


## Description

Decoder se veut un réseau de partage ancré dans le monde réel. En scannant des QR codes disséminés dans les bâtiments de l'université, les utilisateurs peuvent accéder à des contenus postés et associés à cet endroit précis et ajouter le leur.
Un système de notifications permet de s'abonner aux contenus d'un de ces lieux (ou stations - nommées par la suite "towers").
Afin de permettre de meilleures interactions et de favoriser un comportement respecteux, la création d'un compte nécessite une adresse universitaire valide qui est ensuite publiquement associée aux contenus postés.


## Fonctionnement

On accède à l'application par le lien récupéré d'un QR code (qui nous dirige ainsi sur une tower particulière) ou par la page d'accueil, qui liste les towers disponibles, identifiées par leur nom et leur ID (par défaut, une tower est crée au lancement de l'app s'il n'en existe aucune). Pour accéder au contenu de la tower et publier de nouveaux posts, il faut créer un compte dont l'adresse se termine en "@unil.ch" et s'y connecter. Une fois connecté, l'utilisateur a également accès à l'historique de ses posts, à son profil, aux notifications et à une liste des towers disponibles. Le QR code généré pour chaque tower n'est actuellement utilisable qu'en local; pour l'utiliser chez vous (en le scannant par exemple avec l'appareil photo de votre iphone), il vous suffit de remplacer - à la ligne 13 du fichier qrCode.js - l'adresse IP présente par celle de votre propre ordinateur. Il faut bien entendu que votre appareil mobile et votre ordinateur soient connectés au même réseau Wifi.

L'application comprend 4 bases de données: la première répertorie les contenus ("Posts"), la seconde les towers ("Towers"), la troisième les utilisateurs ("users) et la dernière les notifications ("Notifications").


### Prochaines étapes

* Pour les besoins des tests, un bouton permettant de créer de nouvelles towers est accessible à l'intérieur de l'application, par n'importe quel utilisateur. En cas de déploiement, il serait à désactiver et les towers - fixes - seraient déjà présentes à l'ouverture de l'application.
* Les packages de développement `autopublish` et `insecure` sont également encore activés.
* La validation par mail à la création d'un nouveau compte n'est pas implémentée, ce qui représente un risque de sécurité et ne garanti pas l'identité des utilisateurs.
* La page d'accueil listant les towers existantes et permettant d'y accéder n'existerait plus en cas de déploiement, elle sert à l'utilisation en local de l'application.
Le QR code généré pour chaque tower n'est actuellement utilisable qu'en local; pour l'utiliser chez vous (en le scannant par exemple avec l'appareil photo de votre iphone), il vous suffit de remplacer - à la ligne 13 du fichier qrCode.js - l'adresse IP présente par celle de votre propre ordinateur. Il faut bien entendu que votre appareil mobile et votre ordinateur soient connectés au même réseau Wifi.

[inclure captures d'écran?]


## Packages utilisés

* `kadira:flow-router` et `kadira:blaze-layout` pour le système de routes
* `accounts-base`, `accounts-ui` et `accounts-passeword` pour la gestion utilisateur
* `msavin:mongol` pour la gestion simple des bases de données dans le navigateur
* `session` pour des variables globales
* `sweetalert2` pour des modals de qualité
* la librairie `davidshimjs-qrcodejs` pour la génération de QR Codes

## Contributeurs

Johan Cuda, Yuesheng Jiang, Isabelle Fasnacht

## License

Sous license UNIL.

Une application développée avec Meteor 1.10.2.
