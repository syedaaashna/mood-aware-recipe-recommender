import recipeImageMapping from './recipeImageMapping';

/**
 * Gets the correct image path for a recipe, handling cases where the image
 * might not be found in the mapping
 */
export const getRecipeImagePath = (imageKey: string): string => {
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
  return recipeImageMapping['default'];
};

/**
 * Extract the filename from a recipe image path
 */
export const getImageFilename = (path: string): string => {
  if (!path) return 'default.jpg';
  const parts = path.split('/');
  return parts[parts.length - 1];
};
