export default function getStudentsByLocation(students, city) {
  const arryObj = students.filter((student) => student.location === city);
  return arryObj;
}
