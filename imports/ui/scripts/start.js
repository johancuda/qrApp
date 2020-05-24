import '../templates/start.html';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Template } from 'meteor/templating';

import { Towers } from '../../api/towers.js';

Template.start.helpers({
  towers() {
    const tow = Towers.find().fetch();
    if (!tow) {
      FlowRouter.go('create');
      return 0;
    }
    return tow;
  },
});
