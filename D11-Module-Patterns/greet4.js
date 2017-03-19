// What if don't want same objet to be returned from require all the time. CHange what you attach to module.exports
function Greeter() {
  this.greeting = "Hello world 4!";
  this.greet = function() {
    console.log(this.greeting);
  }
}

// replace module.exports = new Greeter() with the function itself, Greeter. Give module the ability to create the new object
module.exports = Greeter;

