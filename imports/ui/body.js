import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { FlowRouter } from 'meteor/kadira:flow-router';

import 'bootstrap/dist/css/bootstrap.min.css';

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
import './templates/settings.html';
import './templates/profileStat.html';


import './templates/otherUser.html';
import './scripts/otherUser.js';
import './templates/formNewTower.html';
import './scripts/formNewTower.js';
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
    FlowRouter.go('post');
  },
});
// route qui renvoie aux posts après avoir poster
Template.appBody.events({
  'submit #form' (event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});

Template.appBody.events({
  'click #tower' (event) {
    event.preventDefault();
    FlowRouter.go('tower');
  },
});
