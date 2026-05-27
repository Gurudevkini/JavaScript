const student = 
{
  name:"GurudevKini",
  age:20,
  eng:90,
  math:93,
  phy:97,
  getAvg()
  {
    let Avg=(this.eng+this.math+this.phy)/3;
     return Avg, this , Avg;
  }
}