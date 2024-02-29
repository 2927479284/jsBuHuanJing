// 框架内存管理，用于解决变量名重复问题
// 调试日志 window.catvm 把框架功能集中管理，

var catvm = {};
// 框架运行内存
catvm.memory = {
    config: {print: false, proxy: true, framework_debugger:false}, // 框架配置：是否打印，是否使用proxy, 默认关闭打印
    tool_funcs:{}, // 所有的工具函数存放位置
    hooks:{}, // 所有的hook的原始对象 存放位置
    htmlelements:{}, // 所有的html节点元素存放位置
    listeners:{}, // 所有事件存放位置
    log:[], // 环境调用日志统一存放点
    print:[], // 缓存
    storage:{}, // localStorage 全局存放点
    common_change_with_website:{ //常见且随网站而变化的值
        location$href: "https://fanyi.youdao.com/",
        location$host: "fanyi.youdao.com",
        location$protocol: "https:",
        document$characterSet: "UTF-8",
        canvas_data_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAAXNSR0IArs4c6QAABDVJREFUeF7tmiGLVGEYRp/NVjGKQdAmWA2C0T9gUDEYBcFgEhVZzILNIAhi8A+IFpM2EWxaRMyarfLCd+FjmB2un3PZM+zZpKNz58x5PM7cubMXfzSggQMN7OlGAxo42EAfyJkkN5M8TPJnhrQLSS4l2U9yP8n7JB+T1HFeJzmX5EH78xmH869ogGdg24F8TvIkycsk/a8rHH80sHMGth3Ir5VXof5VZufkCKyBdYGUlbtJ3iW5muT3ytumZ0nuJDm/5i1WBXK5vYrUcertVv97jWtgpwysBlLnDrfaucR0XvE1yeMk91osFU39/DCQndpa2AEDm95iTSF86k66p4e4tiGQ/kS/3mKdSvJqgM27aODQDcwJ5O3KK8gEve5TrDoxf5TkeZKf3Qm7J+mHPrUAIwbmBFL/+1cMH9oDfElyJcnxGR/z1iuNrx4jy3gfhAEvFCJmEIJqwECoy8iFMDASyL9ecUc8USE0MGLAQEaseZ8jY8BAjszUPtERA/8TSD1ef8X9bPvSYl0/qU+4niZ5keRGuyK/6bbbSb6NPAHvo4ElDYwGsu6Ke13rmC4unkjypv2jn3vbks/TY2tgyMBoIP3V8imA6XpHfUXl+8r1j7m3DT0J76SBpQxsO5CK5ViS0+1qer1tmnvbUs/R42pg2MA2A6kvL15v3/Q92Z2DXJxxm+cgwxN6xyUNjASyJI/H1gDKgIGg5hCGZsBAaIvIgzJgIKg5hKEZMBDaIvKgDBgIag5haAYMhLaIPCgDBoKaQxiaAQOhLSIPyoCBoOYQhmbAQGiLyIMyYCCoOYShGTAQ2iLyoAwYCGoOYWgGDIS2iDwoAwaCmkMYmgEDoS0iD8qAgaDmEIZmwEBoi8iDMmAgqDmEoRkwENoi8qAMGAhqDmFoBgyEtog8KAMGgppDGJoBA6EtIg/KgIGg5hCGZsBAaIvIgzJgIKg5hKEZMBDaIvKgDBgIag5haAYMhLaIPCgDBoKaQxiaAQOhLSIPyoCBoOYQhmbAQGiLyIMyYCCoOYShGTAQ2iLyoAwYCGoOYWgGDIS2iDwoAwaCmkMYmgEDoS0iD8qAgaDmEIZmwEBoi8iDMmAgqDmEoRkwENoi8qAMGAhqDmFoBgyEtog8KAMGgppDGJoBA6EtIg/KgIGg5hCGZsBAaIvIgzJgIKg5hKEZMBDaIvKgDBgIag5haAYMhLaIPCgDBoKaQxiaAQOhLSIPyoCBoOYQhmbAQGiLyIMyYCCoOYShGTAQ2iLyoAwYCGoOYWgGDIS2iDwoAwaCmkMYmgEDoS0iD8qAgaDmEIZmwEBoi8iDMmAgqDmEoRkwENoi8qAMGAhqDmFoBgyEtog8KAMGgppDGJoBA6EtIg/KgIGg5hCGZsBAaIvIgzJgIKg5hKEZMBDaIvKgDBgIag5haAYMhLaIPCgDBoKaQxiagb+8BIRlcsmVwAAAAABJRU5ErkJggg==",   //  canvas.toDataURL() 指纹
    },
    variable:{
    }
};

//catvm.memory.common_change_with_website["canvas_data_url"]