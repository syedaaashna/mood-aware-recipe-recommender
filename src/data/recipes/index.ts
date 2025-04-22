
import { Recipe } from '@/types/recipe';
import { comfortingRecipes } from './comforting';
// ... we'll add more recipe imports as we create them

export const getAllRecipes = (): Recipe[] => {
  return [
    ...comfortingRecipes,
    // ... we'll add more recipe collections here
  ];
};

export const getRecipeById = (id: string): Recipe | null => {
  const allRecipes = getAllRecipes();
  return allRecipes.find(recipe => recipe.id === id) || null;
};

export const getRecipesByMood = (moodId: string): Recipe[] => {
  return getAllRecipes().filter(recipe => recipe.mood === moodId);
};

export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const targetRecipe = getRecipeById(recipeId);
  
  if (!targetRecipe) {
    return [];
  }
  
  const allRecipes = getAllRecipes().filter(recipe => recipe.id !== recipeId);
  
  // Sort recipes by tag similarity
  const sortedRecipes = allRecipes.sort((a, b) => {
    const aTagMatches = a.tags.filter(tag => targetRecipe.tags.includes(tag)).length;
    const bTagMatches = b.tags.filter(tag => targetRecipe.tags.includes(tag)).length;
    
    return bTagMatches - aTagMatches;
  });
  
  return sortedRecipes.slice(0, limit);
};
