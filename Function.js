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
  console.log(x + y);  //<==> return x + y;  ---> bas retirn ke neeche ka code execute nhi hota {} ke andr tk
}

sum(1 , 2);

//single line code 
const printHello = () => console.log("Hello");