/*
Question:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

- create an empty array
- do 2 external for loops (not nested) 
- each time you do not find an element from one array in the other (Array.prototype.indexOf()) push that item into the  newArray.
- Return the newArray.

- Note: do not forget:
-------------------------
 -> To use for in an array instead of for of.
 -> To tell that the the for of in array points to the values of the array and indices.
*/ 

function diffArray(arr1, arr2) {
    var newArr = [];
  
    for(let val of arr2) {
      arr1.indexOf(val) ==  -1 ? newArr.push(val) : null;
    }
  
    for(let val of arr1) {
      arr2.indexOf(val) ==  -1 ? newArr.push(val) : null;
    }
  
  console.log(newArr) 
    return newArr; 
  }
  
  diffArray(['na', 2, 3, 5], ['n', 2, 3, 4, 5]);