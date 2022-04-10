const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
if (process.env.DATABASE_URL){
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  }) 
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: process.env.DB_PORT,
      }
    );
   
}

module.exports = sequelize;
