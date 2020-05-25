/* eslint-disable no-unused-vars */
import { Meteor } from 'meteor/meteor';
import '../imports/api/collections.js';
import '../imports/api/towers.js';
import '../imports/api/notifications.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.users.allow({
  update (userId, doc, fieldNames, modifier) {
    return true;
  },
});
