const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  serves: {
    type: Number,
    default: 0,
  },
  getStarted: {
    type: String,
    default: "",
  },
  ingredients: [
    {
      name: {
        type: String,
        default: "",
      },
      quantity: {
        type: Number,
        default: 0,
      },
      unitOfMeasurement: {
        type: String,
        default: "unit",
      },
    },
  ],
  instructions: {
    type: String,
    default: "",
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
