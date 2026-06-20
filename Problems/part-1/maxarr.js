let arr = [34,,5,6,7,8,9,2,3,6,62,23,5,56,8,67,8,]

let max = arr.reduce((max, el) => 
{
  if(max <el)
  {
     return el;
  }
  else 
  {
    return max;
  }
})


console.log(max);










// Normal Approach 
//let max = -1;
// for (let i=0; i<arr.length; i++)
// {
//   if(max < arr[i])
//     {
//       max = arr[i];
//     }
// }
// console.log(max);