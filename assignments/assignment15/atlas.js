const mongoose = require("mongoose");

//testdb is name of database, it will automatically make it
mongoose
  .connect("mongodb://localhost/recipes")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect ot mongodb...", err));

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

const createRecipe = async () => {
    const recipe = new Recipe({
        name: "Banana Bread",
        description: "so yummy",
        ingredients: ["bananas", "flour", "sugar", "money"]
    });

    const result = await recipe.save();
    console.log(result);
};

createRecipe();