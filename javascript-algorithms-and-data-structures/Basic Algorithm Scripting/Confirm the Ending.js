/* Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring
methods instead.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function confirmEnding(str, target) {
  return str.slice(-target.length) == target;
}

function confirmEnding(str, target) {
  for (let i = target.length - 1; i >= 0; i--) {
    if (target[i] !== str[str.length - target.length + i]) return false;
  }
  return true;
}

const confirmEnding = (str, target) =>[...target]
  .every((char, i) => char === str[str.length - target.length + i]);

confirmEnding("Bastian", "n");
