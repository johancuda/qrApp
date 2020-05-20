import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/:id', {
  name: 'connexion',
  action() {
    BlazeLayout.render('appBody', { main: 'connexion' });
  },
});

FlowRouter.route('/post/:IdTower', {
  name: 'post',
  action() {
    BlazeLayout.render('appBody', { main: 'post' });
  },
});

FlowRouter.route('/profile/:id', {
  name: 'profile',
  action() {
    BlazeLayout.render('appBody', { main: 'otherUser' });
  },
});

FlowRouter.route('/tower/:id', {
  name: 'tower',
  action() {
    BlazeLayout.render('appBody', { main: 'formNewTower' });
  },
});
