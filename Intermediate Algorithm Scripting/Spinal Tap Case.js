/*  Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function spinalCase(str) {
  return str.replace(/(?!^)([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
