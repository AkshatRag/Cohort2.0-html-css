// ===============================
// SECTION 1: Objects and OOPS Thinking (Foundation)
// ===============================

// 1. Create a user object that stores name and email and has a login method
const user1 = {
    name: "Akshat",
    email: "akshat@example.com",
    login: function () {
        console.log("User logged in");
    }
};

user1.login(); // "User logged in"

// -------------------------------
// 2. Managing 5 users
// -------------------------------

// 2(a). WITHOUT using a class (using a factory function)
function createUser(name, email) {
    return {
        name: name,
        email: email,
        login: function () {
            console.log(`${this.name} logged in`);
        }
    };
}

const usersWithoutClass = [
    createUser("User A", "a@example.com"),
    createUser("User B", "b@example.com"),
    createUser("User C", "c@example.com"),
    createUser("User D", "d@example.com"),
    createUser("User E", "e@example.com")
];

usersWithoutClass.forEach(u => u.login());

// 2(b). WITH a class (cleaner and more structured)
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}

const usersWithClass = [
    new User("User A", "a@example.com"),
    new User("User B", "b@example.com"),
    new User("User C", "c@example.com"),
    new User("User D", "d@example.com"),
    new User("User E", "e@example.com")
];

usersWithClass.forEach(u => u.login());

// -------------------------------
// 3. Product object with discount
// -------------------------------

const product = {
    name: "Headphones",
    price: 2000,
    getFinalPriceAfterDiscount: function (discountPercent) {
        const discountAmount = (this.price * discountPercent) / 100;
        const finalPrice = this.price - discountAmount;
        return finalPrice;
    }
};

console.log(
    "Final price after 10% discount:",
    product.getFinalPriceAfterDiscount(10)
);

// ===================================================
// SECTION 2: Classes and Objects
// ===================================================

// 4. Car class
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed; // in km/h
    }

    drive() {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    }
}

// 5. Create two different car objects and verify data is different
const car1 = new Car("Toyota", 80);
const car2 = new Car("BMW", 120);

car1.drive(); // Toyota is driving at 80 km/h
car2.drive(); // BMW is driving at 120 km/h

console.log("Are car1 and car2 different objects?", car1 !== car2);

// 6. Answer in own words (as comment)
/*
If classes did not exist, we would use plain functions and objects
(factory functions or constructor functions) to create multiple similar
objects. For example, we would write a function that returns an object
with brand, speed, and drive() method.

Problems in a large project:
- Code duplication: same properties and methods might be defined again and again.
- Hard to maintain: changing a method means updating it in many places.
- No clear structure: it becomes difficult to understand how objects are related.
- Less readable: classes give a clear template/blueprint, without them code looks messy.
Classes solve this by giving one clear definition that is easy to reuse and maintain.
*/

// ===================================================
// SECTION 3: Constructor and this keyword
// ===================================================

// 7. Student class with constructor (name, rollNumber) and introduce()
class Student {
    constructor(name, rollNumber) {
        // 8. Setting values using this
        this.name = name;
        this.rollNumber = rollNumber;

        /*
        If we remove `this` and just write:
            name = name;
            rollNumber = rollNumber;
        it will NOT set values on the object. It will just reassign the
        local parameters to themselves (which does nothing).

        In strict mode / class body, using `this` is required to attach
        the values to the object instance. Without `this`, the properties
        this.name and this.rollNumber remain undefined.
        */
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my roll number is ${this.rollNumber}`);
    }
}

const student1 = new Student("Riya", 101);
student1.introduce();

// 9. Object with normal function vs arrow function and this
const thisDemo = {
    label: "thisDemo Object",

    normalMethod: function () {
        console.log("normalMethod this =", this);
    },

    arrowMethod: () => {
        console.log("arrowMethod this =", this);
    }
};

thisDemo.normalMethod(); // 'this' refers to thisDemo object
thisDemo.arrowMethod();  // 'this' refers to outer/lexical scope (not thisDemo)

/*
Difference:
- normalMethod (function keyword): `this` depends on how the function is called.
  Here, it is called as thisDemo.normalMethod(), so `this` is thisDemo.
- arrowMethod: `this` does NOT change based on how it's called. It takes `this`
  from the surrounding (lexical) scope where it was created (e.g. global or module),
  so it is not the thisDemo object.
*/

// ===================================================
// SECTION 4: Constructor Functions and Prototypes
// ===================================================

// 10. User constructor function (not using class syntax)
function UserInside(name) {
    this.name = name;

    // 11(a). login method defined INSIDE constructor
    this.login = function () {
        console.log(`${this.name} logged in (inside-constructor method)`);
    };
}

const u1 = new UserInside("Akshat");
const u2 = new UserInside("Riya");

u1.login();
u2.login();

// Compare their login methods
console.log("u1.login === u2.login (inside constructor)?", u1.login === u2.login);
/*
This is false because each time we create a new UserInside, a new copy of
the login function is created in memory. So u1.login and u2.login are different
function objects.
*/

// 11(b). Now using prototype to share the method
function UserProto(name) {
    this.name = name;
}

// Add login method on the prototype
UserProto.prototype.login = function () {
    console.log(`${this.name} logged in (prototype method)`);
};

const p1 = new UserProto("John");
const p2 = new UserProto("Jane");

p1.login();
p2.login();

// 12. Compare their login methods
console.log("p1.login === p2.login (prototype)?", p1.login === p2.login);
/*
This is true because both p1 and p2 read the same login function from UserProto.prototype.
The function exists only once in memory and is shared by all instances.

Summary:
- Inside-constructor methods: each object gets its own copy -> more memory usage,
  functions are not equal.
- Prototype methods: one shared function for all objects -> more efficient,
  methods are equal for all instances.
*/

// ===================================================
// SECTION 5: call, apply, bind
// ===================================================

// 13. Function that prints this.name
function printName() {
    console.log("Name is:", this.name);
}

// 14. Object with name property
const person = {
    name: "Akshat Person"
};

// (a) Use call to run the function using the object
printName.call(person); // Name is: Akshat Person

// (b) Use apply to run the function using the object
printName.apply(person); // Name is: Akshat Person

// (c) Use bind to create a new function and then call it
const boundPrintName = printName.bind(person);
boundPrintName(); // Name is: Akshat Person

// 15. Borrow a method from one object and run it for another using call
const objA = {
    name: "Object A",
    greet: function (greeting) {
        console.log(`${greeting}, I am ${this.name}`);
    }
};

const objB = {
    name: "Object B"
};

// Borrow greet from objA and use it for objB
objA.greet.call(objB, "Hello"); // "Hello, I am Object B"

/*
Goal:
call/apply/bind allow us to manually control what `this` refers to.
- call: function.call(thisArg, arg1, arg2, ...)
- apply: function.apply(thisArg, [argsArray])
- bind: returns a new function permanently bound to a specific thisArg
*/
