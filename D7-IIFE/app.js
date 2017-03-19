var firstname = 'Jane';

// Immediately Invoked Function Expression
(function(lastname) {
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}('Doe'));

console.log(firstname);

// Vars and functions created inside immediately invoked function expressions are protected within that function, scoped to that function, and only available inside of that function

// This is why declaring var firstname = 'Jane' before the IIFE doesn't affect the var firstname = 'John' or prevent it from logging 'John'
