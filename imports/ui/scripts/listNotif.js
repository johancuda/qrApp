/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import '../templates/listNotif.html';

import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { Notifications } from '../../api/notifications.js';

// pas fini ici, rajouter conditions sur les notifs : pas du currentUser, date minimum etc...
Template.listNotif.helpers({
  notifs() {
    let towers = Meteor.user({ fields: { 'profile.towers': 1 } });
    towers = towers.profile.towers;
    let tableau = [];
    for (let i = 0; i < towers.length; i++) tableau = tableau.concat(Notifications.find({ towerId: towers[i] }).fetch());
    return tableau;
  },
});

Template.listNotif.events({
    'click #retour' (event) {
      event.preventDefault();
      const url = FlowRouter.getParam('id');
      FlowRouter.go('connexion', { id: url });
    },
  });