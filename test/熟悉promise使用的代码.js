var p = new Promise(function(res,rej) {
    if (false){
        res(10)
    }else{
        rej(20)
    }
});
p.then(function (res) {
    console.log("res:",res)
},function (error) {
    console.log("error:",error);
}).catch().finally()

console.log(p);