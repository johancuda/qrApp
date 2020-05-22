/* eslint-env jquery */
import { Template } from 'meteor/templating';

import '../templates/qrCode.html';

import { QRCode } from 'davidshimjs-qrcodejs';
// import { QRCode } from '../../api/qrcode.min.js';

Template.qrCode.onCreated(function() {
  return new QRCode(document.getElementById('qrcode'), 'http://jindo.dev.naver.com/collie');
});
