import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import '../templates/postPage.html';

Template.post.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = window.location.pathname.slice(6);
    FlowRouter.go('connexion', { id: url });
  },
});
