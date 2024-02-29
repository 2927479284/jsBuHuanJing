function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function(){console.log("run")};

}
Person.static = 3;
Person.prototype.say = function() {
    console.log("My name is " + this.name, +this.age + " years old");
}
;
Person.prototype.sex = "man";

Person.prototype.__defineGetter__("son", function() {
    console.log("get son:");
    return "son"
});
Person.prototype.__defineSetter__("son", function(attr) {
    console.log("set son:" + attr)
});

// Person.prototype.__defineGetter__("doc",function(){console.log("get doc:");return "doc"});
// Person.prototype.__defineSetter__("doc",function(attr){console.log("set doc:"+attr)});

Object.defineProperty(Person.prototype, "doc", {
    get: function() {
        console.log("get doc:");
        return "doc"
    },
    set(attr) {
        console.log("set doc:" + attr)
    }
})

var person = new Person("dsf",18);

Object.defineProperty(person, "dad", {
    get: function() {
        console.log("get dad:");
        return "dad"
    },
    set: function(attr) {
        console.log("set dad:" + attr)
    }
})

person.__defineGetter__("mom", function() {
    console.log("get mom:");
    return "mom"
});
person.__defineSetter__("mom", function(attr) {
    console.log("set mom:" + attr)
});




var _name = person.name;
person.__defineGetter__("name",function(){
    console.log("get name");
    return _name;
})