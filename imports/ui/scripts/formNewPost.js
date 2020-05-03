/* eslint-disable no-param-reassign */
import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/collections.js';

import '../templates/formNewPost.html';

Template.formNewPost.events({
  // eslint-disable-next-line no-unused-vars
  'submit .js-new-post' (event, templateInstance) {
    event.preventDefault();
    const titleVal = event.target.title.value;
    const textVal = event.target.text.value;

    Posts.insert({
      title: titleVal,
      text: textVal,
      createdAt: new Date(),

      auteurID: Meteor.userId(),

      auteurMail: Meteor.user().emails[0].address,
    });


    event.target.title.value = '';
    event.target.text.value = '';
  },
});
