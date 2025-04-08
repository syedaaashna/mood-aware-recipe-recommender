
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
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop', // comfort
      'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop', // breakfast
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // lunch
      'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop', // dinner
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop'  // dessert
    ];
    
    const randomIndex = Math.floor(Math.random() * foodImages.length);
    console.log(`Using random image for ${imageKey}`);
    return foodImages[randomIndex];
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    return 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop'; // Fallback to a reliable image
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
      return 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop';
    case 'lunch':
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
    case 'dinner':
      return 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop';
    case 'dessert':
      return 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop';
    case 'comfort':
      return 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop';
    case 'quick':
      return 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop';
    case 'snack':
      return 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop';
    case 'drink':
      return 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop';
    case 'vegan':
      return 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&auto=format&fit=crop';
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop';
  }
};
