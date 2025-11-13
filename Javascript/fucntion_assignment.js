// 1.Create a function that prints "Hello Javascript".
// function printHello(){
//     console.log("hello javascript");
// }
// printHello();


// 2.Create a function that takes two numbers as parameters and returns their sum.
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));


// 3.Make a function with a default parameter that prints "Hi" followed by the name passed to it. If no name is passed, it should print "Hi Guest".
// function printName(name = "Guest"){
//     console.log(`hii ${name}`);
// }
// printName();
// printName("chetan")


// 4.Use rest parameters to make a function that adds unlimited numbers.
// function addNums(...numbers){
//     let sum = 0;
//     for(let num of numbers){
//         sum += num;
//     }
//     return sum;

// }
// console.log(addNums(2,3,4,5,6,6,6));

// function addNums(...numbers){
//     return numbers.reduce((sum,numbers) => sum+ numbers,0);
// }
// console.log(addNums(2,3,4,5,6,6,6));

// function addNums(...numbers){
//     let sum = 0;
//     numbers.forEach(num =>{
//         sum += num;
//     });
//     return sum;
// }
// console.log(addNums(2,3,4,5,6,6,6));


// 5.Create an IIFE that prints "I run instantly!".
// (function IIFE(){
//     console.log("I run instantly!");
// })();



// 6.Make a nested function where the inner one prints a variable from the outer one.
// function outer(){
//     let a = "chetan"
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();



// 7.Create an array of 5 fruits. Add a fruit to the end and another to the beginning.
// let arr = ["apple", "banana", "orange","papya","berry"];
// arr.push("pinkGuvava");
// console.log(arr);
// arr.unshift("purpleGuvav");
// console.log(arr);



// 8.Use a for loop to print all elements of an array.
// let arr = ["apple", "banana", "orange","papaya","berry"];
// for(let i =0; i < arr.length; i++){
//     console.log(arr[i]);
// }



// 9.Create an object person with keys name, age and city and print each key's value.

// let person = {
//     name: "chetan",
//     age: 20,
//     city:"jaipur",
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }



// 10.Use setTimeout to log "Time's up!" after 2 seconds.

// setTimeout(function (){
// console.log("hello");
// },2000);

// 1. Write a higher-order function
// runTwice(fn)` that
// takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();
// }
// runTwice(function(){
//     console.log("heloo");
// })


// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

// function pure(a,b){
//     return console.log(a+b);
// }
// pure(2,3);
// pure(2,3);

// let variable = 2;
// function impure(a){
//     variable++;
//     return console.log(variable+a);;
// }

// impure(2);
// impure(2);

// 3.Write a function that uses object destructuring inside parameters to extract and print `name` age.
// function age({name,age}){
//     console.log(name);
//     console.log(age);
// }

// age(obj = {
//     name:"chetan",
//     age:18
// })


// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).
// console.log(this);

// let obj = {
//    fnx: function(){
//         console.log(this);
//     },
//    arrow: () => {
//         console.log(this);
//     }
// }

// obj.fnx();
// obj.arrow()


// 5. Given an array of numbers, use`map()` to create a new array where each number is squared.
// let arr = [2,3,4,5,6];
// let newArr = arr.map(function(val){
//     return val * val
// })
// console.log(arr);
// console.log(newArr);



// 6. Use `filter()` to get only even numbers from an array.
// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = arr.filter( x => x % 2 === 0);

// console.log(newArr);


// let arr = [1,23,4,6,7,9,2,];
// let newArr = arr.filter(function(x){
//     return x%2 ===0;
// })
// console.log(newArr);


// // 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let salary = [1000,2000,3000];
// let totalSalary = salary.reduce(function(acc,val){
//     return acc + val;
// },0)

// console.log(totalSalary);


// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

// let arr = ["chetan", "om","com","ku"];
// let newArr = arr.some( x => x.length > 3);
// console.log(newArr);

// let newArr = arr.every(x => x.length > 3);
// console.log(newArr);


// 9. Create an object `` user and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// object.freeze me hum object ki kuch value change nhi kr skte aur na hi kuch add kr skte hai aur seal me hum value change kr skte hai but add nhi kr skte.



// 10. Create a nested object (`user → address → city`) and access the city name inside it.

// let obj = {
//     user:"chetan",
//     address:{
//         name:"chetan",
//         city:"jaipur"

//     }
// };
// function getCity(userObj){
//     return userObj.address.city;
// }

// console.log(getCity(obj));