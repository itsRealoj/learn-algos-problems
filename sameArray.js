/*
Question
========
Write a function called same, which accepts two arrays.
The function should return true if tevery v alue in the array 
has it's corresponding values squared in the second array. 
The frequency of values must be the same.

Examples
========
same([1,2,3], [4, 1,9]) - should return true
same([1,2,3], [1,4,9, 4]) - should return false
same([1,2,1], [4,4,1]) - should return false (must be same frequency)

Pattern 
=======
- FREQUENCY COUNTER

Steps
=====
1. create empty object
2. set obj keys to be the values of arr1 squared.
3. set value for each (values from arr1) key to be one, 
4. increment the values for repeating keys by 1.
5. loop over the second arr and each time decrement the value of corresponding object keys.
6. return true if all object values end up as 0, otherwise return false.
*/ 

function same(arr1, arr2) {
    let obj = {}
    for (let val of arr1) {
        if (obj[val] == undefined) obj[val] = 1
        else if(obj[val] > 0) obj[val] = obj[val] +1;
    }
    console.log(obj)

    for(let val of arr2) {
        let arrVal = Math.sqrt(val);
        console.log(arrVal)
        if(!(obj[arrVal])) {
            return false
        } else 
        if(obj[arrVal]) {
                obj[arrVal] = obj[arrVal] -=1;
            } 
        }
        console.log(obj)
    
}
same([1,3,2,], [1,4,9]) 


console.log(Math.floor(Math.random()))