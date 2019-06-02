#!/bin/bash
SOURCE=$1
TARGET=$2
CURRENT_DIR=$PWD

cd $SOURCE
for tdata in $(ls *.traineddata);do
  cp $tdata $CURRENT_DIR/$TARGET/$tdata
  rm -rf $CURRENT_DIR/$TARGET/$tdata.gz
  gzip $CURRENT_DIR/$TARGET/$tdata
done
cd -
