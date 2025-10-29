# JavaScript Notes — Console Options, Data Types, Type Conversions, Expressions & More (Detailed Hinglish Notes)

> **Topic:** Console options, Data Types, Type Conversions, Expressions, Statements, Template Literals, and Comments in JavaScript

---

## 🧾 Different Types of Console Options in JavaScript

In JavaScript, the **`console` object** is used for debugging and logging in the browser. It helps developers view outputs, warnings, or errors while the code runs.

### 1. `console.log()` — Standard Output

```js
console.log("Hello World!");
let name = "Amit";
console.log("Name:", name);
```

**Use:** Displaying normal messages or variable values.

### 2. `console.error()` — Error Message

```js
console.error("Something went wrong!");
```

**Use:** Display error messages (in red).

### 3. `console.warn()` — Warning Message

```js
console.warn("This is a warning!");
```

**Use:** Shows cautionary messages.

### 4. `console.info()` — Information Message

```js
console.info("Server started successfully!");
```

**Use:** To show info logs.

### 5. `console.table()` — Table Output

```js
let students = [
  { name: "Amit", age: 20 },
  { name: "Neha", age: 22 }
];
console.table(students);
```

**Use:** Displays data in table format.

### 6. `console.group()` and `console.groupEnd()` — Grouping

```js
console.group("User Info");
console.log("Name: Amit");
console.log("Age: 22");
console.groupEnd();
```

**Use:** Organize console messages.

### 7. `console.count()` — Count Calls

```js
for(let i=0; i<3; i++) {
  console.count("Loop Count");
}
```

**Use:** Tracks function or loop calls.

### 8. `console.clear()` — Clear Console

```js
console.clear();
```

**Use:** Cleans the console.

### 9. `console.time()` and `console.timeEnd()` — Measure Time

```js
console.time("Timer");
for(let i=0; i<100000; i++){}
console.timeEnd("Timer");
```

**Use:** Measure performance.

---

## 🧠 Data Types in JavaScript

JavaScript is a **dynamically typed** language — the type of a variable is determined at runtime. There are **two main categories** of data types:

### 🔹 Primitive Data Types

Primitive data types are the most basic forms of data in JavaScript. They store single, immutable values directly in memory.

#### 1. **String**

Strings are sequences of characters used to represent text. They can be written using single quotes `' '`, double quotes `" "`, or backticks (`` ` ``).

```js
let name = "Amit";
let message = 'Welcome to JavaScript';
let greeting = `Hello ${name}, nice to meet you!`;
```

**Explanation:**

* Strings are **immutable**, meaning you cannot change individual characters directly.
* Backticks (template literals) allow embedding variables using `${variable}`.
* String methods like `slice()`, `replace()`, `split()`, and `includes()` are used for manipulation.

---

#### 2. **Number**

The `Number` type represents both integer and floating-point numbers.

```js
let age = 25;
let price = 199.99;
let discount = 0.1;
```

**Special Numeric Values:**

* `Infinity` → Result of dividing by zero.
* `-Infinity` → Negative infinity.
* `NaN` → Not a Number (invalid mathematical operation).

```js
console.log(10 / 0); // Infinity
console.log("abc" - 2); // NaN
```

**Explanation:** JavaScript does not differentiate between integers and floats. All numeric data are of type `number`.

---

#### 3. **Boolean**

Represents logical values: `true` or `false`.

```js
let isOnline = true;
let isAdmin = false;
```

**Explanation:**
Booleans are used for conditions, comparisons, and control flow statements.

```js
if (isOnline) {
  console.log("User is online");
} else {
  console.log("User is offline");
}
```

---

#### 4. **Undefined**

A variable declared but not assigned any value is `undefined`.

```js
let city;
console.log(city); // undefined
```

**Explanation:**
`undefined` means the variable exists but has no assigned value. It’s the default value of uninitialized variables.

---

#### 5. **Null**

Represents an intentional absence of value.

```js
let result = null;
```

**Explanation:**

* `null` explicitly indicates that a variable should be empty.
* It is different from `undefined` (undefined = no value assigned; null = empty value assigned).

```js
console.log(typeof null); // object (special case)
```

---

#### 6. **Symbol (ES6)**

Used to create **unique identifiers** for object properties.

```js
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false
```

**Explanation:**
Even if two symbols have the same description, they are always unique. Useful for avoiding naming conflicts in objects.

---

#### 7. **BigInt (ES11)**

Represents very large integers beyond the safe range of `Number`.

```js
let bigNum = 123456789012345678901234567890n;
console.log(bigNum);
```

**Explanation:**
BigInt is used when dealing with high-precision calculations such as cryptography, financial systems, or scientific computations.

---

### 🔸 Non-Primitive (Reference) Data Types

These types store **references** to memory locations instead of actual values.

#### 1. **Object**

Objects are collections of key–value pairs.

```js
let student = {
  name: "Amit",
  age: 21,
  course: "JavaScript"
};
console.log(student.name); // Amit
```

**Explanation:**
Objects are mutable and can hold multiple properties of different types. They are used to represent real-world entities.

---

#### 2. **Array**

Arrays are ordered lists that can hold multiple data values, even of different types.

```js
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Red
```

**Explanation:**
Arrays are special types of objects used for storing collections of data. Common methods: `push()`, `pop()`, `shift()`, `map()`, `filter()`.

---

#### 3. **Function**

Functions are blocks of reusable code that perform specific tasks.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Amit"));
```

**Explanation:**
Functions can take parameters, perform operations, and return values. They form the backbone of reusable programming in JS.

---

## 🔄 Type Conversions in JavaScript

Type conversion means converting one data type to another.

### 1. **Implicit Conversion (Type Coercion)**

JavaScript automatically converts data types when needed.

```js
console.log('5' + 2); // '52' → string concatenation
console.log('5' - 2); // 3 → number subtraction
console.log(true + 1); // 2 → boolean to number
```

### 2. **Explicit Conversion (Manual)**

Developers manually convert data types.

```js
Number('100'); // 100
String(123); // '123'
Boolean(0); // false
parseInt('50px'); // 50
parseFloat('3.14'); // 3.14
```

Use `typeof` operator for checking data type:

```js
let x = 42;
console.log(typeof x); // number
```

---

## 🧮 Expressions in JavaScript

An **expression** is any valid combination of variables, constants, and operators that returns a value.

```js
5 + 10 // → 15
x * y // → product
"Hello " + name // → concatenation
```

Expressions are used everywhere — in conditions, assignments, and functions.

---

## 🧱 Statements in JavaScript

A **statement** is a complete instruction that performs an action.

```js
let a = 10; // declaration statement
if(a > 5) console.log('Big number'); // conditional statement
for(let i=0; i<3; i++) console.log(i); // loop statement
```

Statements form the logical flow of a JavaScript program.

---

## 🧩 Template Literals (ES6 Feature)

Template literals use backticks (`` ` ``) for easier string creation and variable interpolation.

```js
let name = "Amit";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);
```

**Advantages:**

* Multi-line string support
* Expression evaluation using `${}`
* More readable and cleaner syntax

---

## 💬 Comments in JavaScript

Comments help explain the code and are ignored by the JavaScript engine.

### Single-line Comment

```js
// This is a single-line comment
```

### Multi-line Comment

```js
/*
  This is a
  multi-line comment
*/
```

**Use:** Writing notes, explaining logic, or temporarily disabling code.

---

**In short:** Understanding console tools, data types, conversions, and syntax fundamentals is the foundation of mastering JavaScript. Learn them thoroughly before moving on to advanced topics like loops, functions, and DOM manipulation! 🚀
