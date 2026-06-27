// let btn= document.querySelector("button");
// console.log(btn);

// btn.onclick = function () 
// {
//  alert("button was Clicked");
// }


// let btns= document.querySelectorAll("button");
// for (btn of btns)
// {
// btn.onclick = SayHello;
// btn.onmouseenter = function ()
// {
//   console.log("You Entered the Button");
// }
// }

// function SayHello() 
// {
//   alert("HEllo!");
// }



let btns= document.querySelectorAll("button");
for (btn of btns)
{
 btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
  btn.addEventListener("dblclick", function ()
{
  console.log("you double clicked Me");
})
}
function sayHello(){
  alert("Hello !");
}
function sayName()
{
  alert("this is Gurudev Here");
};


let p= document.querySelector("p");
p.addEventListener("click", function()
{
  console.log("Paragraph was clicked")
});

let box = document.querySelector(".box")
{
  box.addEventListener( "mouseenter", function()
{
  console.log("Mouse Inside the div");
})
}


