const student = 
{
  name : "Gurudev",
  marks: 93,
  prop: this, //global Scope 
  getName: function() {
    return this.name;
  }
}

const a=5; 