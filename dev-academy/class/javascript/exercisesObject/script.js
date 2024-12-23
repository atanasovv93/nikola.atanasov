console.log("===== Access by id =======");
let formTitle = document.getElementById("myTitle");
console.log(formTitle);

console.log("=== Adding Events ====");
let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", () => {
    let firstName = document.getElementById("fname").value || "Not specified";
    let lastName = document.getElementById("lname").value || "Not specified";
    let gender = document.querySelector("input[name='gender']:checked")?.value || "Not specified";
    let phone = document.getElementById("phonenumber").value || "Not specified";
    let country = document.getElementById("country").value || "Not specified";
    let academies = Array.from(document.querySelectorAll("input[name='academie']:checked"))
        .map((checkbox) => checkbox.value)
        .join(", ") || "Not specified";
    let remark = document.getElementById("remark").value || "No remarks";

    console.log("===== Form Data =====");
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Gender: ${gender}`);
    console.log(`Phone Number: ${phone}`);
    console.log(`Country: ${country}`);
    console.log(`Academies: ${academies}`);
    console.log(`Remark: ${remark}`);

    alert(`Form Submitted Successfully!\nCheck Console for Details.`);
});
