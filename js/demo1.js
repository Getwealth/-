// 统计字符串中出现最多次数的字符的方法
function countStr(str){
    if(str){
        if(str.length>=1){
            let arrStr = str.split('');
            let newArr = new Set(arrStr);
            let finArr=[];
            newArr.forEach((item,index)=>{
                let count = 0;
                arrStr.forEach((k,l)=>{
                    if(k===item){
                        count+=1;
                        finArr.push({char:item,count:count});
                    }
                })
            });
            finArr.sort((a,b)=>{
                return a.count-b.count;
            });
            console.log("出现最多的是"+finArr[finArr.length-1].char+"次数:"+finArr[finArr.length-1].count);
        }
        else {
            return {char:str,count:1}
        }
    }
}
let str="aaaaaaaaaaaa111jjjbsssssssssss";
countStr(str);


// 