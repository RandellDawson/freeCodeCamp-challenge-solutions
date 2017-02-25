/* Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or
equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the
sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence
are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are
1, 1, 3, and 5.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function sumFibs(num) {
  if (num==1) return sum;
  var sum = 2;
  var prevFib = 1;
  nextFib = 2;
  while (nextFib<=num) {
    if (nextFib % 2 !== 0)
      sum += nextFib;
    var temp = prevFib;
    nextFib += prevFib;
    prevFib = nextFib - temp;
  }
  return sum;
}

sumFibs(4);
