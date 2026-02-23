 let todoList =[];

const saved = localStorage.getItem("tasks");
if(saved)
{
  todoList = JSON.parse(saved);
}

render();
 const input = document.getElementById("textInput");
 const addbutton= document.querySelector(".create");

 addbutton.addEventListener("click", function()
 {
  const value= input.value; 
  if(value ==="")
  {
    return;
  }
    todoList.push(value);
    localStorage.setItem("tasks", JSON.stringify(todoList));
  input.value=""
 console.log(todoList);
 render();
 });


 function render() {
const ul= document.getElementById("listoftasks");
ul.innerHTML="";

todoList.forEach(function(item,index)
{
  const li = document.createElement("li");
  li.textContent= item;

const button = document.createElement("button");

button.textContent="Done";
button.classList.add("done-btn");

button.addEventListener("click", function()
{
  todoList.splice(index,1);
  localStorage.setItem("tasks", JSON.stringify(todoList));
  render();
}
);

li.appendChild(button);
ul.appendChild(li);
 })};


 