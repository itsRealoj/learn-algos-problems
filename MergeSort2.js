function merge(arrOne, arrTwo) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arrOne.length && j < arrTwo.length) {
        if(arrOne[i] <= arrTwo[j]) {
            result.push(arrOne[i])
            i++
        } else {
            result.push(arrTwo[j])
            j++
        }
        while(i < arrOne.length) {
            result.push(arrOne[i])
            i++
        }
        while(j < arrTwo.length) {
            result.push(arrTwo[i])
            j++
        }
    }
    console.log(result);
    return result;
}
merge([2,3,7,5], [9,100,20]);
