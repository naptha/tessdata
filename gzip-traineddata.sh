#!/bin/bash
VERSION=$1

for tdata in $(ls $VERSION/);do
  gzip $VERSION/$tdata
done
