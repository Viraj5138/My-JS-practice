// let display = "In this world its just us";

// for (let char of display){
//     console.log(char);
// }

// for (let i = 0; i< display.length; i++) {
//     console.log(display[i]);
// }

// const index = 4;
// const char = display.charAt(index);

// console.log(char);

// const ascii = display.charCodeAt(index);

// console.log(`The ascii code of ${char} is ${ascii}`);

// const readlineSync = require("readline-sync");

// let str = readlineSync.question("enter the string!! ");

// let encoded = "";

// for( let i = 0; i<str.length; i++) {
//     let asci = 0;
//     asci= str.charCodeAt(i);
//     let newStr = String.fromCharCode(asci - 2);
//     encoded += newStr;
    

// }

// console.log(`The encoded string is ${encoded}`);

// const str = "Oh lord, WE thank thee";
// console.log(str.indexOf("l"));

const findchar = (text, char) => text.indexOf(char) === -1 ? "char not found" : `char found at ${text.indexOf(char)}`;
const result = findchar("wacth the eniterw videsoss", "z");
console.log(result)