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

function getBranchNameAndDiff(callback) {
  // 获取当前分支名
  exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      callback(error, null, null);
      return;
    }
    const currentBranch = stdout.trim();
    
    // 获取增量差异代码
    exec('git diff --cached --diff-filter=A origin/main --name-only', (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        callback(error, null, null);
        return;
      }
      const diffFiles = stdout.trim().split('\n').filter(Boolean);
      // 过滤出 js 和 vue 文件
      const filteredFiles = diffFiles.filter(file => file.endsWith('.js') || file.endsWith('.vue'));
      callback(null, currentBranch, filteredFiles);
    });
  });
}

function main() {
  getBranchNameAndDiff((error, currentBranch, diffFiles) => {
    console.log('diffFiles', diffFiles)
    if (error) {
      console.error(`获取分支名或差异文件列表失败: ${error}`);
      process.exit(1);
    }
    const interfaceRegex = /lj\.[a-zA-Z]+(\.[a-zA-Z]+)*/g
    const uniqueMatches = new Set();
    // 匹配接口
    for (const file of diffFiles) {
      exec(`cat ${file}`, (error, stdout, stderr) => {
        console.log(8)
        if (error) {
          console.error(`读取文件错误: ${error}`);
          return;
        }
        // 在文件内容中匹配正则表达式
        const matches = stdout.match(interfaceRegex);
        console.log('matches', typeof(stdout))
        if (matches) {
          matches.forEach(match => uniqueMatches.add(match.trim()));
        }
        
      });
      console.log(4)
    }
  });
}


main();


