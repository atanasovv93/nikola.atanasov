import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: [String],
    required: true
  },
  cookingTime: {
    type: Number
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard']
  },
  isVegetarian: {
    type: Boolean
  },
  category: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'dessert']
  }
}, {
  timestamps: true // автоматски креира createdAt и updatedAt полиња
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
