function greet(name){
    console.log("Hello ", name);
}
function process(callback) {
    callback("jerry");
}
process(greet);

function add(a,b){
    return a+b;
}
function operate(a,b,fn){
    return fn(a,b);
}
console.log(operate(5,3,add));

function multiply(x,y){
    return x*y;
}
function operate(x,y,fn){
    return fn(x,y);
}
console.log(operate(4,3,multiply));
let nums = [2,4,6,8];
let result = nums.map(n => n*2);
let values = nums.filter(n => n > 10);
console.log(result);
console.log(values);