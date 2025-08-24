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