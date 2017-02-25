/* Title Case a Sentence

Return the length of the longest word in the provided sentence.

Your response should be a number.
Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function titleCase(str) {
  return str.split(' ').reduce( (words,word) => words.concat(word[0].toUpperCase() + word.slice(1).toLowerCase()),[]).join(' ');
}

titleCase("I'm a little tea pot");
