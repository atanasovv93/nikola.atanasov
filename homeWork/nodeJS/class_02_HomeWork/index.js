import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { addTask, markTaskAsCompleted, getTasksByOwner, deleteAllTasks } from './taskService.js';

addTask('Buy groceries');
addTask('Complete Node.js homework');
addTask('Go for a walk');

markTaskAsCompleted(2);

const ownerEmail = 'some.user@mail.com'; // Replace with an actual email from tasks.json
console.log(`Tasks for owner ${ownerEmail}:`, getTasksByOwner(ownerEmail));

deleteAllTasks();

// Get the current file's directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the file path
const filePath = path.join(__dirname, 'homework.txt');

// Step 1: Create and write to the file
fs.writeFileSync(filePath, 'Homework 02 in Basic Node', 'utf8');

// Step 2: Append text to the file
fs.appendFileSync(filePath, '\nFINISHED!', 'utf8');

// Step 3: Read and print the file contents
const content = fs.readFileSync(filePath, 'utf8');
console.log(content);
