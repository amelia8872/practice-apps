const mongoose = require("mongoose");


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const connectToDatabase = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect('mongodb://localhost/glossary', options)
    .then(()=> {
      console.log('Connected to MongoDB');

    })
    .catch((err) => {
      console.log('Error connecting to MongoDB:', err);
    });

}


let wordsSchema = mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
})

//Create a mongoose model based on wordsSchema
let Words = mongoose.model('Words', wordsSchema);

// Save the words into the database
let addWord = (words) => {
  return Words.insertMany(words);
}

// Delete
let deleteWord = (id) => {
  console.log(id);
  return Words.findOneAndRemove({_id: id}).exec();
}

let updateWord = (id, newWordObj) => {
  return Words.findOneAndUpdate({_id: id}, newWordObj, {new: true});

}


module.exports.Words = Words;
module.exports.connectToDatabase = connectToDatabase;
module.exports.addWord = addWord;
module.exports.deleteWord = deleteWord;
module.exports.updateWord = updateWord;

