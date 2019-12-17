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

const Person = function(firstAndLast) {
  let nameArr = firstAndLast.split(' ');
  const isString = str => typeof str === 'string' ? true : false;
  this.getFirstName = () => nameArr[0];
  this.getLastName = () => nameArr[1];
  this.getFullName = () => nameArr.join(' ');
  this.setFirstName = first => {
    if (isString(first)) nameArr[0] = first;
  };
  this.setLastName = last => {
    if (isString(last)) nameArr[1] = last;
  };
  this.setFullName = (firstAndLast) => {
    if (isString(firstAndLast)) nameArr = firstAndLast.split(' ');
  };
};

const Person = function(firstAndLast) {
    let fullNameArr = firstAndLast.split(" ");
    this.setFullName = firstAndLast => {fullNameArr = firstAndLast.split(" ")};
    this.setFirstName = first => {fullNameArr[0] = first};
    this.setLastName = last => {fullNameArr[1] = last};
    this.getFullName = () => fullNameArr.join(" ");
    this.getFirstName = () => fullNameArr[0];
    this.getLastName = () => fullNameArr[1];
};

const Person = function (firstAndLast) {
  let _firstName, _lastName;
  this.setFullName = fullName => {[ _firstName, _lastName ] = fullName.split(" ")};
  this.getFullName = () => `${_firstName} ${_lastName}`;
  this.getLastName = () => _lastName;
  this.getFirstName = () => _firstName;
  this.setFirstName = firstName => {_firstName = firstName};
  this.setLastName = lastName => {_lastName = lastName};
  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
bob.getFullName();
