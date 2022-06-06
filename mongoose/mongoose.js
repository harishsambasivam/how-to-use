const mongoose = require('mongoose');

async function initDB(uri, database) {
  let connection = null;
  return new Promise(function (resolve, reject) {

    if (!connection) {
      connection = mongoose.createConnection(`${uri}/${database}`);
    }
    
    connection.on('error', (err) => {
      reject(err);
    });

    connection.on('open', () => {
      resolve(connection);
    });

    connection.once('open', () => {
      console.info('Connected to MongoDB');
    });
  });
}
export {
  initDB
}