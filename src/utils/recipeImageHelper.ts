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
    return 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop';
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
      return 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop'; // Breakfast spread
    case 'lunch':
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'; // Lunch bowl
    case 'dinner':
      return 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop'; // Dinner plate
    case 'dessert':
      return 'https://images.unsplash.com/photo-1551529834-525807d6b4f3?w=800&auto=format&fit=crop'; // Chocolate cake
    case 'comfort':
      return 'https://images.unsplash.com/photo-1543339520-51ebf2897090?w=800&auto=format&fit=crop'; // Mac and cheese
    case 'quick':
      return 'https://images.unsplash.com/photo-1603046891249-70088f7cae2f?w=800&auto=format&fit=crop'; // Quick sandwich
    case 'snack':
      return 'https://images.unsplash.com/photo-1575576941698-03e072cec81d?w=800&auto=format&fit=crop'; // Popcorn
    case 'drink':
      return 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&auto=format&fit=crop'; // Colorful smoothie
    case 'vegan':
      return 'https://images.unsplash.com/photo-1546693951-b13c0abf92e7?w=800&auto=format&fit=crop'; // Vegan bowl
    case 'appetizer':
      return 'https://images.unsplash.com/photo-1662487034139-71c4ea17415a?w=800&auto=format&fit=crop'; // Bruschetta
    case 'italian':
      return 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop'; // Pizza
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
      return 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?w=800&auto=format&fit=crop'; // Sweet fruit bowl
    case 'exotic':
      return 'https://images.unsplash.com/photo-1551445523-324a0fdab051?w=800&auto=format&fit=crop'; // Dragon fruit
    default:
      // For unknown categories, return a high-quality food image
      return 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop';
  }
};
