const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  ('heroku_9e5f34d61cc7968'||process.env.DB_NAME),
  ('b96b8e82fbeac3'||process.env.DB_USER),
  ('30ee3ab5'||process.env.DB_PASSWORD),
  {
    host: ('us-cdbr-east-05.cleardb.net'||'localhost'),
    dialect: 'mysql',
    port: (process.env.PORT||process.env.DB_PORT),
  }
);

module.exports = sequelize;

// * b96b8e82fbeac3: username
// * 30ee3ab5: password
// * us-cdbr-east-05.cleardb.net: host
// * heroku_9e5f34d61cc7968: database