// let name = "Nikola";
// const realname = "Nikola";
// const siteName = "atanasovtech.org";
// Int, String, Float/Decimal, Boolean, Array, Object, Null, Undefined

// name = "Marko";

// console.log(name, realname, siteName);

// const name = document.getElementById("name");
// name.innerText = "Nikola Atanasov";

// const courses = [
//   "Python",
//   "JavaScript",
//   "Node.js",
//   "React",
//   "Java",
//   "C++",
//   "Ruby",
//   "C#",
// ];

// const coursesList = document.getElementById("courses");
// Исиши ги курсевите во листа
// for(let course of courses) {
//     coursesList.innerHTML += course + "<br>";
// }

// * 1. Reusable code (Овозможува повторна употреба на кодот)
// * Функција е блок на код кој може да се повика каде и да е во програмата
// * Функцијата може да прима аргументи или да не прима
// * 2. Читливоста на кодот се подобрува со користење на функции

// // Функции со аргументи
// calculator(10, 22, "addition");
// calculator(22, 2, "subtraction");
// calculator(50, 3, "multiplication");
// calculator(10, 2, "division");
// // Функции без аргументи
// showCourses();

//  // * *
//  * префикс: function
//  * име на функцијата: writedownCourses
//  * загради: ()
//  * тело на функцијата: { }
//  *
//  * /

// function showCourses() {
//   for (let course of courses) {
//     coursesList.innerHTML += course + "<br>";
//   }
// }

// function calculator(num1, num2, operation) {
//     if (operation === "addition") {
//       console.log(num1 + num2);
//     } else if (operation === "subtraction") {  // Поправена грешката тука
//       console.log(num1 - num2);
//     } else if (operation === "multiplication") {
//       console.log(num1 * num2);
//     } else if (operation === "division") {
//       console.log(num1 / num2);
//     } else {
//       console.log("Invalid operation");
//     }
//   }

const courses = [
  {
    name: "Python",
    price: 499,
    description:
      "Python is a programming language that lets you work quickly and integrate systems more effectively.",
    details: [
      "24 Предавања",
      "12 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "JavaScript",
    price: 299,
    description:
      "JavaScript is the programming language of the Web. It is easy to learn.",
    details: [
      "20 Предавања",
      "10 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "C#",
    price: 299,
    description:
      "C# is a modern object-oriented programming language developed by Microsoft.",
    details: [
      "18 Предавања",
      "9 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "Java",
    price: 399,
    description:
      "Java is a high-level programming language developed by Sun Microsystems.",
    details: [
      "20 Предавања",
      "10 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "Ruby",
    price: 399,
    description:
      "Ruby is a dynamic, open source programming language with a focus on simplicity and productivity.",
    details: [
      "18 Предавања",
      "9 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "C++",
    price: 399,
    description:
      "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
    details: [
      "18 Предавања",
      "9 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "Node.js",
    price: 399,
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    details: [
      "18 Предавања",
      "9 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
  {
    name: "React",
    price: 399,
    description: "React is a JavaScript library for building user interfaces.",
    details: [
      "18 Предавања",
      "9 Часа на видео",
      "Достапно за 24/7",
      "Сертификат за завршено обука",
    ],
  },
];

showCourses();

document.getElementById("searchBtn").addEventListener("click", () => {
  const searchText = document.getElementById("searchText").value;

  if (searchText === "") {
    return alert("Please enter a course name");
  }

  const foundCourse = courseExists(searchText);

  if(!foundCourse) {
    return alert("Го немаме тој курс во понудата...")
  }

const allCourses = document.getElementsByClassName("singleCourse")


});

function courseExists(courseName) {
  for (let course of courses) {
    if (course.name.toLowerCase() === courseName.toLowerCase()) {
      return true;
    }
  }
  return false;
};

function showCourses() {
  const coursesList = document.getElementById("courses");
  for (let course of courses) {
    const courseName = document.createElement("p");
    courseName.innerText = course.name;
    courseName.classList = "courseName";

    const coursePrice = document.createElement("p");
    coursePrice.innerText = `$${course.price}`;

    const courseDescription = document.createElement("p");
    courseDescription.innerText = course.description;

    const courseButton = document.createElement("button");
    courseButton.innerText = "Enroll Now";
    courseButton.classList = "enrollButton";

    courseButton.addEventListener("click", (event) => showCourseinfo(event, course));


    const courseDiv = document.createElement("div");
    courseDiv.classList = "singleCourse";
    courseDiv.append(courseName, coursePrice, courseDescription, courseButton);

    coursesList.append(courseDiv);
  }
}

function showCourseinfo(event, course) {

    console.log(event.currentTarget);

  const courseinfoDiv = document.getElementById("courseinfo");
  courseinfoDiv.classList = "";
  courseinfoDiv.innerHTML = "";

  const courseTitle = document.createElement("h1");
  courseTitle.innerText = course.name;

  const detailsList = document.createElement("ul");
  for (let detail of course.details) {
    const singleDetail = document.createElement("li");
    singleDetail.innerText = detail;

    detailsList.append(singleDetail);
  }

  courseinfoDiv.append(courseTitle, detailsList);
}
