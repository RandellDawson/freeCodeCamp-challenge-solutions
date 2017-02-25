/* No repeats please

Return the number of total permutations of the provided string that don't have repeated consecutive
letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa,
 baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function permAlone(str) {
  var dups = (mystr) => /(.)\1+/.test(mystr);
  var arr = str.split("");
  var n = arr.length;
  var count = 0;
  if (!dups(str)) { count += 1; }
  c = Array.apply(null, new Array(n)).map(Number.prototype.valueOf,0);
  var i = 0;
  while (i < n) {
    if  (c[i] < i) {
      if (i%2===0) {
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
      }
      else {
        temp = arr[c[i]];
        arr[c[i]] = arr[i];
        arr[i] = temp;
      }
      if (!dups(arr.join(''))) { count+= 1; }
      c[i] += 1;
      i = 0;
    }
    else { c[i] = 0; i += 1; }
  }
  return count;
}

permAlone('aab');
