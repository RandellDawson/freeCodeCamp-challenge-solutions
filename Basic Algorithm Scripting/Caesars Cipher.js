/* Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
 Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function rot13(str) {
  var decodedStr='';
  for (var i=0;i<str.length;i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <=90) {
      var newCode = charCode - 13;
      if (newCode < 65) decodedStr += String.fromCharCode(90-(64-newCode));
      else decodedStr += String.fromCharCode(newCode);
    }
    else decodedStr += str[i];
  }
  return decodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
