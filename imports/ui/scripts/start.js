import '../templates/start.html';

import { Template } from 'meteor/templating';

import { Towers } from '../../api/towers.js';

Template.start.helpers({
  towers() {
    const tow = Towers.find().fetch();
    return tow;
  },
});

Template.start.onRendered(function() {
  setTimeout(function () {
    const tow = Towers.find().fetch();
    if (tow.length === 0) {
      Towers.insert({
        title: 'firstTower',
        createdAt: new Date(),
      });
    }
  }, 1000);
});
