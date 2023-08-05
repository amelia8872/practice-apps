const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255), email varchar(255), password varchar(255), address_line1 varchar(255), address_line2 varchar(255), city varchar(255), state varchar(255), zipcode varchar(255), phone_number varchar(255), creditcard int, expirydate int, cvv int, billingzip int)"
  ))
  .catch((err) => console.log(err));

module.exports = db;
