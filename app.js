document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById("todo_form");
    let todoList = document.getElementById("todo_list");

    todoForm.addEventListener("submit", function(event){
        event.preventDefault(); 

        let removeButton = document.createElement("button");
        removeButton.innerText = "remove";

        let newItem = document.createElement("li");

        let text = document.getElementById("task").value;
        if(text != ""){
            newItem.innerText = document.getElementById("task").value;

            todoList.appendChild(newItem);
            newItem.appendChild(removeButton);
            
        }
        
        todoForm.reset();
    });

    todoList.addEventListener("click", function(event){
         const targetName = event.target.tagName.toLowerCase();
         if(targetName === "li"){
            event.target.style.textDecoration = "line-through";
         }
         else if (targetName === "button"){
            event.target.parentNode.remove();
         }
    });

})