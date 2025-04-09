
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food recipes
  'comfort1': 'https://images.unsplash.com/photo-1543339520-51ebf2897090?w=800&auto=format&fit=crop', // Mac and cheese
  'comfort2': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop', // Beef stew
  'comfort3': 'https://images.unsplash.com/photo-1618889482923-38250401a84e?w=800&auto=format&fit=crop', // Mashed potatoes
  
  // Breakfast recipes
  'breakfast1': 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop', // Granola yogurt bowl
  'breakfast2': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast3': 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop', // Pancakes with berries
  
  // Lunch recipes
  'lunch1': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop', // Quinoa salad bowl
  'lunch2': 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&auto=format&fit=crop', // Garden salad
  'lunch3': 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&auto=format&fit=crop', // Club sandwich
  
  // Dinner recipes
  'dinner1': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop', // Salmon fillet
  'dinner2': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop', // Pasta bolognese
  'dinner3': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop', // Steak with vegetables
  
  // Dessert recipes
  'dessert1': 'https://images.unsplash.com/photo-1551529834-525807d6b4f3?w=800&auto=format&fit=crop', // Chocolate cake
  'dessert2': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Ice cream scoops
  'dessert3': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&auto=format&fit=crop', // Chocolate chip cookies
  
  // Quick recipes
  'quick1': 'https://images.unsplash.com/photo-1603046891249-70088f7cae2f?w=800&auto=format&fit=crop', // Sandwich
  'quick2': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop', // Quick pasta
  'quick3': 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=800&auto=format&fit=crop', // Greek salad
  
  // Snack recipes
  'snack1': 'https://images.unsplash.com/photo-1575576941698-03e072cec81d?w=800&auto=format&fit=crop', // Popcorn
  'snack2': 'https://images.unsplash.com/photo-1581400140128-8d9051268ae5?w=800&auto=format&fit=crop', // Trail mix
  'snack3': 'https://images.unsplash.com/photo-1501498089818-c10ed9b3dc77?w=800&auto=format&fit=crop', // Mixed berries
  
  // Ethnic cuisine recipes
  'italian1': 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop', // Margherita pizza
  'italian2': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Spaghetti with meatballs
  'mexican1': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop', // Authentic tacos
  'mexican2': 'https://images.unsplash.com/photo-1584269600519-112d071b33c6?w=800&auto=format&fit=crop', // Guacamole
  'asian1': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop', // Ramen
  'asian2': 'https://images.unsplash.com/photo-1617196034183-421b4917c92b?w=800&auto=format&fit=crop', // Sushi platter
  'mediterranean1': 'https://images.unsplash.com/photo-1544250634-d6dc0e4ca7dd?w=800&auto=format&fit=crop', // Mediterranean platter
  'mediterranean2': 'https://images.unsplash.com/photo-1557682250-81f15143e3f1?w=800&auto=format&fit=crop', // Greek salad with feta
  
  // Special diets recipes
  'vegan1': 'https://images.unsplash.com/photo-1546693951-b13c0abf92e7?w=800&auto=format&fit=crop', // Vegan Buddha bowl
  'vegan2': 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&auto=format&fit=crop', // Vegan salad
  'vegan3': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Vegan mixed vegetables
  
  // Flavors recipes
  'spicy1': 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&auto=format&fit=crop', // Spicy noodles
  'spicy2': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop', // Spicy curry
  'sweet1': 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?w=800&auto=format&fit=crop', // Fruit bowl
  'sweet2': 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=800&auto=format&fit=crop', // Sweet pastries
  
  // Healthy recipes
  'healthy1': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop', // Healthy bowls
  'healthy2': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop', // Healthy grain bowl
  'healthy3': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop', // Fresh vegetable spread
  
  // Exotic recipes
  'exotic1': 'https://images.unsplash.com/photo-1551445523-324a0fdab051?w=800&auto=format&fit=crop', // Dragon fruit
  'exotic2': 'https://images.unsplash.com/photo-1620286809133-7dbe47af2ef2?w=800&auto=format&fit=crop', // Exotic curry
  
  // Additional reliable fallbacks
  'default': 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop', // Well-plated food
  'drink1': 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&auto=format&fit=crop', // Smoothie
  'drink2': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop', // Cocktail
  'drink3': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop', // Latte
  'appetizer1': 'https://images.unsplash.com/photo-1662487034139-71c4ea17415a?w=800&auto=format&fit=crop', // Bruschetta
};

export default recipeImageMapping;
