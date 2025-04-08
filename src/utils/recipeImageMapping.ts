
// Map recipe image names to actual image paths
// Using direct paths to src/assets/images/recipes folder
const recipeImageMapping: Record<string, string> = {
  // Comfort food
  'comfort1': '/src/assets/images/recipes/comfort1.jpg',
  'comfort2': '/src/assets/images/recipes/comfort2.jpg',
  'comfort3': '/src/assets/images/recipes/comfort3.jpg',
  
  // Breakfast
  'breakfast1': '/src/assets/images/recipes/breakfast1.jpg',
  'breakfast2': '/src/assets/images/recipes/breakfast2.jpg',
  'breakfast3': '/src/assets/images/recipes/breakfast3.jpg',
  'breakfast4': '/src/assets/images/recipes/breakfast4.jpg',
  
  // Lunch
  'lunch1': '/src/assets/images/recipes/lunch1.jpg',
  'lunch2': '/src/assets/images/recipes/lunch2.jpg',
  'lunch3': '/src/assets/images/recipes/lunch3.jpg',
  
  // Dinner
  'dinner1': '/src/assets/images/recipes/dinner1.jpg',
  'dinner2': '/src/assets/images/recipes/dinner2.jpg',
  'dinner3': '/src/assets/images/recipes/dinner3.jpg',
  
  // Dessert
  'dessert1': '/src/assets/images/recipes/dessert1.jpg',
  'dessert2': '/src/assets/images/recipes/dessert2.jpg',
  'dessert3': '/src/assets/images/recipes/dessert3.jpg',
  
  // Quick
  'quick1': '/src/assets/images/recipes/quick1.jpg',
  'quick2': '/src/assets/images/recipes/quick2.jpg',
  'quick3': '/src/assets/images/recipes/quick3.jpg',
  
  // Snack
  'snack1': '/src/assets/images/recipes/snack1.jpg',
  'snack2': '/src/assets/images/recipes/snack2.jpg',
  'snack3': '/src/assets/images/recipes/snack3.jpg',
  
  // Ethnic
  'italian1': '/src/assets/images/recipes/italian1.jpg',
  'italian2': '/src/assets/images/recipes/italian2.jpg',
  'mexican1': '/src/assets/images/recipes/mexican1.jpg',
  'mexican2': '/src/assets/images/recipes/mexican2.jpg',
  'asian1': '/src/assets/images/recipes/asian1.jpg',
  'asian2': '/src/assets/images/recipes/asian2.jpg',
  'mediterranean1': '/src/assets/images/recipes/mediterranean1.jpg',
  'mediterranean2': '/src/assets/images/recipes/mediterranean2.jpg',
  
  // Special diets
  'vegan1': '/src/assets/images/recipes/vegan1.jpg',
  'vegan2': '/src/assets/images/recipes/vegan2.jpg',
  'vegan3': '/src/assets/images/recipes/vegan3.jpg',
  
  // Flavors
  'spicy1': '/src/assets/images/recipes/spicy1.jpg',
  'spicy2': '/src/assets/images/recipes/spicy2.jpg',
  'sweet1': '/src/assets/images/recipes/sweet1.jpg',
  'sweet2': '/src/assets/images/recipes/sweet2.jpg',
  
  // Healthy
  'healthy1': '/src/assets/images/recipes/healthy1.jpg',
  'healthy2': '/src/assets/images/recipes/healthy2.jpg',
  'healthy3': '/src/assets/images/recipes/healthy3.jpg',
  
  // Exotic
  'exotic1': '/src/assets/images/recipes/exotic1.jpg',
  'exotic2': '/src/assets/images/recipes/exotic2.jpg',
  
  // Additional recipes
  'default': '/placeholder.svg',
  'creative1': '/src/assets/images/recipes/dessert1.jpg', // Using dessert1 as fallback
  'drink1': '/src/assets/images/recipes/dessert2.jpg',    // Using dessert2 as fallback
  'drink2': '/src/assets/images/recipes/breakfast1.jpg',  // Using breakfast1 as fallback
  'drink3': '/src/assets/images/recipes/breakfast2.jpg',  // Using breakfast2 as fallback
  'appetizer1': '/src/assets/images/recipes/lunch1.jpg',  // Using lunch1 as fallback
};

export default recipeImageMapping;
