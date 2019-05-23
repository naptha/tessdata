# @tess-data/srp_latn

srp_latn traineddata for tesseract.js

Most of the time, it is good enough for tesseract.js to download and cache traineddata files for you.
But when you need use tesseract.js in a pure offline mode, you can use this package to solve the issue of fetching traineddata from remote.

## Installation

```
$ npm install @tess-data/srp_latn
```

## Usage

### Browser

```html
<script src="https://unpkg.com/@tess-data/srp_latn@1.0.0/traineddata.js"></script>
<script src="https://unpkg.com/tesseract.js@2.0.0-alpha.9/dist/tesseract.min.js"></script>
<script>
  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker();

  worker
    .recognize('http://jeroen.github.io/images/testocr.png', [TESSDATA_SRP_LATN])
    .then((result) => {
      console.log(result);
    });
</script>
```

### Node.js

```javascript
const TESSDATA_SRP_LATN = require('@tess-data/srp_latn');
const { TesseractWorker } = require('tesseract.js');
const worker = new TesseractWorker();

worker
  .recognize('http://jeroen.github.io/images/testocr.png', [TESSDATA_SRP_LATN])
  .then((result) => {
    console.log(result);
  });
```
