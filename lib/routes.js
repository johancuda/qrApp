import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'connexion',
  action() {
    BlazeLayout.render('appBody', { main: 'connexion' });
  },
});

FlowRouter.route('/post', {
  name: 'post',
  action() {
    BlazeLayout.render('appBody', { main: 'post' });
  },
});
