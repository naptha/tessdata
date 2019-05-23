const fs = require('fs');
const path = require('path');

const str = fs
  .readFileSync(path.join(__dirname, 'traineddata.js'))
  .toString();

const b64Data = str.substring(
  str.lastIndexOf("atob(\"") + 6,
  str.lastIndexOf("\").split")
);

module.exports = {
  code: 'uig',
  gzip: false,
  data: Buffer.from(b64Data, 'base64'),
};