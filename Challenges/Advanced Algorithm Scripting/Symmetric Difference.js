/* Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric
difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term
"symmetric difference" of two sets is the set of elements which are in either of the two sets,
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you
take (say on a set D = {2, 3}), you should get the set with elements which are in either of the
two the sets but not both  (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function sym(...args) {
  const oneNotInOther = (one,other) => one.reduce((arr,val) => {
      if (!other.includes(val) && !arr.includes(val)) arr.push(val);
      return arr;
  },[]);
  const difference = (arr1,arr2) => oneNotInOther(arr1,arr2).concat(oneNotInOther(arr2,arr1));
  return args.reduce((newArr,curArr) => difference(newArr,curArr),[]);
}

// functional solution #1
function sym(...args) {
  const oneNotInTwo = (one, two) => one.filter(val => !two.includes(val));
  const difference = (arr1, arr2) => oneNotInTwo(arr1,arr2).concat(oneNotInTwo(arr2,arr1));
  const diffSet = new Set(args.reduce((a,b) => difference(a,b),[]));
  return [...diffSet];
}

// functional solution #2
function sym(...args) {
  const counts = [].concat(...args)
    .reduce((obj, item) => (obj[item] = obj[item] ? ++obj[item] : 1) && obj,{});
  return Object.keys(counts).filter(key => counts[key] % 2 !== 0)
    .map(key=>Number(key));
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
