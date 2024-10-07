#!/bin/bash

# 获取当前分支名
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "当前分支名: $CURRENT_BRANCH"

# 定义接口匹配的正则表达式
# 修改正则表达式以匹配以点号结尾的字符串
REGEX="\w+\.\w+((?:\.\w+)*)"

# 初始化一个空数组
matched_strings=()

# 使用grep搜索符合正则表达式的字符串
echo "正在搜索文件: $file_to_check"
grep -Eo "$REGEX" "$file_to_check" | while IFS= read -r line; do
    # 将匹配的字符串添加到数组中
    matched_strings+=("$line")
    echo "匹配到的字符串: $line"

    echo "Matched strings: ${matched_strings[*]}"
done
