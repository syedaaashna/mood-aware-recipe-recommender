
import { Recipe } from '@/types/recipe';
import { recipesData } from '@/data/recipes/index';

export const getAllRecipes = (): Recipe[] => {
  const allRecipes: Recipe[] = [];
  
  // Fix the iterator issue by making sure we're iterating over an array
  Object.values(recipesData).forEach(categoryRecipes => {
    if (Array.isArray(categoryRecipes)) {
      allRecipes.push(...categoryRecipes);
    }
  });
  
  return allRecipes;
};

export const getRecipeById = (id: string): Recipe | null => {
  const allRecipes = getAllRecipes();
  return allRecipes.find(recipe => recipe.id === id) || null;
};

export const getRecipesByMood = (moodId: string): Recipe[] => {
  return getAllRecipes().filter(recipe => recipe.mood === moodId);
};

export const searchRecipes = (query: string): Recipe[] => {
  const searchTerm = query.toLowerCase();
  return getAllRecipes().filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const targetRecipe = getRecipeById(recipeId);
  
  if (!targetRecipe) {
    return [];
  }
  
  const allRecipes = getAllRecipes().filter(recipe => recipe.id !== recipeId);
  
  return allRecipes
    .sort((a, b) => {
      const aTagMatches = a.tags.filter(tag => targetRecipe.tags.includes(tag)).length;
      const bTagMatches = b.tags.filter(tag => targetRecipe.tags.includes(tag)).length;
      return bTagMatches - aTagMatches;
    })
    .slice(0, limit);
};
