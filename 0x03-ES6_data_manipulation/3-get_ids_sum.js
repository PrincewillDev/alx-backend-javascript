export default function getStudentIdsSum(students) {
  const arryObj = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return arryObj;
}
