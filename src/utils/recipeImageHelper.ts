
import recipeImageMapping from './recipeImageMapping';

/**
 * Gets the correct image path for a recipe, handling cases where the image
 * might not be found in the mapping
 */
export const getRecipeImagePath = (imageKey: string): string => {
  try {
    // First try to match the exact recipe ID
    if (imageKey in recipeImageMapping) {
      return recipeImageMapping[imageKey];
    }
    
    // Otherwise, for recipe IDs not in the mapping, try to find an image 
    // that starts with the same prefix from the recipe ID
    const prefix = imageKey.replace(/[0-9]+$/, '');
    const allKeys = Object.keys(recipeImageMapping);
    const matchingKey = allKeys.find(key => key.startsWith(prefix));
    
    if (matchingKey) {
      console.log(`Using similar image ${matchingKey} for recipe ${imageKey}`);
      return recipeImageMapping[matchingKey];
    }
    
    // If nothing matches, choose a random food image from our collection
    const foodImages = [
      '/src/assets/images/recipes/comfort1.jpg',
      '/src/assets/images/recipes/breakfast1.jpg',
      '/src/assets/images/recipes/lunch1.jpg',
      '/src/assets/images/recipes/dinner1.jpg',
      '/src/assets/images/recipes/dessert1.jpg'
    ];
    
    const randomIndex = Math.floor(Math.random() * foodImages.length);
    console.log(`Using random image for ${imageKey}`);
    return foodImages[randomIndex];
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    return '/src/assets/images/recipes/comfort1.jpg'; // Fallback to a reliable image
  }
};

/**
 * Extract the filename from a recipe image path
 */
export const getImageFilename = (path: string): string => {
  if (!path) return 'default.jpg';
  const parts = path.split('/');
  return parts[parts.length - 1];
};

/**
 * Get a fallback image URL based on the recipe type/category
 */
export const getFallbackImage = (recipeId: string): string => {
  // Extract category from recipe ID (e.g., "comfort1" -> "comfort")
  const category = recipeId.replace(/[0-9]+$/, '');
  
  // Map categories to reliable image paths
  switch (category) {
    case 'breakfast':
      return '/src/assets/images/recipes/breakfast1.jpg';
    case 'lunch':
      return '/src/assets/images/recipes/lunch1.jpg';
    case 'dinner':
      return '/src/assets/images/recipes/dinner1.jpg';
    case 'dessert':
      return '/src/assets/images/recipes/dessert1.jpg';
    case 'comfort':
      return '/src/assets/images/recipes/comfort1.jpg';
    case 'quick':
      return '/src/assets/images/recipes/quick1.jpg';
    case 'snack':
      return '/src/assets/images/recipes/snack1.jpg';
    case 'drink':
      return '/src/assets/images/recipes/dessert2.jpg'; // Fallback to dessert2
    case 'vegan':
      return '/src/assets/images/recipes/vegan1.jpg';
    case 'appetizer':
      return '/src/assets/images/recipes/lunch1.jpg'; // Fallback to lunch1
    default:
      return '/src/assets/images/recipes/comfort1.jpg'; // Default to comfort1
  }
};
