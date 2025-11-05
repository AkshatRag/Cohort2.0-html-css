// 1 - print numbers from 1 to 10  loop from 1 to 10 and print each numbers .
// 2 - print only even numbers from 1 to 20 use loop and conditions to print even ones . 
// 3 - print numbers from 10 to 1 reverse loop with a decrement .
// 4 - print the word "yes" 5 times repeat using a loop
// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"
// 6.ask user for a number and say if its  positive or negative  use prompt() and a condition

// for(i = 1; i<=10; i++){
//     console.log(i);
// }



// for(i = 1; i <= 20; i++){
//     if(i %2 === 0){
//         console.log(i);
//     }
// }


// for(i = 10; i>0; i--){
//     console.log(i);
// }


// for(i = 1; i <=5 ; i++){
//     console.log(`${i} yes`);
// }


// for(i = 1; i <= 10; i++){
//     if(i%2 === 0 ){
//         console.log(`${i} even`);
//     }else{
//         console.log(`${i} odd`);
//     }
// }


// let num = prompt("no. de do ji ");
// if(num === null ){
//     console.log("bhai cancle mat kr no. dal ");
// }else{
//     num = num.trim();
//     if(num === "" || isNaN(num)){
//         console.error("plz bhai No. dal de");
//     }else{
//         if(num > 0){
//             console.log(`${num} is positive no.`);
//         }else{
//             console.log( `${num} is negative no.`);
//         }
//     }
// }


// Level 1 - Pure Beginner Practice

// 7. Ask user's age and check if eligible to vote
//    If age >= 18 → "Eligible", else → "Not eligible"

// let age = 29;
// age = prompt("what is your age")
// //me handle kr lunga i know kaise handle krna hau prompt ko 
// if(age >=18){
//     console.log("eligible to vote");
// }else{
//     console.log("Not eligible");
// }





// 8. Print multiplication table of 5
//    Use loop to print 5 x 1 to 5 x 10.

// for(i=1; i<= 10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }






// 9. Count how many numbers between 1 and 15 are greater than 8
//    Loop and count conditionally.

// let count = 0;
// for(i=1; i<=15; i++){
//     if(i > 8){
//         count = count + 1;
//     }
// }
// console.log(count);





// 10. Ask user for password and print access status
//     Hardcoded correct password. Compare with user input.

// const correctPassword = "harshbhaiya@123";
// const maxAttempts = 3;
// let success = false;

// for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//   const input = prompt(`Bhai password dal aur sun — ${4-attempt} moka hi mila hai `);

//   if (input === null) {
//     console.error("Bhai password dal de, cancel kyu kar rha hai?");
//     break;
//   }

//   const pwd = input.trim();

//   if (pwd === "") {
//     console.error("Bhai apni galti se khali chhod diya ");
//     continue;
//   }

//   if (pwd === correctPassword) {
//     console.log("Bhai bdiya! Ho gya kaam ");
//     success = true;
//     break;
//   } else {
//     const left = maxAttempts - attempt;
//     if (left > 0) {
//       alert(`Galat password . ${left} moka bacha hai.`);
//     } else {
//       alert("Galat password. Ab moka khatam ");
//     }
//     console.warn("Incorrect password.");
//   }
// }

// if (!success) {
//   console.log("Access Denied ");
// }





// Level 2 - Slightly Tougher but Logical


// Level 2 - Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
//     If user gets it right early, stop. If not → "Account locked"


// let maxAttempts = 3;
// let attempt;
// let correctPassword = "KODER-C13";
// for(attempt =1; attempt <= maxAttempts; attempt++){
//     let password = prompt("bhai password daal na");
//     if(password === null){
//         console.error("bhai smjh cancle mat kr.. dar kyu rha hai tune hi to password lgaye hai");
//     }else{
//         password = password.trim();
//         if(password === ""){
//             console.error("dekh dekh space dekhe bhag gyaaaa naaaaa na mane kru gudi lal");
//         }
//         else if(password === correctPassword){
//             console.log("ha bhai tu hi hai mera premi ")
//             break;
//         }else{
//             console.error("bhaaag jaa b**k original nhi to yahi g*** fad dungaaa");
//         }
//     }
// }








// 12. Ask user for words until they type "stop". Count how many times they typed "yes"
//     Loop until "stop" is typed. Count "yes".

// let input = prompt("bhai bta kya likhu");
// let yesCount = 0;
// while(input !== "stop"){
//         if(input === "yes"){
//             yesCount++;
//             console.log("yes");
//         }
//         input = prompt("bhai bta kya likhu");
// }
// console.log(`stop is correct and count is ${count} `);

// optimize solution
// let yesCount = 0;
// while(true){
//     let input = prompt("bhai daal kuch to ");
//     if(input === null){ 
//         console.error("mat kr mjak ho gya tera value daal chupchap") 
//         continue;
//     }
//     else{
//         input = input.trim()
//     if(input ===  "stop"){
//         break;
//     }
//     if(input === "yes"){
//         yesCount++;
//         console.log("yes");
        
//     }
//     }
// }
// console.log(`stop is correct and count is ${yesCount} `)







