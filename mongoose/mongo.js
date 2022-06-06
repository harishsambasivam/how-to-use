const { MongoClient } = require('mongodb');

function mongoClient() {
    let client = null;
    function connect(uri){
      if(client) return client;
      console.log("connecting............")
      promise = new Promise(
        function (resolve, reject) {
           MongoClient.connect(uri, function (err,client) {
            if (err) {
              console.log('Unable to connect to the mongoDB server. Error:', err);
              reject(err);
            }
            else {
              console.log('Connection established to', uri);
              resolve(client);
            }
          });
        }
      );
    }
    return {
      connect
    }
  }


  

  module.exports = mongoClient();