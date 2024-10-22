#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const Dubbo = require('@didi/nodex-dubbo')

const dubbo = new Dubbo.default({
  zk: {
    host: '10.78.128.20:10010'
  },
  env: 'stable',
})

exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error}`);
    return;
  }
  console.log('333',stdout)
  const currentBranch = stdout.trim();
  console.log(`当前分支名: ${currentBranch}`);

  const interfaceRegex = /lj\.\w+\.\w+\.\w+\.\w+/g;

  exec('git diff --cached --diff-filter=A origin/main', (error, diff, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      return;
    }
    console.log(`比对获取到的差异代码：`, diff);

    const matches = diff.match(interfaceRegex) || [];
    const uniqueMatches = [...new Set(matches)];
    console.log('hahaha', matches,uniqueMatches)
    process.exit(1);
  });
});
