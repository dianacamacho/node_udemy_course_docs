// with json files, require returns the object created from the json text, no need for modules.export
var greetings = require('./greetings.json');

var greet = function() {
  console.log(greetings.de);
};

module.exports = greet;