
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food recipes
  'comfort1': 'https://images.unsplash.com/photo-1548340748-6d2b7c7a0d7a?w=800&auto=format&fit=crop', // Mac and cheese
  'comfort2': 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=800&auto=format&fit=crop', // Beef stew
  'comfort3': 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&auto=format&fit=crop', // Mashed potatoes
  
  // Breakfast recipes
  'breakfast1': 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&auto=format&fit=crop', // Granola yogurt bowl
  'breakfast2': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast3': 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1567599672391-17b31d92e9e4?w=800&auto=format&fit=crop', // Pancakes with berries
  
  // Lunch recipes
  'lunch1': 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop', // Quinoa salad bowl
  'lunch2': 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&auto=format&fit=crop', // Garden salad
  'lunch3': 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&auto=format&fit=crop', // Club sandwich
  
  // Dinner recipes
  'dinner1': 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&auto=format&fit=crop', // Salmon fillet
  'dinner2': 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800&auto=format&fit=crop', // Pasta carbonara
  'dinner3': 'https://images.unsplash.com/photo-1588778272105-1ff4b1c491e9?w=800&auto=format&fit=crop', // Steak with vegetables
  
  // Dessert recipes
  'dessert1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Chocolate cake
  'dessert2': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Ice cream scoops
  'dessert3': 'https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?w=800&auto=format&fit=crop', // Chocolate chip cookies
  
  // Quick recipes
  'quick1': 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop', // Sandwich
  'quick2': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop', // Quick pasta
  'quick3': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop', // Greek salad
  
  // Snack recipes
  'snack1': 'https://images.unsplash.com/photo-1609525313344-a56f10561468?w=800&auto=format&fit=crop', // Popcorn
  'snack2': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&auto=format&fit=crop', // Trail mix
  'snack3': 'https://images.unsplash.com/photo-1596591868231-2920dc881afc?w=800&auto=format&fit=crop', // Mixed berries
  
  // Ethnic cuisine recipes
  'italian1': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop', // Margherita pizza
  'italian2': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop', // Spaghetti with meatballs
  'mexican1': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop', // Authentic tacos
  'mexican2': 'https://images.unsplash.com/photo-1600348862122-d678de766906?w=800&auto=format&fit=crop', // Guacamole
  'asian1': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop', // Ramen
  'asian2': 'https://images.unsplash.com/photo-1648147610171-9df0c06bf365?w=800&auto=format&fit=crop', // Sushi platter
  'mediterranean1': 'https://images.unsplash.com/photo-1626200935028-1eed42b8dd83?w=800&auto=format&fit=crop', // Mediterranean platter
  'mediterranean2': 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format&fit=crop', // Greek salad with feta
  
  // Special diets recipes
  'vegan1': 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop', // Vegan Buddha bowl
  'vegan2': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Vegan salad
  'vegan3': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop', // Vegan mixed vegetables
  
  // Flavors recipes
  'spicy1': 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop', // Spicy noodles
  'spicy2': 'https://images.unsplash.com/photo-1596797038530-2d5ff1a41010?w=800&auto=format&fit=crop', // Spicy curry
  'sweet1': 'https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=800&auto=format&fit=crop', // Fruit bowl
  'sweet2': 'https://images.unsplash.com/photo-1583743089695-4b816a5c78e1?w=800&auto=format&fit=crop', // Sweet pastries
  
  // Healthy recipes
  'healthy1': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Healthy bowls
  'healthy2': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop', // Healthy grain bowl
  'healthy3': 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=800&auto=format&fit=crop', // Fresh vegetable spread
  
  // Exotic recipes
  'exotic1': 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&auto=format&fit=crop', // Dragon fruit
  'exotic2': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop', // Exotic curry
  
  // Additional reliable fallbacks
  'default': 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop', // Well-plated food
  'drink1': 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=800&auto=format&fit=crop', // Smoothie
  'drink2': 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=800&auto=format&fit=crop', // Cocktail
  'drink3': 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop', // Latte
  'appetizer1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Bruschetta
};

export default recipeImageMapping;
