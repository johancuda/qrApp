import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import '../templates/listPost.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Posts } from '../../api/collections.js';

import { Towers } from '../../api/towers.js';


Template.listPost.helpers({
  posts() {
    const id = FlowRouter.getParam('id');
    return Posts.find({ towerId: id }).fetch();
  },
  title() {
    const idTower = FlowRouter.getParam('id');
    return Towers.findOne({ _id: idTower });
  },
  id() {
    return FlowRouter.getParam('id');
  },
  initials() {
    const idTower = FlowRouter.getParam('id');
    const name = Towers.find({ _id: idTower }).fetch();
    return name[0].title.charAt(0);
  },
});

Template.listPost.events({
  'click #like' (event) {
    event.preventDefault();
    const idTower = FlowRouter.getParam('id');
    const name = Towers.findOne({ _id: idTower });
    const user = Meteor.users.findOne({ _id: Meteor.userId() });
    Meteor.users.update({ _id: user._id }, { $push: { 'profile.towers': name._id } });
  },
});
