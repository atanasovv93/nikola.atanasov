import express from 'express';
import fs from 'fs/promises';

const app = express();

const PORT = 3001; // Changed port number
const HOSTNAME = 'localhost';

app.use(express.json());

// DATA title path
const TASKS_FILE_PATH = './data/tasks.json';

// Routes
// Get all tasks
app.get('/tasks', async (req, res) => {
    const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
    res.send(tasks);
});

// Create a new task
app.post('/tasks', async (req, res) => {
    console.log(req.body);
    const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
    const parsedTasks = JSON.parse(tasks);
    const newTask = {
        ...req.body,
        id: 1,
        completed: false,
        createdAt: new Date().toISOString(),
    };
    parsedTasks.push(newTask);
    await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(parsedTasks, null, 2));
    res.send(newTask);
});

// Update a new task
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params; // Which task do we update
    const body = req.body; // With what do we update
    const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
    const parsedTasks = JSON.parse(tasks);
    const index = parsedTasks.findIndex(task => task.id === parseInt(id));
    if (index < 0) {
        return res.status(404).send({ error: `Task with id ${id} not found!` });
    }
    parsedTasks[index] = { ...parsedTasks[index], ...body };
    await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(parsedTasks, null, 2));
    res.send(parsedTasks[index]);
});

// Delete a new task
app.delete('/tasks', (req, res) => {
    app.delete('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
        const parsedTasks = JSON.parse(tasks);
        const index = parsedTasks.findIndex(task => task.id === parseInt(id));
        if (index < 0) {
            return res.status(404).send({ error: `Task with id ${id} not found!` });
        }
        parsedTasks.splice(index, 1);
        await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(parsedTasks, null, 2));
        res.send({ message: `Task with id ${id} has been deleted.` });
    });
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is now listening at: http://${HOSTNAME}:${PORT}`);
});