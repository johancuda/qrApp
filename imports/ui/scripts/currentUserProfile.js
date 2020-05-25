import '../templates/currentUserProfile.html';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/collections.js';


Template.currentUserProfile.helpers({
  mail() {
    const adresse = Meteor.user().emails[0].address;
    console.log(adresse);
    return adresse.split('@')[0];
  },
  initials() {
    const mail = Meteor.user().emails[0].address;
    return mail.charAt(0).toUpperCase() + mail.split('.')[1].charAt(0).toUpperCase();
  },
  number() {
    const auteur = Meteor.userId();
    const posts = Posts.find({ auteurID: auteur }).fetch();
    return posts.length;
  },
});

Template.currentUserProfile.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
