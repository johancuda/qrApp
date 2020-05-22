/* eslint-env jquery */
import { Template } from 'meteor/templating';

import '../templates/qrCode.html';

import QRCode from 'davidshimjs-qrcodejs';

Template.qrCode.onRendered(function() {
  const qr = new QRCode(document.getElementById('qrcode'), 'http://jindo.dev.naver.com/collie');
  return qr;
});
