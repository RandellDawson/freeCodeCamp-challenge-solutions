/* Title Case a Sentence

Return the length of the longest word in the provided sentence.

Your response should be a number.
Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71

 no array version
function titleCase(str) {
  var newStr = '';
  for (var i=0; i<str.length; i++) {
    if (str[i] !== ' ' && str[i-1] === ' ' || i===0) newStr += str[i].toUpperCase();
    else newStr += str[i].toLowerCase();
  }
  return newStr;
}
*/

function titleCase(str) {
  return str.toLowerCase().split(' ').map((word)=> word[0].toUpperCase()+word.slice(1)).join(' ');
}

titleCase("I'm a little tea pot");
