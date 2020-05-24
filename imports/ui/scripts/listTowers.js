import '../templates/listTowers.html';

import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Towers } from '../../api/towers.js';

Template.listTowers.helpers({
  towers() {
    const tow = Towers.find().fetch();
    return tow;
  },
});

Template.listTowers.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
