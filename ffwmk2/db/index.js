const mysqlp = require('mysql-promise')();
const connection = mysqlp(process.env.DATABASE_URL);

module.exports = connection;