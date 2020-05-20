import { Template } from 'meteor/templating';

import '../templates/listPost.html';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Posts } from '../../api/collections.js';

import { Towers } from '../../api/towers.js';


Template.listPost.helpers({
  posts() {
    const id = FlowRouter.getParam('id');
    return Posts.find({ towerID: id }).fetch();
  },
  title() {
    const idTower = FlowRouter.getParam('id');
    return Towers.findOne({ _id: idTower });
  },
  id() {
    return FlowRouter.getParam('id');
  },
});
