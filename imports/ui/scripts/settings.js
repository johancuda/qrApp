import '../templates/settings.html';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import Swal from 'sweetalert2';

import { FlowRouter } from 'meteor/kadira:flow-router';

Template.settings.events({
  'click #deleteAccount' (event) {
    event.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Meteor.users.remove({ _id: Meteor.userId() });
        FlowRouter.go('connexion', { id: FlowRouter.getParam('id') });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  },
});
