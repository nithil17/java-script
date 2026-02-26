
let task = [];

function displayTasks(){
    let html = "";
    for(let i=0; i<task.length; i++){
        html +="<li>"+task[i]+"<button onclick = 'removeTask("+i+")'>x</button></li>";
    }
    document.getElementById("list").innerHTML = html;
}

let input = document.getElementById("task");
input.addEventListener("keydown", function (event){
    if(event.key === "Enter"){
        addTask();
    }
});


function addTask(){
    let taskInput = document.getElementById("task")
    let text = taskInput.value;
    if(text ===""){
        return;
    }
    task.push(text);
    taskInput.value="";
    saveTasks();
    displayTasks();
}

function clearAll(){
    task = [];
    saveTasks();
    displayTasks();
}

function removeTask(i){
    task.splice(i,1);
    saveTasks();
    displayTasks();
}

function saveTasks(){
    localStorage.setItem("task", JSON.stringify(task));
}

function loadTasks(){
    let saved = localStorage.getItem("task");
    if(saved !== null){
        task = JSON.parse(saved);
    }
}

loadTasks();
displayTasks();