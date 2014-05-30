// I paired [with: Kim Brewer] on this challenge.

// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = 5 < 3;
var members = ["John", 4, 3, "Mary", 1];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// At first when I saw this challenge, I did not know what I was looking at.
// It looked like gibberish to me and I got a little stressed.
// I had read about the JavaScript and I understood that it does many of the 
// same things Ruby does but the syntax had not settled in with me.
// Fortunately, Kim Brewer offered to pair with me on this and she was able
// to explain what everything meant and I understood it because it's a lot like Ruby.
//
//





// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

