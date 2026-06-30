let gameSeq=[];
let userSeq=[];


let btns=["yellow", "red", "purple", "blue"]
let started= false;
let level =0;

let h2 = document.querySelector("h2");




document.addEventListener("keypress", function()
{
  if(started==false) {
  console.log("game started");
  started=true;

  levelUp();
  }
});

function gameFlash(btn)
{
  btn.classList.add("flash");
  setTimeout(function()
{
  btn.classList.remove("flash");
}, 350);
}


function userFlash(btn)
{
  btn.classList.add("userflash");
  setTimeout(function()
{
  btn.classList.remove("userflash");
}, 350);
}

function levelUp()
{
  level ++;
  h2.innerText= `Level ${level}`;

  // random btn choose
  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randbtn);

  gameSeq.push(randbtn);
  console.log(gameSeq);
  gameFlash(randbtn);
}




function btnPress ()
{
  console.log(this);
  let btn = this;
  UserFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns)
{
 btn.addEventListener("click", btnPress);
}