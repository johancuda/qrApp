/* eslint-disable no-alert */
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

import '../templates/formConnexion.html';

Template.formConnexion.events({
  'click #seConnecter'(event) {
    event.preventDefault();
    const mail = document.getElementById('mail').value;
    const mdp = document.getElementById('mdp').value;
    const url = FlowRouter.getParam('id');

    Meteor.loginWithPassword(mail, mdp, (error) => {
      if (error) {
        alert(error.message);
      } else {
        setTimeout(() => FlowRouter.go('connexion', { id: url }), 200);
      }
    });
  },
});
