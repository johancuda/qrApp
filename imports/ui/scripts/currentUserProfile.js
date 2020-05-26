import '../templates/currentUserProfile.html';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/collections.js';


Template.currentUserProfile.helpers({
  mail() {
    const adresse = Meteor.user().emails[0].address;
    return adresse.split('@')[0];
  },
  initials() {
    const mail = Meteor.user().emails[0].address;
    return mail.charAt(0).toUpperCase() + mail.split('.')[1].charAt(0).toUpperCase();
  },
  number() {
    const auteur = Meteor.userId();
    const posts = Posts.find({ auteurID: auteur }).fetch();
    if (posts.length !== 0) {
      return posts.length;
    }
    return 0;
  },
  numberTowers() {
    const auteur = Meteor.userId();
    const publications = Posts.find({ auteurID: auteur }).fetch();
    if (publications.length !== 0) {
      return publications.length;
    }
    return 0;
  },
  likedTowers() {
    const towers = Meteor.user({ fields: { 'profile.towers': 1 } });
    if (towers.profile.towers.length !== 0) {
      return towers.profile.towers.length;
    }
    return 0;
  },
});

Template.currentUserProfile.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
