// ==============================
// Day 58 – Question Sheet 2
// All sections in ONE JS file
// Run this in browser console / Node to see outputs
// ==============================


// ==============================
// SECTION 1: OOPS Thinking with Objects
// ==============================

// 1. Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
const laptop = {
    brand: "Dell",
    price: 50000,
    start: function () {
        console.log("Laptop started");
    }
};

// 2. Add one more method to the same object that increases the price by 10 percent.
laptop.increasePriceBy10Percent = function () {
    this.price = this.price * 1.10;
    console.log("New price after 10% increase:", this.price);
};

// Test:
console.log("=== Section 1 Tests ===");
console.log("Initial laptop:", laptop);
laptop.start();
laptop.increasePriceBy10Percent();

// 3. Now imagine you need 10 laptops with same structure but different data.
// Problems with plain objects:
// - You will repeat same keys (brand, price, start, increasePriceBy10Percent) again and again.
// - High chance of typing mistakes and inconsistent method names.
// - If you want to change logic of start() later, you must update it in all 10 objects manually.
// - Memory waste: same functions copied in every object instead of shared.
// ==> This is why we prefer classes / constructor functions.


// ==============================
// SECTION 2: Classes and Objects (Reinforcement)
// ==============================

// 4. Create a class named Employee that stores name, salary and has showDetails().
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log(`Employee Name: ${this.name}, Salary: ${this.salary}`);
    }
}

// 5. Create three employee objects and verify modifying one does not affect others.
const emp1 = new Employee("Alice", 30000);
const emp2 = new Employee("Bob", 40000);
const emp3 = new Employee("Charlie", 50000);

console.log("\n=== Section 2 Tests ===");
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();

// Modify emp1 only
emp1.salary = 35000;
console.log("After modifying emp1 salary only:");
emp1.showDetails();
emp2.showDetails(); // remains unchanged
emp3.showDetails(); // remains unchanged

// 6. Why is class better than writing similar objects again and again?
// - Class works as a template/blueprint: you write structure + methods once.
// - You can create unlimited objects (instances) with less code.
// - All objects share the same methods (via prototype) => less memory.
// - Easy to maintain: if logic changes, you update class in one place.


// ==============================
// SECTION 3: Constructor and Initialization
// ==============================

// 7 & 8. Create class BankAccount with constructor(accountHolderName, balance) & store using this.
class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // 9. Add deposit(amount) that increases balance.
    deposit(amount) {
        this.balance += amount;
        console.log(`${this.accountHolderName} new balance: ${this.balance}`);
    }
}

// 10. Create two bank accounts and deposit in only one.
const acc1 = new BankAccount("Rohan", 1000);
const acc2 = new BankAccount("Sohan", 2000);

console.log("\n=== Section 3 Tests ===");
console.log("Before deposit:");
console.log("acc1 balance:", acc1.balance);
console.log("acc2 balance:", acc2.balance);

// Deposit only into acc1
acc1.deposit(500);

console.log("After deposit into acc1 only:");
console.log("acc1 balance:", acc1.balance);
console.log("acc2 balance:", acc2.balance);

// Explanation:
// Each BankAccount object has its own separate 'balance' property.
// When we call acc1.deposit(), it modifies ONLY acc1.balance.
// acc2 is a different object in memory, so it is not affected.


// ==============================
// SECTION 4: Understanding `this`
// ==============================

// 11. Create object profile with username and method printName that logs this.username.
const profile = {
    username: "Akshat",
    printName: function () {
        console.log("Username is:", this.username);
    }
};

console.log("\n=== Section 4 Tests ===");

// 12. Call the method normally and observe the output.
profile.printName(); // this -> profile object, so username prints correctly

// 13. Store the method in a separate variable and call it.
const loosePrintName = profile.printName;
loosePrintName(); 
// In non-strict browser mode: `this` becomes window/global object (likely no username).
// In strict / module mode: `this` is undefined and accessing this.username may fail.
// In both cases, `this` no longer refers to 'profile' because the function is called
// without an owner object.

