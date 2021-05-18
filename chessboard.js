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

let str = '';
do {
  
  if(str.length % 2 === 0) {str += '#';
}
  else {	
      str += ' ';
    }
    
  if(str.length % 8 === 0 && str.length <  9) {
      str += '\n';
} 
  else if(str.length % 8 === 0 && str.length > 9) {
      if(str.length % 2 === 0){
           str += '#';
           str += '\n'
        } else {

            str += ' ';
            str += '\n'
        }
  }
  
} while(str.length <= (8 * 8));

console.log(str);