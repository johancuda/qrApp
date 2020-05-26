/* eslint-disable meteor/no-session */
/* eslint-env jquery */
import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Session } from 'meteor/session';
import '../../client/css/purpose.css';

import './templates/header.html';

import './templates/accueil.html';
import './scripts/formNewPost.js';
import './scripts/listPost.js';
import './templates/formNewPost.html';
import './templates/listPost.html';
import './templates/singlePost.html';
import './body.html';
import './templates/connexion.html';
import './templates/postPage.html';
import './scripts/postPage.js';
import '../../lib/routes.js';

import './templates/listNotif.html';
import './scripts/listNotif.js';
import './templates/settings.html';
import './templates/profileStat.html';


import './templates/otherUser.html';
import './scripts/otherUser.js';
import './templates/formNewTower.html';
import './scripts/formNewTower.js';
import './templates/historique.html';
import './scripts/historique.js';
import './templates/qrCode.html';
import './scripts/qrCode.js';

import './templates/newAccount.html';
import './scripts/newAccount.js';
import './templates/formConnexion.html';
import './scripts/formConnexion.js';
import './templates/start.html';
import './scripts/start.js';
import './templates/listTowers.html';
import './scripts/listTowers.js';
import './templates/currentUserProfile.html';
import './scripts/currentUserProfile.js';
import './scripts/singlePost.js';
import './templates/postHistorique.html';
import './scripts/postHistorique.js';
import './templates/singleNotif.html';
import './scripts/singleNotif.js';

import './templates/logo.html';
import './templates/logo2.html';

// bouton déconnexion:
Template.accueil.events({
  // eslint-disable-next-line no-unused-vars
  'click .js-logout'(event, templateInstance) {
    Meteor.logout();
  },
});

// route pour faire un post
Template.appBody.events({
  'click #post'(event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('post', { IdTower: url });
  },
});
// route qui renvoie aux posts après avoir poster
Template.appBody.events({
  'submit #form' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('IdTower');
    FlowRouter.go('connexion', { id: url });
  },
  // Déconnexion depuis la navbar
  // eslint-disable-next-line no-unused-vars
  'click .js-logout'(event, templateInstance) {
    event.preventDefault();
    Meteor.logout();
  },

  // se reconnecter depuis la navbar
  'click .connexion' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },

});

// helper qui affiche le nom de l'utilisateur connecté
Template.accueil.helpers({
  utilisateur: () => Meteor.user().username,
});
Template.appBody.helpers({
  utilisateur: () => Meteor.user().username,
});

Template.appBody.events({
  'submit #form2' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});

Template.appBody.events({
  'click #tower' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('tower', { id: url });
  },
});

Template.appBody.events({
  'click .profile' (event) {
    event.preventDefault();
    Session.set({
      id: this.post.auteurID,
      mail: this.post.auteurMail,
      tower: this.post.towerId,
    });
    FlowRouter.go('profile', { id: this.post.auteurID });
  },
});

Template.appBody.events({
  'click #connexion'(event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});

Template.appBody.events({
  'click #new'(event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('newAccount', { id: url });
  },
});

Template.appBody.events({
  'click .lien' (event) {
    event.preventDefault();
    const url = event.target.innerHTML;
    FlowRouter.go('connexion', { id: url });
  },
});

Template.appBody.events({
  'click .history' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('historique', { id: url });
  },
});

Template.appBody.events({
  'click .listTowers' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('listTowers', { id: url });
  },
});

Template.appBody.helpers({
  initials() {
    const mail = Meteor.user().emails[0].address;
    return mail.charAt(0).toUpperCase() + mail.split('.')[1].charAt(0).toUpperCase();
  },
});

Template.header.helpers({
  initials() {
    const mail = Meteor.user().emails[0].address;
    return mail.charAt(0).toUpperCase() + mail.split('.')[1].charAt(0).toUpperCase();
  },
});

Template.appBody.events({
  'click #postPage' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});

Template.appBody.events({
  'click .userProfile' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('userProfile', { id: url });
  },
});

Template.appBody.events({
  'click .notifications' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('notifications', { id: url });
  },
});