// 14. Modify code so that `this` works correctly again.
// Solution: use bind to permanently tie `this` to profile.
const boundPrintName = profile.printName.bind(profile);

console.log("Calling boundPrintName (fixed this):");
boundPrintName(); // Now `this` always refers to profile, even if called later / separately.


// ==============================
// SECTION 5: Constructor Function and Prototype
// ==============================

// 15. Create a constructor function Vehicle that accepts type and wheels.
function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;

    // 16. Add method inside the constructor.
    this.describeInside = function () {
        console.log(`This is a ${this.type} with ${this.wheels} wheels (inside constructor).`);
    };
}

console.log("\n=== Section 5 Tests (method inside constructor) ===");
const v1 = new Vehicle("Car", 4);
const v2 = new Vehicle("Bike", 2);

v1.describeInside();
v2.describeInside();

// Check memory behaviour: are methods the same?
console.log("Are v1.describeInside and v2.describeInside same function?",
    v1.describeInside === v2.describeInside);
// This will be false => each object has its own copy of describeInside (more memory usage).

// 17. Move same method to Vehicle.prototype and repeat test.
Vehicle.prototype.describe = function () {
    console.log(`This is a ${this.type} with ${this.wheels} wheels (from prototype).`);
};

console.log("\n=== Section 5 Tests (method on prototype) ===");
v1.describe();
v2.describe();

// Check memory behaviour: now methods are shared
console.log("Are v1.describe and v2.describe same function?",
    v1.describe === v2.describe);
// This will be true => both objects share a single function in prototype.

// 18. Why prototype approach is preferred?
// - Methods on prototype exist only once in memory and are shared by all instances.
// - Constructor-inside methods create new function objects again and again for each instance.
// - Prototype => more memory efficient, easier to change behaviour for all instances together.


// ==============================
// SECTION 6: call Method Practice
// ==============================

// 19. Create a function showBrand that prints this.brand.
function showBrand() {
    console.log("Brand is:", this.brand);
}

// 20. Create two different objects with brand values.
const phone1 = { brand: "Apple" };
const phone2 = { brand: "Samsung" };

console.log("\n=== Section 6 Tests ===");

// 21. Use call to execute showBrand for both objects.
showBrand.call(phone1); // this -> phone1
showBrand.call(phone2); // this -> phone2

// 22. What problem does call solve?
// - It allows us to reuse a single function with different objects.
// - We can manually control what `this` should refer to when calling the function.
// - No need to copy showBrand into every object.


// ==============================
// SECTION 7: apply Method Practice
// ==============================

// 23. Create function introduce(city, role) and use this.name.
function introduce(city, role) {
    console.log(`Hi, I'm ${this.name} from ${city}, working as ${role}.`);
}

// 24. Create an object with name property.
const person = {
    name: "Neha"
};

console.log("\n=== Section 7 Tests ===");

// 25. Use apply to call introduce using object and an array of arguments.
introduce.apply(person, ["Mumbai", "Developer"]);

// 26. How does apply differ from call?
// - call(thisArg, arg1, arg2, ...) takes normal comma-separated arguments.
// - apply(thisArg, [arg1, arg2, ...]) takes arguments in an array.
// - Both control `this`, only syntax of passing arguments is different.


// ==============================
// SECTION 8: bind Method Practice
// ==============================

// 27. Create function greet that prints “Hello” followed by this.name.
function greet() {
    console.log("Hello", this.name);
}

// 28. Bind this function to an object and store returned function.
const user = { name: "Priya" };
const boundGreet = greet.bind(user);

// 29. Call the bound function later and observe output.
console.log("\n=== Section 8 Tests ===");
boundGreet(); // Always "Hello Priya"

// 30. Why is bind useful when functions are executed later or inside callbacks?
// - bind permanently fixes the value of `this` for a function.
// - Even if we pass the function to setTimeout, event listeners, or another function,
//   `this` will still refer to the bound object, not something else.
// - This avoids bugs where `this` changes depending on how the function is called.


// ==============================
// End of file
// ==============================
