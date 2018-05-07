/*
    argv 启动程序时返回的参数 Array
    argv0 
    execArgv 
    execPath

*/
const chalk = require('chalk')

const { argv, argv0, execArgv, execPath } = process

argv.forEach(e => {
    console.log(chalk.red('argv **', e))
});

console.log(chalk.red('argv0**', argv0))
//console.log(argv0);

//1,不带参数 返回  
    // node process.js 执行
    //argv ** D:\Program Files\node.exe
    //argv ** G:\node'\process.js
//2,带参数
    // node process.js --test a=1 b=2执行
    // argv ** D:\Program Files\node.exe
    // argv ** G:\node'\process.js
    // argv ** --test
    // argv ** a=1
    // argv ** b=2
    // argv0** node

    console.log(chalk.red('execArgv**', execArgv))

// node --inspect process.js --test a=1 b=2执行
    // Debugger listening on ws://127.0.0.1:9229/7b3bf995-ca3c-4d4e-b422-3306ca483498
    // For help see https://nodejs.org/en/docs/inspector
    // argv ** D:\Program Files\node.exe
    // argv ** G:\node'\process.js
    // argv ** --test
    // argv ** a=1
    // argv ** b=2
    // argv0** node
    // execArgv** --inspect
    console.log(chalk.red('execPath**', execPath))
//node --inspect process.js --test a=1 b=2执行
    // Debugger listening on ws://127.0.0.1:9229/041276de-b9ab-44fb-a6a9-6b44100dc7e5
    // For help see https://nodejs.org/en/docs/inspector
    // argv ** D:\Program Files\node.exe
    // argv ** G:\node'\process.js
    // argv ** --test
    // argv ** a=1
    // argv ** b=2
    // argv0** node
    // execArgv** --inspect
    // execPath** D:\Program Files\node.exe