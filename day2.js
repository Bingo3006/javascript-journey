const accountId = 14553;
let accountEmail = "raju@google.com";
let accountPassword = "123456";
accountCity = "Garumara";
accountEmail = "hc@hc.com";
accountPassword = "789058";
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
let age = 20;
let marks = 75;


if (age>=18){
    console.log("you are an adult");
}
else{
    console.log("you are a minor");
}

if (marks >= 90){
    console.log("exelent");
}
else if (marks >= 70){
    console.log("good");
}
else if (marks >= 50){
    console.log("avg");
}
else{
    console.log("Fail");
}




  function introduce(name,age,goal) {
    console.log("my name is", name);
    console.log("my age is", age);
    console.log("my goal is",goal);
  }

  introduce("Ankur", 20, "to become a devoloper");
  introduce("rakhi", 15, "to be an artist");

  function multiply(a,b){
console.log(a*b);
  }
  multiply(4,7);
  multiply(5,8);
  function sub(b,c){
    console.log(b-c);
  }
  sub(9,8);
  sub(5,2);

  function introduction() {
    console.log("My name is Ankur");
  }
  function Showage() {
    let age = 20;
    console.log("My age is" ,age);
  }
  function Showgoal () {
    let goal = (" to be a Developer");
    console.log("my goal is", goal);
  }
  introduction();
  Showage();
  Showgoal();