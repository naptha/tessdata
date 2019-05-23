#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
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
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'index.js'), indexjs);
});
