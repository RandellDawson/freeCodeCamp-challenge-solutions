/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function steamrollArray(arr) {
  let newArr = [];
  while (arr.length) {
    let currentItem = arr.shift();
    if (!Array.isArray(currentItem)) newArr.push(currentItem);
    else arr = arr.concat(currentItem);
  }
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
