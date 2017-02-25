/* Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed
 by one or more arguments. Remove all elements from the initial array that are of the same value
 as these arguments.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function destroyer(arr, ...args) {
    return arr.filter( val =>  args.indexOf(val) < 0);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
