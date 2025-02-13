// Основен конструктор за институции (основа за Academy)
function Institution(location, capacity) {
    this.id = Math.floor(Math.random() * 1000000);
    this.location = location;
    this.capacity = capacity;
    
    if (this.capacity < 1) {
        throw new Error("Капацитетот мора да биде најмалку 1.");
    }
}

// Основен конструктор за курсеви (основа за Subject)
function Course(description, price) {
    this.id = Math.floor(Math.random() * 1000000);
    this.description = description;
    this.price = price;
    
    if (this.price < 0) {
        throw new Error("Цената не може да биде негативна.");
    }
}

// Основен конструктор за лица (основа за Student)
function Person(email, phone) {
    this.id = Math.floor(Math.random() * 1000000);
    this.email = email;
    this.phone = phone;
    
    if (!this.email.includes("@")) {
        throw new Error("Invalid email address.");
    }
}

// Академија: наследува својства од Institution преку создавање на објект и копирање на својствата
function Academy(name, start, end, location, capacity) {
    var inst = new Institution(location, capacity);
    this.id = inst.id;
    this.location = inst.location;
    this.capacity = inst.capacity;
    
    this.name = name;
    this.students = [];
    this.subjects = [];
    this.start = start;
    this.end = end;
}

// Додавање на методи на prototype на Академија
Academy.prototype.getNumberOfClasses = function () {
    return this.subjects.length * 10;
};

Academy.prototype.printStudents = function () {
    console.log("Студенти во академијата:");
    for (var i = 0; i < this.students.length; i++) {
        console.log(this.students[i].firstName + " " + this.students[i].lastName);
    }
};

Academy.prototype.printSubjects = function () {
    console.log("Предмети во академијата:");
    for (var i = 0; i < this.subjects.length; i++) {
        console.log(this.subjects[i].title);
    }
};

// Предмет: наследува својства од Course преку создавање на објект и копирање на својствата
function Subject(title, isElective, academy, description, price) {
    var course = new Course(description, price);
    this.id = course.id;
    this.description = course.description;
    this.price = course.price;
    
    this.title = title;
    this.numberOfClasses = 10; // Стандардна вредност е 10\n";
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];
}

Subject.prototype.overrideClasses = function (number) {
    if (number < 3) {
        console.error("Number of classes canno't be < 3.");
    } else {
        this.numberOfClasses = number;
    }
};

// Студент: наследува својства од Person преку создавање на објект и копирање на својствата
function Student(firstName, lastName, age, email, phone) {
    var person = new Person(email, phone);
    this.id = person.id;
    this.email = person.email;
    this.phone = person.phone;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
}

Student.prototype.startAcademy = function (academy) {
    this.academy = academy;
    academy.students.push(this);
};

Student.prototype.startSubject = function (subject) {
    if (!this.academy) {
        console.error("Студентот не е запишан во академија.");
        return;
    }
    // Проверка дали предметот постои во академијата (едноставна проверка)\n    var subjectExists = false;\n    for (var i = 0; i < this.academy.subjects.length; i++) {\n        if (this.academy.subjects[i] === subject) {\n            subjectExists = true;\n            break;\n        }\n    }\n    if (!subjectExists) {\n        console.error("Предметот не постои во академијата.");\n        return;\n    }\n    this.currentSubject = subject;\n    subject.students.push(this);\n};

// Тестирање на кодот

// Креирање на академија
var myAcademy = new Academy("Code Academy", new Date(2023, 9, 1), new Date(2024, 5, 30), "Скопје", 100);

// Креирање на предмети
var subject1 = new Subject("JavaScript", false, myAcademy, "Основи на JavaScript", 200);
var subject2 = new Subject("React", true, myAcademy, "Напреден React", 300);
myAcademy.subjects.push(subject1, subject2);

// Креирање на студенти
var student1 = new Student("Иван", "Петровски", 25, "ivan.petrov@gmail.com", "070123456");
var student2 = new Student("Марија", "Илиевска", 22, "marija.ilieva@gmail.com", "071987654");

// Запишување на студентите во академијата
student1.startAcademy(myAcademy);
student2.startAcademy(myAcademy);

// Запишување на студенти во предмети
student1.startSubject(subject1);
student2.startSubject(subject2);

// Прикажување на резултатите
console.log("Академија детали:", myAcademy);
myAcademy.printStudents();
myAcademy.printSubjects();

console.log("Студент 1 детали:", student1);
console.log("Студент 2 детали:", student2);

console.log("Предмет 1 детали:", subject1);
console.log("Предмет 2 детали:", subject2);
}