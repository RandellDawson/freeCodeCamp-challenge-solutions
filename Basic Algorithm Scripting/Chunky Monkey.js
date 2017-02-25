/* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second
argument) and returns them as a multidimensional array.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function chunkArrayInGroups(arr, size) {
  var groupsArr = [];
  for (i=0; i<arr.length; i+=size) groupsArr.push(arr.slice(i,i+size));
  return groupsArr;
}

function chunkArrayInGroups_v2(arr, size) {
  var groupsArr = [];
  var tempArr = [];
  for (i=0;i < arr.length;) {
    if (tempArr.length < size) {
      tempArr.push(arr[i]);
      i++;
    }
    else {
      groupsArr.push(tempArr);
      tempArr = [];
    }
  }
  if (tempArr.length > 0) groupsArr.push(tempArr);
  return groupsArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
