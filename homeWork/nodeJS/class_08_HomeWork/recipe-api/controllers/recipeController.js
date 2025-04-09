import Recipe from '../models/Recipe.js';

// GET all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const filter = {};
    if (req.query.difficulty) {
      filter.difficulty = req.query.difficulty;
    }
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const recipes = await Recipe.find(filter);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single recipe
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create recipe
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update recipe
export const updateRecipe = async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE recipe
export const deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET by category
export const getRecipesByCategory = async (req, res) => {
    try {
      const { category } = req.params; // Овде ја земате категоријата од параметрите
      const recipes = await Recipe.find({ category: category });
      if (!recipes || recipes.length === 0) {
        return res.status(404).json({ message: 'No recipes found for this category.' });
      }
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // SEARCH by title
// SEARCH by title
export const searchRecipesByTitle = async (req, res) => {
    try {
      const { title } = req.query; // зема наслов од query параметрите
      if (!title) {
        return res.status(400).json({ message: "Title query parameter is required." });
      }
      const regex = new RegExp(title, 'i'); // прави пребарување без разлика на големина на буквите
      const recipes = await Recipe.find({ title: regex }); // Проверете дали полето се вика title во вашиот модел
  
      if (!recipes || recipes.length === 0) {
        return res.status(404).json({ message: 'No recipes found with this title.' });
      }
  
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
