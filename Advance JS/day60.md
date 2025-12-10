# Day 60 — Callbacks, Delay & Chaining (Basics → Intermediate)

> Goal: Callback ko real tarike se samajhna — delay, data flow, nesting.

---

# 0️⃣ Callback Kya Hota Hai?

Callback = **"Kaam complete hone ke baad mujhe bula lena"**

Example:

> "Chai bana ke mujhe bula lena."  
> Yaha “bula lena = callback”.

JavaScript me callback mostly async operations me use hota hai:

- setTimeout
- API calls
- File read
- Database access
- Animations

---

# 1️⃣ Exercise 1 — `afterDelay(time, callback)`

## 🧠 Concept
- Function time (ms) lega
- Callback function lega
- Given time complete hone ke baad callback chalega

Use case example:
> "2 seconds baad ek kaam karna hai"

---

## ✅ Code

```js
function afterDelay(time, callback) {
    setTimeout(function () {
        callback();  
    }, time);
}

afterDelay(2000, function () {
    console.log("Callback executed");
});
🔁 Flow
afterDelay(2000, callback) call hota hai

Timer set hota hai

JavaScript aage badhta rehta hai

2 seconds baad callback() run hota hai

"Callback executed" print hota hai

2️⃣ Exercise 2 — getUser → getUserPosts
🧠 Concept
Ek async result (user) → next async function me input (user.id)

Data chaining ka basic pattern

Callback chaining feel karne ke liye important

✅ Full Code
js
Copy code
function getUser(username, callback) {
    console.log("Fetching user from database...");

    setTimeout(function () {
        const user = {
            id: 1,
            username: username
        };
        callback(user);
    }, 1000);
}

function getUserPosts(userId, callback) {
    console.log("Fetching posts for userId:", userId);

    setTimeout(function () {
        const posts = [
            "Post 1: Learning callbacks",
            "Post 2: Understanding async flow",
            "Post 3: Callback chaining!"
        ];
        callback(posts);
    }, 1000);
}

getUser("akshat", function (user) {
    console.log("User found:", user.username);

    getUserPosts(user.id, function (posts) {
        console.log("User posts:");
        console.log(posts);
    });
});
🔁 Flow
getUser("akshat")

1 sec baad → user object milta hai

User ka callback chalti hai → username print

getUserPosts(user.id) call hota hai

1 sec baad → posts milte hain

Posts callback run hota hai → posts print

3️⃣ Exercise 3 — login → permissions → dashboard
🧠 Concept
Ye callback nesting ka perfect example hai.
3 async operations ek dusre ke result par depend kar rahe hain:

loginUser → user

fetchPermissions → permissions

loadDashboard → final message

Yehi real-world callback hell ka starting point hota hai.

✅ Full Code
js
Copy code
function loginUser(callback) {
    console.log("Logging in user...");

    setTimeout(function () {
        const user = {
            id: 101,
            name: "Akshat"
        };
        callback(user);
    }, 1000);
}

function fetchPermissions(userId, callback) {
    console.log("Fetching permissions for userId:", userId);

    setTimeout(function () {
        const permissions = ["read", "write", "admin"];
        callback(permissions);
    }, 1000);
}

function loadDashboard(permissions, callback) {
    console.log("Checking permissions:", permissions);

    setTimeout(function () {
        const message = "Dashboard loaded";
        callback(message);
    }, 1000);
}

loginUser(function (user) {
    console.log("User logged in:", user.name);

    fetchPermissions(user.id, function (permissions) {
        console.log("Permissions received:", permissions);

        loadDashboard(permissions, function (message) {
            console.log(message);
        });
    });
});
🔁 Flow
loginUser → 1 sec wait → user mila

callback1 → fetchPermissions(user.id)

fetchPermissions → 1 sec wait → permissions mile

callback2 → loadDashboard(permissions)

loadDashboard → 1 sec wait → "Dashboard loaded"

callback3 → final output print

⭐ Callback Hell (seed concept)
Agar ye pattern zyada bada ho jaaye:

js
Copy code
stepA(function () {
    stepB(function () {
        stepC(function () {
            stepD(function () {
                stepE(function () {
                    // ...
                });
            });
        });
    });
});
To code unreadable, unmaintainable ho jaata hai.
Isko hi Callback Hell bolte hain.

Ye problem baad me Promises aur async/await solve karte hain.

🔚 Summary
Topic	Samjha kya?
Callback	Baad me chalaya jaata hai
afterDelay	Delay → callback connection
getUser → posts	Async data chaining
login → permissions → dashboard	Nested callbacks = callback hell seed
Flow diagrams	Sequence clarity
