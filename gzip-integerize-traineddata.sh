#!/bin/bash

## Same as gzip-traineddata.sh except the `combine_tessdata` utility is used to integerize the data.
## This is useful because the official Tesseract repos do not include LSTM-only + integerized versions of tessdata_best.
## Requires having the `combine_tessdata` utility in $PATH, which can be compiled along with Tesseract. 

SOURCE=$1
TARGET=$2
CURRENT_DIR=$PWD

cd $SOURCE
for tdata in $(ls *.traineddata);do
  cp $tdata $CURRENT_DIR/$TARGET/$tdata
  combine_tessdata -c $CURRENT_DIR/$TARGET/$tdata
  rm -rf $CURRENT_DIR/$TARGET/$tdata.gz
  gzip $CURRENT_DIR/$TARGET/$tdata
done
cd -
