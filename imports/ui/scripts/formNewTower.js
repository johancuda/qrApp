/* eslint-disable no-param-reassign */
/* eslint-env jquery */
import Swal from 'sweetalert2';

import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Towers } from '../../api/towers.js';


import { NotificationsTowers } from '../../api/notificationsTower.js';

import '../templates/formNewTower.html';


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
        const titleVal = document.getElementById('towerName').value;
        const textVal = document.getElementById('text').value;
        Towers.insert({
          title: titleVal,
          text: textVal,
          createdAt: new Date(),
        });
        NotificationsTowers.insert({
          titile: 0,
          createdAt: new Date(),
        });
        document.getElementById('towerName').innerHTML = '';
        FlowRouter.go('connexion', { id: FlowRouter.getParam('id') });
        Swal.fire('Posted!', 'Your file has been posted.', 'success');
      }
    });
  },
});

Template.formNewTower.events({
  'click #retour' (event) {
    event.preventDefault();
    const url = FlowRouter.getParam('id');
    FlowRouter.go('connexion', { id: url });
  },
});
