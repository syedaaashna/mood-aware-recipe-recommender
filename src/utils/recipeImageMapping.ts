
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

// Additional images for categories
import breakfast3 from '@/assets/images/recipes/breakfast3.jpg';
import breakfast4 from '@/assets/images/recipes/breakfast4.jpg';
import lunch2 from '@/assets/images/recipes/lunch2.jpg';
import lunch3 from '@/assets/images/recipes/lunch3.jpg';
import dinner2 from '@/assets/images/recipes/dinner2.jpg';
import dinner3 from '@/assets/images/recipes/dinner3.jpg';
import dessert2 from '@/assets/images/recipes/dessert2.jpg';
import dessert3 from '@/assets/images/recipes/dessert3.jpg';
import snack2 from '@/assets/images/recipes/snack2.jpg';
import snack3 from '@/assets/images/recipes/snack3.jpg';
import healthy2 from '@/assets/images/recipes/healthy2.jpg';
import healthy3 from '@/assets/images/recipes/healthy3.jpg';
import comfort2 from '@/assets/images/recipes/comfort2.jpg';
import comfort3 from '@/assets/images/recipes/comfort3.jpg';
import vegan2 from '@/assets/images/recipes/vegan2.jpg';
import vegan3 from '@/assets/images/recipes/vegan3.jpg';
import quick2 from '@/assets/images/recipes/quick2.jpg';
import quick3 from '@/assets/images/recipes/quick3.jpg';
import spicy1 from '@/assets/images/recipes/spicy1.jpg';
import spicy2 from '@/assets/images/recipes/spicy2.jpg';
import sweet1 from '@/assets/images/recipes/sweet1.jpg';
import sweet2 from '@/assets/images/recipes/sweet2.jpg';
import exotic1 from '@/assets/images/recipes/exotic1.jpg';
import exotic2 from '@/assets/images/recipes/exotic2.jpg';
import italian1 from '@/assets/images/recipes/italian1.jpg';
import italian2 from '@/assets/images/recipes/italian2.jpg';
import mexican1 from '@/assets/images/recipes/mexican1.jpg';
import mexican2 from '@/assets/images/recipes/mexican2.jpg';
import asian1 from '@/assets/images/recipes/asian1.jpg';
import asian2 from '@/assets/images/recipes/asian2.jpg';
import mediterranean1 from '@/assets/images/recipes/mediterranean1.jpg';
import mediterranean2 from '@/assets/images/recipes/mediterranean2.jpg';

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
  quick1,
  spicy1,
  sweet1,
  exotic1,
  italian1,
  mexican1,
  asian1,
  mediterranean1
];

// Map to store recipe category to image associations
const categoryImageMap: Record<string, string[]> = {
  'breakfast': [breakfast1, breakfast2, breakfast3, breakfast4],
  'lunch': [lunch1, lunch2, lunch3],
  'dinner': [dinner1, dinner2, dinner3],
  'dessert': [dessert1, dessert2, dessert3],
  'snack': [snack1, snack2, snack3],
  'healthy': [healthy1, healthy2, healthy3],
  'comfort food': [comfort1, comfort2, comfort3],
  'vegan': [vegan1, vegan2, vegan3],
  'quick': [quick1, quick2, quick3],
  'spicy': [spicy1, spicy2],
  'sweet': [sweet1, sweet2],
  'exotic': [exotic1, exotic2],
  'italian': [italian1, italian2],
  'mexican': [mexican1, mexican2],
  'asian': [asian1, asian2],
  'mediterranean': [mediterranean1, mediterranean2]
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
