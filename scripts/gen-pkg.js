#!/usr/bin/env node
const fs = require('fs');
const path = require('path');


const genPkg = (lang, version) => ( 
`{
  "name": "@tesseract.js-data/${lang}",
  "version": "${version}",
  "description": "traineddata for tesseract.js",
  "main": "index.js",
  "author": "Balearica <admin@scribeocr.com>",
  "contributors": [{"name": "Balearica"}, {"name": "jeromewu"}],
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/naptha/tessdata.git"
  },
  "bugs": {
    "url": "https://github.com/naptha/tessdata/issues"
  },
  "homepage": "https://github.com/naptha/tessdata"
}`);

const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  fs.mkdirSync(path.join(__dirname, '..', 'packages', lang));
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'package.json'), genPkg(lang, '1.0.0'));
});