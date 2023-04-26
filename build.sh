rm -rf packages
mkdir packages
node scripts/gen-pkg.js
node scripts/gen-index.js
node scripts/gen-readme.js
node scripts/gen-traineddata.js