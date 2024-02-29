var repair_obj_func_name = "Navigator_1";
var repair_obj = "Navigator_1.prototype";
var real_obj = Navigator.prototype;

var result_code = `var catvm = {safefunction:function(){}};
var ${repair_obj_func_name} = function ${repair_obj_func_name}() { // 构造函数
	throw new TypeError("Illegal constructor");
}; catvm.safefunction(${repair_obj_func_name});//13\n`

var start_code_ls = [result_code];
var symbol_code_ls = [`//======\tsymbol code start\t======\n`];
var data_prop_code_ls = [`//======\tdata descriptor property code start\t======\n`];
var data_func_code_ls = [`//======\tdata descriptor func code start\t======\n`];
var diy_data_prop_code_ls = [`//======\tdiy data descriptor property code start\t======\n`];
var diy_data_func_code_ls = [`//======\tdiy data descriptor func code start\t======\n`];
var access_prop_code_ls = [`//======\taccess descriptor code start\t======\n`];
var invocation_error_ls = [];
var all_normal_attr_ls = [];
// 存放非特殊的属性与方法名
// 直接调用会报错
var all_attrs = Reflect.ownKeys(real_obj);

// 暂时不处理在 continue_attrs 中的属性
function handle_continue_attrs(attr_name){
    let continue_attrs = ["prototype", "constructor"];
    if (continue_attrs.indexOf(attr_name) != -1) {
        console.log(`遇到 ${attr_name}，跳过`);
        return true
    }
}

// 处理 Symbol 类型属性
function handle_symbol_attrs(attr_name){
    let is_symbol = false;
    if (typeof attr_name == "symbol") {
        if (attr_name == Symbol.toPrimitive) {
            result_code = `Object.defineProperties(${repair_obj}, {
    [Symbol.toPrimitive]: {}
});//23\n`;
            symbol_code_ls.push(result_code);
            is_symbol = true;
        }
        if (attr_name == Symbol.toStringTag) {
            result_code = `Object.defineProperties(${repair_obj}, {
    [Symbol.toStringTag]: {
		value: "${real_obj[Symbol.toStringTag]}",
	    configurable: true
	}
});//23\n`;
            symbol_code_ls.push(result_code);
            is_symbol = true;
        }
    }
    return is_symbol;
}

// 记录不能直接调用的属性
function handle_invoke_error_attrs(attr_name){
    /*
  此语句大概就以下四种异常情况：
  Navigator.prototype.clearAppBadge()
  VM3355:1 Uncaught (in promise) TypeError: Failed to execute 'clearAppBadge' on 'Navigator': Illegal invocation
    at <anonymous>:1:21

  Navigator.prototype.javaEnabled()
  VM3387:1 Uncaught TypeError: Illegal invocation
    at <anonymous>:1:21

  a.b().catch(function(){console.log('xxx')});
  VM3614:1 Uncaught TypeError: Cannot read properties of undefined (reading 'catch')
    at <anonymous>:1:6

  VM3701:1 Uncaught TypeError: a.b is not a function
    at <anonymous>:1:3
  */
    try {
        all_normal_attr_ls.push(attr_name);
        real_obj[attr_name]().catch(function(error) {
            if (error.message.indexOf("Illegal invocation") != -1) {
                invocation_error_ls.push({
                    attr_name: attr_name,
                    error: `new TypeError("${error.message}")`
                });
            }
        });
    } catch (error) {
        if (error.message.indexOf("Illegal invocation") != -1) {
            invocation_error_ls.push({
                attr_name: attr_name,
                error: `new TypeError("${error.message}")`
            });
        }
    }
}

