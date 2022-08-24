/* Use an IIFE to Create a Module

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
         return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
}) ();
