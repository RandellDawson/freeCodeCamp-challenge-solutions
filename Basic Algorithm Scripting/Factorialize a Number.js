/* Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  product = 1;
  for (i = 2; i < num + 1; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);
