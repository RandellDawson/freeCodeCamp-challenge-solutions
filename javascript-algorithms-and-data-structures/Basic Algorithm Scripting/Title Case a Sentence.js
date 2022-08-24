/* Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the
word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/^(.)|[^\w-'](\w)/gi, match => match.toUpperCase());
}

function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' ');
}

function titleCase(str) {
 return str.toLowerCase().replace(/\S+/g, word => word[0].toUpperCase()+word.slice(1));
}

function titleCase(str) {
   for (var newStr = '', i=0; i<str.length; i++) {
     newStr += str[i] !== ' ' && str[i-1] === ' ' || i===0 ? str[i].toUpperCase() : str[i].toLowerCase()
   }
   return newStr;
 }

titleCase("I'm a little tea pot");
