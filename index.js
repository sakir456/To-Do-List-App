const taskinput=document.querySelector(".task-input");
const addbtn=document.querySelector(".add-btn");
const todolist=document.querySelector(".todo-list")




function taskhandle(value){
    if(value!==""){
    var newelement=document.createElement("li")

    newelement.className='task'

    newelement.innerHTML= `<span>${value}</span>
    <input type="checkbox" class="complete-checkbox" onclick="completetask(this)">
    <button class="delete-btn" onclick="deletetask(this)"><i class="fa-solid fa-trash-can"></i></button>`;

    todolist.appendChild(newelement)

    taskinput.value=""

}
}

addbtn.addEventListener("click",()=>{
    var tasktext=taskinput.value.trim();
    taskhandle(tasktext);

})

function completetask(checkbox){
const task=checkbox.parentElement;
task.classList.toggle('completed');
}

function deletetask(button){
  const task=button.parentElement;
   task.remove();
}