var dsf_tmp_context = catvm.memory.variable.Location = {};
var Location = function Location() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Location);//11


//======	symbol code start	======
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
		value: "Location",
	    configurable: true
	}
});//82

var location = {};
location.__proto__ = Location.prototype; //24


//======	symbol code start	======
Object.defineProperties(location, {
    [Symbol.toPrimitive]: {}
});//72
//======	symbol code end	======



//======	diy data descriptor func code start	======
dsf_tmp_context.valueOf = function valueOf() {debugger;}; catvm.safefunction(dsf_tmp_context.valueOf);
Object.defineProperty(location, "valueOf", {
	value: dsf_tmp_context.valueOf
});//225
dsf_tmp_context.assign = function assign() {debugger;}; catvm.safefunction(dsf_tmp_context.assign);
Object.defineProperty(location, "assign", {
enumerable:true,
	value: dsf_tmp_context.assign
});//225
dsf_tmp_context.reload = function reload() {debugger;}; catvm.safefunction(dsf_tmp_context.reload);
Object.defineProperty(location, "reload", {
enumerable:true,
	value: dsf_tmp_context.reload
});//225
dsf_tmp_context.replace = function replace() {debugger;}; catvm.safefunction(dsf_tmp_context.replace);
Object.defineProperty(location, "replace", {
enumerable:true,
	value: dsf_tmp_context.replace
});//225
dsf_tmp_context.toString = function toString() {debugger;}; catvm.safefunction(dsf_tmp_context.toString);
Object.defineProperty(location, "toString", {
enumerable:true,
	value: dsf_tmp_context.toString
});//225
//======	diy data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.ancestorOrigins_getter = function ancestorOrigins() {debugger;}; catvm.safefunction(dsf_tmp_context.ancestorOrigins_getter);//270
Object.defineProperty(dsf_tmp_context.ancestorOrigins_getter, "name", {
    value: "get ancestorOrigins",
    configurable: true
});//276

Object.defineProperty(location, "ancestorOrigins", {
	get: dsf_tmp_context.ancestorOrigins_getter,
	enumerable:true,
});//307

dsf_tmp_context.href_getter = function href() {
    return catvm.memory.common_change_with_website["location$href"];
}; catvm.safefunction(dsf_tmp_context.href_getter);//270
Object.defineProperty(dsf_tmp_context.href_getter, "name", {
    value: "get href",
    configurable: true
});//276
dsf_tmp_context.href_setter = function href(href) {
    let a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
    location.protocol = a[1] ? a[1] : "";
    location.host = a[2] ? a[2] : "";
    location.port = a[3] ? a[3] : "";
    location.pathname = a[4] ? a[4] : "";
    location.search = a[5] ? a[5] : "";
    location.hash = a[6] ? a[6] : "";
    location.hostname = location.host;
    location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
}; catvm.safefunction(dsf_tmp_context.href_setter);//281
Object.defineProperty(dsf_tmp_context.href_setter, "name", {
value: "set href",
configurable: true
});//286

Object.defineProperty(location, "href", {
	get: dsf_tmp_context.href_getter,
	set: dsf_tmp_context.href_setter,
	enumerable:true,
});//307

dsf_tmp_context.origin_getter = function origin() {debugger;}; catvm.safefunction(dsf_tmp_context.origin_getter);//270
Object.defineProperty(dsf_tmp_context.origin_getter, "name", {
    value: "get origin",
    configurable: true
});//276

Object.defineProperty(location, "origin", {
	get: dsf_tmp_context.origin_getter,
	enumerable:true,
});//307

dsf_tmp_context.protocol_getter = function protocol() {
    return catvm.memory.common_change_with_website["location$protocol"];
}; catvm.safefunction(dsf_tmp_context.protocol_getter);//270
Object.defineProperty(dsf_tmp_context.protocol_getter, "name", {
    value: "get protocol",
    configurable: true
});//276
dsf_tmp_context.protocol_setter = function protocol() {debugger;}; catvm.safefunction(dsf_tmp_context.protocol_setter);//281
Object.defineProperty(dsf_tmp_context.protocol_setter, "name", {
value: "set protocol",
configurable: true
});//286

Object.defineProperty(location, "protocol", {
	get: dsf_tmp_context.protocol_getter,
	set: dsf_tmp_context.protocol_setter,
	enumerable:true,
});//307

