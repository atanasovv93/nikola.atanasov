let headers = document.querySelectorAll("h1, h3");
headers.forEach((header, index) => {
  header.innerText = `Header ${index + 1} has been changed!`;
});

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph, index) => {
  paragraph.innerText = `Paragraph ${index + 1} has been updated!`;
});

let textElement = document.querySelector("text");
if (textElement) {
  textElement.innerText = "Text element has been modified with JavaScript!";
}
