  
#!/usr/bin/env sh
set -e
npm run build
cd ../portfolio-static
rm -fr assets/ css/ js/ index.*
cp -r ../portfolio/build/* .
git add .
git commit -m "Updated static files"
git push -u origin master
