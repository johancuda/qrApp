/* eslint-disable no-param-reassign */
/* eslint-env jquery */
import Swal from 'sweetalert2';

import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Towers } from '../../api/towers.js';

import '../templates/formNewTower.html';


import 'bootstrap/dist/css/bootstrap.min.css';

Template.formNewTower.events({
  // eslint-disable-next-line no-unused-vars
  'submit .js-new-tower' (event, templateInstance) {
    event.preventDefault();
    const titleVal = event.target.title.value;

    Towers.insert({
      title: titleVal,
      createdAt: new Date(),

    });


    event.target.title.value = '';
  },
});

Template.formNewTower.events({
  'click #bouton2'(event) {
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
        $('form#form2').submit();
        Swal.fire(
          'Posted!',
          'Your file has been posted.',
          'success',
        );
      }
    });
  },
});

Template.formNewTower.events({
  'click #retour' (event) {
    event.preventDefault();
    FlowRouter.go('connexion');
  },
});
