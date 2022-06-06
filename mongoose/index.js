// import { initDB } from "./mongoose.js";
// const conn = await initDB('mongodb://localhost:27017', 'test');
const mongoClient = require("./mongo.js");

(async function(){
    const client = await mongoClient.connect('mongodb://localhost:27017', 'test');
    const client2 = await mongoClient.connect('mongodb://localhost:27017', 'test');
    const client3 = await mongoClient.connect('mongodb://localhost:27017', 'test');
    const client4 = await mongoClient.connect('mongodb://localhost:27017', 'test');
    const client5 = await mongoClient.connect('mongodb://localhost:27017', 'test');
    const client6 = await mongoClient.connect('mongodb://localhost:27017', 'test');
    console.log(client);
    const db = client.db("test");
    db.collection('test');
    console.log(client.topology.isConnected());
})()



// // dirname alternative
// import * as url from 'url';
// import path from 'path';
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// console.log(__filename);
// console.log(__dirname)
// console.log(path.basename(__filename));

// console.log(conn.readyState);