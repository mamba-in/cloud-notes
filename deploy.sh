#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd .vitepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:mamba-in/cloud-notes.git master:gh-pages

cd -

git add -A
read -p "Please enter the commit message:" COMMIT_MESSAGE
echo "Commit message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"
git push
echo '✨ Deploy finished'