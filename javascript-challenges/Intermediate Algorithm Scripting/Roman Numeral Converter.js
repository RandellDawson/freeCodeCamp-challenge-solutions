/* Roman Numeral Converter
Convert the given number into a roman numeral.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

// following function will convert numbers
// into roman numerals between 1-3999
function convertToRoman(num) {
  var newNum = "";
  var tempnum = num;

  for (var d= 1000; d > 1; d /= 10) {
    var count = 0;
    while (tempnum - d >= 0) {
      tempnum -= d;
      count++;
    }
    if (count > 0) newNum += convert(count,d);
  }
  if (tempnum > 0) newNum += convert(tempnum,1);
  return newNum;
}

function convert(count,d) {
    var numerals = {1: ["I","V","X"], 10: ["X","L","C"], 100: ["C","D","M"], 1000: ["M","",""]};
    var currentChars;
    if (count < 4) currentChars = repeat(count,numerals[d][0]);
    else if (count == 4) currentChars = numerals[d][0] + numerals[d][1];
    else if (count == 5) currentChars = numerals[d][1];
    else if (count < 9) currentChars = numerals[d][1] + repeat(count-5,numerals[d][0]);
    else  currentChars = numerals[d][0] + numerals[d][2];
    return currentChars;
}

function repeat(n,c) {
  var myChars = "";
  for (var loop = 0; loop < n; loop++) myChars += c;
  return myChars;
}
convertToRoman(68);
