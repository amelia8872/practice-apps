require("dotenv").config();
const express = require("express");
const path = require("path");
const {connectToDatabase, Words, addWord,deleteWord,updateWord} = require("./db.js");
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

app.get('/search/:query', (req, res) => {
  const searchQuery = req.params.query;
  console.log(searchQuery);
  Words.find({word: req.params.query})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('Error searching words:', err);
      res.status(500).send('Internal server error');
    });
})

app.delete('/words/:id', (req, res) => {
  const id = req.params.id;

  deleteWord(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).send('Error deleting word');
    });
})

app.put('/words/:id', (req, res) => {
  console.log(req.body);
  const id = req.params.id;

  updateWord(id, req.body)
  .then(() => {
    res.status(204).end();
  })
  .catch((err) => {
    res.status(500).send('Error updating word');
  });

})


//process.env.PORT: a port number provided as an environment variable, otherwise port 3000
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
