import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';


Template.newAccount.events({
  'click #creation'(event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});
