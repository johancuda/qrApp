import { Template } from 'meteor/templating';

import '../templates/listPost.html';

import { Posts } from '../../api/collections.js';

import { Towers } from '../../api/towers.js';

Template.listPost.helpers({
  posts() {
    return Posts.find().fetch();
  },
  title() {
    let idTower = window.location.pathname;
    idTower = idTower.slice(1);
    return Towers.findOne({ _id: idTower });
  },
});
