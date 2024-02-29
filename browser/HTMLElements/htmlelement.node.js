// .node.js文件的用途就是拼接多个文件的js代码
var fs = require('fs');

function GetCode() {
    var code = ""

    code += fs.readFileSync(`${__dirname}/HTMLTitleElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLParagraphElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLMetaElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLLinkElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLFormElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLInputElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLButtonElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLAnchorElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLSpanElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLCanvasElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLImageElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLScriptElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLDivElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLHeadElement.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/HTMLBodyElement.js`) + '\r\n';
    return code;

}
module.exports = {
    GetCode
}