/*
CHESSBOARD
==============

- Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid t
here is either a space or a "#" character. The characters should form a chessboard.

Pseudocode
============
- create a string
- interchange a space with and #
- count the length
- if lenght equals 8, go  to new line
*/

/*
Pseudocode
============
- create empty object
- create empty string variable
- concat the string with alternating space (' ') and #.
- 

*/

function chessboardOne () {
  let str = '';
  let newStr = '';

  while(str.length <= (8 * 8)) {

if(newStr.length === 8) {
  newStr += '/n';
  str += newStr;
} else {
  if(newStr[newStr.lenght - 1] === '#') newStr += ' ';
  newStr += '#';
}
console.log(str)

}
}

chessboardOne()