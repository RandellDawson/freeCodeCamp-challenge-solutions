/* Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string
if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function repeatStringNumTimes(str, num) {
  if (num < 1) return "";
  if (num === 1) return str;
  return str+repeatStringNumTimes(str,num-1);
}

repeatStringNumTimes("abc", 3);
