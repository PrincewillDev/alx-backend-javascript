// export default function updateStudentGradeByCity(
//   studentLists,
//   city,
//   newGrades,
// ) {
//   return studentLists
//     .filter((studentLists) => studentLists.Location === city)
//     .map((student) => {
//       const updatedStudent = { ...student };
//       newGrades.forEach((studentGrade) => {
//         if (studentGrade.student.id === updatedStudent.id) {
//           updatedStudent.grade = studentGrade.grade;
//         }
//       });
//       if (!updatedStudent.grade) {
//         updatedStudent.grade = 'N/A';
//       }
//       return updatedStudent;
//     });
// }

export default function updateStudentGradeByCity(array, city, newGrade) {
  return array
    .filter((item) => item.location === city)
    .map((student) => {
      const updatedStudent = { ...student };
      newGrade.forEach((studentGrade) => {
        if (studentGrade.studentId === updatedStudent.id) {
          updatedStudent.grade = studentGrade.grade;
        }
      });
      if (!updatedStudent.grade) {
        updatedStudent.grade = 'N/A';
      }
      return updatedStudent;
    });
}
