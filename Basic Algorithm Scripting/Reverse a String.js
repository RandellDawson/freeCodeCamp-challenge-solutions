/* Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

// original version
function reverseString(str) {
  return str.split('').reverse().join('');
}

// version without arrays
function reverseString_v2(str) {
  for (var i=str.length-1, rev=''; i>=0;i--)  rev +=str[i];
  return rev;
}

reverseString("hello");
