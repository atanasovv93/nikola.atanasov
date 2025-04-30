import { Student } from "./models/Student";
import { Course } from "./models/Course";
import { calculateAverageGrade } from "./utils/calculateAverageGrade";
import { getGradeLevel, GradeLevel } from "./utils/getGradeLevel";
import { getTopStudents } from "./utils/getTopStudents";
import { CourseManager } from "./utils/CourseManager";

const students: Student[] = [
  { id: 1, name: "Ana", age: 14, grades: [80, 85, 90] },
  { id: 2, name: "Bojan", age: 15, grades: [70, 75, 80] },
  { id: 3, name: "Marija", age: 17, grades: [95, 92, 98] }
];

const students2: Student[] = [
  { id: 4, name: "Nikola", age: 17, grades: [88, 90, 85] },
  { id: 5, name: "Goshe", age: 15, grades: [75, 80, 70] },
  { id: 6, name: "Stefan", age: 16, grades: [90, 90, 90] },
];

const course1: Course = {
  id: 101,
  name: "Mathematics",
  instructor: "Prof. Petrov",
  maxStudents: 30,
  students
};

const course2: Course = {
  id: 102,
  name: "Physics",
  instructor: "Dr. Stojanov",
  maxStudents: 25,
  students: students2
};

const manager = new CourseManager();
manager.addCourse(course1);
manager.addCourse(course2);

console.log("📊 Average grade of all students:", calculateAverageGrade([...students, ...students2]));
console.log("🎓 Ana's grade level:", GradeLevel[getGradeLevel(students[0].age)]);
console.log(`🏅 Top 2 students in course "${course1.name}":`, getTopStudents(course1, 2));
console.log("🎓 Stefan's grade level:", GradeLevel[getGradeLevel(students2[2].age)]);
console.log(`🏅 Top 2 students in course "${course2.name}":`, getTopStudents(course2, 2));

console.log("📚 All courses managed:");
manager.getAllCourses().forEach(course => {
  console.log(`📘 Course: ${course.name}`);
  course.students.forEach(s => {
    const level = GradeLevel[getGradeLevel(s.age)];
    console.log(`👤 ${s.name}, age ${s.age}, Grade Level: ${level}`);
  });
});
