//Print even numbers from 0 to 100

for (let num = 0; num <= 100; num++ )
{
  if(num % 2 == 0)
  {
    console.log("num", num);
  }
}


//Random number guessing game 
let gameNum = 25;
let userNum = prompt("Guess the number");

// userNum = console.log(num);

while (userNum != gameNum)
{
userNum = prompt ("You entered the wrong number. Guess again");
}
console.log("Congratulations! You entered the right number");