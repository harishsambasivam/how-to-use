


// const { Sequelize, DataTypes } = require('sequelize');
// require('dotenv').config();

// const { DB_USERNAME, DB_NAME, DB_PASSWORD, DB_HOST } = process.env;
// const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: 'postgres'
// });

// const db = {};

// const UserModel = sequelize.define('User', {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
//       // allowNull defaults to true
//     }
//   }, {
//     // Other model options go here
//   });

// db[UserModel.name] = UserModel;

// console.log(db);


const promiseA = new Promise(function(resolve,reject) {
    setTimeout(function(){
      resolve("hello world");
    },2000)
});

(async function(){
  const data = await promiseA;
  console.log(data);
}());

const {name} = require("./dbConfig");

