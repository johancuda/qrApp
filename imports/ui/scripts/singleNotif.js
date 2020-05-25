import '../templates/singleNotif.html';

import { Template } from 'meteor/templating';

import { Towers } from '../../api/towers.js';

Template.singleNotif.helpers({
  towerName() {
    const tower = this.notif.towerId;
    const name = Towers.find({ _id: tower }).fetch();
    return name[0].title;
  },
});
