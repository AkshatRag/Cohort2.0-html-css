# JavaScript Notes — Beginner → Advanced (Hinglish)

> **Quick:** Ye notes tum GitHub pe daal sakte ho. Simple, clean aur beginners se lekar advanced-touch tak.

---

## 🧠 Introduction to JavaScript

JavaScript (JS) ek **high-level, interpreted scripting language** hai jo mainly **web pages ko interactive aur dynamic** banati hai.
HTML structure deta hai, CSS style, aur **JavaScript functionality**.

> Simple words me:
> “HTML batata hai kya dikhana hai, CSS batata hai kaise dikhana hai, aur JavaScript batata hai kya karna hai!”

Browser ke andar **JavaScript Engine** hota hai (jaise Chrome me V8 Engine) jo JS code ko run karta hai.

---

## 🕰️ History of JavaScript

* **Brendan Eich** ne 1995 me JavaScript banaya for Netscape Navigator.
* Initially naam: *Mocha* → *LiveScript* → *JavaScript*.
* Java se related nahi hai — sirf marketing ke liye “JavaScript” naam diya gaya tha.

---

## 📜 ECMAScript

* **ECMAScript (ES)** JS ka **official standard** hai.
* ECMA International isko maintain karti hai.
* Naye JS features ES versions me aate hain (ES5, ES6/ES2015, ES7, ...).
* **ES6 (2015)** important release tha — `let`, `const`, arrow functions, template literals, classes, modules, promises, etc.

---

## 💡 Why JavaScript is Important

* Web development ka heart.
* Frontend ke bina modern websites incomplete.
* Backend bhi possible (Node.js).
* Mobile apps, desktop apps, games, ML libraries — sab kuch possible.

---

## 🚀 What Can JavaScript Do For You

* Web pages me interactivity (buttons, forms, animations).
* DOM manipulation (HTML elements dynamically change karna).
* API calls (server se data fetch karna).
* Event handling (click, input, scroll, etc.).
* Backend development with Node.js.
* Game development (Phaser.js, Three.js).
* Data visualization & ML (Chart.js, TensorFlow.js).

---

## 🧩 JS ko HTML me Attach Karna (`<script>` Tag)

JavaScript ko HTML me connect karne ke 3 tareeke:

### 1. Inline JS:

```html
<button onclick="alert('Hello JS!')">Click Me</button>
```

### 2. Internal JS:

```html
<script>
  console.log("JavaScript is connected!");
</script>
```

### 3. External JS File (Best practice):

```html
<script src="script.js"></script>
```

External file use karne se code clean aur reusable rehta hai.

---

## 🧮 JS Ko Browser Me Run Karna

* Browser ke **Developer Tools → Console** me likh kar run kar sakte ho.
* Shortcut: **Ctrl + Shift + J** (Chrome) ya **F12**.
* Ya HTML file open karke `<script>` tag use karo.

---

## 🧱 Variables: `var`, `let`, `const`

Variables data store karte hain. Table quick comparison:

| Keyword |   Scope  | Redeclare | Reassign | Example              |
| ------: | :------: | :-------: | :------: | :------------------- |
|   `var` | Function |     ✅     |     ✅    | `var name = "Amit";` |
|   `let` |   Block  |     ❌     |     ✅    | `let age = 20;`      |
| `const` |   Block  |     ❌     |     ❌    | `const PI = 3.14;`   |

**Tip:** Modern JS me `let` aur `const` prefer karo. `const` by default use karo jab value change na ho.

---

## 💻 `console`, `prompt`, `alert`

* `console.log()` — debugging ke liye.

```js
console.log("Hello JS!");
```

* `alert()` — simple popup.

```js
alert("Welcome!");
```

* `prompt()` — user se input leta hai.

```js
let name = prompt("Enter your name:");
alert("Hello " + name);
```

---

## 🧵 Strings in JavaScript

String = text data. Single quotes `' '`, double quotes `" "`, ya backticks `` ` ` ``.

```js
let name = "Amit";
let greet = `Hello ${name}, welcome!`; // Template literal
```

---

## ✂️ Common String Methods

| Method              | Use                                           | Example                    | Output          |
| :------------------ | :-------------------------------------------- | :------------------------- | :-------------- |
| `slice(start, end)` | Substring return karta hai                    | `"JavaScript".slice(0,4)`  | `"Java"`        |
| `split(separator)`  | String ko array me todta hai                  | `"a,b,c".split(",")`       | `["a","b","c"]` |
| `replace(old, new)` | First occurrence replace karta hai            | `"Hello".replace("H","Y")` | `"Yello"`       |
| `includes(sub)`     | Check karta hai substring present hai ya nahi | `"JS".includes("J")`       | `true`          |
| `toUpperCase()`     | Uppercase                                     | `"js".toUpperCase()`       | `"JS"`          |
| `toLowerCase()`     | Lowercase                                     | `"HELLO".toLowerCase()`    | `"hello"`       |

**Examples:**

```js
let str = "Hello World";
console.log(str.slice(0,5)); // "Hello"
console.log(str.split(" ")); // ["Hello", "World"]
console.log(str.replace("World", "JS")); // "Hello JS"
console.log(str.includes("lo Wo")); // true
```

---

## 🧩 Template Strings (ES6)

Backticks (`` ` ``) me variables/expressions embed karna easy hai:

```js
let name = "Amit";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## ⚡ Quick Summary / Next Steps

* JS learn karne ka flow: **Syntax → Variables → Functions → DOM → Events → Async (Promises/Async-Await) → Frameworks (React/Vue)**.
* Start simple, daily practice karo. Small projects se seekho (todo app, calculator, form validation).

---

If you want, main is file me **README header, license, aur GitHub-friendly badges** bhi add kar dunga. Ya phir "Part 2" me functions, arrays, objects, DOM manipulation, events, loops, aur ES6+ advanced features full notes bana doon.

Best, bhai — batao kya add karu aur final filename kaisa ho (agar change karna ho).
