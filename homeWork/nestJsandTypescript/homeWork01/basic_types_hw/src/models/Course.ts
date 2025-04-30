import { Student } from "./Student";

export interface Course {
  id: number;
  name: string;
  instructor: string;
  maxStudents: number;
  students: Student[];
}
