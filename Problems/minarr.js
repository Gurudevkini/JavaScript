function getMin(nums) 
{
let min= nums.reduce((min,el) =>
{
  if(min < el)
  {
    return min;
  }
  else{
    return el;
  }
});
 return min;
}

let nums = [10,23,4,5,6,7,56,8,9]





// let min = nums[0];
// for(let i =0; i< nums.length; i++)
// {
//   if(nums[i]< min)
//   {
//    min = nums[i]
//   }
// }