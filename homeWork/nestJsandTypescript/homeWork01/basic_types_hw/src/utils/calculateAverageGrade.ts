import { Student } from "../models/Student";

export function calculateAverageGrade(students: Student[]): number {
  const allGrades = students.flatMap(s => s.grades);
  const total = allGrades.reduce((sum, grade) => sum + grade, 0);
  return allGrades.length > 0 ? total / allGrades.length : 0;
}
