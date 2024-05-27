// ============================================ Q# 4 =====================================================
// ============================================ STEP# 2 ============================================
var students = [
    {
        name: "Sadia",
        seniorStatus: false,
        assignmentDone: true,
    },
    {
        name: "Sania",
        seniorStatus: true,
        assignmentDone: true
    },
    {
        name: "Sana",
        seniorStatus: false,
        assignmentDone: false,
    },
];
// ======================================== STEP# 3 =================================================
function findSeniorsWithCompAssign(students) {
    return students.filter(function (students) { return students.seniorStatus && students.assignmentDone; });
}
var seniorStudentsWithCompletedAssi = findSeniorsWithCompAssign(students);
console.log("Senior students with completed Assignments");
// ========================================= STEP# 4 =================================================
function updateClassList(students) {
    return students.filter(function (student) { return student.seniorStatus && student.assignmentDone; });
}
var updatedClassList = updateClassList;
console.log("Updated class list:", updatedClassList(students));
