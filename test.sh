#!/bin/bash

# 获取当前分支名
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "当前分支名: $CURRENT_BRANCH"

# 定义接口匹配的正则表达式
# 获取本次提交和远程master分支的差异
DIFF=$(git diff --cached origin/main)
echo "比对获取到的差异代码：" $DIFF

# 搜索符合模式的字符串
matched_strings=()
INTERFACE_REGEX="lj\.\w+\.\w+\.\w+\.\w+"
NEW_INTERFACES=$(echo "$DIFF" | grep -E "$INTERFACE_REGEX")

echo $NEW_INTERFACES
# grep -Eo "lj\.\w+\.\w+\.\w+\.\w+" "$file_to_check" | while IFS= read -r line; do
#     # 将匹配的字符串添加到数组中
#     matched_strings+=("$line")
#     echo "final: ${matched_strings[*]}"
# done

# 在循环外部打印数组内容
# echo "final: ${matched_strings[*]}"
