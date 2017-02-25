/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to
their corresponding HTML entities.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function convertHTML(str) {
  return str.replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
        .replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");
