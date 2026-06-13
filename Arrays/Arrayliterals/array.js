const student = 
{
  name : "Gurudev",
  marks: 93,
  prop: this, //global Scope 
  getName: function()
  {
    return this.name;
  },
};
  getmarks: ()=> 
  {
    console.log(this); // Parents Scope
    return this.marks;
  } ;
   getInfo1: function (){
    setTimeout(()=>
    {
     console.log("this") // student 
    }, 2000);
};
  getInfo2: function () 
  {
    setTimeout (function ()
  {
    console.log("this"); // windpw 
  }, 2000);
  };