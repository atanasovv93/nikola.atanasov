import { MongoClient } from 'mongodb';

const MONGO_USERNAME = 'nikoladevacademy';
const MONGO_PASSWORD = 'Podrska123';
const MONGO_CLUSTER = 'cluster0.j5h6v';
const MONGO_DB_NAME = 'reminder-app';
const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(URI);
let db = null;

export async function connectDB() { 
    try {
    const connection = await client.connect();
    db = connection.db();
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('MongoDB connection error: ',error);
}
}

export function getDB() {
    return db;
}