"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
class CourseManager {
    constructor() {
        Object.defineProperty(this, "courses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    addCourse(course) {
        if (this.courses.find(c => c.id === course.id)) {
            throw new Error(`Course with ID ${course.id} already exists.`);
        }
        this.courses.push(course);
    }
    removeCourse(courseId) {
        this.courses = this.courses.filter(c => c.id !== courseId);
    }
    getCourseById(courseId) {
        return this.courses.find(c => c.id === courseId);
    }
    getAllCourses() {
        return [...this.courses];
    }
}
exports.CourseManager = CourseManager;
