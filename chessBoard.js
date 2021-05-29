/*
Pseudocode
============
- create a string
- interchange a space with and #
- count the length
- if lenght equals 8, go  to new line
*/

let str = '';
do {
  if(str.length % 2 === 0) {
  	//console.log('#');
    str += '#';
  } else {
  	//console.log('');
    str += '';
  };
  if(str.length % 8 === 0) {
    str =+ '\n';
  };
  console.log(str);
  
} while(str.length <= (8 * 8));