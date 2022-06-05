import mongoose from 'mongoose';

async function initDB(uri, database) {
  let conn = null;
  return new Promise(function (resolve, reject) {
    console.log(`${uri}/${database}`);
    if (!conn) {
      conn = mongoose.createConnection(`${uri}/${database}`);
    }

    // if (config.env === 'development') {
    //   mongoose.set('debug', true);
    // }

    conn.on('error', (err) => {
      reject(err);
    });

    conn.on('open', () => {
      resolve(conn);
    });

    conn.once('open', () => {
      console.info('Connected to MongoDB');
    });
  });
}
export {
  initDB
}