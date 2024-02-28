//before 2015 in JS var keyword is used which is annoying that every time same name variavble is declaring so after in new version let , const variable name is used accordingly

let age = 25;
//let age = 23;   --> not allowed gives error
age = 236;   //not re-declared but can updated


const salary = 3.25 + "lakh";

//  const salary = 5 + "lakh";    --> Neither re-declared nor updated only fixed and constatnts values are used here
console.log(salary);



// another concept:- let can re-declared by using {} because its act as a two different components

{ 
  let marks = 30;
  console.log(marks);
}

{ 
  let marks = 70;
  console.log(marks);
}


let cgpa;  //--> let can be written without assiging any value but const can not.
console.log(cgpa);