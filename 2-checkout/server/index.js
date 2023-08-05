require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
// const form1controller = require('./controllers/form1controller');
// const form2controller = require('./controllers/form2controller');
// const form3controller = require('./controllers/form3controller');

// Establishes connection to the database on server start
const db = require("./db");
const {create} = require("./db");


const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
// console.log(path.join(__dirname, '../client/dist'));
// console.log(__dirname);
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/api/checkout', (req, res) => {
  console.log('req.body from server',req.body);
  create(req.body)
    .then((res) => {
      console.log('res after request', res);
    })
    .catch((err) => {
      console.log(err)
    })

})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
