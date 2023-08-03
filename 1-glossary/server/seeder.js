const mongoose = require("mongoose");
const {connectToDatabase, Words} = require("./db.js");

const initialData = [
  {
    word: "ReactJS",
    definition: "React is currently the most popular javascript front-end framework.",
  },
  {
    word: "Angular",
    definition: "A component-based framework for building scalable web applications.",
  }
];

const seedDatabase = async () => {
  try {
    await connectToDatabase();
    await Words.insertMany(initialData);

    console.log("Database seeded! :)");
  } catch (err) {
    console.log(err);
  }

}

seedDatabase();

module.exports = {seedDatabase};

