
import recipeImageMapping from './recipeImageMapping';

/**
 * Gets the correct image path for a recipe, handling cases where the image
 * might not be found in the mapping with better fallback mechanisms
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
    return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop'; // Reliable fallback
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
 * Improved with highly relevant images for each category
 */
export const getFallbackImage = (recipeId: string): string => {
  // Extract category from recipe ID (e.g., "comfort1" -> "comfort")
  const category = recipeId.replace(/[0-9]+$/, '').toLowerCase();
  
  // Map categories to carefully selected images that accurately represent each dish type
  switch (category) {
    case 'breakfast':
      return 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop'; // Avocado toast
    case 'lunch':
      return 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop'; // Healthy lunch bowl
    case 'dinner':
      return 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop'; // Steak dinner
    case 'dessert':
      return 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop'; // Chocolate cake
    case 'comfort':
      return 'https://images.unsplash.com/photo-1547414368-ac947d00b91d?w=800&auto=format&fit=crop'; // Mac and cheese
    case 'quick':
      return 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&auto=format&fit=crop'; // Quick sandwich
    case 'snack':
      return 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&auto=format&fit=crop'; // Popcorn
    case 'drink':
      return 'https://images.unsplash.com/photo-1588929473475-30f9e5a53b1b?w=800&auto=format&fit=crop'; // Colorful smoothie
    case 'vegan':
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Vegan bowl
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&auto=format&fit=crop'; // Bruschetta appetizer
    case 'italian':
      return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop'; // Authentic pizza
    case 'mexican':
      return 'https://images.unsplash.com/photo-1564767612318-3a1ea72d5da6?w=800&auto=format&fit=crop'; // Authentic tacos
    case 'asian':
      return 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop'; // Authentic ramen
    case 'mediterranean':
      return 'https://images.unsplash.com/photo-1544378730-8b5104b18790?w=800&auto=format&fit=crop'; // Mediterranean platter
    case 'healthy':
      return 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop'; // Healthy bowl
    case 'spicy':
      return 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop'; // Spicy noodles
    case 'sweet':
      return 'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800&auto=format&fit=crop'; // Sweet fruit bowl
    case 'exotic':
      return 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop'; // Dragon fruit
    default:
      // For unknown categories, return a reliable general food image
      return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop'; // Beautiful food plating
  }
};
