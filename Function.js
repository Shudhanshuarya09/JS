// Parameter and arguments
function myFunction(msg)  //-->here function defination as a parameter
{
  console.log(msg);
}
myFunction(" I love JS"); //->>here message pass as a argument 


//We can also pass multiple msgs in a single function by using the comma (,)

function myFunction(msg , n) 
{
  console.log(msg , n);
}
myFunction(" I love JS" , 1000);

//Function -> 2 numbers,  sum

function sum(x , y)
{
  console.log(x + y);
}

sum(1 , 2);