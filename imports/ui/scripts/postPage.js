import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import '../templates/postPage.html';

Template.post.events({
  'click #retour' (event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});
