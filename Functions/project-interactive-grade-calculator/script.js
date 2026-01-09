function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function assignGrade(average){
        if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else if (average < 60) {
        return "F";
    }
}

// get user input

// const score1 = parseFloat(prompt("Enter score for Subject 1:"));
// const score2 = parseFloat(prompt("Enter score for Subject 2:"));
// const score3 = parseFloat(prompt("Enter score for Subject 3:"));

// const average = calculateAverage(score1, score2, score3);
// const grade = assignGrade(average);

// console.log(`Your average score is: ${average}`);
// console.log(`Your grade is: ${grade}`);

///or 

const scores = [];
for (let i =0; i<3; i++){
    const score = prompt(`Enter score for Subject ${i+1}:`);
    scores.push(parseInt(score));
}

const average = calculateAverage(...scores);
const grade = assignGrade(average);

console.log(`Your average score is: ${average}`);
console.log(`Your grade is: ${grade}`);