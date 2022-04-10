const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  (process.env.DB_NAME||'heroku_9e5f34d61cc7968'),
  (process.env.DB_USER||'b96b8e82fbeac3'),
  (process.env.DB_PASSWORD||'30ee3ab5'),
  {
    host: ('localhost'||'us-cdbr-east-05.cleardb.net'),
    dialect: 'mysql',
    port: (process.env.DB_PORT||'process.env.PORT'),
  }
);

module.exports = sequelize;

// * b96b8e82fbeac3: username
// * 30ee3ab5: password
// * us-cdbr-east-05.cleardb.net: host
// * heroku_9e5f34d61cc7968: database