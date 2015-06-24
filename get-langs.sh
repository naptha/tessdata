mkdir tarballs
wget --no-check-certificate -i langs.txt --directory-prefix=tarballs
for filename in tarballs/*.tar.gz
do
  tar zxvf $filename
done
mkdir tessdata
cp tesseract-ocr/tessdata/*.traineddata tessdata/

