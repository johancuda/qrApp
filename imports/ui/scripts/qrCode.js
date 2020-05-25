/* eslint-disable no-unused-vars */
/* eslint-env jquery */
import { Template } from 'meteor/templating';

import '../templates/qrCode.html';

import QRCode from 'davidshimjs-qrcodejs';

import { FlowRouter } from 'meteor/kadira:flow-router';

Template.qrCode.onRendered(function() {
  let url = FlowRouter.current().path;
  url = `${'http://192.168.1.24:3000'}${url}`;
  const qr = new QRCode(document.getElementById('qrcode'), url);
});

/* Template.qrCode.events({
  'click #download' (event) {
    event.preventDefault();
    const src = $('img').attr('src');
    $('a').attr('href', src);
  },
}); */
