// Q. function which takes a string and returns count of each character in the string.
// asdfasdf

const strCount = (str) => {
    let tempObj = {}

    // remove spaces --> split into array then join to remove spaces
    let newStr = str.split(' ').join('')
    for(let i in newStr) {
        let char = newStr[i].toLowerCase()
        // test if character is alphanumeric
        if(/[a-z0-9]/.test(char)) {
            !tempObj[char] ? tempObj[char] = 1 : tempObj[char] ++;
        }
    }
    console.log(tempObj)
    return tempObj
}
strCount('asdfasd $# Ffff1 1')
