
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
    return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Reliable fallback
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
  
  // Map categories to carefully selected images that accurately represent each dish type
  switch (category) {
    case 'breakfast':
      return 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop'; // Avocado toast
    case 'lunch':
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Healthy lunch bowl
    case 'dinner':
      return 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop'; // Steak dinner
    case 'dessert':
      return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop'; // Chocolate cake
    case 'comfort':
      return 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&auto=format&fit=crop'; // Mac and cheese
    case 'quick':
      return 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop'; // Quick sandwich
    case 'snack':
      return 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&auto=format&fit=crop'; // Popcorn
    case 'drink':
      return 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop'; // Colorful smoothie
    case 'vegan':
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Vegan bowl
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&auto=format&fit=crop'; // Bruschetta appetizer
    case 'italian':
      return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop'; // Authentic pizza
    case 'mexican':
      return 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop'; // Authentic tacos
    case 'asian':
      return 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop'; // Authentic ramen
    case 'mediterranean':
      return 'https://images.unsplash.com/photo-1594671676120-4e333282a5f9?w=800&auto=format&fit=crop'; // Mediterranean platter
    case 'healthy':
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Healthy colorful bowl
    case 'spicy':
      return 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop'; // Spicy noodles
    case 'sweet':
      return 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop'; // Sweet fruit bowl
    case 'exotic':
      return 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop'; // Dragon fruit and tropical fruits
    default:
      // For unknown categories, return a reliable general food image
      return 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop'; // Beautiful food plating
  }
};
