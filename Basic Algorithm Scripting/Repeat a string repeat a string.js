/* Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string
if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function repeatStringNumTimes(str, num) {
  return num < 1 ? '' : str+repeatStringNumTimes(str,num-1);
}

//iterave solution
function repeatStringNumTimes_v2(str, num) {
  for (var newStr = '', i=0; i<num; i++)
    newStr += str;
  return newStr;
}
repeatStringNumTimes("abc", 3);
