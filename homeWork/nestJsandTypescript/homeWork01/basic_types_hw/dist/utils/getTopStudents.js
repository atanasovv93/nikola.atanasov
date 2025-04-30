"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopStudents = getTopStudents;
function getTopStudents(course, n) {
    return course.students
        .map(student => ({
        ...student,
        avg: student.grades.reduce((a, b) => a + b, 0) / student.grades.length
    }))
        .sort((a, b) => b.avg - a.avg)
        .slice(0, n);
}
