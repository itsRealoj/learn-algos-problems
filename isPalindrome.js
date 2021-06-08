/*
QUESTION
--------------
- Find if a string is palindrome.
*/

/*
STEPS
-----
 total num of odd letters should be 1 or 0;
 create empty obj
 loop over the str
 create key of each letter and set its value to 1 or increment its value by 1;
 if odd values are more than 1 return false else return true;
*/

/*
 PATTERN USED
 --------------
 - Frequency counter algorithm.
*/


const isPalindrome = (str) => {
    let strObj = {};
    for(let letter of str) {
      strObj[letter] = (strObj[letter] || 0) + 1;
    };
    // oddCount to count total number of odd letters
    let oddCount = 0;
    for(let key in strObj) {
        if(strObj[key] % 2 !== 0) {
          oddCount += 1;
      }
    }
    console.log('oddCount', oddCount);
    // true if oddCount is <= 1, otherwise return false
     return oddCount <= 1;
  }
  
  isPalindrome('madam');

  