//for-of-loop

// let word = "SANT LONGOWAL INSTITUTE OF ENGINEERING AND TECHNOLOGY";

// let size = 0;
// for (let i of word)
// {
//   console.log("i =", i);
//   size++;
// }

// console.log("String size = ", size)


// for-in-loop

let student = {
  name : "Shudhanshu Arya",
  age : 21,
  cgpa : 8.9,
  isPass : true,
};

for (let key in student)
{
  console.log("key = ", key , "values = ", student[key])
};