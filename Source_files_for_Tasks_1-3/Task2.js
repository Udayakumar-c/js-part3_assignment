//Write a JavaScript program using the following array methods:

const students = [ 
{ name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }
];
//1. forEach() – Print the details of every student.
console.log("Student Details:");

students.forEach ((students) =>{
    console.log(students.name, students.marks, students.grade);
});

//2. map() – Create a new array containing only the names of all students.
// const studentNames = students.map((student) => student.name);
// console.log(studentNames);
console.log();
console.log("Students Name:");

const studentsName = students.map((students) => students.name);
console.log(studentsName);

//3. filter() – Create a new array containing only the students who scored 80 or above.
console.log();
console.log("students who scored 80 or above:");

const highScorers = students.filter((students) => students.marks >= 80);
console.log(highScorers);