dsf_tmp_context.host_getter = function host() {
    return catvm.memory.common_change_with_website["location$host"];
}; catvm.safefunction(dsf_tmp_context.host_getter);//270
Object.defineProperty(dsf_tmp_context.host_getter, "name", {
    value: "get host",
    configurable: true
});//276
dsf_tmp_context.host_setter = function host() {debugger;}; catvm.safefunction(dsf_tmp_context.host_setter);//281
Object.defineProperty(dsf_tmp_context.host_setter, "name", {
value: "set host",
configurable: true
});//286

Object.defineProperty(location, "host", {
	get: dsf_tmp_context.host_getter,
	set: dsf_tmp_context.host_setter,
	enumerable:true,
});//307

dsf_tmp_context.hostname_getter = function hostname() {debugger;}; catvm.safefunction(dsf_tmp_context.hostname_getter);//270
Object.defineProperty(dsf_tmp_context.hostname_getter, "name", {
    value: "get hostname",
    configurable: true
});//276
dsf_tmp_context.hostname_setter = function hostname() {debugger;}; catvm.safefunction(dsf_tmp_context.hostname_setter);//281
Object.defineProperty(dsf_tmp_context.hostname_setter, "name", {
value: "set hostname",
configurable: true
});//286

Object.defineProperty(location, "hostname", {
	get: dsf_tmp_context.hostname_getter,
	set: dsf_tmp_context.hostname_setter,
	enumerable:true,
});//307

dsf_tmp_context.port_getter = function port() {debugger;}; catvm.safefunction(dsf_tmp_context.port_getter);//270
Object.defineProperty(dsf_tmp_context.port_getter, "name", {
    value: "get port",
    configurable: true
});//276
dsf_tmp_context.port_setter = function port() {debugger;}; catvm.safefunction(dsf_tmp_context.port_setter);//281
Object.defineProperty(dsf_tmp_context.port_setter, "name", {
value: "set port",
configurable: true
});//286

Object.defineProperty(location, "port", {
	get: dsf_tmp_context.port_getter,
	set: dsf_tmp_context.port_setter,
	enumerable:true,
});//307

dsf_tmp_context.pathname_getter = function pathname() {debugger;}; catvm.safefunction(dsf_tmp_context.pathname_getter);//270
Object.defineProperty(dsf_tmp_context.pathname_getter, "name", {
    value: "get pathname",
    configurable: true
});//276
dsf_tmp_context.pathname_setter = function pathname() {debugger;}; catvm.safefunction(dsf_tmp_context.pathname_setter);//281
Object.defineProperty(dsf_tmp_context.pathname_setter, "name", {
value: "set pathname",
configurable: true
});//286

Object.defineProperty(location, "pathname", {
	get: dsf_tmp_context.pathname_getter,
	set: dsf_tmp_context.pathname_setter,
	enumerable:true,
});//307

dsf_tmp_context.search_getter = function search() {debugger;}; catvm.safefunction(dsf_tmp_context.search_getter);//270
Object.defineProperty(dsf_tmp_context.search_getter, "name", {
    value: "get search",
    configurable: true
});//276
dsf_tmp_context.search_setter = function search() {debugger;}; catvm.safefunction(dsf_tmp_context.search_setter);//281
Object.defineProperty(dsf_tmp_context.search_setter, "name", {
value: "set search",
configurable: true
});//286

Object.defineProperty(location, "search", {
	get: dsf_tmp_context.search_getter,
	set: dsf_tmp_context.search_setter,
	enumerable:true,
});//307

dsf_tmp_context.hash_getter = function hash() {debugger;}; catvm.safefunction(dsf_tmp_context.hash_getter);//270
Object.defineProperty(dsf_tmp_context.hash_getter, "name", {
    value: "get hash",
    configurable: true
});//276
dsf_tmp_context.hash_setter = function hash() {debugger;}; catvm.safefunction(dsf_tmp_context.hash_setter);//281
Object.defineProperty(dsf_tmp_context.hash_setter, "name", {
value: "set hash",
configurable: true
});//286

Object.defineProperty(location, "hash", {
	get: dsf_tmp_context.hash_getter,
	set: dsf_tmp_context.hash_setter,
	enumerable:true,
});//307

//======	access descriptor code end	======

location = catvm.proxy(location);
Location = catvm.proxy(Location);

if(catvm.memory.config.framework_debugger){debugger;}