// 13. Print numbers divisible by 7 from 1 to 50
//     Use modulo % and loop.

// let i = 1;
// while(i <= 50){
//     if(i % 7 === 0){
//         console.log(i);
//     }

//     i++;
// }





// 14. Sum of all odd numbers from 1 to 30
//     Add only odd numbers. Print final sum.

// let i = 1;
// count = 0;
// while(i <= 30){
//     if(i % 2 !== 0){
//         count = count + i
//     }
//     i++;
// }
// console.log(count);





// 15. Keep asking number until user enters an even number
//     Use while loop. Stop only if input is even.

// while(true){
//     let input = prompt("dalo dalo even dalo nhi to me chalta rhunga")
//     if(input === null){
//         console.error("bhai masti mat kar yar dal dal value daal");
//     }else{
//         input = input.trim();
//         if(input === ""){
//             console.error("masti nhi msti nhi beta");
//         }else if (isNaN(Number(input))){
//             console.error("bhai no. hi daal msti mat kr");
//         }else if(input % 2 !== 0){
//             console.error("bhai odd mat dal even hi de");
//         }else{
//             console.log(`ha ab shi hai bhai ${input}`);
//             break;
            
//         }
//     }
// }






// 16. Print numbers between two user inputs
//     Input start and end using prompt() → print all between.

// let startNum = prompt("bhai first  no. de de");
// let endNum = prompt("bhai last no. de de ");

// while(startNum <= endNum){
//     if(startNum === null && endNum === null){
//         console.error(("bhai no. de de cancle mat kr"));
//         startNum = prompt("bhai first  no. de de");
//         endNum = prompt("bhai last no. de de ");
//     }else if(startNum === null){
//         console.error("bhai 1st wala no. de de ");
//         startNum = prompt("bhai first  no. de de");
//     }else if(endNum === null){
//         console.error("bhai 2nd wala no. de de");
//         endNum = prompt("bhai last no. de de ");
//     }else{
//           startNum = startNum.trim();
//           endNum = endNum.trim();
//           if(startNum === ""){
//             console.error("bhai kuch to no. de starting ke");
//             startNum = prompt("bhai first  no. de de");
//           }
//           else if(endNum === ""){
//             console.error("bhai kuch to no. de end ke");
//             endNum = prompt("bhai last no. de de ");
//           } 
//           else if(startNum === "" && endNum === ""){
//             console.error(("bhai no. de de"));
//             startNum = prompt("bhai first  no. de de");
//             endNum = prompt("bhai last no. de de ");
//           }
//           else if(isNaN(Number(startNum))){
//             console.error("bhai no. dal le msti mat kar");
//             startNum = prompt("bhai first  no. de de");
//           }
//           else if(isNaN(Number(startNum))){
//             console.error("bhai no. dal le msti mat kar");
//             endNum = prompt("bhai last no. de de ");
//           }
//           else{
//             console.log(startNum);
//           }
//     }
// }

// let startNum = prompt("Bhai first no. de de:");
// let endNum = prompt("Bhai last no. de de:");

// while (true) {
//   //  Cancel check
//   if (startNum === null || endNum === null) {
//     console.error("Bhai cancel mat kar, number daal!");
//     startNum = prompt("Bhai first no. de de:");
//     endNum = prompt("Bhai last no. de de:");
//     continue;
//   }

//   //  Trim spaces
//   startNum = startNum.trim();
//   endNum = endNum.trim();

//   //  Empty check
//   if (startNum === "" || endNum === "") {
//     console.error("Bhai khaali mat chhod, number daal!");
//     startNum = prompt("Bhai first no. de de:");
//     endNum = prompt("Bhai last no. de de:");
//     continue;
//   }

//   //  NaN check
//   if (isNaN(Number(startNum)) || isNaN(Number(endNum))) {
//     console.error("Bhai number hi daal, masti mat kar ");
//     startNum = prompt("Bhai first no. de de:");
//     endNum = prompt("Bhai last no. de de:");
//     continue;
//   }

//   // Valid input mil gaya
//   startNum = Number(startNum);
//   endNum = Number(endNum);

//   //  Range check
//   if (startNum > endNum) {
//     console.error("Bhai start chhota hona chahiye end se!");
//     startNum = prompt("Bhai first no. de de:");
//     endNum = prompt("Bhai last no. de de:");
//     continue;
//   }

//   //  Finally print numbers
//   console.log(`Numbers from ${startNum} to ${endNum}:`);
//   while (startNum <= endNum) {
//     console.log(startNum);
//     startNum++;
//   }
//   break; 
// }






// 17. Print only first 3 odd numbers from 1 to 20
//     Use loop. Stop with break after 3 odd prints.

// let num = 1;
// count = 0
// while(num <= 20){
//     if(num % 2 !== 0 ){
//         count++
//         console.log(num);
//         if(count === 3){
//             break;
//         }
//     }

//     num++
// }





// 18. Ask user 5 numbers. Count how many are positive
//     Use loop + condition + counter.

// ATM Simulator - Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print "Insufficient balance"