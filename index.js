const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const { DB_USERNAME, DB_PASSWORD } = require("./environment");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@main-db.pv93n.mongodb.net/main-db?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Recipe = require("./models/Recipe");

app.post("/recipe/new", (req, res) => {
  console.log("CALLED");
  const recipe = new Recipe({
    name: req.body.name,
    serves: req.body.serves,
    getStarted: req.body.getStarted,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });

  recipe.save();

  res.json(recipe);
});

app.listen(3001, () => console.log("Server started on port 3001."));
