let studentsName = ["Prakash", "Adarsh", "Riya", "Ashish"];
for (let i  = 0; i < studentsName.length ; i++) {
    console.log(studentsName[i]);
}

for (let name of studentsName) {
    console.log(name);
}

for (let name in studentsName) {
    console.log(name);
}


let arr = [];
for (let i  =0; i<7; i++) {
    arr.push("syntax error! ");
    
}

console.log(arr.join(""));