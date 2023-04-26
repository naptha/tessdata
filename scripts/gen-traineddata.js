#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  fs.copyFileSync(path.join(__dirname, '..', '4.0.0', file), path.join(__dirname, '..', 'packages', lang, lang + ".traineddata.gz"));

});