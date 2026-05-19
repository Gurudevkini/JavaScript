let user = prompt(" Guess the dice number Note :-The number should be between 1 and 6")
let dice_num = Math.floor(Math.random()*5)+1;
if( user = dice_num)
{
  console.log("You Guess the right Dice Number");
}
else{
  user = prompt("Please try again")
}

