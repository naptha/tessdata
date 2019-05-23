# @tess-data/asm

asm traineddata for tesseract.js

Most of the time, it is good enough for tesseract.js to download and cache traineddata files for you.
But when you need use tesseract.js in a pure offline mode, you can use this package to solve the issue of fetching traineddata from remote.

## Installation

```
$ npm install @tess-data/asm
```

## Usage

### Browser

```html
<script src="https://unpkg.com/@tess-data/asm@1.0.0/traineddata.js"></script>
<script src="https://unpkg.com/tesseract.js@2.0.0-alpha.9/dist/tesseract.min.js"></script>
<script>
  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker();

  worker
    .recognize('http://jeroen.github.io/images/testocr.png', [TESSDATA_ASM])
    .then((result) => {
      console.log(result);
    });
</script>
```

### Node.js

```javascript
const TESSDATA_ASM = require('@tess-data/asm');
const { TesseractWorker } = require('tesseract.js');
const worker = new TesseractWorker();

worker
  .recognize('http://jeroen.github.io/images/testocr.png', [TESSDATA_ASM])
  .then((result) => {
    console.log(result);
  });
```
