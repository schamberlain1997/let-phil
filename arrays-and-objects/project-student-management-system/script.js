//init students array
const students = [];

//function to add a student
function addStudent(name, grade) {
    students.push({
        name: name,
        grade: grade,
    });
}

//function to remove a student

function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Student with name ${name} has been removed.`);
    } else {
        console.log(`Student with name ${name} not found.`);
    }
}

//function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students in formatted list

function formatStudentList() {
    return students.map(student => `Name: ${student.name}, Grade: ${student.grade}`);
}

//start of program
console.log("students =", students);

 //adding students
addStudent("Alice", 85);
addStudent("Bob", 92);
addStudent("Charlie", 78);
addStudent("Diana", 65);
addStudent("Ethan", 95);

console.log("Student List")
console.log(formatStudentList());

//removing a student
removeStudent("Charlie");
console.log("Student List after removal of Charlie")
console.log(formatStudentList());

console.log("Students with grade >= 80")
console.log(filterTopStudents(80));