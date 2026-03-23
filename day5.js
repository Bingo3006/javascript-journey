let students = [
    {name:"Ankur",age:21},
    {name:"Rahul",age:22}
];
let names = students.map(function(student){
    return student.name;
});
console.log(names);
let filterd = students.filter(function(student){
    return students.age>=21;
});
console.log(filterd);

let book = {
    title: "alchemist",
    author: "paulo coelho",
    price: 25
};
console.log(book.title);
book.price = 558;
book.year = 2010;
console.log(book);

function square(n){
    return n*n;
};
let result = square(4);
console.log("the square of the number is: ",result);

function iseven(n){
    if(n%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(iseven(4));
console.log(iseven(5));

function checkNumber(n){
    if(n%2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(checkNumber(4));
console.log(checkNumber(5));

function MaxNumber(m,n){
   if (m>n){
    return m;
   }
   else{
    return n;
   }
};
console.log(MaxNumber(5,10));
console.log(MaxNumber(20,3));

