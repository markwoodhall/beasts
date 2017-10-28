#!/bin/sh

lein cljsbuild once
cp -r resources/public ../public
git checkout deploy -b
cp -r ../public/* ./
git add .
git commit . -m "Publish"
git push origin master
git push deploy master
git push deploy2 master
rm -rf ../public
