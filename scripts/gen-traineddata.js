#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  const b64Data = Buffer.from(fs.readFileSync(path.join(__dirname, '..', '4.0.0', file)), 'binary').toString('base64');
  const indexjs =
    `const fs = require('fs');
const path = require('path');

const str = fs
  .readFileSync(path.join(__dirname, 'traineddata.js'))
  .toString();

const b64Data = str.substring(
  str.lastIndexOf("atob(\\"") + 6,
  str.lastIndexOf("\\").split")
);

module.exports = {
  code: '${lang}',
  gzip: false,
  data: Buffer.from(b64Data, 'base64'),
};`
    const traineddatajs =
    `!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TESSDATA_${lang.toUpperCase()}=t():e.TESSDATA_${lang.toUpperCase()}=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){e.exports={code:"${lang}",gzip:!1,data:new Uint8Array(atob("${b64Data}").split("").map(e=>e.charCodeAt(0)))}}])});`;
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'index.js'), indexjs);
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'traineddata.js'), traineddatajs);
});
