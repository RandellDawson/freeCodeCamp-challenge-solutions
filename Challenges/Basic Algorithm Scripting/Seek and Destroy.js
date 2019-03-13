/* Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed
 by one or more arguments. Remove all elements from the initial array that are of the same value
 as these arguments.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

const destroyer = (arr, ...args) => {
    return arr.filter( val =>  !args.includes(val));
};

const destroyer = (arr, ...args) => {
  const argsObj = args.reduce((obj, elem) => (obj[elem] = 1, obj), {});
  return arr.filter(val => args[val]);
};
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
