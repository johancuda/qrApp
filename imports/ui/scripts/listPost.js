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
    const like = document.getElementById('path');
    const d = like.getAttribute('d');
    if (d === 'M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z') {
      const idTower = FlowRouter.getParam('id');
      const name = Towers.findOne({ _id: idTower });
      const user = Meteor.users.findOne({ _id: Meteor.userId() });
      Meteor.users.update({ _id: user._id }, { $push: { 'profile.towers': name._id } });
      like.setAttribute('d', 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z');
    } else {
      const idTower = FlowRouter.getParam('id');
      const name = Towers.findOne({ _id: idTower });
      const user = Meteor.users.findOne({ _id: Meteor.userId() });
      Meteor.users.update({ _id: user._id }, { $pull: { 'profile.towers': name._id } });
      like.setAttribute('d', 'M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z');
    }
  },
});

Template.listPost.onRendered(function() {
  let towers = Meteor.user({ fields: { 'profile.towers': 1 } });
  towers = towers.profile.towers;
  const idTower = FlowRouter.getParam('id');
  const name = Towers.findOne({ _id: idTower });
  if (towers.includes(name._id)) {
    const like = document.getElementById('path');
    like.setAttribute('d', 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z');
  }
});
