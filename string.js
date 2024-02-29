
// // let str = "Amritsar";
// // console.log(str[4]);

// //Template literals and string interolation concept

let student = 
{
  name : "Shudhasnhu Arya",
  age : 45,
  isPass : true,
  cgpa : 9
};
console.log("grade of", student.name, "is", student.cgpa, "so", student.isPass);   //-->this is aam zindgi

let New = `the grade of ${student.name} is ${student.cgpa} is ${student.isPass};`   //-->this is coder zindgi
console.log(New);


// upperCase - lowerCase concept
let Name = "Shudhanshu Arya";
console.log(name);
let newName = Name.toUpperCase();
console.log(newName); 


//concat --> to join two string
let name1 = "Shudhasnhu";
let name2 = "Arya";

let join = name1.concat(name2);
console.log(join);