const student =
{
  name: "karan",
  age:14,
  class:9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd",
};

let { username:user, password , age,class: A, city="Banglore"} = student;



// CLASS CANOT BE DIRECTLY USED BECAUSE the value could be A










// NOrmaL Destrucuting
let names = ["tony", "bruce", "peter", "steve"];
let [winner, runnerup, ...rest] = names;















// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];