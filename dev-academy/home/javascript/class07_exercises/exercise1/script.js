let firstDiv = document.querySelector("div");
console.log("First div:", firstDiv);

let allParagraphs = document.getElementsByTagName("p");
console.log("All paragraphs:", allParagraphs);

let lastDiv = document.getElementById("lastDiv");
console.log("Last div:", lastDiv);

let header3last = lastDiv.getElementsByTagName("h3")[0];
console.log("Header 3 in the last div:", header3last);

let header1last = lastDiv.getElementsByTagName("h1")[0];
console.log("Header 1 in the last div:", header1last);

let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;
console.log("Text from the first paragraph in the second div:", paragraphSecondText);

document.querySelector("text").innerText += " text!";

header1last.innerText = "Text added from JS also";

header3last.innerText = "Text added from JS";
