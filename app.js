//console.log("hello world");
// let o = {};
// console.log(o.constructor === Object);

// let a = [];
// console.log(a.constructor === Array);
//let val = "abc";
// console.log((val.constructor = Number));
// console.log(typeof val);

// val.foo = "bar";
// foo.constructor = undefined;
// let a = [];

// a.constructor = String;
// console.log(a.constructor === String);

// console.log(a instanceof String);
// console.log(a instanceof Array);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eye;
  this.age = age;
  this.changeName = function (name) {
    this.lastName = name;
  };
}

const myfather = new Person("john", "doe", 50, "red");
const myMother = new Person("Sally", "Cron", 52, "brown");

myMother.changeName("drip");

document.getElementById("demo").innerHTML =
  "My father's age is " +
  myfather.age +
  " and my mother's last name is " +
  myMother.lastName;

// myfather.gender = "male";

// myfather.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// document.getElementById("demo").innerHTML =
//   "My father's full name is " + myfather.fullName();

console.log(function () {}.constructor === Function);
