let  arr= [{
  name: "Guru",
  marks: 84.6
}, {
  name: "Dev",
  marks: 95.6

},
  {
  name: "Rohan",
  marks: 93,
  }, {}];


let gpa = arr.map((el) => {
  return el.marks/10;
});
console.log(gpa)