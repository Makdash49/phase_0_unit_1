// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Mark McQuillen
//  2. Sherwood Callaway


// 0. "YOU SIGNED... WHO?!"
var tomCruise = {
    name: "Tom Cruise", 
    age: 40,
    quote: "I feel the need, the need for speed."
}

var johnTravolta = {
    name: "John Travolta",
    age: 52,
    quote: "It's greased lightning!"



// 1. "Here they Come!"
var adamSandler = new client("Adam Sandler", 47, 6,  "That's your home. Are you too good for your home?")
var kristenBell = new client("Kristen Bell", 33, 5.4, "Do you want to build a snomwman?")
var jimCarrey = new client("Jim Carrey", 52, 6.4, "...so you're telling me there's a chance? YEAH!")



// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"
var adamSandler = new client("Adam Sandler", 47, 6,  "That's your home. Are you too good for your home?")
var kristenBell = new client("Kristen Bell", 33, 5.4, "Do you want to build a snomwman?")
var jimCarrey = new client("Jim Carrey", 52, 6.4, "...so you're telling me there's a chance? YEAH!")


// 4. "But wait, there's more!"
function client(name, age, height, quote) {
    this.name = name,
    this.age = age,
    this.feet_tall = height,
    this.quote = quote,
    this.presentation = function() {
        console.log("My client is " + name + ", who is " + age + " years young, and " + height + " feet tall, and whose famous quote is: " + quote + ".")
    },
    this.showQuote = function() {
        console.log(quote)
    }
}


// 5.  ** BONUS **
See above:      this.feet_tall = height,

//  6.  Your Reflection:
I'm still getting used to JavaScript but I find comfort in that it has many similarities to Ruby.
Thankfully my GPS partner was able to provide much of the necessary syntax to make this work.  I'm a little confused about 
how this code would fit into a larger program.  I look forward to seeing that at DBC.  I believe I need much more practice with this syntax.
