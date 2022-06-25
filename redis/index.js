const connectRedis = require("./redisConnection");
require("dotenv").config();
const { REDIS_URI,REDIS_PORT } = process.env;


async function connectCache() {
    try {
        console.log("connecting");
        console.log(await connectRedis(REDIS_URI, REDIS_PORT));
    } catch (err) {
        console.log(err)
    }
}

connectCache();

