const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
let currentFilter = "all";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
addBtn.addEventListener("click",addTask);
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
searchInput.addEventListener("input",renderTasks);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskObj = {
    text: taskText,
    completed: false
  };

  tasks.push(taskObj);
  saveTasks();
  renderTasks();

  input.value = "";
}
function renderTasks(){
    list.innerHTML = "";
    if (tasks.length === 0) {
  list.innerHTML = "<p>No tasks yet</p>";
}
    tasks
    .filter(task=> {
        const matchesFilter = 
        currentFilter === "completed" ? task.completed :
        currentFilter === "pending" ? !task.completed :
        true;
        const matchesSearch = 
        task.text.toLowerCase().includes(searchInput.value.toLowerCase());
        return matchesFilter && matchesSearch;
    })
    .forEach((task,index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = task.text;
        if(task.completed) {
            span.classList.add("completed");
        }
        span.addEventListener("click",() =>{
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
  const newText = prompt("Edit your task:", task.text);

  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
});

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.addEventListener("click", () => {
        const realIndex = tasks.indexOf(task);
        tasks.splice(realIndex, 1);
        saveTasks();
        renderTasks();
});
        li.appendChild(span);
        list.appendChild(li);

        const btnGroup = document.createElement("div");
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(delBtn);

        li.appendChild(btnGroup);
       
    });
    }

    function setFilter(filter) {
        currentFilter = filter;
        renderTasks();
    }

    renderTasks();
