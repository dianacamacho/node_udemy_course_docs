function Person(first, last) {
  this.first = first;
  this.last = last;
}

// attaching new methods and properties to objects created using the Person function constructor
Person.prototype.greet = function() {
  console.log('Hello ' + this.first + ' ' + this.last);
}

var john = new Person('John', 'Doe');
console.log(john.first);
john.greet();

var jane = new Person('Jane', 'Doe')
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);