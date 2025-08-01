 // console.log("Hello Reeek!!");
// var message;

// message = ("Hello");
// console.log(message);

// var me;
// me= ("viraj");
// me= ("patil");
// console.log(me)

// let V;
// V = ("Viraj");
// let V = ("georgian");
// console.log(V);

// const v= ("hello");
// console.log(v);

// let isProductInCart = false;
// console.log(typeof isProductInCart);

// let userName = "Shrek";
// let color = "Green";

// let message = "My name is " + userName + " and I am " + color + " in color";
// console.log(message);

// let text = `My Name is ${userName} and I am ${color} in color`;
// console.log(text);

// const readlineSync = require("readline-sync");

// const Username = readlineSync.question("Waht's your name?")

// const userAge = readlineSync.question("how old are you?");

// const birthYear = 2025 + Number(userAge);

// console.log(`what the is that name ${Username} !!!`);

// console.log(`my grandma was born in ${birthYear} too....you old.`)

// const readlineSync = require("readline-sync");

// const number = Number(readlineSync.question("enter number..."));

//  if (number % 5 ===0 && number % 3 ===0) {
//     console.log("fizz");
// }else if (number % 5 ===0 || number % 3 ===0) {
//     console.log("buzz");
// }
// else {
//     console.log("fuck!");
// }


// const readlineSync = require("readline-sync")
// const Sec  = require("readline-sync");
// const Third = require("readline-sync");

// const first = readlineSync.question("enter string 1: ");
// const second = readlineSync.question("enter string 2: ");
// const third = readlineSync.question("enter 3rd string: ");

// if (first.length < second.length && first.length < third.length) {
//     console.log("string 1 is smalllest ");
// }

// if (second.length < first.length && second.length < third.length) {
//     console.log("string 2 is smallest");
// }

// if (third.length < first.length && third.length < second.length) {
//     console.log("string 3 is smallest");
// }
// else {
//     console.log("Found 2 or more strings of the same lenght");
// }

// const TotalMarks = 59;

// (TotalMarks <45) ? console.log("You failed") : console.log("You Passed")

// const Result = TotalMarks < 60 ? "You failure" : "YOu not failingg"

// console.log(Result);

// const result = TotalMarks < 40 ? "work hard" : TotalMarks < 60 ? "B" : TotalMarks < 75 ? "A" : TotalMarks < 85 ? "A+" : "Genius";

// console.log(result);

// const firstName = "viraj" ;
// const nickName = "";

// const userName = firstName || nickName || "NoName" ;
// console.log(`Name - ${userName}`);

// const userName = firstName && nickName;
// console.log(`Name - ${userName}`);

// let firstname;

// console.log(firstname  ?? "shadyV")

// for loop 

// for (let i = 0; i<5; i++){
//     console.log("hello",i);
// }

// const userName = "Viraj Patil";
// const Strlength  = userName.length;

// for (let i = 0; i< Strlength; i++) {
//     console.log(userName[i]);
// }

// for (let i = 1; i<=10 ; i++) {
//     for (let j = 1; j<=12 ; j++) {
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
//     console.log("---------");
// }

// for (let i =5; i>=1; i--) {
//     const symbol = "* ";
//     console.log(symbol.repeat(i));
   
// }

// const username = "Viraj Deelip Patil";
// let count = 0;
// for (let i=0; i<username.length; i++) {
//     count++;
// }
// console.log(`Number of characters in the string are ${count}`);

// for (let i = 1; i<101; i++) {
//     if (i % 2 ===0 ) {
//         console.log(i);
//     }
// }


const inputString = "HEllo, MY name is Jefff...";

const vowels = "aeiou";

for (let i= 0; i<inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
        console.log(`${inputString[i]} is a vowel`);
    }
    else {
        console.log (`${inputString[i]} is consonanant`);
    }
}