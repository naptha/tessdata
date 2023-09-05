#!/usr/bin/env node

// The first time a file is fetched from jsdelivr it is extremely slow.
// By fetching all files here no user will need to experience this. 
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch')

async function refresh() {
  const files = fs.readdirSync(path.join(__dirname, '4.0.0'));

  for (file in files) {
    const lang = file.split('.')[0];
    await fetch(`https://cdn.jsdelivr.net/npm/@tesseract.js-data/${lang}/4.0.0/${lang}.traineddata.gz`)
  }
  
  const files2 = fs.readdirSync(path.join(__dirname, '4.0.0_best_int'));
  
  for (file in files2) {
    const lang = file.split('.')[0];
    await fetch(`https://cdn.jsdelivr.net/npm/@tesseract.js-data/${lang}/4.0.0_best_int/${lang}.traineddata.gz`)
  }

}

refresh();