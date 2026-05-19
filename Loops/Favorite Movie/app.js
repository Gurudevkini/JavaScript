let Favorite= "Gurudev";
let guess = prompt("Guess the Favorite Movie")
while (guess != Favorite)
{
  if (guess == "quit")
  {
    console.log("You Quit");
    break;
  }
  guess= prompt("Wrong Guess, please try again")
}
if(guess== Favorite)
{
 console.log("Congrts !")
}