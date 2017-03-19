// Revealing module pattern: exposing only the properties and methods you want via a returned object. Good clean way to structure and protect code within modules
var greeting = 'Hello world 5!!!';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
}

// greeting variable is protected
