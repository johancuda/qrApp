/* eslint-disable no-param-reassign */
/* eslint-env jquery */
import Swal from 'sweetalert2';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/collections.js';

import '../templates/formNewPost.html';


import 'bootstrap/dist/css/bootstrap.min.css';

Template.formNewPost.events({
  // eslint-disable-next-line no-unused-vars
  'submit .js-new-post' (event, templateInstance) {
    event.preventDefault();
    const titleVal = event.target.title.value;
    const textVal = event.target.text.value;

    Posts.insert({
      title: titleVal,
      text: textVal,
      createdAt: new Date(),

      auteurID: Meteor.userId(),

      auteurMail: Meteor.user().emails[0].address,
    });


    event.target.title.value = '';
    event.target.text.value = '';
  },
});

Template.formNewPost.events({
  'click #bouton'(event) {
    event.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, post it!',
    }).then((result) => {
      if (result.value) {
        $('form#form').submit();
        Swal.fire(
          'Posted!',
          'Your file has been posted.',
          'success',
        );
      }
    });
  },
});
