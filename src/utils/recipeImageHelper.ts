import recipeImageMapping from './recipeImageMapping';

/**
 * Gets the correct image path for a recipe, handling cases where the image
 * might not be found in the mapping
 */
export const getRecipeImagePath = (imageKey: string): string => {
  // If the image key exists in the mapping, return that path
  if (imageKey in recipeImageMapping) {
    return recipeImageMapping[imageKey];
  }
  
  // Otherwise, return the default image
  console.warn(`Image key "${imageKey}" not found in mapping, using default image`);
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
