// pass by value
function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a);

// console.log(a) above will print 1, because when change was called and a was passed, a is a primitive value (number), so b became a copy of that value and when b was set to 2, it changed the value of a different spot in memory, not the original a, which is at a different memory address

// passing by reference (JS passes objects by reference, not by value)

function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};

changeObj(c);
console.log(c);

// console.log(c) above will change c prop1 to function and new prop2 was added because c is object and is thus passed by reference, and noth objects point to same object in memory