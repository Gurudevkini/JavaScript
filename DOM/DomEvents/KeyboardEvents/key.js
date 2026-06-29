
let form = document.querySelector("form");
form.addEventListener("submit", function(event)
  {
    event.preventDefault();
    


    let user = document.querySelector("#user");
  user.addEventListener("change", function()
{
  console.log("input changes");
  console.log("final value=", this.value);
});














  //   console.dir(form);
  //   let user= this.elements[0];
  //   let pass= this.elements[1];
  //  console.log(user.value);
  //  console.log(pass.value)

  //  alert(`Hi ${user.value}, Your Password is set to be ${pass.value} `);
  //   console.dir(inp);
  //   console.log(inp.value);


  }
);








// let inp = document.querySelector("input");

//  inp.addEventListener("keydown", function (event)
//  {
//   console.log("code =", event.code);
//   if ( event.code == "keyU")
//   {
//     console.log("Charcter Moves Forward");
//   }
//   else if ( event.code == "KeyL")
//   {
//     console.log("Charcter Moves backward");
//   }
//  else if ( event.code == "ArrowUp")
//   {
//     console.log("Charcter Moves Forward");
//   }
//  });













// let inp = document.querySelector("input");

//  inp.addEventListener("keydown", function (event)
//  {
//   console.log("Key =", event.key);
//   console.log("code =", event.code);
//   console.log("Key was Pressed");
//  });









// let imp= document.querySelector("input");
// imp.addEventListener("keydown", function()
// {
//   console.log("Key is Pressed");
// });




// let inp= document.querySelector("input");
// imp.addEventListener("keyup", function()
// {
//   console.log("Key is relased");
// });










// let btn = document.querySelector("button")
// btn.addEventListener('click', function (even)
// {
//   console.log(even)
//   console.log("ButtoN Clicked")
// });