// This script displays a greeting to the user based upon the current time. it also displays the current date using today.getDate() function.

var today = new Date(); // create a new date object
var hourNow = today.getHours(); // get the current hour
var greeting;

//Display the appropriate greeting based on the current time
if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}
document.write(greeting);
