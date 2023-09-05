#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));

files.forEach((file) => {
  const lang = file.split('.')[0];
  const readme =
`## Overview

${lang} traineddata for tesseract.js

Language-specific files are distributed in separate packages to allow users to only install the files they need.  >100 languages are supported. 

## Installation

\`\`\`
$ npm install @tesseract.js-data/${lang}
\`\`\`

## Usage

Documentation and examples can be found in the main [Tesseract.js repo](https://github.com/naptha/tesseract.js). 

`;
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'README.md'), readme);
});