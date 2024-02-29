var dsf_tmp_context = catvm.memory.variable.MimeTypeArray = {};
var MimeTypeArray = function MimeTypeArray() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(MimeTypeArray);//14

catvm.memory.variable.MimeTypeArray.iterator = function values() {
    // debugger;
    return {
        next:function () {
            if(this.index_ == undefined){
                this.index_ = 0;
            }
            var tmp = this.self_[this.index_];
            this.index_ += 1;
            return {value:tmp,done:tmp==undefined};
        },
        self_:this
    }
};
catvm.safefunction(catvm.memory.variable.MimeTypeArray.iterator);


//======	symbol code start	======
Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
		value: "MimeTypeArray",
	    configurable: true
	},
    [Symbol.iterator]: {
		value: catvm.memory.variable.MimeTypeArray.iterator,
	    configurable: true
	}
});//105
//======	symbol code end	======
// 遍历 PluginArray实例里面的所有Plugin实例
catvm.memory.variable.MimeTypeArray.mimetype_count = 0;
// todo 所有MimeType.type存放点
catvm.memory.variable.MimeTypeArray.mimeTypeArray = {};

for (let index = 0; index < catvm.memory.variable.PluginArray.pluginArray.length; index++) {
    let tmp_plugin = catvm.memory.variable.PluginArray.pluginArray[index];
    // 遍历 Plugin实例里面的所有MimeType实例，增加到 MimeTypeArray中
    catvm.memory.variable.PluginArray.pluginArray[index] = tmp_plugin;
    for(let m_index=0;m_index<tmp_plugin.length;m_index++){
        let tmp_mimetype = tmp_plugin.item(m_index);
        if(!(tmp_mimetype.type in catvm.memory.variable.MimeTypeArray.mimeTypeArray)){
            catvm.memory.variable.MimeTypeArray.mimeTypeArray[tmp_mimetype.type] = tmp_mimetype;
            catvm.memory.variable.MimeTypeArray.mimeTypeArray[catvm.memory.variable.MimeTypeArray.mimetype_count] = tmp_mimetype;
            catvm.memory.variable.MimeTypeArray.mimetype_count += 1;
            // mimetype.type浏览器显示的是灰色名称，下面这种添加属性会是亮的，因此我们需要换一种添加方式
            Object.defineProperty(catvm.memory.variable.MimeTypeArray.mimeTypeArray, tmp_mimetype.type, {
                value: tmp_mimetype,
                configurable: true
            });
        }
    }
}

catvm.memory.variable.MimeTypeArray.mimeTypeArray.__proto__ = MimeTypeArray.prototype;


//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
MimeTypeArray.prototype["item"] = function item(index){
    return this[index];
}; catvm.safefunction(MimeTypeArray.prototype["item"]);//215
MimeTypeArray.prototype["namedItem"] = function namedItem(type){
    return this[type];
}; catvm.safefunction(MimeTypeArray.prototype["namedItem"]);//215
//======	data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.length_getter = function length() {
    return catvm.memory.variable.MimeTypeArray.mimetype_count;
}; catvm.safefunction(dsf_tmp_context.length_getter);//295
Object.defineProperty(dsf_tmp_context.length_getter, "name", {
    value: "get length",
    configurable: true
});//301

Object.defineProperty(MimeTypeArray.prototype, "length", {
	get: dsf_tmp_context.length_getter,
	enumerable:true,
	configurable:true,
});//332

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.MimeTypeArray.mimeTypeArray.__defineGetter__("length",Object.getOwnPropertyDescriptor(MimeTypeArray.prototype,"length").get);
dsf_tmp_context.length_getter = function length(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.length_getter);
MimeTypeArray.prototype.__defineGetter__("length",dsf_tmp_context.length_getter);//394

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.MimeTypeArray.__function_item = Object.getOwnPropertyDescriptor(MimeTypeArray.prototype,"item").value; catvm.safefunction(catvm.memory.variable.MimeTypeArray.__function_item);
catvm.memory.variable.MimeTypeArray.mimeTypeArray.__defineGetter__("item",function item(){return catvm.memory.variable.MimeTypeArray.__function_item;});
MimeTypeArray.prototype["item"] = function item(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(MimeTypeArray.prototype["item"]);//408

catvm.memory.variable.MimeTypeArray.__function_namedItem = Object.getOwnPropertyDescriptor(MimeTypeArray.prototype,"namedItem").value; catvm.safefunction(catvm.memory.variable.MimeTypeArray.__function_namedItem);
catvm.memory.variable.MimeTypeArray.mimeTypeArray.__defineGetter__("namedItem",function namedItem(){return catvm.memory.variable.MimeTypeArray.__function_namedItem;});
MimeTypeArray.prototype["namedItem"] = function namedItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(MimeTypeArray.prototype["namedItem"]);//408

//======	invocation error func code end	======
// 依赖注入
//navigator.mimeTypes = catvm.memory.variable.MimeTypeArray.mimeTypeArray;
// 代理一般挂在实例上
//navigator.mimeTypes  = catvm.proxy(navigator.mimeTypes)

if(catvm.memory.config.framework_debugger){debugger;}