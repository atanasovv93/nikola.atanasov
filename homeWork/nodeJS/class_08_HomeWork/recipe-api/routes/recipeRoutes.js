import express from 'express';
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe, getRecipesByCategory, searchRecipesByTitle } from '../controllers/recipeController.js';

const router = express.Router();

// CRUD operations
router.get('/', getAllRecipes); // Проверете дали оваа рута е правилно дефинирана
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

// Нови рути за пребарување по категорија и наслов
router.get('/category/:category', getRecipesByCategory); // Пребарувај по категорија
router.get('/search/title', searchRecipesByTitle); // Пребарувај по наслов

export default router;
