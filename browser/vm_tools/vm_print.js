// 日志调试功能
catvm.print = {
    log:function (log_info) {
        console.table(log_info);
    },
    getAll:function () { // 列出所有日志
        console.table(catvm.memory.log);
    }
};