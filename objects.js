// const obj  = {
//     greetMessage : function() {
//         console.log("Heloo everyone!!!!")
//     },
//     bye(){
//         console.log("tata bye bye");
//     }
//  };

//  obj.bye();
// obj.greetMessage();
// const readlineSync = require("readline-sync");
// const key = readlineSync.question("What do you want to know? ");
// const course  = readlineSync.question("What course do want to apply for?");

// const ojb = {
//     Name :  " Viraj",
//     age : 45,
//     [course]: "Course is not available"

// }
// ojb.city = "Kolhapur";
// ojb.state = "Maharashtra";
// console.log(ojb);



// console.log(ojb[key]);
// console.log(ojb[course])

// function getobj(name,city) {
//     return {
//         name,
//         city
//     }
// }

// const Obj = getobj("Prakash", "mum");
// const readlineSync = require("readline-sync");
// const key = readlineSync.question("What do you wanna know? ");
// const course = readlineSync.question("What course are you applying for?");

// const obbj = {
//     name: "Viraj",
//     year: "2nd Year",
//     [course] : "No course is available",
//     sayHello : function (){
//         console.log("HELLLLO");
//     },
//     byeee(){
//         console.log("tata byeebye");
//     }
// }

// obbj.sayHello();
// obbj.byeee();

// console.log(obbj[key])
// console.log(obbj[course]);
// console.log(obbj);

// function getobj(Name,city) {
//     return {
//         Name,
//         city
//     }
// }

// const ojbekts = getobj("VIraj","Pune");
// console.log(ojbekts);

// const name = "Viraj";
// const age = "60";

// console.log({name,age});

const info = {
    city : "fkdfd",
    age : 34
}

const ispresent = "age" in info;
console.log(ispresent);

for (let i in info) {
    console.log(info[i]);
}