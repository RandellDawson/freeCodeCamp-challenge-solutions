/* Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function binaryAgent(str) {
  const binToAscii = (bin,power=0) =>bin.split('').reduceRight((sum,val) => sum += val*Math.pow(2,power++),0);
  return str.split(' ').reduce((decoded,bin) => decoded += String.fromCharCode(binToAscii(bin)),'');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
