/* Add Items to an Array with push() and unshift()

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a
length of any number of elements, and elements can be added or removed over time; in other words,
arrays are mutable. In this challenge, we will look at two methods with which we can
programmatically modify an array: Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array the
method is being called on; the push() method adds elements to the end of an array, and unshift()
adds elements to the beginning. Consider the following:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
Notice that we can also pass variables, which allows us even greater flexibility in dynamically
modifying our array's data.


We have defined a function, mixedNumbers, which we are passing an array as an argument.
Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array
and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/


function mixedNumbers(arr) {
  // change code below this line
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
