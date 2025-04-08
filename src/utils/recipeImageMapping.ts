
// Map recipe image names to actual image paths with accurate food representations
const recipeImageMapping: Record<string, string> = {
  // Comfort food
  'comfort1': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop', // Pancakes
  'comfort2': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop', // Mac and cheese
  'comfort3': 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=800&auto=format&fit=crop', // Chicken soup
  
  // Breakfast
  'breakfast1': 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast2': 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&auto=format&fit=crop', // Yogurt granola bowl
  'breakfast3': 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop', // Pancakes
  
  // Lunch
  'lunch1': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Salad bowl
  'lunch2': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Veggie lunch
  'lunch3': 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format&fit=crop', // Sandwich
  
  // Dinner
  'dinner1': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop', // Salmon dinner
  'dinner2': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop', // Pasta
  'dinner3': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop', // Steak
  
  // Dessert
  'dessert1': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop', // Cake
  'dessert2': 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=800&auto=format&fit=crop', // Ice cream
  'dessert3': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop', // Cookies
  
  // Quick
  'quick1': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop', // Quick meal
  'quick2': 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop', // Quick pasta
  'quick3': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop', // Veggie bowl
  
  // Snack
  'snack1': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop', // Popcorn
  'snack2': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop', // Nuts and fruit
  'snack3': 'https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=800&auto=format&fit=crop', // Mixed berries
  
  // Ethnic
  'italian1': 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&auto=format&fit=crop', // Pizza
  'italian2': 'https://images.unsplash.com/photo-1597393353415-b3730f3110a4?w=800&auto=format&fit=crop', // Pasta
  'mexican1': 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&auto=format&fit=crop', // Tacos
  'mexican2': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&auto=format&fit=crop', // Mexican bowl
  'asian1': 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=800&auto=format&fit=crop', // Ramen
  'asian2': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop', // Sushi
  'mediterranean1': 'https://images.unsplash.com/photo-1594671676120-4e333282a5f9?w=800&auto=format&fit=crop', // Mediterranean platter
  'mediterranean2': 'https://images.unsplash.com/photo-1505576633757-0ac1084f4754?w=800&auto=format&fit=crop', // Mediterranean salad
  
  // Special diets
  'vegan1': 'https://images.unsplash.com/photo-1583224874248-9d7e72f74e20?w=800&auto=format&fit=crop', // Vegan bowl
  'vegan2': 'https://images.unsplash.com/photo-1598532213005-76c8bd158348?w=800&auto=format&fit=crop', // Vegan sandwich
  'vegan3': 'https://images.unsplash.com/photo-1612439805305-f446090b682c?w=800&auto=format&fit=crop', // Vegan salad
  
  // Flavors
  'spicy1': 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop', // Spicy noodles
  'spicy2': 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?w=800&auto=format&fit=crop', // Peppers
  'sweet1': 'https://images.unsplash.com/photo-1583224874248-9d7e72f74e20?w=800&auto=format&fit=crop', // Sweet bowl
  'sweet2': 'https://images.unsplash.com/photo-1562176566-e9afd27531d2?w=800&auto=format&fit=crop', // Sweet pastry
  
  // Healthy
  'healthy1': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop', // Healthy bowl
  'healthy2': 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800&auto=format&fit=crop', // Healthy salad
  'healthy3': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Healthy mix
  
  // Exotic
  'exotic1': 'https://images.unsplash.com/photo-1563590656268-5c41997321a6?w=800&auto=format&fit=crop', // Exotic fruit
  'exotic2': 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=800&auto=format&fit=crop', // Exotic dish
  
  // Additional recipes
  'default': 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800&auto=format&fit=crop', // General food
  'creative1': 'https://images.unsplash.com/photo-1619096552086-4697acb90be3?w=800&auto=format&fit=crop', // Creative dish
  'drink1': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop', // Smoothie
  'drink2': 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop', // Cocktail
  'drink3': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop', // Hot beverage
  'appetizer1': 'https://images.unsplash.com/photo-1626516002742-46d8a1677ade?w=800&auto=format&fit=crop', // Appetizer platter
};

export default recipeImageMapping;
