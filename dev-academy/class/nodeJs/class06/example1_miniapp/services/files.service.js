import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));


const filePath = (fileName) => join(__dirname, `../data/${fileName}`);
export async function readFile(path) {
 const arr = await fs.readFile(fileName)(filePath,'utf-8');
 const parsedArr = JSON.parse(arr);
 return parsedArr;
}

export async function writeFile(path, data) {
    const stringfiedData = JSON.stringify(data, null, 2);
    await fs.writeFile(path, stringfiedData);
}