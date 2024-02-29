// 构造函数
function XMLHttpRequest() {
    this.timeout = 0;
    this.responseType = "";
}
// 补对应原型所需属性
(function (prototype_, names) {
    names.forEach((item) => {
        prototype_[item] = new TypeError("不允许直接通过原型访问的属性")
    })
})(XMLHttpRequest.prototype, ["timeout", "responseType", "onload"]);

// 补对应原型所需函数-open
XMLHttpRequest.prototype.open = function open(method, url, async = true, user = "", password = "") {

    if (arguments.length >= 2) {
        this.method = method;
        this.url = url;
        this.async = async;
        this.user = user;
        this.password = password;

    } else {
        throw new TypeError("参数过少");
    }
}
// 补对应原型所需函数-send
XMLHttpRequest.prototype.send = function send(body = null) {
    this.body = body;
    catvm_node.axios({
        method: this.method,
        url: this.url,
        auth: {
            username: this.user,
            password: this.password
        },
        timeout: this.timeout,
        responseType: this.responseType == "" ? "text" : this.responseType
    }).then((responseData) => {
        debugger;
        this.response = responseData;
        if (this.onload) {
            this.onload.call(this, responseData);
        }
    })
}

// 浏览器底层发包调用逻辑
// 1.创建xhr对象
var xhr = new XMLHttpRequest();
// 2.设置xhr请求超时时间
xhr.timeout = 3000;
// 3.设置响应的数据返回格式
xhr.responseType = "text";
// 4.创建一个请求，采用异步
xhr.open("GET", "https://zh-hans.ipshu.com/my_info", true)
// 5.注册相关事件回调处理函数
xhr.onload = function (e) {
    debugger;
    if (this.status == 200 || this.status == 304) {
        alert(this.responseData)
    }
}
// 6.发送数据
xhr.send();