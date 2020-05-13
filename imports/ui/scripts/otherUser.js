import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import '../templates/otherUser.html';

Template.otherUser.events({
  'click #retour' (event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});
