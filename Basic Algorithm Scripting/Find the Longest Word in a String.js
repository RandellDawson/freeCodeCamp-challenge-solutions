/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function findLongestWord(str) {
  return str.split(' ').reduce( (longest,word) => Math.max(longest,word.length),0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
