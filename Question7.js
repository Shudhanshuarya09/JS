//Array ka questions
//Question --> For a given array with marks of student [85,97,44,37,76,60].Find the average marks of the entire class.

let marks = [85,97,44,37,76,60];

let sum = 0;

for (let val of marks)
{
  sum += val;
}
let avg = sum/marks.length;
console.log(`Average marks of the class = ${avg}`);



// Question 2 --> 

let items = [250, 645, 300, 900, 50];

let i =0;
for (let val of items)
{
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}