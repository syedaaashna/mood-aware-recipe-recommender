
import { Recipe } from '@/utils/moodRecipeData';

// Import all images
import breakfast1 from '@/assets/images/recipes/breakfast1.jpg';
import breakfast2 from '@/assets/images/recipes/breakfast2.jpg';
import lunch1 from '@/assets/images/recipes/lunch1.jpg';
import dinner1 from '@/assets/images/recipes/dinner1.jpg';
import dessert1 from '@/assets/images/recipes/dessert1.jpg';
import snack1 from '@/assets/images/recipes/snack1.jpg';
import healthy1 from '@/assets/images/recipes/healthy1.jpg';
import comfort1 from '@/assets/images/recipes/comfort1.jpg';
import vegan1 from '@/assets/images/recipes/vegan1.jpg';
import quick1 from '@/assets/images/recipes/quick1.jpg';

// Fallback images
const FOOD_FALLBACKS = [
  breakfast1,
  lunch1,
  dinner1,
  dessert1,
  snack1,
  healthy1,
  comfort1,
  vegan1,
  quick1
];

// Map to store recipe category to image associations
const categoryImageMap: Record<string, string[]> = {
  'breakfast': [breakfast1, breakfast2],
  'lunch': [lunch1],
  'dinner': [dinner1],
  'dessert': [dessert1],
  'snack': [snack1],
  'healthy': [healthy1],
  'comfort food': [comfort1],
  'vegan': [vegan1],
  'quick': [quick1]
};

/**
 * Get a deterministic image for a recipe based on its ID and tags
 */
export const getRecipeImage = (recipe: Recipe): string => {
  // Try to match the recipe to a category based on tags
  for (const tag of recipe.tags) {
    const lowercaseTag = tag.toLowerCase();
    for (const category in categoryImageMap) {
      if (lowercaseTag.includes(category)) {
        const images = categoryImageMap[category];
        // Use recipe ID to select a consistent image from the category
        const index = parseInt(recipe.id.toString()) % images.length;
        return images[index];
      }
    }
  }
  
  // If no tag matches, use recipe name to try to match categories
  const recipeName = recipe.name.toLowerCase();
  for (const category in categoryImageMap) {
    if (recipeName.includes(category)) {
      const images = categoryImageMap[category];
      const index = parseInt(recipe.id.toString()) % images.length;
      return images[index];
    }
  }
  
  // If no match found, use ID to consistently select a fallback
  const index = parseInt(recipe.id.toString()) % FOOD_FALLBACKS.length;
  return FOOD_FALLBACKS[index];
};

export default getRecipeImage;
