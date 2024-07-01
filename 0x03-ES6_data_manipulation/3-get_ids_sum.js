export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, student) => acc + student.id, 0);
}
