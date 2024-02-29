const { VM, VMScript } = require("vm2");
const fs = require('fs');
const axios = require('axios');


const vm = new VM();// 上下文
const file = `${__dirname}/sandbox.js`;
const script = new VMScript(fs.readFileSync(file), `${__dirname}/code_temp.js`);

vm.setGlobal("catvm_node", {
    axios: axios
});
var result = vm.run(script);


const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// v8-isolate.h isolate 隔离沙箱
// v8-context.h  环境上下文  window 隔离
// v8-script.h 预编译
// v8-template.h 类型 Object Function 多态
// handle 句柄 唯一的一个Int32值
var a = 1; // 1421421句柄值