require("dotenv").config();
const express = require("express");
const path = require("path");
const {connectToDatabase, Words, addWord} = require("./db.js");
const db = require("./db.js");


const app = express();

// connect to mongoDB
db.connectToDatabase();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/words', (req, res) => {
  // console.log(req.body);
  const word = req.body.word;
  const definition = req.body.definition;
  // console.log(word)
  // console.log(definition)
  addWord([{word, definition}]);
  res.end();
})


app.get('/words', (req, res) => {
  Words.find()
    .then((data) => {
      res.send(data);
    })
})

app.delete('/words', (req, res) => {
  Words.deleteOne({word: req.body.word});
  res.end();
})


//process.env.PORT: a port number provided as an environment variable, otherwise port 3000
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
