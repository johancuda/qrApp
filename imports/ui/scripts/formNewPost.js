/* eslint-disable no-param-reassign */
/* eslint-env jquery */
import Swal from 'sweetalert2';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Posts } from '../../api/collections.js';
import { Notifications } from '../../api/notifications.js';


import '../templates/formNewPost.html';

Template.formNewPost.events({
  'click #bouton'(event) {
    event.preventDefault();
    Swal.fire({
      heightAuto: false,
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, post it!',
    }).then((result) => {
      if (result.value) {
        const title = document.getElementById('title');
        const text = document.getElementById('text');
        const titleVal = title.value;
        const textVal = text.value;

        Posts.insert({
          title: titleVal,
          text: textVal,
          createdAt: new Date(),

          auteurID: Meteor.userId(),

          auteurMail: Meteor.user().emails[0].address,

          towerId: FlowRouter.getParam('IdTower'),
        });
        Notifications.insert({
          titile: 'new post',
          createdAt: new Date(),
          auteurID: Meteor.userId(),
          towerId: FlowRouter.getParam('IdTower'),
        });
        title.value = '';
        text.value = '';
        FlowRouter.go('connexion', { id: FlowRouter.getParam('IdTower') });
        Swal.fire('Posted!', 'Your file has been posted.', 'success');
      }
    });
  },
});
