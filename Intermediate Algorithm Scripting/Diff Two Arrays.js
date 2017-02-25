/* Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given
arrays, but not both. In other words, return the symmetric difference of the two arrays.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function diffArray(arr1, arr2) {
  return arr1.filter((a) =>arr2.indexOf(a) < 0).concat(arr2.filter((a) => arr1.indexOf(a) < 0));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
