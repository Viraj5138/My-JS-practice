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
const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want to know? ");
const course  = readlineSync.question("What course do want to apply for?");

const ojb = {
    Name :  " Viraj",
    age : 45,
    [course]: "Course is not available"

}
ojb.city = "Kolhapur";
ojb.state = "Maharashtra";
console.log(ojb);



console.log(ojb[key]);
console.log(ojb[course])

function getobj(name,city) {
    retrun {
        name,
        city
    }
}

const Obj = getobj("Prakash", "mum");