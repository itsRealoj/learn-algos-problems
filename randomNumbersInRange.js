/*
Create a function called randomRange that takes a range myMin and myMax 
and returns a random whole number that's greater than or equal to myMin, 
and is less than or equal to myMax, inclusive.
*/ 

function randomRange(myMin, myMax) {
  return  Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  randomRange(90, 100)

  Math.random() // any between 0 and 0.99
  Math.random() * 10 // any between 