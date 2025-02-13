// Person constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Method to get the full name
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Method on the Person prototype to get the academy of a student
Person.prototype.getStudentAcademy = function (student) {
    if (student instanceof Student) {
        return student.academyName;
    } else {
        return "Not a valid student.";
    }
};

// Student constructor function inheriting from Person
function Student(firstName, lastName, age, academyName, studentId) {
    // Inherit properties from Person
    Person.call(this, firstName, lastName, age);

    // Add Student-specific properties
    this.academyName = academyName;
    this.studentId = studentId;

    // Method to study
    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}.`);
    };
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// DesignStudent constructor function inheriting from Student
function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth = false) {
    Student.call(this, firstName, lastName, age, "Design Academy", studentId);
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    // Method to attend Adobe exam
    this.attendAdobeExam = function () {
        console.log(`The student ${this.firstName} is doing an Adobe exam!`);
    };
}
DesignStudent.prototype = Object.create(Student.prototype);
DesignStudent.prototype.constructor = DesignStudent;

// CodeStudent constructor function inheriting from Student
function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject = false, hasGroupProject = false) {
    Student.call(this, firstName, lastName, age, "Code Academy", studentId);
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;

    // Method to do a project
    this.doProject = function (type) {
        if (type === "individual") {
            this.hasIndividualProject = true;
            console.log(`The student ${this.firstName} is working on an individual project.`);
        } else if (type === "group") {
            this.hasGroupProject = true;
            console.log(`The student ${this.firstName} is working on a group project.`);
        } else {
            console.log("Invalid project type.");
        }
    };
}
CodeStudent.prototype = Object.create(Student.prototype);
CodeStudent.prototype.constructor = CodeStudent;

// NetworkStudent constructor function inheriting from Student
function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
    Student.call(this, firstName, lastName, age, "Network Academy", studentId);
    this.academyPart = academyPart;

    // Method to attend Cisco exam
    this.attendCiscoExam = function () {
        console.log(`The student ${this.firstName} is doing a Cisco exam!`);
    };
}
NetworkStudent.prototype = Object.create(Student.prototype);
NetworkStudent.prototype.constructor = NetworkStudent;

// Create instances of each student type
const designStudent = new DesignStudent("Alice", "Johnson", 21, "D123", true);
const codeStudent = new CodeStudent("Bob", "Smith", 22, "C456");
const networkStudent = new NetworkStudent("Charlie", "Brown", 23, "N789", 2);

// Test the methods
console.log(designStudent.getFullName()); 
designStudent.attendAdobeExam(); 

console.log(codeStudent.getFullName());
codeStudent.doProject("individual"); 
codeStudent.doProject("group"); 

console.log(networkStudent.getFullName()); 
networkStudent.attendCiscoExam(); 

// Test the getStudentAcademy method
const person = new Person("John", "Doe", 30);
console.log(person.getStudentAcademy(designStudent)); 
console.log(person.getStudentAcademy(codeStudent)); 
console.log(person.getStudentAcademy(networkStudent)); 