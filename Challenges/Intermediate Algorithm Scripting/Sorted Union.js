/* Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the
 order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but
with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.

Check the assertion tests for examples.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

const uniteUnique = (...arrays) => arrays
  .reduce((union, arr) => union
    .concat(arr.filter(item => !union.includes(item))), []);

function uniteUnique(...arrays) {
  arrays= [].concat(...arrays);
  return arr.filter((item, pos) => arr.indexOf(item) == pos);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
