
const person = {
    name: "Akshat",
    class: "bca",
    age: 12
}

console.log(person["age"])
console.log(person.age)

person.age = 14;

console.log(person["age"])
console.log(person.age)

person.surname = "Rag";

console.log(person["surname"])
console.log(person.surname)
console.log(typeof (Object.keys(person)))
console.log(Object.keys(person))


console.log(a); // undefined
var a = 10;


// console.log(b); // ❌ ReferenceError
// let b = 20;

