import { Course } from "../models/Course";

export class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    if (this.courses.find(c => c.id === course.id)) {
      throw new Error(`Course with ID ${course.id} already exists.`);
    }
    this.courses.push(course);
  }

  removeCourse(courseId: number): void {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }

  getCourseById(courseId: number): Course | undefined {
    return this.courses.find(c => c.id === courseId);
  }

  getAllCourses(): Course[] {
    return [...this.courses];
  }
}
