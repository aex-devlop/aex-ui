#! /bin/bash
# 判断是否有输入提交信息
if [ ! "$1" ]; then
    echo -e "\033[41;33m 请输入 commit message 后再重新运行！！！ \033[0m"
    exit
fi

echo -e "\033[32m 是否更新UI库 (y/n)? \033[0m"
read -r updata_lib
if echo "$updata_lib" | grep -iq "^y"; then
    yarn build:lib
    echo -e "\033[41;33m -------lib打包完成！！！------- \033[0m"
fi

# 提交源码
git add .
git commit -m "$1"
git push
echo -e "\033[41;33m -------UI库更新完毕！！！------- \033[0m"

echo -e "\033[32m 是否更新文档 (y/n)? \033[0m"
read -r updata_doc
if echo "$updata_doc" | grep -iq "^y"; then
    yarn build:doc
    # 更新文档
    cd ./examples/aex-ui-doc || exit
    git add .
    git commit -m "$1"
    git push origin master --force
    echo -e "\033[41;33m -------文档更新完毕！！！------- \033[0m"
    cd ../..
fi
