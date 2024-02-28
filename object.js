//when various variables with value arises then we put all together under the {} and named as a particular object during call we just call the name of object in the console then automatically all thr variables are called together 

const student = {
  fullName : "Shudhanshu Arya",
  age : 21,
  cgpa : 8.9,
  semester : 6,
  isPass : true
};

student ["fullName"] = "Shudhanshu Sekhar";  //you can also re-assign the value by declaring like this

console.log(student.fullName);
console.log(typeof ["fullName"]);