function judge_attr_type(attr_desc,attr_name){

    // 存取描述符独有
    let get_flag = attr_desc.hasOwnProperty("get");
    let set_flag = attr_desc.hasOwnProperty("set");
    // 数据描述符独有
    let writable_flag = attr_desc.hasOwnProperty("writable");
    let value_flag = attr_desc.hasOwnProperty("value");
    // 两者共享
    let enumerable_flag = attr_desc.hasOwnProperty("enumerable");
    let configurable_flag = attr_desc.hasOwnProperty("configurable");
    let enumerable_value = attr_desc["enumerable"];
    let configurable_value = attr_desc["configurable"];

    // 数据描述符
    if (value_flag && writable_flag) {
        let writable_value = attr_desc["writable"];
        let value_value = attr_desc["value"];
        if (typeof value_value == "string") {
            value_value = `"${value_value}"`;
        }
        //value原型不是普通类型，即是方法
        let is_methon_flag = attr_desc.value && attr_desc.value.__proto__ == Function.prototype;
        // let is_methon_flag = attr_desc.value && ['number','string','undefined'].indexOf(typeof attr_desc.value.__proto__) == -1;
        // 普通的数据描述符
        if (enumerable_value && configurable_value && writable_value) {
            if (is_methon_flag) {
                return "普通方法数据描述符";
            } else {
                return "普通属性数据描述符";
            }
        } else {
            if (is_methon_flag) {
                return "自定义方法数据描述符";
            } else {
                return "自定义属性数据描述符";
            }
        }
    }
    // 存取描述符
    if (get_flag && set_flag) {
        return "存取描述符"
}
}
for (let index = 0; index < all_attrs.length; index++) {
    let attr_name = all_attrs[index];
    // 暂时不处理在 continue_attrs 中的属性
    let is_continue = handle_continue_attrs(attr_name);
    if (is_continue) {continue}
    // 处理 Symbol 类型属性
    let is_symbol = handle_symbol_attrs(attr_name);
    if (is_symbol) {continue}

    // 收集无法直接调用的属性和方法；
    handle_invoke_error_attrs(attr_name);
    // 正常属性方法流程：
    let attr_desc = Object.getOwnPropertyDescriptor(real_obj, attr_name);
    let attr_type = judge_attr_type(attr_desc,attr_name);
    switch(attr_type){
        case "普通方法数据描述符":a(attr_name);break
        case "普通属性数据描述符":b(attr_desc,attr_name);break
        case "自定义方法数据描述符":c(attr_desc,attr_name);break
        case "自定义属性数据描述符":d(attr_desc,attr_name);break
        case "存取描述符":e(attr_desc,attr_name);break

    }
    // 普通方法数据描述符
    function a(attr_name,){
        result_code = `${repair_obj}["${attr_name}"] = function ${attr_name}(){debugger;}; catvm.safefunction(${repair_obj}["${attr_name}"]);//45\n`;
        data_func_code_ls.push(result_code);
    }
    //  普通属性数据描述符
    function b(attr_desc,attr_name){
        let value_value = attr_desc["value"];
        if (typeof value_value == "string") {
            value_value = `"${value_value}"`;
            console.log("string:", attr_name, value_value);
        }
        result_code = `${repair_obj}["${attr_name}"] = ${value_value};//48\n`;
        data_prop_code_ls.push(result_code);
    }
    //  自定义方法数据描述符
    function c(attr_desc,attr_name){
        let enumerable_value = attr_desc["enumerable"];
        let configurable_value = attr_desc["configurable"];
        let writable_value = attr_desc["writable"];
        let enumerable_code = configurable_code = writable_code = "";
        if (enumerable_value) {
            enumerable_code = `enumerable:${enumerable_value},\n`;
        }
        if (configurable_value) {
            configurable_code = `configurable:${configurable_value},\n`;
        }
        if (writable_code) {
            writable_code = `writable:${writable_value},\n`;
        }
        //实例方法  todo 实例方法.name 被修改的情况还未做处理。
        let func_name = `${attr_name}`;
        result_code = `var ${func_name} = function ${func_name}() {debugger;}; catvm.safefunction(${func_name});
Object.defineProperty(${repair_obj}, "${attr_name}", {
${enumerable_code}${configurable_code}${writable_code}	value: ${func_name}
});//70\n`;
        diy_data_func_code_ls.push(result_code);
    }

    //  自定义属性数据描述符
    function d(attr_desc,attr_name){
        let value_value = attr_desc["value"];
        if (typeof value_value == "string") {
            value_value = `"${value_value}"`;
            console.log("string:", attr_name, value_value);
        }
        let enumerable_value = attr_desc["enumerable"];
        let configurable_value = attr_desc["configurable"];
        let writable_value = attr_desc["writable"];
        let enumerable_code = configurable_code = writable_code = "";
        if (enumerable_value) {
            enumerable_code = `enumerable:${enumerable_value},\n`;
        }
        if (configurable_value) {
            configurable_code = `configurable:${configurable_value},\n`;
        }
        if (writable_code) {
            writable_code = `writable:${writable_value},\n`;
        }
        //实例属性
        result_code = `Object.defineProperty(${repair_obj}, "${attr_name}", {
${enumerable_code}${configurable_code}${writable_code}	value: ${value_value}
});//77\n`;
        diy_data_prop_code_ls.push(result_code);
    }
    //  存取描述符
    function e(attr_desc,attr_name){
        let enumerable_value = attr_desc["enumerable"];
        let configurable_value = attr_desc["configurable"];
        let getter = attr_desc["get"];
        let setter = attr_desc["set"];
        let is_getter_func = typeof getter == "function";
        let is_setter_func = typeof setter == "function";
        // 存放 getter、setter方法代码
        var getter_code = setter_code = "";
        let getter_func_name, setter_func_name;
        // 如果 get 存在且为函数时
        if (is_getter_func) {
            getter_func_name = `${attr_name}_getter`;
            getter_code = `var ${getter_func_name} = function ${attr_name}() {debugger;}; catvm.safefunction(${getter_func_name});//93\n`
            // 当前属性名与 getter函数的名字不一样时，说明 getter函数.name 属性被修改过，我们补的时候也要修改,name属性的其他特性是固定的
            if (getter.name != attr_name) {
                getter_code += `Object.defineProperty(${getter_func_name}, "name", {
	value: "${getter.name}",
	configurable: true
});//100\n`;
            }
        }
        if (is_setter_func) {
            setter_func_name = `${attr_name}_setter`;
            setter_code = `var ${setter_func_name} = function ${attr_name}() {debugger;}; catvm.safefunction(${setter_func_name});//105\n`
            if (setter.name != attr_name) {
                setter_code += `Object.defineProperty(${setter_func_name}, "name", {
	value: "${setter.name}",
	configurable: true
});//111\n`;
            }
        }
        result_code = getter_code + setter_code;
        access_prop_code_ls.push(result_code);
        // 存放属性的四个特性代码
        let enumerable_code = configurable_code = get_code = set_code = "";
        if (enumerable_value) {
            enumerable_code = `	enumerable:${enumerable_value},\n`;
        }
        if (configurable_value) {
            configurable_code = `	configurable:${configurable_value},\n`;
        }
        if (getter_func_name) {
            get_code = `	get: ${getter_func_name},\n`;
        }
        if (setter_func_name) {
            set_code = `	set: ${setter_func_name},\n`;
        }
        // 此时就可以对 getter\setter进行处理了
        result_code = `Object.defineProperty(${repair_obj}, "${attr_name}", {
	${get_code}${set_code}${enumerable_code}${configurable_code}});//131\n`;
        access_prop_code_ls.push(result_code);
    }

}

