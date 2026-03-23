
let nums = [5,10,15,20,25];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
let sum = 0;
for (let i=0;i<nums.length;i++){
    sum = sum+nums[i];
}
console.log("the sum is", sum);
let doubled = nums.map(function(num){
    return num*2;
})
console.log(doubled);
let filtered = nums.filter(function(num){
    return num>10;
})
console.log("the filtered value is: ", filtered);