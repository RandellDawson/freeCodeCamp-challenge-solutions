/* Title Case a Sentence

Return the length of the longest word in the provided sentence.

Your response should be a number.
Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' ');
}

/*
 no array version
 function titleCase(str) {
   for (var newStr = '', i=0; i<str.length; i++) {
     newStr += str[i] !== ' ' && str[i-1] === ' ' || i===0 ? str[i].toUpperCase() : str[i].toLowerCase()
   }
   return newStr;
 }
*/

titleCase("I'm a little tea pot");
