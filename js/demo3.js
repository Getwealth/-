// 深浅克隆

let obj ={
    a:100,
    b:[10,20,30],
    c:{
        x:10
    },
    d:/^\d+$/
}
//浅克隆  传址  克隆之后会对原数据造成影响
let obj2 = {...obj};
// 深克隆  
// JSON的弊端  克隆function/正则/日期   会变成字符串
let obj3=JSON.parse(JSON.stringify(obj));
// 递归
function deepClone(obj){
    // 过滤特殊情况
    if(obj===null){
        return null;
    }
    if(typeof obj!="object"){
        return obj;
    }
    if(obj instanceof RegExp){
        return new RegExp(obj)
    }
    if(obj instanceof Date){
        return new Date(obj)
    }
    // 不直接创建新对象的目的：克隆的结果和之前保持相同的所属类
    let newObj = new obj.constructor;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=deepClone(obj[key]);
        }
    }
    return newObj;
}