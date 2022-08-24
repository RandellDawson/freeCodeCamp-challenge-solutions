/* Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

// iterative version
function factorialize(num) {
  if (num < 0) return;
  for (var product=1;num > 0;num--) product *= num;
  return product;
}

// recursive version
function factorialize(num) {
  return num < 0 ? undefined : num <= 1 ? 1 : num*factorialize(num-1);
}

factorialize(5);
