// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Level 1: Rescue Mission

// move down x 2
// move right
// move up x 2
// move right x 2
// move down
// Attack Enemy!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


//Level 2: Grab the Mushroom

// move up
// move right
// move left
// move up


this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


//Level 3: Drink Me

//Attack Enemy!
//move right
//move down
//move up
//move right
//Attack Enemy!

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Level 4:  Taunt the Guards
// move right
// bust down door
// move right
// get guards attention
// move left x 2
// Say attack! to get Phoebe to shoot.

// move right
// say "follow me"
// move right x2
// move up and move right
// Get the guards attention and get them to follow around the block.
// Escape to the right


this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


// Level 5:  It's a Trap!

// Run down to earshot of the Ogre
// Get his attention by yelling.
// Run back up with the Ogre following so the archers can shoot him.

// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey!");
this.moveUp();
this.moveUp();

// Level 6:  Break the Prison
//****DOES NOT LOAD ON MY COMPUTER AFTER MANY ATTEMPTS*****

// Level 7: Taunt

// Insult the Ogre enough times so he gets angry and comes down to kill you.
// Then the archers can kill him.

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey Ugly!");
this.say("Yo Mama!");
this.say("Nice helmet Thor!");
this.say("How was your beauty sleep?");


// Level 8: Cowardly Taunt

// Get close enough to the Ogres that you can get their attention when you say something.
// But don't get so close that they can kill you or you can't get away.
// Then have them follow you to between the towers where the archers can shoot them.

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(72, 41);
// Say something!
this.say("You mama!");
// Then run back behind the arrow towers for safety.
this.moveXY(66, 13);
// You can shift+click on the map to insert coordinates.


// Level 9: Commanding Followers

// Get the attention of the friendly soldiers. 
// Get them to follow you into range of the ogres.
// Have the attack and kill the ogres.

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me!");
this.moveXY(63, 45);
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("Attack the monsters!");
// Make sure Tharin is safe!


// //Level 10:  Mobile Artillery
// Move the cannon in range of the Ogres
// Carefully aim and shoot the Orges to kill small orgres with first hit.
// Then large Ogre will move towards you, fire again accounting for Orgre moving toward you.
// After killing the large ogre do the same thing with second batch of ogres.

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(45, 41);
this.attackXY(69, 55);
this.attackXY(56, 47);
this.attackXY(50, 66);
this.attackXY(45, 53);

// Release 3: Answer the following questions

// When you are finished with all of the campaigns, answer the following questions. You may want to look at some resources on JavaScript before answering.

// What is this referring to? Think programming-wise rather than in the terms of the game.
//In JavaScript this always refers to the “owner” of the function we're executing, or rather, to the object that a function is a method of.


// // What does the () do in JavaScript?
// () are very important for JavaScript functions.  They make space for a parameter that will be assigned later when the function is called.

// What is the point of the semicolons?
//Ha ha!  Is this a trick question?  Apparently they don't do anything but many coders don't know that or worry that some browsers require them.  If a line starts with parenthesis then a semi colon prevents confusion
//but besides that, they are unnecessary according to this source:  http://mislav.uniqpath.com/2010/05/semicolons/

// Reflection:
// Write your reflection here.


// // What parts of your strategy worked? What problems did you face?


// // What questions did you have while coding? What resources did you find to help you answer them?
// My main question was "Is playing this game helping me to learn JavaScript?"  I went through all the levels.  I learned a little.


// // What concepts are you having trouble with, or did you just figure something out? If so, what?
// I'm having trouble understanding how I will use the code I used in Code Combat.

// // Did you learn any new skills or tricks?
// Practices pseudocode although I'm not sure if I was doing it right.  I did it very informally in a way that was helpful to me.

// // How confident are you with each of the Learning Competencies?
// Pretty confident.  I got through all the levels except the one that didn't load.

// // Which parts of the challenge did you enjoy?
// Listening to the funny things the characters said to each other.

// // Which parts of the challenge did you find tedious?
// Having to replay the missions from the beginning over and over again to see if my code worked.


























