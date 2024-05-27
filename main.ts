// ============================================ Q# 4 =====================================================

// ---------------------------------------- STUDENT-LIST-ORGANIZER ----------------------------

// ============================================ STEP# 1 ============================================

interface Student{
    name:string;
    seniorStatus: boolean;
    assignmentDone: boolean;

}

// ============================================ STEP# 2 ============================================

const students:Student[]= [
    {
        name: "Sadia",
        seniorStatus: false,
        assignmentDone: true,
    },
    {
        name:"Sania",
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
function findSeniorsWithCompAssign(students:Student[]):Student[]{
    return students.filter((students)=>students.seniorStatus && students.assignmentDone);
}

let seniorStudentsWithCompletedAssi=findSeniorsWithCompAssign(students);

console.log("Senior students with completed Assignments");

// ========================================= STEP# 4 =================================================

function updateClassList(students: Student[]): Student[] {
    return students.filter((student) => student.seniorStatus && student.assignmentDone);
  }
const updatedClassList = updateClassList;

console.log("Updated class list:", updatedClassList(students));
