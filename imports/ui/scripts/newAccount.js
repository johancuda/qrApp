import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';


Template.newAccount.events({
  'click #creation'(event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
