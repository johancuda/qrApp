import '../templates/singlePost.html';

import { Template } from 'meteor/templating';

Template.singlePost.helpers({
  initials() {
    const initial = this.post.auteurMail.charAt(0);
    return initial;
  },
});
