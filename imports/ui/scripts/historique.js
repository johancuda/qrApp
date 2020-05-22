import '../templates/historique.html';

import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/collections.js';

Template.historique.helpers({
  posts() {
    const id = Meteor.userId();
    return Posts.find({ auteurID: id }).fetch();
  },
});
