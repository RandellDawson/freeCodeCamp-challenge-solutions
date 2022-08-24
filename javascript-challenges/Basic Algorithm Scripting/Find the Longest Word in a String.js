/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/
// shortest solution
function findLongestWord(str) {
  return Math.max(...str.split(' ').map(word=>word.length));
}

// original solution
function findLongestWord(str) {
  return str.split(' ').reduce( (longest,word) => Math.max(longest,word.length),0);
}

// non-array solution
function findLongestWord(str) {
  var word = '', longest = 0;
  for (var char of str) {
    word = char === ' ' ? (longest = Math.max(longest, word.length),'') : word + char;
  }
  return Math.max(longest, word.length);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
