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
    
    // If nothing matches, return the default image
    console.warn(`No suitable image found for "${imageKey}", using default image`);
    return '/placeholder.svg'; // Use public folder placeholder image
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    return '/placeholder.svg';
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
  
  // Map categories to general image types
  switch (category) {
    case 'breakfast':
      return '/images/breakfast-default.jpg';
    case 'lunch':
      return '/images/lunch-default.jpg';
    case 'dinner':
      return '/images/dinner-default.jpg';
    case 'dessert':
      return '/images/dessert-default.jpg';
    case 'comfort':
      return '/images/comfort-default.jpg';
    case 'quick':
      return '/images/quick-default.jpg';
    case 'snack':
      return '/images/snack-default.jpg';
    case 'drink':
      return '/images/drink-default.jpg';
    case 'vegan':
      return '/images/vegan-default.jpg';
    case 'appetizer':
      return '/images/appetizer-default.jpg';
    default:
      return '/placeholder.svg';
  }
};
