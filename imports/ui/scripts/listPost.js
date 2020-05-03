import { Template } from 'meteor/templating';

import '../templates/listPost.html';

import { Posts } from '../../api/collections.js';

Template.listPost.helpers({
  posts() {
    return Posts.find().fetch();
  },
});
