/* Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/
function bouncer(arr) {
  return arr.filter( (val)=> val);
}

bouncer([7, "ate", "", false, 9]);
