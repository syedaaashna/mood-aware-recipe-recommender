
import { Recipe } from '@/types/recipe';
import { moods } from '@/utils/moodRecipeData';

export const recipes: { [key: string]: Recipe[] } = {};

// Initialize empty recipe arrays for each mood
moods.forEach(mood => {
  recipes[mood.id] = [];
});

export default recipes;
