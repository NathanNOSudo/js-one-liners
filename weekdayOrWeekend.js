const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;

console.log(isWeekend(new Date(2021, 4, 14))); // false (Friday)
console.log(isWeekend(new Date(2021, 4, 15))); // true (Saturday)

// convert to named function
function isWeekend(date) {
  return [0, 6].indexOf(date.getDay()) !== -1;
}
