var dsf_tmp_context = catvm.memory.variable.Plugin = {};
var Plugin = function Plugin() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Plugin);//14

catvm.memory.variable.Plugin.iterator = function values() {
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
catvm.safefunction(catvm.memory.variable.Plugin.iterator);
//======	symbol code start	======
Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
		value: "Plugin",
	    configurable: true
	},
	[Symbol.iterator]: {
		value: catvm.memory.variable.Plugin.iterator,
	    configurable: true
	}
});//85
//======	symbol code end	======

//======	data descriptor func code start	======
Plugin.prototype["item"] = function item(index){
    return this[index];
}; catvm.safefunction(Plugin.prototype["item"]);//215

Plugin.prototype["namedItem"] = function namedItem(type){
    // 传入MimeType的type，返回该MimeType对象
    return this[type];
}; catvm.safefunction(Plugin.prototype["namedItem"]);//215
//======	data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.name_getter = function name() {debugger;}; catvm.safefunction(dsf_tmp_context.name_getter);//295
Object.defineProperty(dsf_tmp_context.name_getter, "name", {
    value: "get name",
    configurable: true
});//301

Object.defineProperty(Plugin.prototype, "name", {
	get: dsf_tmp_context.name_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.filename_getter = function filename() {debugger;}; catvm.safefunction(dsf_tmp_context.filename_getter);//295
Object.defineProperty(dsf_tmp_context.filename_getter, "name", {
    value: "get filename",
    configurable: true
});//301

Object.defineProperty(Plugin.prototype, "filename", {
	get: dsf_tmp_context.filename_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.description_getter = function description() {debugger;}; catvm.safefunction(dsf_tmp_context.description_getter);//295
Object.defineProperty(dsf_tmp_context.description_getter, "name", {
    value: "get description",
    configurable: true
});//301

Object.defineProperty(Plugin.prototype, "description", {
	get: dsf_tmp_context.description_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.length_getter = function length() {debugger;}; catvm.safefunction(dsf_tmp_context.length_getter);//295
Object.defineProperty(dsf_tmp_context.length_getter, "name", {
    value: "get length",
    configurable: true
});//301

Object.defineProperty(Plugin.prototype, "length", {
	get: dsf_tmp_context.length_getter,
	enumerable:true,
	configurable:true,
});//332

//======	access descriptor code end	======





//======	invocation error prop code start	======
// todo: 相比于Navigator，多实例的Plugin无须为实例指定getter，因为这样就相当于只能有一个实例；同理也不用对 func做getter处理
//plugin.__defineGetter__("name",Object.getOwnPropertyDescriptor(Plugin.prototype,"name").get);
dsf_tmp_context.name_getter = function name(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.name_getter);
Plugin.prototype.__defineGetter__("name",dsf_tmp_context.name_getter);//394

dsf_tmp_context.filename_getter = function filename(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.filename_getter);
Plugin.prototype.__defineGetter__("filename",dsf_tmp_context.filename_getter);//394

dsf_tmp_context.description_getter = function description(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.description_getter);
Plugin.prototype.__defineGetter__("description",dsf_tmp_context.description_getter);//394

dsf_tmp_context.length_getter = function length(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.length_getter);
Plugin.prototype.__defineGetter__("length",dsf_tmp_context.length_getter);//394
//======	invocation error prop code end	======
//======	invocation error func code start	======
// 因为实例会用到这个方法，因此直接在原型上实现，所有注释掉这个
//Plugin.prototype["item"] = function item(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Plugin.prototype["item"]);//408
//Plugin.prototype["namedItem"] = function namedItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Plugin.prototype["namedItem"]);//408


// todo：当需要创建多个实例时，可以用这种写法，以前的那种写法只能有一个实例，如navigator
dsf_tmp_context.data = { name: 'Chrome PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format',MimeTypes:[{"description": "Portable Document Format","suffixes": "pdf","type": "application/pdf"},{"description": "xxxxx","suffixes": "xxxxpdf","type": "xxxxapplication/pdf"}]};

catvm.memory.variable.Plugin.new = function (data) {
    var plugin = {};
    if (data != undefined) {
        plugin.name = data.name;
        plugin.filename = data.filename;
        plugin.description = data.description;
        plugin.length = 0;
        // MimeType
        if (data.MimeTypes != undefined) {
            for (let index = 0; index < data.MimeTypes.length; index++) {
                var mimetypedata = data.MimeTypes[index];
                var mimetype = catvm.memory.variable.MimeType.new(mimetypedata, plugin);
                plugin[index] = mimetype;
                // mimetype.type浏览器显示的是灰色名称，下面这种添加属性会是亮的，因此我们需要换一种添加方式
                // plugin[mimetype.type] = mimetype;
                Object.defineProperty(plugin, mimetype.type, {
                    value: mimetype,
                    writable: true // 是否可以改变
                });
            }

            plugin.length = data.MimeTypes.length;
        }
    }
    plugin.__proto__ = Plugin.prototype;
    return catvm.proxy(plugin);
}


Plugin = catvm.proxy(Plugin);

if(catvm.memory.config.framework_debugger){debugger;}
