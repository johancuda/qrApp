import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import '../templates/test.html';

Template.test.events({
  'click #retour' (event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});
