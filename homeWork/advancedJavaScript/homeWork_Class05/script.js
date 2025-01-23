// fetch and process the JSON data
fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
  .then(response => response.json())
  .then(students => {
    let sections = "";

    // function to create a data section with dropdown
    function createDataSection(category, data, count) {
      return `
        <details class="data-section">
          <summary>${category} (Counted: ${count} Student's)</summary>
          <p><b>Result:</b> ${data}</p>
        </details>
      `;
    }

    // filter students with avg grade > 3 and bold and underline the average grade
    console.log("ALL STUDENTS WITH AVERAGE GRADE > 3");
    const highGradeStudents = students.filter(student => student.averageGrade > 3); 
    const highGradeList = highGradeStudents
      .map(student => `${student.firstName} ${student.lastName} <b><u>${student.averageGrade}</b></u>`)
      .join(", ");
    sections += createDataSection("All students with an average grade > 3", highGradeList, highGradeStudents.length);

    // filter female students with avg grade = 5 
    console.log("FEMALE STUDENTS WITH AVERAGE GRADE = 5");
    const femaleGrade5 = students.filter(student => student.gender === "Female" && student.averageGrade === 5);
    const femaleGrade5List = femaleGrade5.map(student => student.firstName).join(", ");
    sections += createDataSection("Female students with avg grade = 5", femaleGrade5List, femaleGrade5.length);

    // filter male students who live in Skopje and is over 18
    console.log("MALE STUDENTS IN SKOPJE > 18");
    const maleSkopjeOver18 = students.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18);
    const maleSkopjeOver18List = maleSkopjeOver18.map(student => `${student.firstName} ${student.lastName}`).join(", ");
    sections += createDataSection("Male students in Skopje > 18", maleSkopjeOver18List, maleSkopjeOver18.length);

    // filter female students older than 24 and calculate the average grade
    console.log("AVERAGE GRADE OF FEMALE STUDENTS > 24");
    const femaleOver24 = students.filter(student => student.gender === "Female" && student.age > 24);
    const totalGrades = femaleOver24.reduce((acc, student) => acc + student.averageGrade, 0);
    const avgGradeFemalesOver24 = femaleOver24.length > 0
      ? (totalGrades / femaleOver24.length).toFixed(2)
      : "N/A";
    sections += createDataSection("Avg grade of females > 24", avgGradeFemalesOver24, femaleOver24.length);

    // filter male students who's name starts with "B" and has an average grade > 2
    console.log("MALE STUDENTS WITH NAME 'B' & AVG GRADE > 2");
    const maleNameBGrade2 = students.filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2);
    const maleNameBGrade2List = maleNameBGrade2.map(student => `${student.firstName} ${student.lastName}`).join(", ");
    sections += createDataSection("Male students with name 'B' & avg grade > 2", maleNameBGrade2List, maleNameBGrade2.length);

    // Render the sections on the webpage
    document.getElementById("container").innerHTML = sections;
  })
  .catch(error => console.error("Error fetching data:", error));
