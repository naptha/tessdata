#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  const indexjs =
    `const fs = require('fs');
const path = require('path');

const buff = fs
  .readFileSync(path.join(__dirname, '${lang}.traineddata.gz'))

module.exports = {
  code: '${lang}',
  gzip: true,
  data: buff,
};`
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'index.js'), indexjs);
});