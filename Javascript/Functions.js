function abcd(){
    console.log("hello world ")
}
abcd(); // Output: hello world

function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!

function sum (a,b){
    return a + b;
}
sum1 = sum(5,10);
console.log(sum1); // Output: 15

// Functions expressions 
let multiply = function(a,b){
    return a * b;
}
let result = multiply(4,5);
console.log(result); // Output: 20

// Using arguments object
function add(){
    let sum = 0 ;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }    return sum;
}
console.log(add(1,2,3,4)); // Output: 10
console.log(add(5,10,15));  // Output: 30

// Arrow functions
let divide = (a,b) =>{
    return a / b;
}
let result2 = divide(10,2);
console.log(result2); // Output: 5

// Implicit return in arrow functions
let square = x => x * x;
let result3 = square(6);
console.log(result3); // Output: 36

// Default parameters
function power(base, exponent = 2){
    return Math.pow(base, exponent);
}
console.log(power(3)); // Output: 9
console.log(power(2,3)); // Output: 8

// Rest parameters
function multiplyAll(...numbers){
    return numbers.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiplyAll(1,2,3,4)); // Output: 24
console.log(multiplyAll(5,6)); // Output: 30

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This is an IIFE!");
})();   // Output: This is an IIFE! 

// Function hoisting
hoistedFunction();
function hoistedFunction(){
    console.log("This function is hoisted!");
} // Output: This function is hoisted!

// Function as first-class citizens
function callFunction(fn){
    fn();
}   
callFunction(function(){
    console.log("Function passed as an argument!");
}); // Output: Function passed as an argument!

// Recursive function
function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Function closure
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}
const newFunction = outerFunction("outside");
newFunction("inside");
// Output: 
// Outer Variable: outside
// Inner Variable: inside


//Higher-Order Functions (HOF)
function higherOrderFunction(callback){
    console.log("Before callback");
    callback();
    console.log("After callback");
}
higherOrderFunction(function(){
    console.log("This is the callback function!");
});
// Output:
// Before callback
// This is the callback function!
// After callback

// parameteres in javascript function[required, destructured, default, rest]
function exampleFunction(requiredParam, {name, age}, defaultParam = "defaultValue", ...restParams){
    console.log("requiredParam =", requiredParam);
    console.log("name =", name + ", age =", age);
    console.log("defaultParam =", defaultParam);
    console.log("restParams =", restParams);
}
exampleFunction("requiredValue", {name: "John", age: 30}, undefined, "rest1", "rest2");
// requiredParam = "requiredValue"
// name = "John", age = 30
// defaultParam = "defaultValue"
// restParams = ["rest1", "rest2"]

//arguments in  js [spread, positional, default]
function argsExample(a, b = 10,c,d){
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("d =", d);
}
let argsArray = [1, 2, 3];
argsExample(...argsArray); 
// a = 1
// b = 2
// c = 3
// d = undefine
argsExample(5);
// a = 5
// b = 10
// c = undefined
// d = undefined
