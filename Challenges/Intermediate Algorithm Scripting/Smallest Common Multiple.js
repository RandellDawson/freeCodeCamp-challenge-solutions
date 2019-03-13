/* t Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all
numbers between 1 and 3.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/
const smallestCommons = arr => {
  const lcm = (a,b) => (a * b) / gcd(a, b);
  const gcd = (a, b) => {
    while (true) {
      let r = a % b;
      if (r !== 0) [a,b] = [b,r];
      else return b;
    }
  };
  const [min,max] = arr.sort((a,b)=> a-b);
  let currentLCM = min;
  for (let num = min + 1; num <= max; num++) {
    currentLCM = lcm(currentLCM, num)
  }
  return currentLCM;
};

function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var factorization = {};
  var lcm = 1;
  for (var num=min; num<=max; num++ ) {
    var tempNum = num;
    var j = 2; // starting at 2, create prime factorizaton of num
    while (tempNum > 1) {
      if (tempNum % j === 0) {
        var power = 0;
        while (tempNum % j === 0) {
          tempNum /= j;
          power += 1;
        }
        factorization[j] = factorization.hasOwnProperty(j) ? Math.max(power,factorization[j]) : power;
      }
      j += 1;
    }
  }
  return Object.keys(factorization)
    .reduce((lcm,prime) => lcm *= Math.pow(prime,factorization[prime]),1);
}


function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}
