let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("list");

button.onclick = function() {
  let task = input.value;
  if (task === " ") return;

  let li = document.createElement("li");

 
  let span = document.createElement("span");
  span.textContent = task;

  span.onclick = function() {
  if (span.style.textDecoration === "line-through") {
    span.style.textDecoration = "none";
  } else {
    span.style.textDecoration = "line-through";
  }
  span.style.cursor = "pointer";
};


  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  
  delBtn.onclick = function() {
    li.remove();
  };

  
  li.appendChild(span);
  li.appendChild(delBtn);


  list.appendChild(li);

  input.value = "";
};