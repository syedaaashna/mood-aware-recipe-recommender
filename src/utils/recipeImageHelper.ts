
import recipeImageMapping from './recipeImageMapping';

/**
 * Gets the correct image path for a recipe, with improved handling of
 * image loading and fallback mechanisms for greater reliability
 */
export const getRecipeImagePath = (imageKey: string): string => {
  try {
    console.log(`Finding image for recipe: ${imageKey}`);
    
    // First try to match the exact recipe ID
    if (imageKey in recipeImageMapping) {
      const imagePath = recipeImageMapping[imageKey];
      console.log(`Found exact match for ${imageKey}: ${imagePath}`);
      return imagePath;
    }
    
    // Otherwise, for recipe IDs not in the mapping, try to find an image 
    // that starts with the same prefix from the recipe ID
    const prefix = imageKey.replace(/[0-9]+$/, '');
    const allKeys = Object.keys(recipeImageMapping);
    const matchingKey = allKeys.find(key => key.startsWith(prefix));
    
    if (matchingKey) {
      console.log(`Using similar image ${matchingKey} for recipe ${imageKey}: ${recipeImageMapping[matchingKey]}`);
      return recipeImageMapping[matchingKey];
    }
    
    // If nothing matches, choose a food image based on category
    const fallbackImage = getFallbackImage(imageKey);
    console.log(`No match found for ${imageKey}, using fallback: ${fallbackImage}`);
    return fallbackImage;
  } catch (error) {
    console.error('Error in getRecipeImagePath:', error);
    // Use a highly reliable default image as last resort
    return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop';
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
 * Using reliable, high-quality images that accurately represent each dish type
 */
export const getFallbackImage = (recipeId: string): string => {
  // Extract category from recipe ID (e.g., "comfort1" -> "comfort")
  const category = recipeId.replace(/[0-9]+$/, '').toLowerCase();
  
  // Map categories to carefully selected images
  switch (category) {
    case 'breakfast':
      return 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop'; // Pancakes
    case 'lunch':
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Lunch bowl
    case 'dinner':
      return 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop'; // Steak dinner
    case 'dessert':
      return 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop'; // Chocolate cake
    case 'comfort':
      return 'https://images.unsplash.com/photo-1543339520-51ebf2897090?w=800&auto=format&fit=crop'; // Mac and cheese
    case 'quick':
      return 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&auto=format&fit=crop'; // Quick sandwich
    case 'snack':
      return 'https://images.unsplash.com/photo-1575576941698-03e072cec81d?w=800&auto=format&fit=crop'; // Popcorn
    case 'drink':
      return 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&auto=format&fit=crop'; // Colorful smoothie
    case 'vegan':
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Vegan bowl
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1626200758640-6b843464e41f?w=800&auto=format&fit=crop'; // Bruschetta
    case 'italian':
      return 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop'; // Spaghetti
    case 'mexican':
      return 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop'; // Tacos
    case 'asian':
      return 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop'; // Ramen
    case 'mediterranean':
      return 'https://images.unsplash.com/photo-1544250634-d6dc0e4ca7dd?w=800&auto=format&fit=crop'; // Mediterranean platter
    case 'healthy':
      return 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop'; // Healthy bowl
    case 'spicy':
      return 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&auto=format&fit=crop'; // Spicy noodles
    case 'sweet':
      return 'https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800&auto=format&fit=crop'; // Sweet fruit bowl
    case 'exotic':
      return 'https://images.unsplash.com/photo-1551445523-324a0fdab051?w=800&auto=format&fit=crop'; // Dragon fruit
    default:
      // For unknown categories, return a high-quality food image
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'; // Pasta dish
  }
};
