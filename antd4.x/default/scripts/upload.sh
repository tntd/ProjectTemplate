#!/bin/bash

# 静态资源目录
staticPath="../dist"
# 项目名称
projectName="static-tnt_cli_identify"
# 部署的目标机器: 用户名 + ip
host="admin@10.57.19.209"
# 部署的目标机器，静态资源路径
targetPath="/home/admin/static"

if [ -n "$1" ]; then
    projectName=$1
fi
echo $projectName

cd $staticPath
if [ -f "${projectName}.tar.gz" ]; then 
    rm "${projectName}.tar.gz"
    echo $projectName
fi
echo $staticPath
tar -zcvf "${projectName}.tar.gz" *
echo "压缩完成。。。"
scp $projectName.tar.gz $host:$targetPath/$projectName
echo "发送静态资源包到目标机器完成"
ssh $host "cd $targetPath/$projectName; tar -xvf $projectName.tar.gz; rm -rf $projectName.tar.gz"
echo "解压完成：）"
