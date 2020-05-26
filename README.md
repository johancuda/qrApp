# qrApp [Corriger le nom]

Un projet réalisé dans le cadre du cours _Programmation pour Internet II - Meteor.js._
Université de Lausane, Faculté des Lettres, semestre de printemps 2020.


## Description

[qrApp] se veut un réseau de partage ancré dans le monde réel. En scannant des qr-codes disséminés dans les bâtiments de l'université, les utilisateurs peuvent accéder à des contenus postés et associés à cet endroit précis et ajouter le leur.
Idéalement, un système de notifications permettrait de s'abonner aux contenus d'un de ces lieux (ou stations - nommées par la suite "towers") ou à ceux d'un autre utilisateur. [du coup, ça marche ou non?]
Afin de permettre de meilleures interactions et de favoriser un comportement respecteux, la création d'un compte nécessite une adresse universitaire valide qui est ensuite publiquement associée aux contenus postés.


## Fonctionnement

On accède à l'application par le lien récupéré d'un qr-code (qui nous dirige ainsi sur une tower particulière) ou par la page d'accueil, qui liste les towers disponibles, identifiées par leur nom et leur ID. [par défaut il y en a deux inclues / sinon il faut les créer soi - c'est ça?] Pour accéder au contenu de la tower et publier de nouveaux posts, il faut créer un compte dont l'adresse se termine en "@unil.ch" et s'y connecter. Une fois connecté, l'utilisateur a également accès à l'historique de ses posts, à son profil, à [des options de notifications ?] et à une liste des towers disponibles.

L'application comprend [3?] bases de données: la première répertorie les contenus ("Posts"), la seconde les towers ("Towers"), et la dernière les notifications ("Notifications") [corrige si je me trompe].


### Prochaines étapes

* Pour les besoins des tests, un bouton permettant de créer de nouvelles towers est accessible à l'intérieur de l'application, par n'importe quel utilisateur. En cas de déploiement, il serait à désactiver et les towers - fixes - seraient déjà présentes à l'ouverture de l'application.
* Les packages de développement `autopublish` et `insecure` sont également encore activés.
* La validation par mail à la création d'un nouveau compte n'est pas implémentée, ce qui représente un risque de sécurité et ne garanti pas l'identité des utilisateurs.
* [autres améliorations?]

[inclure captures d'écran?]


## Packages utilisés

* `kadira:flow-router` et `kadira:blaze-layout` pour le système de routes
* `accounts-base`, `accounts-ui` et `accounts-passeword` pour la gestion utilisateur
* [ajoutez ce qu'il faut - bootstrap, sweetalert, etc. Inclure dev-tools? (du genre mongol)]


## Contributeurs

Johan Cuda, Yuesheng Jiang, Isabelle Fasnacht

## License

[sous license UNIL] ?

Une application développée avec Meteor 1.10.2.
