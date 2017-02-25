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
  function difference(arr1,arr2) {
    return arr1.reduce( (arr,val) => {
      if (!arr2.includes(val) && !arr.includes(val)) arr.push(val);
      return arr;
    },[]).concat(arr2.reduce( (arr,val) => {
      if (!arr1.includes(val) && !arr.includes(val)) arr.push(val);
      return arr;
    },[]));
  }
  return args.reduce( (newArr,curArr) => difference(newArr,curArr),[]);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
