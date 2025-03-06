import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log('Path example');
// console.log('Current file:', __filename);
// console.log('Current directory', __dirname);
// console.log('File extension', path.extname(__filename));
// console.log('File name', path.basename(__filename));
// console.log('Directory name', path.dirname(__filename));
// console.log('Path join', path.join(__dirname, 'files', 'test.txt'));

const dirPath = path.join(__dirname, 'test-folder');
console.log('dir path', dirPath);
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Write to a file

const filePath = path.join(dirPath, 'hello.txt');
console.log(filePath);
fs.writeFileSync(filePath, 'Hello from the Node JS 2!');

// Append text to a file
fs.appendFileSync(filePath, '\nHello from the Node JS 1!');

// Read from a file
const text = fs.readFileSync(filePath, 'utf8');
console.log(text);

// List directory content

const files = fs.readdirSync(__dirname);
console.log('Files in the directory', files);

const testFolderFilesPath = path.join(__dirname, 'test-folder');
const testFolderFiles = fs.readdirSync(testFolderFilesPath);
console.log('Files in the directory', testFolderFiles);

console.log('Platform', os.platform());
console.log('CPU architecture', os.arch());
console.log('CPU cores', os.cpus());

//Third party modules

console.log('UUID', uuidv4());