
const box=document.getElementById("box");
const list=document.getElementById("list");

function addtask(){
    const taskText=box.value.trim();
    if(taskText==""){
        alert("write a task");
    }
    else{
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Add the new list item to the todo list
        list.appendChild(listItem);

        // Clear the input field
        box.value="";
    }
    
}

function removeTask(button) {
    const listItem = button.parentNode;
    list.removeChild(listItem);
}