import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import 'bootstrap/dist/css/bootstrap.min.css';

import './templates/accueil.html';
import './scripts/formNewPost.js';
import './scripts/listPost.js';
import './templates/formNewPost.html';
import './templates/listPost.html';
import './templates/singlePost.html';
import './body.html';
// bouton déconnexion:

Template.accueil.events({
  // eslint-disable-next-line no-unused-vars
  'click .js-logout'(event, templateInstance) {
    Meteor.logout();
  },
});
