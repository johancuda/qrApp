/* eslint-disable no-param-reassign */
/* eslint-disable meteor/template-names */

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './main.html';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Posts } from '../both/collections.js';


Template.form_new_post.events({
  // eslint-disable-next-line no-unused-vars
  'submit .js-new-post' (event, templateInstance) {
    event.preventDefault();
    const titleVal = event.target.title.value;
    const textVal = event.target.text.value;

    Posts.insert({
      title: titleVal,
      text: textVal,
      createdAt: new Date(),

      auteurID: Meteor.userId(),

      auteurMail: Meteor.user().emails[0].address,
    });


    event.target.title.value = '';
    event.target.text.value = '';
  },
});


Template.list_post.helpers({
  posts() {
    return Posts.find().fetch();
  },
});

// bouton déconnexion:

Template.accueil.events({
  // eslint-disable-next-line no-unused-vars
  'click .js-logout'(event, templateInstance) {
    Meteor.logout();
  },
});
