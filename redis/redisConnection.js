const Redis = require("ioredis");
const logger = console;

const connectRedis = async (redisUri, redisPort) => {
  // reuse existing connection
  if (!redisUri || !redisPort) throw new Error("redis credentials missing");

  return new Promise(function (resolve, reject) {
    try {
      const redisConnection = new Redis.Cluster(
        [
          {
            port: redisPort,
            host: redisUri,
          },
        ]
      );

      redisConnection.on("connect", () => {
        console.log("redis connected");
      })

      redisConnection.on("ready", () => {
        console.log("redis connected");
        resolve(redisConnection);
      });

      redisConnection.on("error", (err) => {
        // FIXME: on redis error reconnect
        // reject(err);
        logger.error(
          `redis connection failed, status: ${redisConnection.status}`
        );
      });
    } catch (err) {
      reject(err);
      logger.error("Redis Connection Error: ", err);
    }
  });
};

module.exports = connectRedis;
