console.log("========== 4th exercise ==========");

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

function checkForSameCourses(courses1, courses2) {
    const sameCourses = [];
    for (const course1 of courses1) {
        for (const course2 of courses2) {
            if (course1 === course2) sameCourses.push(course1);
        }
    }
    return sameCourses;
}

function printOut(string) {
    console.log(string);
}
function printOutSameCourses(courses1, courses2) {
    const sameCourses = checkForSameCourses(courses1, courses2);
    switch (sameCourses.length) {
        case 0:
            printOut("No courses in common.")
            break;
        case 1:
            printOut(`${sameCourses[0]} course in common.`);
            break;
        default:
            printOut(`${sameCourses.slice(0, sameCourses.length - 1).join(", ")} and ${sameCourses[sameCourses.length - 1]} courses in common.`);
    }
}

printOutSameCourses(student1Courses, student2Courses);
printOutSameCourses(['Math', 'English', 'Programming'], ['Math', 'English', 'Programming']);
printOutSameCourses(['Math', 'English', 'Programming'], ['Geography', 'Spanish', 'Biology']);