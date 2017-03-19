// replace exports with our own object
function Greeter() {
  this.greeting = "Hello world 3!";
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greeter();