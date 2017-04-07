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
var reverseStringv2 = function(s) {
  var midpoint = Math.floor(s.length/2);
  for (var rev1='',rev2='',i=midpoint-1,j=s.length-1; i >= 0;) {
    rev1 += s[i--];
    rev2 += s[j--];
  }
  return s.length&1 ? rev2+s[midpoint]+rev1 : rev2+rev1;
};

for (var index=1, str = ''; index<=10000000;index++) str+='a';
//console.log(str);
console.log('size of str is '+str.length);

console.time('Testing normal version');
reverseString(str);
console.timeEnd('Testing normal version');

console.time('Testing cut in half version');
reverseStringv2(str);
console.timeEnd('Testing cut in half version');
