/* t Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all
numbers between 1 and 3.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function smallestCommons(arr) {
    function isPrime(n) {
      if (n%2===0 | n%3===0) {return false;}
      for (i=5;i<n; i+= 2) {
        if (n % i === 0) return false;
      }
      return true;
    }
    var theMin = Math.min(arr[0],arr[1]);
    var theMax = Math.max(arr[0],arr[1]);
    var factorizaton = {};
    var lcm = 1;
    for (var num=theMin; num<=theMax; num++ ) {
      var tempNum = num;
      var j = 2; // starting at 2, create prime factorizaton of num
      while (isPrime(j) || tempNum > 1) {
          if (tempNum % j === 0) {
            var power = 0;
            while (tempNum % j === 0) {
              tempNum /= j;
              power += 1;
            }
            if (factorizaton.hasOwnProperty(j))
                factorizaton[j] = Math.max(power,factorizaton[j]);
            else
                factorizaton[j] = power;
          }
          j += 1;
       }
    }
    for (var prime in factorizaton)
      lcm *= Math.pow(prime,factorizaton[prime]);
    return lcm;
}

smallestCommons([1,5]);
