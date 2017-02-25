/* Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a
function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function addTogether(...args) {
  var isNum = n => typeof n=="number" ? true : false;
  var sumTwoAnd = (x) => isNum(x) ? x+a : undefined;
  if (args.length > 1 && isNum(args[0]) && isNum(args[1]))
    return args[0] + args[1];
  else if (args.length === 1 && isNum(args[0])) {
    var a = args[0];
    return sumTwoAnd;
  }
}

addTogether("http://bit.ly/IqT6zt");
