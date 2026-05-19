let todo =[];


let req= prompt("please Enter your request");

while(true)
{
  if(req=="quit"){
    console.log("quitting app");
    break;
  }
   if(req=="list")
   {
    console.log("________________");
    for(let i =0; i<todo.length; i++) {
      console.log(i,todo[i]);
    }
     console.log("________________");
   }
   else if(req=="add")
   {
    let task = prompt("please enter the element that you want to add ");

    todo.push(task)
    console.log("task added");
   } 
   else if(req == "delete")
   {
    let index = parseInt(prompt("Enter the task index to be deleted"));
     todo.splice(index,1);
     console.log("task deleted");
     
  }
  else {
    console.log("Wrong Request");
  }

   req= prompt("please Enter your request");
  
}