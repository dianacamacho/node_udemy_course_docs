// Pattern 1
var greet1 = require('./greet1')
greet1();


// Pattern 2
var greet2 = require('./greet2');
// greet 2 contains module.exports, so can call then new property you added on var greet2
greet2.greet();

// more common is to explicity say what your looking for from the module.exports object
var greet2b = require('./greet2').greet;
// now the greet function is saved in var greet2b
greet2b();


// Pattern 3
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed hello world 3!";

// If we change greeting in the greet3 object, future objects made from same Greeter constructor in greet3.js will also follow that new form. 

// First time node saw require for the greet3 file, it cached the results from module.exports. Then the next time you call it for greet3 file, uses the cachedModule.exports, and since it's an object, it will end up being a reference to the same object created before, so previous change will be seen in future objects made from Greeter constructor. Applies across multiple file require calls.
var greet3b = require('./greet3');
greet3b.greet();


// Pattern 4, give module ability to made the new object
var Greet4 = require('./greet4');
var grtr = new Greet4();

// creating the new object ourselves, so cab keep creting new Greet4 objects and they wont reference the same object because we are not using the require funciton anymore, just using the function constructor that came back from the intial require call
grtr.greet();

// Pattern 5, Revealing module pattern
var greet5 = require('./greet5').greet;
greet5();