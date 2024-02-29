
// let str = "Amritsar";
// console.log(str[4]);

//Template literals and string interolation concept

let student = 
{
  name : "Shudhasnhu Arya",
  age : 45,
  isPass : true,
  cgpa : 9
};
//console.log("grade of", student.name, "is", student.cgpa, "so", student.isPass);   //-->this is aam zindgi

let New = `the grade of ${student.name} is ${student.cgpa} is ${student.isPass};`   //-->this is coder zindgi
console.log(New);