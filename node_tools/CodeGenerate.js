// 读取js代码
const fs = require("fs");
module.exports = function (path_) {
    let code = "";
    function AddPath(path) {
        code += fs.readFileSync("./browser/" + path)
    }
    AddPath("/vm_tools/Safefunction.js");

    code += fs.readFileSync(path_);
    fs.writeFileSync(`${__dirname}/temp.js`, code);
    debugger;
    return code;
}