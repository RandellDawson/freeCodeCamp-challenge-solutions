/* Pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the
sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the
 smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and
[9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function pairwise(arr, arg) {
  let sum = 0;
  for (let used = {}, i=0; i<arr.length;i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && !used[i] && !used[j]) {
        used[i]=used[j] = true;
        sum += i+j;
      }
    }
  }
  return sum;
}

// functional solution;
function pairwise(arr, arg) {
  let used = {};
  return arr.reduce((sum,val,i,origArr) => origArr.reduce((sum2,val2,j) => {
    if (i !== j && val + val2 === arg && !used[i] && !used[j]) {
      used[i] = used[j] = true;
      sum2 += i+j;
    }
    return sum2;
  },sum),0);
}

pairwise([1, 1, 1], 2);
