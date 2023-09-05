#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  const indexjs =
    `const path = require('path');

module.exports = {
  code: '${lang}',
  gzip: true,
  langPath: path.join(__dirname, '4.0.0')
};`
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'index.js'), indexjs);
});