/* eslint-disable meteor/no-session */
import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import '../templates/otherUser.html';

import { Session } from 'meteor/session';

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
});
