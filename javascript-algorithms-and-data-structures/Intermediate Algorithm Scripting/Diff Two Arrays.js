/* Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given
arrays, but not both. In other words, return the symmetric difference of the two arrays.

Code by: Randell Dawson
http://www.freecodecamp.com/randelldawson
*/

// most efficient solution
const diffArray = (arr1, arr2) => {
  const concatArr = arr1.concat(arr2);
  const lookup = concatArr.reduce((obj, val) => {
    obj[val] = obj[val] ? obj[val] + 1 : 1;
    return obj;
  }, {});
  return concatArr.filter(val => lookup[val] === 1);
}

const diffArray = (arr1, arr2) => {
  const oneNotInTwo = (one, two) => one.filter(elem => !two.includes(elem));
  return [...oneNotInTwo(arr1, arr2), ...oneNotInTwo(arr2,arr1)];
}

function diffArray(arr1, arr2) {
  return arr1.filter(a =>!arr2.includes(a)).concat(arr2.filter(a => !arr1.includes(a)));
}

function oneNotInTwo(one, two) {
  return one.filter(elem => !two.includes(elem));
}

function diffArray(arr1, arr2) {
  return oneNotInTwo(arr1, arr2).concat(oneNotInTwo(arr2, arr1));
}

/* The following solution only requires iterating through the longest array */
function diffArray(arr1, arr2) {
  var newArr = [];
  if (arr1.length > arr2.length) {
    [arr1, arr2] = [arr2, arr1]; // makes sure arr2 is the longest array
  }
  for (let i in arr2) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
    if (!arr2.includes(arr1[i])  && arr1[i]) {
      newArr.push(arr1[i]);
    }
  }
   return newArr;
}

/* same as above with reduce */
function diffArray(arr1, arr2) {
  if (arr1.length > arr2.length) {
    [arr1, arr2] = [arr2, arr1]; // makes sure arr2 is the longest array
  }
  return arr2.reduce((diff, elem, i) => {
    if (!arr1.includes(elem)) {
      diff.push(elem);
    }
    if (!arr2.includes(arr1[i]) && arr1[i]) {
      diff.push(arr1[i]);
    }
    return diff;
  }, []);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
