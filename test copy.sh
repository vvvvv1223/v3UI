#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { Dubbo, java } = require('apache-dubbo-js');

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

    console.log("final:", uniqueMatches.join(', '));

    // 调用 Dubbo 接口
    uniqueMatches.forEach((match) => {
      // 假设 match 是接口的完整路径，您需要根据实际情况解析接口名称和参数
      demoService.sayHello('World', 30).then(res => {
        console.log(`Dubbo 接口响应: ${res}`);
      }).catch(err => {
        console.error(`调用 Dubbo 接口出错: ${err}`);
      });
    });

    process.exit(1);
  });
});