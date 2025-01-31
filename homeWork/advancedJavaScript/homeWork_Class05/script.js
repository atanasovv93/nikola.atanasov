// Функција за преземање на податоци
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching data:", error);
      return [];
    });
}

// Функција за креирање на секција со податоци со dropdown
function createDataSection(category, data, count) {
  return `
    <details class="data-section">
      <summary>${category} (Counted: ${count} Student's)</summary>
      <p><b>Result:</b> ${data}</p>
    </details>
  `;
}

// Функција за обработка на студентите и креирање на секции
function processStudents(students) {
  let sections = "";

  // Филтрирање на студенти со просечна оценка > 3
  const highGradeStudents = students.filter(student => student.averageGrade > 3); 
  const highGradeList = highGradeStudents
    .map(student => `${student.firstName} ${student.lastName} <b><u>${student.averageGrade}</u></b>`)
    .join(", ");
  sections += createDataSection("All students with an average grade > 3", highGradeList, highGradeStudents.length);

  // Филтрирање на студентки со просечна оценка = 5
  const femaleGrade5 = students.filter(student => student.gender === "Female" && student.averageGrade === 5);
  const femaleGrade5List = femaleGrade5.map(student => student.firstName).join(", ");
  sections += createDataSection("Female students with avg grade = 5", femaleGrade5List, femaleGrade5.length);

  // Филтрирање на студенти мажи кои живеат во Скопје и се над 18 години
  const maleSkopjeOver18 = students.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18);
  const maleSkopjeOver18List = maleSkopjeOver18.map(student => `${student.firstName} ${student.lastName}`).join(", ");
  sections += createDataSection("Male students in Skopje > 18", maleSkopjeOver18List, maleSkopjeOver18.length);

  // Филтрирање на студентки постари од 24 години и пресметување на просечната оценка
  const femaleOver24 = students.filter(student => student.gender === "Female" && student.age > 24);
  const totalGrades = femaleOver24.reduce((acc, student) => acc + student.averageGrade, 0);
  const avgGradeFemalesOver24 = femaleOver24.length > 0
    ? (totalGrades / femaleOver24.length).toFixed(2)
    : "N/A";
  sections += createDataSection("Avg grade of females > 24", avgGradeFemalesOver24, femaleOver24.length);

    // Филтрирање на студенти мажи чие име почнува на "B" и имаат просечна оценка > 2
  const maleNameBGrade2 = students.filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2);
  const maleNameBGrade2List = maleNameBGrade2.map(student => `${student.firstName} ${student.lastName}`).join(", ");
  sections += createDataSection("Male students with name 'B' & avg grade > 2", maleNameBGrade2List, maleNameBGrade2.length);

    // Прикажување на секциите на веб страната
  document.getElementById("container").innerHTML = sections;
}

// Преземање и обработка на JSON податоците
fetchData("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
  .then(students => processStudents(students));
