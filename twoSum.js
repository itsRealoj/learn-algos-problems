/*
PATTERN: FREQUENCY COUNTER METHOD

-create empty object
-loop through the array, check if the the number you expect to add to the the currrent number to reach the target is available in the hash obj.
-if not create current value to the obj with its index.
-if you found the partner in the array, retrun the value of the number found in  the obj, and the current index of the value from the array.
*/
const twoSum = (nums, target) => {
    let obj = {}
    let index = 0;
    
    for(let num of nums)  {
        console.log(typeof obj[target - num])
        if(typeof obj[target - num] === 'number') {
            console.log([obj[target - num], index])
            return [obj[target - num], index];
        } else {
            obj[num] = index;
            console.log(obj)
            index += 1;
        }
    }
    return 'no two sum!'

}
twoSum([2,11,15,7], 9)
