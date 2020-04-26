/* eslint-disable no-param-reassign */
/* eslint-disable meteor/template-names */


import './main.html';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Posts } from '../both/collections.js';

// eslint-disable-next-line no-undef
Template.form_new_post.events({
  // eslint-disable-next-line no-unused-vars
  'submit .js-new-post' (event, templateInstance) {
    event.preventDefault();
    const titleVal = event.target.title.value;
    const textVal = event.target.text.value;

    Posts.insert({
      title: titleVal,
      text: textVal,
      createdAt: new Date(),
    });


    event.target.title.value = '';
    event.target.text.value = '';
  },
});

Template.list_post.helpers({
  posts() {
    return Posts.find().fetch();
  },
});
