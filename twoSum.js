const twoSum = (nums, target) => {
    let newNumsArr = [...nums];
    console.log(newNumsArr)
    let l = nums.length - 1;
    let f = 0;

    nums.sort((a,b) => a -b);
    console.log(newNumsArr)
    
    while(l > f) {
        if(nums[f] + nums[l] === target) {
            console.log('sum>>', [newNumsArr.indexOf(nums[f]), newNumsArr.indexOf(nums[l])]);
            return [newNumsArr.indexOf(nums[f]), newNumsArr.indexOf(nums[l])];
        } else if(nums[f] + nums[l] > target) {
            l -= 1;
        } else if(nums[f] + nums[l] < target) {
            f += 1;
            }
    }
}

twoSum([3,2,4], 6)