// COMMON JS 
// Nativly supported by nodejs


// fs => file system
// inner-built module in Node.js
const fs = require('fs');
// const helpers = require('./helper.js');
//costum module
const { iterateMovies } = require('./helper.js');

// external module ( already created by someone else)
// npm => node package manager


// Writes in the file system
function writeToFile(filePath, content) {
    fs.writeFileSync(filePath, content);
};
fs.writeFileSync('dummy.txt', 'Hello, I just wrote a file using Node.js!');
// Re-writes in the file system
writeToFile('dummy.txt', 'Hello, I just re-write a file using Node.js!');

writeToFile('dummy.txt', 'Hello, I just re-write a second a file using Node.js!');


const appendToFile = (filePath, content) => {
    fs.appendFileSync(filePath, content);
};

appendToFile('dummy.txt', '\nThis is appended content!');
appendToFile('dummy.txt', '\nNodeJS is awesome!');

// this will overwrite everything in the file
// writeToFile('dummy.txt', 'Hello, I overwrote everything!');

iterateMovies(['The Matrix', 'The Godfather', 'The Dark Knight']);