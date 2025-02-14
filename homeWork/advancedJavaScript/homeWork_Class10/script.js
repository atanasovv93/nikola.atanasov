// Exercise 2: Base Constructors (Institution, Course, Person)
function Institution(location, capacity) {
    this.id = Math.floor(Math.random() * 1000000);
    this.location = location;
    this.capacity = capacity;

    this.validateCapacity = function() {
        if (this.capacity < 1) throw new Error("Capacity must be at least 1");
    };
    this.validateCapacity();
}

function Course(description, price) {
    this.id = Math.floor(Math.random() * 1000000);
    this.description = description;
    this.price = price;

    this.validatePrice = function() {
        if (this.price < 0) throw new Error("Price cannot be negative");
    };
    this.validatePrice();
}

function Person(email, phone) {
    this.id = Math.floor(Math.random() * 1000000);
    this.email = email;
    this.phone = phone;

    this.validateEmail = function() {
        if (!this.email.includes("@")) throw new Error("Invalid email address");
    };
    this.validateEmail();
}

// Exercise 1: Object Templates (Academy, Subject, Student)
function Academy(name, start, end, location, capacity) {
    Institution.call(this, location, capacity);
    this.name = name;
    this.start = start;
    this.end = end;
    this.students = [];
    this.subjects = [];
}

Academy.prototype = Object.create(Institution.prototype);
Academy.prototype.constructor = Academy;

Object.defineProperty(Academy.prototype, 'numberOfClasses', {
    get: function() {
        return this.subjects.length * 10;
    }
});

Academy.prototype.printStudents = function() {
    console.log("Students in academy:");
    this.students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName}`);
    });
};

Academy.prototype.printSubjects = function() {
    console.log("Subjects in academy:");
    this.subjects.forEach(subject => {
        console.log(subject.title);
    });
};

// Subject inherits from Course
function Subject(title, isElective, academy, description, price) {
    Course.call(this, description, price);
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];
}

Subject.prototype = Object.create(Course.prototype);
Subject.prototype.constructor = Subject;

Subject.prototype.overrideClasses = function(number) {
    if (number < 3) {
        console.error("Number of classes cannot be less than 3");
        return;
    }
    this.numberOfClasses = number;
};

// Student inherits from Person
function Student(firstName, lastName, age, email, phone) {
    Person.call(this, email, phone);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.startAcademy = function(academy) {
    this.academy = academy;
    academy.students.push(this);
};

Student.prototype.startSubject = function(subject) {
    if (!this.academy) {
        console.error("Student is not enrolled in an academy");
        return;
    }
    if (!this.academy.subjects.includes(subject)) {
        console.error("Subject does not exist in the academy");
        return;
    }
    this.currentSubject = subject;
    subject.students.push(this);
};

// Test the implementation
try {
    const codeAcademy = new Academy(
        "Code Academy",
        new Date(2023, 9, 1),
        new Date(2024, 5, 30),
        "Skopje",
        100
    );

    const jsSubject = new Subject(
        "JavaScript Basics",
        false,
        codeAcademy,
        "Learn JavaScript fundamentals",
        200
    );
    const reactSubject = new Subject(
        "Advanced React",
        true,
        codeAcademy,
        "React with TypeScript",
        300
    );
    codeAcademy.subjects.push(jsSubject, reactSubject);

    const student1 = new Student(
        "John",
        "Doe",
        25,
        "john.doe@example.com",
        "123-456-7890"
    );
    const student2 = new Student(
        "Jane",
        "Smith",
        22,
        "jane.smith@example.com",
        "098-765-4321"
    );

    student1.startAcademy(codeAcademy);
    student2.startAcademy(codeAcademy);

    student1.startSubject(jsSubject);
    student2.startSubject(reactSubject);

    console.log("Academy details:", codeAcademy);
    codeAcademy.printStudents();
    codeAcademy.printSubjects();
    console.log("Number of classes:", codeAcademy.numberOfClasses);

    console.log("Student 1:", student1);
    console.log("Student 2:", student2);

    console.log("JavaScript Subject:", jsSubject);
    console.log("React Subject:", reactSubject);

} catch (error) {
    console.error("Error:", error.message);
}