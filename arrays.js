// let studentsName = ["Prakash", "Adarsh", "Riya", "Ashish"];
// for (let i  = 0; i < studentsName.length ; i++) {
//     console.log(studentsName[i]);
// }

// for (let name of studentsName) {
//     console.log(name);
// }

// for (let name in studentsName) {
//     console.log(name);
// }


// let arr = [];
// for (let i  =0; i<7; i++) {
//     arr.push("syntax error! ");
    
// }

// console.log(arr.join(""));

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9];
// let arr3 = [10,11,12,13];

// let arr4 = arr1.concat(arr2);
// let arr5 = arr1.concat(arr2,arr3);

// console.log(arr4);
// console.log(arr5);

// let courses = ["html", "css", "javascript", "reactjs","jquery"];
// let rem =courses.pop();

// console.log(courses)
// console.log(rem)

// let remd = courses.slice(3,3);
// console.log(remd);

// let remdy = courses.splice(2,2);
// console.log(remdy);

// courses.splice(2,0,"tailwind css");
// console.log(courses);

// const availSize = ["S","M","L","XL","XXL"];
// const readlineSync= require("readline-sync");
// const userSize = readlineSync.question("enter you size- ");

// const isavail = availSize.includes(userSize);

// if (isavail) {
//     console.log("Your size is available");
// } else {
//     console.log("size is not available")
// }

// const numbers= [1,4,3,2,5,6,7,9,22,645];
// function sortdescend(a,b) {
//     return b-a;
// }
// numbers.sort(sortdescend);
// console.log(numbers);

// const readlineSync = require("readline-sync");
// const inputstr = readlineSync.question("Enter you string");

// const arrofChar = inputstr.split("");
// arrofChar.reverse();
// let newstr = arrofChar.join("");
// if(newstr === inputstr) {
//     console.log(newstr, "is a palindrome");
// } else {
//     console.log(newstr,"It isnt")
// }

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9];

// const arr3 = [...arr1,6868686,...arr2,454545];
// console.log(arr3);


// const arr = [["html", "css", "javascript"],1,2,3,5,6];

// const [courses,a,b, ...rest] = arr;
// console.log(courses,);
// console.log(rest);

// console.log(a)

// let a = 69;
// let b = 96;

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// let arr1 = [1,2,3];
// let arr2 =arr1;
// console.log(arr1, "  ", arr2)

// arr2.push(4);
// console.log(arr1, "  ", arr2)

// let arr3 = [...arr2];
// arr3.push(5,6,7);
// console.log(arr3);
// console.log(arr2);

// let arr4 = [1,2,3,4];

let arr5 =[];

for (let number of arr4) {
    arr5.push(number)
}

console.log("arr4: ", arr4 );
console.log("arr5: ", arr5 );

arr5.push(5);

console.log("arr4: ", arr4 );
console.log("arr5: ", arr5 );


console.log(arr5);