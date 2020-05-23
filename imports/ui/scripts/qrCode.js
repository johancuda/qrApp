/* eslint-disable no-unused-vars */
/* eslint-env jquery */
import { Template } from 'meteor/templating';

import '../templates/qrCode.html';

import QRCode from 'davidshimjs-qrcodejs';

Template.qrCode.onRendered(function() {
  const qr = new QRCode(document.getElementById('qrcode'), 'http://jindo.dev.naver.com/collie');
});

/* Template.qrCode.events({
  'click #download' (event) {
    event.preventDefault();
    const src = $('img').attr('src');
    $('a').attr('href', src);
  },
}); */
