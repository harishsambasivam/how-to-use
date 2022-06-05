import { initDB } from "./mongo.js";
const conn =  await initDB('mongodb://localhost:27017','test');

// dirname alternative
import * as url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log(__filename);
console.log(__dirname)
console.log(path.basename(__filename));

console.log(conn.readyState);