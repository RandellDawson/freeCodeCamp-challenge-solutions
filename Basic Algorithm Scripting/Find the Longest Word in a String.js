/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/
// original solution
function findLongestWord(str) {
  return str.split(' ').reduce( (longest,word) => Math.max(longest,word.length),0);
}

// non-array solution
function findLongestWord_v2(str) {
  for (var i=0,temp=0,longest=0; i<str.length;i++) {
    if (str[i] !== ' ' || str[i]==='-') temp+=1;
    else {
      longest = Math.max(longest,temp);
      temp=0;
    }
  }
  return Math.max(longest,temp);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
