/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import '../templates/listNotif.html';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { Notifications } from '../../api/notifications.js';

import { NotificationsTowers } from '../../api/notificationsTower.js';

Template.listNotif.helpers({
  notifs() {
    let towers = Meteor.user({ fields: { 'profile.towers': 1 } });
    towers = towers.profile.towers;
    let tableau = [];
    for (let i = 0; i < towers.length; i++) tableau = tableau.concat(Notifications.find({ towerId: towers[i] }).fetch());
    for (let j = 0; j < tableau.length; j++) {
      if (tableau[j].auteurID === Meteor.userId()) {
        tableau.splice(j, 1);
      }
    }
    return tableau;
  },
  notifsTower() {
    const notif = NotificationsTowers.find().fetch();
    return notif;
  },
});

Template.listNotif.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
