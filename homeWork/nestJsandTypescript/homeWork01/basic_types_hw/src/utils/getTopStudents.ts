import { Course } from "../models/Course";

export function getTopStudents(course: Course, n: number) {
  return course.students
    .map(student => {
      const avg = student.grades.length > 0 
        ? student.grades.reduce((a, b) => a + b, 0) / student.grades.length
        : 0; 
      return { ...student, avg };
    })
    .sort((a, b) => b.avg - a.avg)
    .slice(0, n); 
}
