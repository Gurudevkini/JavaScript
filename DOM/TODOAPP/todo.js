let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" ,function ()
{
  let item= document.createElement("li");
  item.innerText= inp.value;


  let deletebtn = document.createElement("button");
  deletebtn.innerText= "delete";
  deletebtn.classList.add("delete");
  
  ul.appendChild(deletebtn);
  ul.appendChild(item);
  inp.value ="";
});   


ul.addEventListener("click", function(event)
{
  if (event.target.nodName == "BUTTON")
  {
let listItem= event.target.parentElement;
 listItem.remove();
 console.log("deleted")
  }
});


// let deletebtns = document.querySelectorAll(".delete");
// for ( deletebtn of deletebtns)
// {
//  deletebtn.addEventListener("click", function ()
// {
//   let par = this.paraentelement;
//   console.log(par);
  
// });
// }