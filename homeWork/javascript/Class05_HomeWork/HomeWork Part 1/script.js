let animal = {
    name: "Ari",
    breed: "Labrador",
    speak: function(message) {
        console.log(`${this.name} says: '${message}'`);
    }
};

animal.speak("Hey bro!!!");

let animalName = prompt("Enter the animal's name:");
let breedName = prompt("Enter the animal's kind:");
animal.name = animalName;
animal.breed = breedName;
animal.speak("Hello there!");

// Second Part

let book = {
    title: "Gol Covek",
    author: "Igor Dzambazov",
    readingStatus: true, 
    getStatus: function() {
        if (this.readingStatus) {
            return `Already readed '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
};

console.log(book.getStatus()); 

let bookTitle = prompt("Enter the book title:");
let bookAuthor = prompt("Enter the book author:");
let bookReadingStatus = prompt("Have you read this book? (yes/no)") === "yes";
book.title = bookTitle;
book.author = bookAuthor;
book.readingStatus = bookReadingStatus;
console.log(book.getStatus());