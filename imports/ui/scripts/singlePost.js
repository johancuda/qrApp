import '../templates/singlePost.html';

import { Template } from 'meteor/templating';

Template.singlePost.helpers({
  initials() {
    const initial = this.post.auteurMail.charAt(0).toUpperCase() + this.post.auteurMail.split('.')[1].charAt(0).toUpperCase();
    return initial;
  },
});
