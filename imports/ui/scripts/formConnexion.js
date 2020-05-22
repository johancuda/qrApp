import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

import '../templates/formConnexion.html';

Template.formConnexion.events({
  'click #connexion'(event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});

Template.formConnexion.events({
  'click #new'(event) {
    event.preventDefault();
    FlowRouter.go('newAccount');
  },
});
