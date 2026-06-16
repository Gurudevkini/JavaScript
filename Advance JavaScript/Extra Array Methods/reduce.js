let numbers1 = [1,2,3,4]
let edit = numbers1.reduce((acc, el) =>
{
console.log(acc);
return (acc+el);
});