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

// final solution
function rot13(str) {
  return str.replace(/[A-Z]/g, char => String.fromCharCode(char.charCodeAt() % 26 + 65));
}

// functional solution
function rot13(str) {
  return str.split('')
    .reduce((dec,char) => dec.concat(/[A-Z]/.test(char) ? String.fromCharCode(65+(char.charCodeAt()%26)) : char),'');
}

// original solution
function rot13(str) {
  for (var i=0, decStr='';i<str.length;i++) {
    var charCode = str.charCodeAt(i);
    decStr += charCode >= 65 && charCode <=90 ? String.fromCharCode(65+(charCode)%26) : str[i];
  }
  return decStr;
}

rot13("SERR PBQR PNZC");
