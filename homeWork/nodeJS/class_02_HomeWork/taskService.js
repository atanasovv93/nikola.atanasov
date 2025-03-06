import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to tasks file
const tasksFile = path.join(__dirname, 'data', 'tasks.json'); // Path to the Database

// Function to read tasks from the file
const readTasks = () => {
    if (!fs.existsSync(tasksFile)) return [];
    const data = fs.readFileSync(tasksFile, 'utf8');
    return data ? JSON.parse(data) : [];
};

// Function to write tasks to the file
const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2), 'utf8');
    console.log("tasks.json UPDATED:", JSON.stringify(tasks, null, 2)); // Debug log
}


// Function to mark a task as completed
export const markTaskAsCompleted = (taskId) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        writeTasks(tasks);
        console.log(`Task with ID ${taskId} marked as completed.`);
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
};

// Function to generate a random email
const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(7);
    return `${randomString}@mail.com`;
};

// Function to add a new task with an owner
export const addTask = (title) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false,
        owner: generateRandomEmail()
    };
    
    tasks.push(newTask);
    writeTasks(tasks);
    console.log("Task added successfully:", newTask); // Debugging log
};


// Function to get tasks by owner
export const getTasksByOwner = (ownerEmail) => {
    const tasks = readTasks();
    return tasks.filter(task => task.owner === ownerEmail);
};

// Function to delete all tasks
export const deleteAllTasks = () => {
    writeTasks([]); // Write an empty array to tasks.json
    console.log("All tasks have been deleted.");
}
