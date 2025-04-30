"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverageGrade = calculateAverageGrade;
function calculateAverageGrade(students) {
    const allGrades = students.flatMap(s => s.grades);
    const total = allGrades.reduce((sum, grade) => sum + grade, 0);
    return allGrades.length > 0 ? total / allGrades.length : 0;
}
