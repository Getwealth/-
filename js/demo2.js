// 数组 奇数子数组的和

var sumOddLengthSubarrays= function(arr){
    var sum=0;
     for(let i=1;i<=arr.length;i+=2){
            for(let j=0;j<arr.length-i+1;j++){
                for(let k=0;k<i;k++){
                    sum+=arr[j+k];
                }
                
            }
           
        }
        return sum;
}
console.log(sumOddLengthSubarrays([1,4,2,5,3]))