var finally_code = "";
symbol_code_ls.push(`//======\tsymbol code end\t======\n`);
data_prop_code_ls.push(`//======\tdata descriptor property code end\t======\n`);
data_func_code_ls.push(`//======\tdata descriptor func code end\t======\n`);
diy_data_prop_code_ls.push(`//======\tdiy data descriptor property code end\t======\n`);
diy_data_func_code_ls.push(`//======\tdiy data descriptor func code end\t======\n`);
access_prop_code_ls.push(`//======\taccess descriptor code end\t======\n`);
all_code_ls = [start_code_ls, symbol_code_ls, data_prop_code_ls, data_func_code_ls, diy_data_prop_code_ls, diy_data_func_code_ls, access_prop_code_ls];

all_code_ls.forEach(function(value) {
	let sep = "";
	if(value[0].indexOf("access descriptor")!=-1){
		sep = '\n';
	}
    finally_code += value.join(sep) + '\n\n';
    // console.log(Object.keys({value})[0],value.length);
});

function get_diff(all_normal_attr_ls, all_invocation_attr_ls) {
    return all_normal_attr_ls.filter(function(v) {
        if (all_invocation_attr_ls.indexOf(v) == -1) {
            return true
        }
    })
}

function doSomeLog() {
    console.log("symbol_code_ls：", symbol_code_ls.length);
    console.log("data_prop_code_ls：", data_prop_code_ls.length);
    console.log("data_func_code_ls：", data_func_code_ls.length);
    console.log("diy_data_prop_code_ls：", diy_data_prop_code_ls.length);
    console.log("diy_data_func_code_ls：", diy_data_func_code_ls.length);
    console.log("access_prop_code_ls：", access_prop_code_ls.length);
    console.log("invocation_error_ls：", invocation_error_ls.length, invocation_error_ls);
    console.log("all_normal_attr_ls：", all_normal_attr_ls.length, all_normal_attr_ls);

    window.all_invocation_attr_ls = [];
    invocation_error_ls.forEach(function(v) {
        all_invocation_attr_ls.push(v.attr_name)
    })

    window.diff_attrs = get_diff(all_normal_attr_ls, all_invocation_attr_ls);
    console.log("window.diff_attrs：", window.diff_attrs.length, window.diff_attrs);
}

setTimeout(doSomeLog, 1000);
