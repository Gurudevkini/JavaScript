// let n = prompt( "Enter Your Number","5");
// n=parseInt(n);
// for (let i=n; i<=n*10; i=i+n)
// {
//   console.log(i);
// }

// let heroes = [ 
//   ["ironman", "superman", "Heroo"],
//   ["rone" ,"Jeevan"]
// ]
// for( let i=0; i<heroes.length; i++)
// {
//   console.log( i,heroes[i] , heroes[i].length);
//   for(let j=0; j<heroes[i].length; j++)
//   {
//     console.log(`j= ${j}, ${heroes[i][j]}`)
//   }
// }

// let fruits= ["mango", "apple", "banana", "Gauvava"]
// for (fruit of fruits)
// {
//   console.log(fruit);
// }

// for(char of "Gurudev kini")
// {
//   console.log(char);
// }

let heroes = [ 
["ironman", "superman", "Heroo"],
   ["rone" ,"Jeevan"]
]

for (hero of heroes)
{
  for(name of hero)
  {
  console.log(name);
  }
}