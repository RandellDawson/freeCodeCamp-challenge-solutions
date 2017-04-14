/* Pig Latin

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end
of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function translatePigLatin(str) {
  var vowels = str.match(/[aeiou]/i);
  if (vowels !== null) {
    var idx = str.indexOf(vowels[0]);
    return  idx > 0 ? str.slice(idx) + str.slice(0,idx) + 'ay' : str + 'way';
  }
  return str+'ay';
}
translatePigLatin("consonant");
