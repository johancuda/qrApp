import '../templates/historique.html';

import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/collections.js';

Template.historique.helpers({
  posts() {
    const id = Meteor.userId();
    return Posts.find({ auteurID: id }).fetch();
  },
});

Template.historique.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
