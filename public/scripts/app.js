'use strict';

// const square = (x) => {          //long syntax
//   return x * x;
// };
// console.log(square(9));
//
// const squareNew = (x) => x*x;     //short syntax
//
// console.log(squareNew(6));

var name = "Ashley Fernandes";

var getFirstName = function getFirstName(x) {
  var firstName = x.split(' ')[0];
  return firstName;
};

console.log(getFirstName(name));

var getFirstNameShort = function getFirstNameShort(x) {
  return x.split(' ')[0];
};
console.log(getFirstNameShort(name));