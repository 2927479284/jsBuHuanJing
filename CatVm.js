const { VM, VMScript } = require("vm2");
const codeGenerate = require("./node_tools/CodeGenerate.js");
let catvmcfg = {
    memory: {
        prototypes: {},
        examples: {}
    }
}
module.exports = {
    run(path_) {
        let vm = new VM();
        let code = codeGenerate(path_);
        // new VMScript();
        // 1.执行的源代码
        // 2.执行后生成的文件(只读)
        let catvm = Object.assign(catvmcfg, {});
        vm.setGlobal("catvm", catvm);
        let vmScript = new VMScript(code, `${__dirname}/temps.js`);
        return vm.run(vmScript);
    }
}