/* Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the
.hasOwnProperty(propname) method of objects to determine if that object has the given property
name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
Instructions
Modify the function checkObj to test myObj for checkProp. If the property is found, return that
property's value. If not, return "Not Found".

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
