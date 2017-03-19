// function statement
function greet() {
  console.log('hi');
}

greet();

// functions in JS are first class,
// so we can pass them as variables
function logGreeting(fn) {
  fn()
}

logGreeting(greet);

// function expression
var greetMe = function() {
  console.log('Hi!');
}

greetMe();

// the function is still first class, 
// so can pass it around

logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
  console.log('Hello!');
})