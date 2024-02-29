// 框架代理功能

catvm.proxy = function (obj) {
    // Proxy 可以多层代理，即 a = new proxy(a); a = new proxy(a);第二次代理
    // 后代理的检测不到先代理的
    if (catvm.memory.config.proxy == false) {
        return obj
    }

    try{
        var proxy = new Proxy(obj, {
        set(target, property, value) {
            try{
                if (catvm.memory.config.print){
                    let log_info = {"类型":"set-->","调用者":target,"调用属性":property,"设置值":value,"值类型":typeof value};
                    catvm.print.log([log_info]);
                    catvm.memory.log.push(log_info);
                }
            }catch{
                debugger;
            }
            return Reflect.set(...arguments); //这是一种反射语句，这种不会产生死循环问题

        },
        get(target, property, receiver) {
            try{
                if (catvm.memory.config.print){
                    let log_info = {"类型":"get<--","调用者":target,"调用属性":property,"获取值":target[property],"值类型":typeof target[property]};
                    catvm.print.log([log_info]);
                    catvm.memory.log.push(log_info);
                }
            }catch{
                debugger;
            }
            return target[property];  // target中访问属性不会再被proxy拦截，所以不会死循环
        }
    });
    }catch{
        debugger;
    }
    return proxy;
}