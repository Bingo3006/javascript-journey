let current = "";
let previous = "";
let operator = "";

function press(num){
     if(current==="Error"){
        clearAll();
    }
    if (num === "." && current.includes(".")) return;

    if (previous === "" && operator === "" && current !== "" && !isNaN(current)){
    current = num.toString();
    } else {
    current += num;
}

    updateDisplay();
}
function updateDisplay(){
    document.getElementById("display").value = current || "0";

    if (operator && previous){
        document.getElementById("previous").innerText = previous + " " + operator;
    } else {
        document.getElementById("previous").innerText = "";
    }
}

function setOp(op){
    if (current === "") return;

    if (previous !== ""){
        equal();
    }

    operator = op;
    previous = current;
    current = "";
}
function percent(){
    current = String(Number(current) / 100);
    updateDisplay();
}

function equal(){
    let a = Number(previous);
    let b = Number(current);
    let result;

    switch (operator){
        case "+":
        result = a + b;
        break;
        case "-":
            result = a-b;
            break;
         case "*":
            result = a*b;
            break;
         case "/":
            result = b===0 ? "Error" : a/b;
            break;
        default:
            return;
    }

    current = result;
    previous = "";
    operator = "";

    updateDisplay();
}
function deleteLast(){
    current = current.slice(0, -1);

    if (current === ""){
        current = "0";
    }

    updateDisplay();
}

function clearAll() {
    current = "";
    previous = "";
    operator = "";
    updateDisplay();
}
document.addEventListener("keydown", function(event){
    const key = event.key;

    if (!isNaN(key)){
        press(key);
    }

    if (key === "."){
        press(".");
    }

    if (key === "+" || key === "-" || key === "*" || key === "/"){
        setOp(key);
    }

    if (key === "Enter"){
        event.preventDefault();
        equal();
    }

    if (key === "Backspace"){
        deleteLast();
    }

    if (key === "Escape"){
        clearAll();
    }

    updateDisplay();
});