/* Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors,
one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/
function isPrime(n) {
  if (n%2===0 | n%3===0) {return false;}
  for (i=5;i<n; i+= 2) {
    if (n % i === 0) return false;
  }
  return true;
}
function sumPrimes(num) {
  var sum;
  if (num == 2) {return 2;}
  if (num == 3) {return 5;}
  var n = 5;
  sum = n;
  while (n <= num) {
    if (isPrime(n)) sum += n;
    n += 2;
  }
  return sum;
}
sumPrimes(10);
