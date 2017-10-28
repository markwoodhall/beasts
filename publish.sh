#!/bin/sh

lein cljsbuild once
cp -r resources/* ../
git checkout deploy
cp -r ../public/* ./
git add .
git commit . -m "Publish"
git push origin deploy
git push deploy deploy:master
git push deploy2 deploy:master
rm -rf ../public
