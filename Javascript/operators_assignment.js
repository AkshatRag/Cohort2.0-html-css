// Assignment - 29 Oct
// ===============================

// 1. Basic Operators
let a = 10;
let b = 3;

// Arithmetic
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1

// Assignment Operators
let x = 5;
x = x + 3;
console.log(x); // 8

x += 3;
console.log(x); // 11

x -= 2;
console.log(x); // 9

x *= 2;
console.log(x); // 18

x /= 3;
console.log(x); // 6

// Increment & Decrement
let count = 5;
console.log("Before increment:", count);
count++;
console.log("After increment:", count);

count = 5;
console.log("Before decrement:", count);
count--;
console.log("After decrement:", count);

// Comparison
console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(10 > 5); // true
console.log(10 < 20); // true
console.log(10 == 10); // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

console.log(5 > 3 && 10 > 8); // true
console.log(5 > 3 || 10 < 8); // true

// Bitwise
console.log(5 & 1); // 1
console.log(5 | 1); // 5
// 5 -> 101 , 1 -> 001

// ===============================
// 2. Variable Hoisting

console.log(a1);
var a1 = 10; // undefined due to hoisting

// console.log(b1);
// let b1 = 10; // ReferenceError (let not hoisted in same way)

test();
function test() {
  console.log("Hello");
}

// Function expression
// hello(); // Error: Cannot access before initialization
var hello = function() {
  console.log("Hi");
};

// What gets hoisted:
// Variables declared with var and function declarations are hoisted.
// Function expressions and let/const variables are not fully hoisted.

// ===============================
// 3. Conditional Operators

// a. Age check
let age = prompt("Enter your age:");
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// b. Marks grading
let marks = prompt("Enter your marks:");
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

// c. City condition
let city = "Bhopal";
if (city === "Bhopal") {
  console.log("MP");
} else if (city === "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown City");
}

// d. Ternary Operator
let score = 40;
let result = score > 35 ? "Pass" : "Fail";
console.log(result);

// e. Ternary Conversion
let temperature = 28;
let weather = temperature > 30 ? "Hot" : "Pleasant";
console.log(weather);

// f. Switch Case
let day = parseInt(prompt("Enter day number (1-7):"));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// g. Logical Operator in Condition
let userAge = 20;
let country = "India";

if (userAge > 18 && country === "India") {
  console.log("Eligible for Vote");
} else {
  console.log("Not Eligible");
}
