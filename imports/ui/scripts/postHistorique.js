import '../templates/postHistorique.html';

import { Template } from 'meteor/templating';

import { Towers } from '../../api/towers.js';

Template.postHistorique.helpers({
  initials() {
    const initial = this.post.auteurMail.charAt(0).toUpperCase() + this.post.auteurMail.split('.')[1].charAt(0).toUpperCase();
    return initial;
  },
  towerName() {
    const identification = this.post.towerId;
    const tower = Towers.find({ _id: identification }).fetch();
    return tower[0].title;
  },
});
