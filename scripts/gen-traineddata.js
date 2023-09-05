#!/usr/bin/env node

// 2 directories are published to npm packages, as these are the files Tesseract.js pulls from automatically.
// These are (1) 4.0.0 (integerized LSTM "best" data + Legacy) and (2) 4.0.0_best_int (integerized LSTM "best" data only). 

const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  fs.mkdirSync(path.join(__dirname, '..', 'packages', lang, "4.0.0"));
  fs.copyFileSync(path.join(__dirname, '..', '4.0.0', file), path.join(__dirname, '..', 'packages', lang, "4.0.0", lang + ".traineddata.gz"));
});

const files2 = fs.readdirSync(path.join(__dirname, '..', '4.0.0_best_int'));

files2.forEach((file) => {
  const lang = file.split('.')[0];
  fs.mkdirSync(path.join(__dirname, '..', 'packages', lang, "4.0.0_best_int"));
  fs.copyFileSync(path.join(__dirname, '..', '4.0.0_best_int', file), path.join(__dirname, '..', 'packages', lang, "4.0.0_best_int", lang + ".traineddata.gz"));
});