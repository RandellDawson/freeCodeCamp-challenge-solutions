/* Pig Latin

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end
of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function translatePigLatin(str) {
  var isVowel = (letter) => /[aeiou]/i.test(letter); 
  if (isVowel(str[0])) return str + 'way';
  else {
    for (var i=0; i < str.length; i++ ) {
      if (isVowel(str[i]))
        return str.slice(i) + str.slice(0,i) + 'ay';
    }
    return str+'ay';
  }
}
translatePigLatin("consonant");
