let nums = [1,2,3,4,5,6,7,8,,10,23,44]
let ans= nums.filter((el) =>
{
  return el% 2==0; // all the even number would be printed 
})