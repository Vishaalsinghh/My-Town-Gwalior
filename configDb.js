const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_town'
});
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});
module.exports = connection;