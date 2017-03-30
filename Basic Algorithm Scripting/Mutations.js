/* Mutations
  
Return true if the string in the first element of the array contains all of the letters of the string in the
second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are
present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function mutation(arr) {
  return arr[1].toLowerCase().split('').every( elem => arr[0].toLowerCase().includes(elem));
}

function mutation_v2(arr) {
  var a = arr[1].toLowerCase();
  var b = arr[0].toLowerCase();
  for (i=0;i<a.length;i++) {
    if (!b.includes(a[i])) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
