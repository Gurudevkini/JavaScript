// let user= (prompt("Enter Your Guess Number in between 1 to 5"));

//  let random = Math.floor((Math.random()*5)+1);
// if(user== random)
// {
//  console.log("You guessed the correct number");
// }
// else if (user = "Quit")
// {
//  console.log("User has Quit the game ")
// }
// else 
// {
//   console.log(prompt("Enter Your Guess Number in between 1 to 5"));
// }

let max= prompt("Enter the maxiumum number ");
let random = Math.floor((Math.random()*max)+1);

let guess = prompt("guess the number ");

while(true)
{
  if(guess=="quit")
  {
    console.log("users QUits");
    break;
  }

  if(guess== random)
  {
    console.log("You have selected the correct Number that is ", random);
    break;
  } else if (guess < random)
  {
  guess = prompt("Hint :-Your Guess is small than the random number please try again ")
}
  else {
    guess = prompt("Hint :-Your Guess is large than the random number please try again ")
}
}