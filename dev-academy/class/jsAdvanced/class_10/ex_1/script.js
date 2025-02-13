function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

function Student(firstName, lastName, age, academyName, studentId) {
    Person.call(this, firstName, lastName, age);

    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}.`);
    };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student1 = new Student("Kiril", "Lazarov", 20, "Qinshift Academy", "12345");
const student2 = new Student("Jane", "Grozdanski", 22, "SEDC Academy", "67890");

console.log(student1.getFullName()); 
student1.study(); 

console.log(student2.getFullName()); 
student2.study();