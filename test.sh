#!/bin/bash

# 获取当前分支名
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# 检查当前分支是否是 master
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "非master分支，跳过pre-commit hook."
    exit 0
fi

# 获取本次提交和远程master分支的差异
DIFF=$(git diff --cached origin/master)
echo "比对获取到的差异代码：" $DIFF


# 定义接口匹配的正则表达式
REGEX="^[a-zA-Z]+(\.[a-zA-Z]+)*$"

# 查找新增的接口，备注：当前是用于测试，实际需要格式化成数组
NEW_INTERFACES=$(echo "$DIFF" | grep -E "$REGEX")
echo "查询到的接口：" $NEW_INTERFACES

