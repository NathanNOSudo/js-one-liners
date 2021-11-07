// simple oneliner for chekcing if a integer is even or odd.
const isEven = (num) => num % 2 === 0;
console.log(isEven(5)); // falseconsole.log(isEven(4));// true

// convert to named function as well.
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(5)); // falseconsole.log(isEven(4));// true
