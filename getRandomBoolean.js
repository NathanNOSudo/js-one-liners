// Get a random boolean

const getRandomBoolean = () => Math.random() >= 0.5;
// a 50/50 chance of returning true or false
console.log(getRandomBoolean());

// Convert to a named function
function getRandomBoolean() {
  return Math.random() >= 0.5;
}
