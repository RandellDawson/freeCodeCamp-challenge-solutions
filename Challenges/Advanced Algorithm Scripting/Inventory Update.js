/* Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh
delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be
found, add the new item and quantity into the inventory array. The returned inventory array
should be in alphabetical order by item.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function updateInventory(arr1, arr2) {
  const currInvObj = arr1.reduce((inv,item,idx) => (inv[item[1]] = {qty: item[0], idx: idx}, inv),{});
  arr2.map(item => {
    [qty, itemName] = item;
    if (currInvObj.hasOwnProperty(itemName))
      arr1[currInvObj[itemName].idx][0] += qty;
    else
      arr1.push([qty, itemName]);
  });
  return arr1.sort((a,b) => a[1] > b[1]);
}

function updateInventory(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  arr1.sort((a,b) => a[1] > b[1]);
  let idx = 0, result = [], lastItem = '';
  for (let idx in arr1) {
    let curr = arr1[idx];
    if (curr[1] === lastItem)
      result[result.length-1][0] += curr[0];
    else {
      result.push(curr);
      lastItem = curr[1];
    }
  }
  return result;
}

function updateInventory(arr1, arr2) {
    let invObj = arr1.reduce((obj,arr) => {obj[arr[1]]=arr[0]; return obj},{});
    arr2.forEach(arr => {
      invObj[arr[1]] = invObj.hasOwnProperty(arr[1]) ? invObj[arr[1]] + arr[0] : arr[0];
    });
    return Object.keys(invObj).sort().reduce((arr,key) => arr.concat([[invObj[key],key]]),[]);
}

// original solution
function updateInventory(arr1, arr2) {
    var invObj = {};
    for (var i=0; i<arr1.length;i++)
      invObj[arr1[i][1]] = arr1[i][0];
    for (i=0; i<arr2.length;i++) {
      var prop = arr2[i][1];
      var qty = arr2[i][0];
      if (invObj.hasOwnProperty(prop))  invObj[prop] += qty;
      else  invObj[prop] = qty;
    }
    arr1 = [];
    var keys = Object.keys(invObj);
    keys.sort();
    for (i=0;i<keys.length;i++) {
      var k = keys[i];
      arr1.push([invObj[k],k]);
    }
    return arr1;
}
// Example inventory lists
var curInv = [ [21, "Bowling Ball"], [2, "Dirty Sock"],
    [1, "Hair Pin"], [5, "Microphone"] ];

var newInv = [ [2, "Hair Pin"], [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"], [7, "Toothpaste"] ];

updateInventory(curInv, newInv);
