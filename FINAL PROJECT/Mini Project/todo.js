 let todoList =[];
 
 function addTodo() 
{
 let inputElement = document.querySelector('#todoI');
 let todoItem = inputElement.value;
 todoList.push(todoItem); // to add the things in the end we will use the push method 
 //console.log(todoItem);


}
function displayitems()
{
  let displayElement =document.querySelector
  ('#to-do-items');
   displayElement.innerText ='';
  for(let i=0; i< todoList.length; i++)
  {
    displayElement.innerText =displayElement.innerText +"\n" +todolist[i];

  }
}