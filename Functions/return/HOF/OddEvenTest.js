

function oddoreven(req){
   if(req=="odd")
   {
let odd= function(n)
{
  console.log(!(n%2==0));
   }
   return odd;
} else if(req=="even")
{
  

let even = function(n) 
{
  console.log(n%2==0)
}
return even;
}
else
{
  console.log("wrong request");
}
}

let req="odd"