let listofUsers = [];

document.getElementById("subtim").addEventListener("click", function (event) {
    event.preventDefault();
    subtimButtonFunc();
});

function subtimButtonFunc() {
    let newStudentFName = document.getElementById("fname").value;
    let newStudentLName = document.getElementById("lname").value;
    let newStudentPassword = document.getElementById("password").value;
    let newStudentPhone = document.getElementById("phonenumber").value;

    let gender = document.querySelector('input[name="gender"]:checked');
    let newStudentGender = gender ? gender.value : undefined;

    let newStudentCountry = document.getElementById("country").value;

    let academieCheckboxes = document.querySelectorAll('input[name="academie"]:checked');
    let academies = [];
    for (let checkbox of academieCheckboxes) {
        academies.push(checkbox.value);
    }


    let newStudentRemark = document.getElementById("remark").value;

    let newStudent = {
        fname: newStudentFName,
        lname: newStudentLName,
        password: newStudentPassword,
        phonenumber: newStudentPhone,
        gender: newStudentGender,
        country: newStudentCountry,
        academie: academies,
        remark: newStudentRemark,
    };

    listofUsers.push(newStudent);
    console.log(listofUsers);
}
