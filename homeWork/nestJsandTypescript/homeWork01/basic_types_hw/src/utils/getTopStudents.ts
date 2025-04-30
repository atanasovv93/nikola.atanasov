import { Course } from "../models/Course";

export function getTopStudents(course: Course, n: number) {
  return course.students
    .map(student => ({
      ...student,
      avg: student.grades.reduce((a, b) => a + b, 0) / student.grades.length
    }))
    .sort((a, b) => b.avg - a.avg)
    .slice(0, n);
}
