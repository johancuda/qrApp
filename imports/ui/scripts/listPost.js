import { Template } from 'meteor/templating';

import '../templates/listPost.html';

import { Posts } from '../../api/collections.js';

import { Towers } from '../../api/towers.js';

Template.listPost.helpers({
  posts() {
    const id = window.location.pathname.slice(1);
    return Posts.find({ towerID: id }).fetch();
  },
  title() {
    let idTower = window.location.pathname;
    idTower = idTower.slice(1);
    return Towers.findOne({ _id: idTower });
  },
  id() {
    return window.location.pathname.slice(1);
  },
});
