import '../templates/singleNotif.html';

import { Template } from 'meteor/templating';

import { Towers } from '../../api/towers.js';

Template.singleNotif.helpers({
  towerName() {
    const tower = this.notif.towerId;
    const name = Towers.find({ _id: tower }).fetch();
    return name[0].title;
  },
  initials() {
    const tower = this.notif.towerId;
    const name = Towers.find({ _id: tower }).fetch();
    return name[0].title.charAt(0);
  },
  random() {
    const number = Math.floor((Math.random() * 3));
    const tab = ['Mmh?! New post here.', 'I think there might be something interesting here...', 'Hey! Wanna see something funky?'];
    return tab[number];
  },
});
