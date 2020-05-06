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
import './templates/test.html';
import './scripts/test.js';
import '../../lib/routes.js';

// bouton déconnexion:
Template.accueil.events({
  // eslint-disable-next-line no-unused-vars
  'click .js-logout'(event, templateInstance) {
    Meteor.logout();
  },
});

// test de routing
Template.appBody.events({
  'click #test'(event) {
    event.preventDefault();
    FlowRouter.go('test');
  },
});
