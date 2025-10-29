// Introduction to JavaScript
document.title;
alert("Hello from Sheryians!");
// If HTML is skeleton, CSS is clothes — JS is the brain that makes it move!
// Example: Popups, animations, form validation, etc.

// Linking JavaScript Files
console.log("Connected!");
// Move script tag to different sections and observe execution order
// Try using defer to load scripts properly

// Running JS in Browser Console
2 + 2;
alert("Hi");
prompt("Your name?");
let city = "Bhopal";
city;

// Variables and Keywords (var, let, const)
var a = "Harsh";
let b = "Sheryians";
const c = "School";
a = "Updated";
b = "Updated";
// c = "Updated"; // This will throw an error (const cannot be reassigned)

{
  let d = "Block Scoped Variable";
}
// console.log(d); // Error: d is not defined

// Examples where const is useful
const PI = 3.14159;
const BASE_URL = "https://api.example.com";
const APP_NAME = "MyApp";

// Logging and Interaction
console.log("Harsh");
console.info("Age: 22");
console.warn("City: Bhopal");

let userName = prompt("Enter your name:");
alert(`Welcome ${userName}!`);
console.log(typeof userName);

let age = prompt("Enter age:");
console.log(age + 5); // Observe implicit type conversion (string + number)

// Working with Strings
let msg = "I love Sheryians";
msg.slice(2, 6);
msg.split(" ").length;
msg.replace("love", "study at");
let name = "Harsh";
console.log(`Hey ${name}, welcome to JS!`);
msg.includes("love");

// Statements and Semicolons
let x = 10 // removed semicolon
console.log(x); console.log("Two statements on one line"); console.log("Check if runs");
console.log("Line1")
console.log("Line2")
console.log("Line3")

// Comments
// Harsh Vandana Sharma
/*
This code demonstrates
JavaScript basics
and console usage
*/
// console.log("Hidden log");

// Expressions vs Statements
5 + 10;
let num = 10;
let y = (5 + 10) * 2;
console.log(y);
// Expression gives value immediately, statement performs an action

// Data Types
let age1 = 25;
let name1 = "Harsh";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = { city: "Bhopal" };
let x1 = null;
let y1;
let z = Symbol("id");

console.log(typeof age1);
console.log(typeof name1);
console.log(typeof isStudent);
console.log(typeof skills);
console.log(typeof user);
console.log(typeof x1);
console.log(typeof y1);
console.log(typeof z);

age1 = "Twenty Five";
console.log(typeof age1);

console.log(5 + "5"); // String + Number = String

// Special Values
console.log(1 / 0); // Infinity
console.log(0 / 0); // NaN
console.log(Number("abc")); // NaN
console.log(undefined + 1); // NaN
// Use null when value is intentionally empty, undefined when value not assigned

// Primitive vs Reference
let p = 5;
let q = p;
q = 10;
console.log(p, q); // Different values (primitives are copied by value)

let obj1 = { name: "Harsh" };
let obj2 = obj1;
obj2.name = "Sheryians";
console.log(obj1.name); // Both change (objects are copied by reference)
