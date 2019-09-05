// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    // Check if the JAWSDB_URL is set on the Heroku Config, if it is, then create a connection to that
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log("you are on heroku and using the JAWS_DB url")
}
// if not, then create a connection to the local database
else {
    console.log("you are developing on local");
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
}

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;