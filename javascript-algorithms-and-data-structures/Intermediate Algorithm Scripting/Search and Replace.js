/* Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the
new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean
 to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase())
    after = after[0].toUpperCase() + after.slice(1);
  return str.replace(before, after);
}

const myReplace = (str, before, after) => {
  const newAfter = before[0] == before[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after;
  return str.split(' ').map(word => word === before ? newAfter : word).join(' ');
};

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
