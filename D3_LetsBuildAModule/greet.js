// module designed to be independent and help organize code

var greet = function() {
  console.log('hello');
};

// expose greet function to outside files 
module.exports = greet;