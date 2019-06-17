var mysql = require('mysql');

var database = 'dados191n';

var client = mysql.createConnection({
    user: 'root',
    password: 'jms21997',
    host: 'localhost',
    port: 3306
})

client.query('use ' + database);

module.exports = client;