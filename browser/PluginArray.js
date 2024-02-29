var dsf_tmp_context = catvm.memory.variable.PluginArray = {};
var PluginArray = function PluginArray() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(PluginArray);//14


catvm.memory.variable.PluginArray.iterator = function values() {
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
catvm.safefunction(catvm.memory.variable.PluginArray.iterator);

//======	symbol code start	======
Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
		value: "PluginArray",
	    configurable: true
	},
    [Symbol.iterator]: {
		value: catvm.memory.variable.PluginArray.iterator,
	    configurable: true
	}
});//105
//======	symbol code end	======

// todo PluginArray实例, PluginArray这个虽然跟Plugin很像，但是无需被new，浏览器一开始就有该实例 navigator.plugins
catvm.memory.variable.PluginArray.pluginArray = {};
catvm.memory.variable.PluginArray.ls = [
        {
            "name": "PDF Viewer",
            "filename": "internal-pdf-viewer",
            "description": "Portable Document Format",
            "MimeTypes": [
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "application/pdf"
                },
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "text/pdf"
                }
            ]
        },
        {
            "name": "Chrome PDF Viewer",
            "filename": "internal-pdf-viewer",
            "description": "Portable Document Format",
            "MimeTypes": [
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "application/pdf"
                },
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "text/pdf"
                }
            ]
        },
        {
            "name": "Chromium PDF Viewer",
            "filename": "internal-pdf-viewer",
            "description": "Portable Document Format",
            "MimeTypes": [
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "application/pdf"
                },
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "text/pdf"
                }
            ]
        },
        {
            "name": "Microsoft Edge PDF Viewer",
            "filename": "internal-pdf-viewer",
            "description": "Portable Document Format",
            "MimeTypes": [
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "application/pdf"
                },
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "text/pdf"
                }
            ]
        },
        {
            "name": "WebKit built-in PDF",
            "filename": "internal-pdf-viewer",
            "description": "Portable Document Format",
            "MimeTypes": [
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "application/pdf"
                },
                {
                    "description": "Portable Document Format",
                    "suffixes": "pdf",
                    "type": "text/pdf"
                }
            ]
        }
    ]
for (let index = 0; index < catvm.memory.variable.PluginArray.ls.length; index++) {
    let tmp_plugin = catvm.memory.variable.Plugin.new(catvm.memory.variable.PluginArray.ls[index]);
    catvm.memory.variable.PluginArray.pluginArray[index] = tmp_plugin;
    // mimetype.type浏览器显示的是灰色名称，下面这种添加属性会是亮的，因此我们需要换一种添加方式
    Object.defineProperty(catvm.memory.variable.PluginArray.pluginArray, tmp_plugin.name, {
        value: tmp_plugin,
        configurable:true
    });
}

catvm.memory.variable.PluginArray.pluginArray.__proto__ = PluginArray.prototype;


//======	data descriptor func code start	======
PluginArray.prototype["item"] = function item(index){
    return this[index];
}; catvm.safefunction(PluginArray.prototype["item"]);//215
PluginArray.prototype["namedItem"] = function namedItem(type){
    // 传入Plugin的name，返回该Plugin对象
    return this[type];
}; catvm.safefunction(PluginArray.prototype["namedItem"]);//215
PluginArray.prototype["refresh"] = function refresh(){debugger;}; catvm.safefunction(PluginArray.prototype["refresh"]);//215
//======	data descriptor func code end	======

//======	access descriptor code start	======

dsf_tmp_context.length_getter = function length() {
    return catvm.memory.variable.PluginArray.ls.length;
}; catvm.safefunction(dsf_tmp_context.length_getter);//295
Object.defineProperty(dsf_tmp_context.length_getter, "name", {
    value: "get length",
    configurable: true
});//301

Object.defineProperty(PluginArray.prototype, "length", {
	get: dsf_tmp_context.length_getter,
	enumerable:true,
	configurable:true,
});//332

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.PluginArray.pluginArray.__defineGetter__("length",Object.getOwnPropertyDescriptor(PluginArray.prototype,"length").get);
dsf_tmp_context.length_getter = function length(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.length_getter);
PluginArray.prototype.__defineGetter__("length",dsf_tmp_context.length_getter);//394

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.PluginArray.__function_item = Object.getOwnPropertyDescriptor(PluginArray.prototype,"item").value; catvm.safefunction(catvm.memory.variable.PluginArray.__function_item);
catvm.memory.variable.PluginArray.pluginArray.__defineGetter__("item",function item(){return catvm.memory.variable.PluginArray.__function_item;});
PluginArray.prototype["item"] = function item(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(PluginArray.prototype["item"]);//408

catvm.memory.variable.PluginArray.__function_namedItem = Object.getOwnPropertyDescriptor(PluginArray.prototype,"namedItem").value; catvm.safefunction(catvm.memory.variable.PluginArray.__function_namedItem);
catvm.memory.variable.PluginArray.pluginArray.__defineGetter__("namedItem",function namedItem(){return catvm.memory.variable.PluginArray.__function_namedItem;});
PluginArray.prototype["namedItem"] = function namedItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(PluginArray.prototype["namedItem"]);//408

catvm.memory.variable.PluginArray.__function_refresh = Object.getOwnPropertyDescriptor(PluginArray.prototype,"refresh").value; catvm.safefunction(catvm.memory.variable.PluginArray.__function_refresh);
catvm.memory.variable.PluginArray.pluginArray.__defineGetter__("refresh",function refresh(){return catvm.memory.variable.PluginArray.__function_refresh;});
PluginArray.prototype["refresh"] = function refresh(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(PluginArray.prototype["refresh"]);//408

//======	invocation error func code end	======
//navigator.plugins = catvm.memory.variable.PluginArray.pluginArray;
//navigator.plugins = catvm.proxy(navigator.plugins);

if(catvm.memory.config.framework_debugger){debugger;}
