/* Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all
objects that have matching property and value pairs (second argument). Each property and value
pair of the source object has to be present in the object from the collection if it is to be included in
the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" },
then you must return the third object from the array (the first argument),
because it contains the property and its value, that was passed on as the second argument.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i = 0; i < collection.length; i++) {
    var found = true;
    for (var sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    if (found) arr.push(collection[i]);
  }
  // Only change code above this line
  return arr;
}

// functional version
const whatIsInAName = (collection, source) =>
   collection.filter(obj => Object.keys(source)
    .every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
    
whatIsInAName([{ first: "Romeo", last: "Montague" },
 { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
