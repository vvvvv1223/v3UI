#! /usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error}`);
    return;
  }
  const currentBranch = stdout.trim();
  console.log(`当前分支名e: ${currentBranch}`);

// 定义接口匹配的正则表达式
  const interfaceRegex = /lj\.\w+\.\w+\.\w+\.\w+/g;
 
//  获取本次提交和远程master分支的差异
  exec('git diff --cached --diff-filter=A origin/main', (error, diff, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      return;
    }
    console.log(`比对获取到的差异代码：`, diff);

    let matchedStrings = [];
    const matches = diff.match(interfaceRegex) || [];

    const uniqueMatches = [...new Set(matches)];

    console.log("final:", uniqueMatches.join(', '));
    process.exit(1)
  });
  //   process.exit(0)
});
