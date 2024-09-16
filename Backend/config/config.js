require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  // "production": {
  //   "username": process.env.PROD_DB_USERNAME,
  //   "password": process.env.PROD_DB_PASSWORD,
  //   "database": process.env.PROD_DB_DATABASE,
  //   "host": process.env.PROD_DB_HOST,  // Typically a remote host or cloud service
  //   "dialect": "postgres"
  // }
};
