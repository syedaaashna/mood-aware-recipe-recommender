
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
    
    // If nothing matches, choose a food image based on what we might know from the prefix
    return getFallbackImage(imageKey);
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    return 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop'; // Reliable fallback
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
  const category = recipeId.replace(/[0-9]+$/, '').toLowerCase();
  
  // Map categories to accurate image paths for each dish type
  switch (category) {
    case 'breakfast':
      return 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop'; // Breakfast bowl
    case 'lunch':
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Lunch salad
    case 'dinner':
      return 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop'; // Dinner plate
    case 'dessert':
      return 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop'; // Dessert cake
    case 'comfort':
      return 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop'; // Comfort food
    case 'quick':
      return 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop'; // Quick meal
    case 'snack':
      return 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop'; // Snack bowl
    case 'drink':
      return 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop'; // Smoothie
    case 'vegan':
      return 'https://images.unsplash.com/photo-1583224874248-9d7e72f74e20?w=800&auto=format&fit=crop'; // Vegan bowl
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1626516002742-46d8a1677ade?w=800&auto=format&fit=crop'; // Appetizer platter
    case 'italian':
      return 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&auto=format&fit=crop'; // Italian pizza
    case 'mexican':
      return 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&auto=format&fit=crop'; // Mexican tacos
    case 'asian':
      return 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=800&auto=format&fit=crop'; // Asian ramen
    case 'mediterranean':
      return 'https://images.unsplash.com/photo-1594671676120-4e333282a5f9?w=800&auto=format&fit=crop'; // Mediterranean platter
    case 'healthy':
      return 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop'; // Healthy bowl
    case 'spicy':
      return 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop'; // Spicy dish
    case 'sweet':
      return 'https://images.unsplash.com/photo-1562176566-e9afd27531d2?w=800&auto=format&fit=crop'; // Sweet pastry
    case 'exotic':
      return 'https://images.unsplash.com/photo-1563590656268-5c41997321a6?w=800&auto=format&fit=crop'; // Exotic fruits
    default:
      // For unknown categories, return a reliable general food image
      return 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800&auto=format&fit=crop';
  }
};
