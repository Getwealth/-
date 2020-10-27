// 面向对象和运算符优先级
function Foo(){
    getName = function(){
        console.log(1)
    }
    return this
}
Foo.getName=function(){
    console.log(2)
}
Foo.prototype.getName=function(){
    console.log(3)
}
var getName =function(){
    console.log(4)
}
function getName(){
    console.log(5)
}
Foo.getName();//2
getName();//4
Foo.getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3




// 同步和异步

async function async1(){
    console.log("async1 staart");
    await async2();
    console.log("async1 end")
}
async function async2(){
    console.log("async2")
}
console.log('script start');
setTimeout(function(){
    console.log('setTimeout')
})
async1();
new Promise(function(resolve){
    console.log("promise");
    resolve();
}).then(function(){
    console.log("promise2")
})
console.log("script end")