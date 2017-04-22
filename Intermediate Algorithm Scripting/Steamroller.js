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

/* my version using a for loop and recursion while trying to emulate the Advanced solution shown
FCC wiki  which used reduce and recursion  */
function steamrollArray(arr,flat) {
  if (!flat)  flat= [];
  for (var i = 0; i < arr.length; i++) {
    var toFlatten = arr[i];
    if (!Array.isArray(toFlatten))  flat.push(toFlatten);
    else  steamrollArray(toFlatten ,flat);
  }
  return flat;
}

// function steamrollArray(arr) {
//   return arr.reduce(function (flat, toFlatten) {
//     return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
//   }, []);
// }

steamrollArray([1, [2], [3, [[4]]]]);
