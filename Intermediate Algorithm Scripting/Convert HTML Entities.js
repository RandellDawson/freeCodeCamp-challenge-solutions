/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to
their corresponding HTML entities.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function convertHTML(str) {
  const map = {'&':'&amp;', '<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'};
  return Object.keys(map).reduce((newStr,find) => newStr.replace(new RegExp(find, 'g'),map[find]),str);
}

// original solution
function convertHTML(str) {
  return str.replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
        .replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");
