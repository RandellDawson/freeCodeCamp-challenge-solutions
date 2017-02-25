/* Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function decode(binary) {
  let power = 0;
  return binary.split('').reduceRight( (sum,val) => {
    sum += val*Math.pow(2,power);
    power +=1;
    return sum;
  },0);
}

function binaryAgent(str) {
  return str.split(' ').reduce( (decoded,val) => decoded.concat(String.fromCharCode(decode(val))),'');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
