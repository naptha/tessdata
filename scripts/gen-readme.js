#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname, '..', '4.0.0'));
const version = '1.0.0';

files.forEach((file) => {
  const lang = file.split('.')[0];
  const readme =
`# @tess-data/${lang}

${lang} traineddata for tesseract.js

Most of the time, it is good enough for tesseract.js to download and cache traineddata files for you.
But when you need use tesseract.js in a pure offline mode, you can use this package to solve the issue of fetching traineddata from remote.

## Installation

\`\`\`
$ npm install @tess-data/${lang}
\`\`\`

## Usage

### Browser

\`\`\`html
<script src="https://unpkg.com/@tess-data/${lang}@${version}/traineddata.js"></script>
<script src="https://unpkg.com/tesseract.js@2.0.0-alpha.9/dist/tesseract.min.js"></script>
<script>
  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker();

  worker
    .recognize('http://jeroen.github.io/images/testocr.png', [TESSDATA_${lang.toUpperCase()}])
    .then((result) => {
      console.log(result);
    });
</script>
\`\`\`

### Node.js

\`\`\`javascript
const TESSDATA_${lang.toUpperCase()} = require('@tess-data/${lang}');
const { TesseractWorker } = require('tesseract.js');
const worker = new TesseractWorker();

worker
  .recognize('http://jeroen.github.io/images/testocr.png', [TESSDATA_${lang.toUpperCase()}])
  .then((result) => {
    console.log(result);
  });
\`\`\`
`;
  fs.writeFileSync(path.join(__dirname, '..', 'packages', lang, 'README.md'), readme);
});
