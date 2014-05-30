
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}


// __________________________________________
// Write your code below.


// Create object Adam, with properties of name: "Adam" and spouse: terah.
var adam = {
  name: "Adam",
  spouse: terah,
}

// Give terah the spouse property of adam.
terah.spouse = adam

//Change terah property of weight to 125.
terah.weight = 125

//remove terah property eyeColor.
delete terah.eyeColor


//create a terah property with it's own variables.
terah.children = {}

//Add variables of the names and assign them as the children of terah.
var carson = {name: "Carson"}
terah.children.carson = carson
var carter = {name: "Carter"}
terah.children.carter = carter
var colton = {name: "Colton"}
terah.children.colton = colton


//Set Adam's children equal to Terah's.
adam.children = terah.children


// __________________________________________
// Reflection: Use the reflection guidelines
// Ok.  I've learned a lot this week.  This was all new to me and although there is much that I do not understand I have come a long way.
// Fortunately, I got a lot of help from peer paring and I was able to learn a lot of syntax by doing web research.
// At first, I tried writing a lot of code but then I discovered that little of it worked.  So then I started writing just enough
// code to run each test, and I kept trying till I got it right.
// 
// This week was the first time I have used node and Javascripts so it was good to see how the workflow goes of coding and testing.
// // 
// http://stackoverflow.com/questions/208105/how-to-remove-a-property-from-a-javascript-object
// http://msdn.microsoft.com/en-us/library/ie/kb6te8d3(v=vs.94).aspx

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)