/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const studentIDS = students.map((student) => student.id);
    return studentIDS.reduce((sum, studentId) => sum + studentId);
  }
  return 0;
}
