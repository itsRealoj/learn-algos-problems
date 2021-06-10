/*
Given an array of numbers, find the first number whose sum with another number from the array will result to a zero.
*/ 

/*
PATTERN
-------------
- MULTIPLE POINTERS PATTERN
*/ 

/*
STEPS
- Sort the array first
- Set two counters, from the 1st index and last index of the array.
- sum the values of the array at each index
- if value is 0, return the set 
- else increment the first index and decremetn the last index and find the sum.
- if no zero sum return null.
*/ 

function sumZero(arr) {
    arr.sort((a,b) => a - b)
    console.log(arr)
    
    let firstIndex = 0;
    let lastIndex = arr.length - 1

    let sum = arr[firstIndex] + arr[lastIndex];
    
    while(sum !== 0) {
        lastIndex -= 1;
        firstIndex += 1;
        console.log(sum)
    }
    
    console.log([arr[firstIndex], arr[lastIndex]])
    return [arr[firstIndex], arr[lastIndex]];
}

sumZero([-3,4,1,3,2])