#!/bin/sh

lein cljsbuild once
cp -r resources/* ../
git checkout gh-pages
cp -r ../public/* ./
git add .
git commit . -m "Publish"
git push origin gh-pages
rm -rf ../public
git checkout master
