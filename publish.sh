#!/bin/sh

lein cljsbuild once
cp -r resources/public ../public
git checkout deploy -b
cp -r ../public/* ./
git add .
git commit . -m "Publish"
git push origin deploy
git push deploy deploy
git push deploy2 deploy
rm -rf ../public
