/* Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh
delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be
found, add the new item and quantity into the inventory array. The returned inventory array
should be in alphabetical order by item.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

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

// functional solution
function updateInventory_v2(arr1, arr2) {
    let invObj = arr1.reduce((obj,arr) => {obj[arr[1]]=arr[0]; return obj},{});
    arr2.map(arr => {
      if (invObj.hasOwnProperty(arr[1])) invObj[arr[1]] += arr[0];
      else  invObj[arr[1]] = arr[0];
    })
    return Object.keys(invObj).sort().reduce((arr,key) => arr.concat([[invObj[key],key]]),[]);
}

// Example inventory lists
var curInv = [ [21, "Bowling Ball"], [2, "Dirty Sock"],
    [1, "Hair Pin"], [5, "Microphone"] ];

var newInv = [ [2, "Hair Pin"], [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"], [7, "Toothpaste"] ];

updateInventory(curInv, newInv);
