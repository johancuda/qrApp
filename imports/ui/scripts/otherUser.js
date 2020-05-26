/* eslint-disable meteor/no-session */
import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Meteor } from 'meteor/meteor';

import '../templates/otherUser.html';

import { Session } from 'meteor/session';

import { Posts } from '../../api/collections.js';


Template.otherUser.events({
  'click #retour' (event) {
    event.preventDefault();
    const tower = Session.get('tower');
    FlowRouter.go('connexion', { id: tower });
  },
});

Template.otherUser.helpers({
  getMail() {
    return Session.get('mail').slice(0, -8);
  },
  number() {
    const auteur = Session.get('id');
    const posts = Posts.find({ auteurID: auteur }).fetch();
    if (posts.length !== 0) {
      return posts.length;
    }
    return 0;
  },
  getInitials() {
    return Session.get('mail').charAt(0).toUpperCase() + Session.get('mail').split('.')[1].charAt(0).toUpperCase();
  },
  numberTowers() {
    const auteur = Session.get('id');
    const publications = Posts.find({ auteurID: auteur }).fetch();
    if (publications.length !== 0) {
      return publications.length;
    }
    return 0;
  },
  likedTowers() {
    const id = Session.get('id');
    const auteur = Meteor.users.findOne({ _id: id });
    if (auteur.profile.towers.length !== 0) {
      return auteur.profile.towers.length;
    }
    return 0;
  },
});
