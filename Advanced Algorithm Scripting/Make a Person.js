/* Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

var Person = function(firstAndLast) {
  var nameArr = firstAndLast.split(' ');
  var isString = str => typeof str === 'string' ? true : false;
  this.getFirstName = () => nameArr[0];
  this.getLastName = () => nameArr[1];
  this.getFullName = () => nameArr.join(' ');
  this.setFirstName = (first) => {
    if (isString(first)) nameArr[0] = first;
  };
  this.setLastName = (last) => {
    if (isString(last)) nameArr[1] = last;
  };
  this.setFullName = (firstAndLast) => {
    if (isString(firstAndLast)) nameArr = firstAndLast.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
