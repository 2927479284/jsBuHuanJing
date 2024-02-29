## 系统初始化
### vscode v8环境联调，需要进行如下配置：  
* 安装node依赖库
```commandline
//  配置nmp代理来提高速度，如设置淘宝镜像
npm config set registry https://registry.npm.taobao.org 
npm install vm2
```
* 创建create a launch.json
```commandline
在vscode运行那 点击create a launch.json file
```
* 修改.vscode/launch.json：
```json

{
    "version": "0.2.0",
    "configurations": [
        
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "联调",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "runtimeExecutable": "node-inspect",
            "program": "index.js"
        }
    ]
}
```
