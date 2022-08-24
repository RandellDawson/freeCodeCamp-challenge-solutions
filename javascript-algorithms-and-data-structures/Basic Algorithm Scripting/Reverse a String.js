/* Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

// original version
var reverseString = function(s) {
  for (var rev='',i=s.length-1; i >=0;i--)  rev += s[i];
  return rev;
};

// another version which is twice as fast
function reverseString(str) {
  var firstHalf = secondHalf = '';
  var firstIdx = Math.floor(str.length / 2) - 1;
  var midChar = str.length & 1 ? str[firstIdx + 1] : '';
  for (var secondIdx = str.length - 1; firstIdx >= 0;) {
    firstHalf += str[firstIdx--];
    secondHalf += str[secondIdx--];
  }
  return secondHalf + midChar + firstHalf;
}

function reverseString(str) {
  var firstHalf = secondHalf = '';
  var midpoint = Math.floor(str.length / 2);
  for (var firstIdx = midpoint-1, secondIdx=str.length-1; i >= 0;) {
    firstHalf += str[firstIdx--];
    secondHalf += str[secondIdx--];
  }
  return str.length&1 ? secondHalf+str[midpoint]+firstHalf : secondHalf+firstHalf;
}

for (var index=1, str = ''; index<=10000000;index++) str+='a';
//console.log(str);
console.log('size of str is '+str.length);

console.time('Testing normal version');
reverseString(str);
console.timeEnd('Testing normal version');

console.time('Testing cut in half version');
reverseStringv2(str);
console.timeEnd('Testing cut in half version');
