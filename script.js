
const box=document.getElementById("box");
const list=document.getElementById("list");

function addtask(){
    if(box.value==''){
        alert("write a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=box.value;
        list.appendChild(li);
    }
}