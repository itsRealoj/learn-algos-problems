// MERGING SORTED ARRAYS
// 1. Create and empty array, take a look at the smallest values in each input array.
// 2. While there are still values we haven't looked at...
//  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move to the next value in the first array.
//  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move to the next value in the second array.
//  - Once we finish with one array, push in all remaining values from the other array.

// 
    // function merger(arrOne, arrTwo) {
        // let i = 0;
        // let j = 0;
        // let mergedArr = [];
// 
        // while(i < arrOne.length && j < arrTwo.length) {
            // if (arrOne[i] <= arrTwo[j]) {
                // mergedArr.push(arrOne[i])
                // i++;
            // } else {
                // mergedArr.push(arrTwo[j])
                // j++;
            // }
        // }
        // while(i < arrOne.length) {
            // mergedArr.push(arrOne[i])
            // i++
        // }
        // while(j < arrTwo.length) {
            // mergedArr.push(arrTwo[j])
            // j++
        // }
// 
        // console.log(mergedArr)
        // return mergedArr;
    // }
    // merger([1,10, 50], [2,4,88,100])

















    const merge = (arrOne, arrTwo  ) => {
        let i = 0;
        let j = 0;
        let result = [] ;

        while(i < arrOne.length && j < arrTwo.length) {
            if(arrOne[i] <= arrTwo[j]) {
                result.push(arrOne[i])
                i++
            } else {
                result.push(arrTwo[j])
                j++
            }
        }
        while(i < arrOne[i].length) {
            result.push(arrOne[i])
            i++
        }
        while(j < arrTwo[j].length) {
            j++
        }
        return(console.log(result))
    }
    merge([2,5,7], [9,11,100,140]);