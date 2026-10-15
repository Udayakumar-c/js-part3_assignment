// 1.Create a regular function: calculateResult(marks) 
// returns "Pass" if marks are 50 or above ; "Fail" if marks are below 50 
function calculateResult(marks){
    if (marks >= 50) {
        return "Pass";
    }
    else {
    return "Fail";
}
} 

//2. Create an arrow function displayResult(name, result) 
// that displays the learner's name and result.
const displayResult = (name, result) => {
       console.log(`${name} - ${result}`);
};

//3. Store the following learner data in an array:[{ name: "Anu", marks: 75 },{ name: "Rahul", marks: 42 },
//{ name: "Meena", marks: 68 }, { name: "Arun", marks: 35 }]
const learners  = [
    { name: "Anu", marks: 75 },
    { name: "Rahul", marks: 42 },
    { name: "Meena", marks: 68 }, 
    { name: "Arun", marks: 35 }
];

// 4  Loop through each learner 
// (using a for...of loop to process each learner one by one.)

//5 Use the calculateResult() function to determine
//  the result for each learner and use the displayResult() arrow function
//  to display the learner's name and result.

for (const learner of learners) {
    const result = calculateResult(learner.marks);
    displayResult (learner.name,result);
}