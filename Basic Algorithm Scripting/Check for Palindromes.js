/* Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
 ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn
 everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among
 others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

// original version
function palindrome(str) {
  str = str.replace(/_|\W/g,'').toLowerCase();
  var revString = str.split('').reverse().join('');
  return revString == str ? true : false;
}

// The following version works without arrays and is implemented in (n/2) iterations where n is string length
function palindrome_v2(str) {
  str = str.replace(/_|\W/g,'').toLowerCase();
  for (var i=0;i<=(str.length-1)/2;i++) if (str[i] !== str[str.length-1-i]) return false;
  return true;
}

palindrome("eye");
