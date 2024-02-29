// 伪造一个调用错误
catvm.memory.tool_funcs.get_invocation_error = function get_invocation_error() {
    let e = new Error();
    e.name = "TypeError";
    e.message = "Illegal constructor";
    e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n at <anonymous>:1:21";
    return e;
}


catvm.memory.tool_funcs.json_to_string = function json_to_string(dict_obj){
    var cookie_str = "";
    for(let key in dict_obj){
        cookie_str += `${key}=${dict_obj[key]}; `
    }
    // 正则去除末尾 '; '
    return cookie_str.replace(/; $/g,"")
}