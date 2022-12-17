let todoForm = document.getElementById("todo_form");
let todoList = document.getElementById("todo_list");

//grab current todos off localstorage, if it fails set savedTodos
//to an empty []
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0 ; i < savedTodos.length; i++){
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted; 
    
    //check if item is completed, if so make sure to set it so it 
    //displays as cross-through.
    if(newTodo.isCompleted){
        newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
}

//add event listener for new todo item creation
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    let newTodo = document.createElement("li");
    let taskValue = document.getElementById("task").value;
    newTodo.innerText = taskValue;
    newTodo.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newTodo);

    //most importantly save this to storage
    //assume task is not completed on initialization
    savedTodos.push({task:newTodo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});

//add event listener for completing a task 
todoList.addEventListener("click", function(event) {
    let clickedListItem = event.target;
  
    //because we initialized each item to have its own data, we can 
    //directly check this value and apply the necessary styling 
    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }

    //reupdate current list of todos to mirror what the user has done
    for(let i = 0; i < savedTodos.length; i++){
        if (savedTodos[i].task === clickedListItem.innerText){
            savedTodos[i].isCompleted = !savedTodos[i].isCompleted; 
            localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
    }
});
  

