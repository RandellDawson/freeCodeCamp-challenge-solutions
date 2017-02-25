/* Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
