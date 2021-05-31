#!/usr/bin/env sh

# 發生任何錯誤時終止
set -e

# 構建
npm run build

# 進入輸出產物文件夾
cd dist

# 如果你要部署到自定義域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/chupai/hexschool-bootstrap5-21.git master:gh-pages

cd -
