// let start;
// start = ['january','july','march','august']
// start.splice(1,0, 'june');
// start
// 1st one 
// let a= [1,2,3,4,5,6]
// console.log(a);
// let n=3;
// let b=a.slice(0,n);
// console.log(b)


//2nd one
// let a= [1,2,3,4,5,6]
//  console.log(a);
// let n=3;
// let b= a.slice(a.length-n);
// console.log(b);

//3rd one
// let string = "";
// if(string== "")
// {
//   console.log("string is empty")
// }
// else {
//   console.log("string is not empty")
// }

//4th one
// let char = `abcd`;
// if(char[0] ===char[0].toLowerCase())
// {
//   console.log("Charcter is in lower case");
// }
// else
// {
//   console.log("charcter is in upper case");
// }


// //5th one
// let string = "Gurudev  ";
// console.log(string.trim());

// //6thone
// let char = ["this", "is","the"," final","quesion"]
// //search is ?
// if(char.includes("is"))
// {
//   console.log("Element in the array");
// }
// else{
//   console.log("Not fpund");
// }


// const Square =(n) => n*n;

// console.log(Square(12));


 let id = setInterval(()=> 
{
  console.log("Hello world");
}
,2000);

setTimeout(()=> 
{
  clearInterval(id);
  console.log("COmpleted 5 times Hello world");
},10000);