let name = "ankur";
let age = 18;
let isLoggedIn = false;

let marks = [80,45,89,63];
marks.push(56);
marks.pop();
marks.shift();
marks.unshift(100);

let total = 0;
for (let i=0;i<marks.length;i++){
    total = total + marks[i];
}
console.log("Total marks:", total);

let numbers = [5,10,15,20];
console.log(numbers[0]);
console.log(numbers[3]);
numbers.push(25);
console.log(numbers);

let nums = [1,2,3];
let doubled = nums.map(function(num){
    return num*2;
});
console.log(doubled);

let arr = [1, 2, 3, 4];
console.log(arr[3]);

let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits.slice(1, 3));

let number = [10, 20, 30];
console.log(number.includes(20));

let num = [1, 2, 3];
let result = num.map(function(n) {
  return n + 1;
});
console.log(result);