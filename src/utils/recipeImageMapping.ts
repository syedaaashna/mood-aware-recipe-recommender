
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food recipes
  'comfort1': 'https://images.unsplash.com/photo-1543339520-51ebf2897090?w=800&auto=format&fit=crop', // Mac and cheese
  'comfort2': 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&auto=format&fit=crop', // Beef stew
  'comfort3': 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&auto=format&fit=crop', // Mashed potatoes
  
  // Breakfast recipes
  'breakfast1': 'https://images.unsplash.com/photo-1541781550486-81b7a2328578?w=800&auto=format&fit=crop', // Granola yogurt bowl
  'breakfast2': 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast3': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop', // Pancakes with berries
  
  // Lunch recipes
  'lunch1': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Quinoa salad bowl
  'lunch2': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Garden salad
  'lunch3': 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&auto=format&fit=crop', // Club sandwich
  
  // Dinner recipes
  'dinner1': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop', // Salmon fillet
  'dinner2': 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop', // Pasta bolognese
  'dinner3': 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop', // Steak with vegetables
  
  // Dessert recipes
  'dessert1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Chocolate cake
  'dessert2': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Ice cream scoops
  'dessert3': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop', // Chocolate chip cookies
  
  // Quick recipes
  'quick1': 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&auto=format&fit=crop', // Sandwich
  'quick2': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop', // Quick pasta
  'quick3': 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format&fit=crop', // Greek salad
  
  // Snack recipes
  'snack1': 'https://images.unsplash.com/photo-1575576941698-03e072cec81d?w=800&auto=format&fit=crop', // Popcorn
  'snack2': 'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?w=800&auto=format&fit=crop', // Trail mix
  'snack3': 'https://images.unsplash.com/photo-1563252722-6444351151d5?w=800&auto=format&fit=crop', // Mixed berries
  
  // Ethnic cuisine recipes
  'italian1': 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop', // Margherita pizza
  'italian2': 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop', // Spaghetti with meatballs
  'mexican1': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop', // Authentic tacos
  'mexican2': 'https://images.unsplash.com/photo-1584269600519-112d071b33c6?w=800&auto=format&fit=crop', // Guacamole
  'asian1': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop', // Ramen
  'asian2': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop', // Sushi platter
  'mediterranean1': 'https://images.unsplash.com/photo-1544250634-d6dc0e4ca7dd?w=800&auto=format&fit=crop', // Mediterranean platter
  'mediterranean2': 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop', // Greek salad with feta
  
  // Special diets recipes
  'vegan1': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Vegan Buddha bowl
  'vegan2': 'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?w=800&auto=format&fit=crop', // Vegan salad
  'vegan3': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Vegan mixed vegetables
  
  // Flavors recipes
  'spicy1': 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=800&auto=format&fit=crop', // Spicy noodles
  'spicy2': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop', // Spicy curry
  'sweet1': 'https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?w=800&auto=format&fit=crop', // Fruit bowl
  'sweet2': 'https://images.unsplash.com/photo-1621236354503-8c8dce3bc2b4?w=800&auto=format&fit=crop', // Sweet pastries
  
  // Healthy recipes
  'healthy1': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop', // Healthy bowls
  'healthy2': 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&auto=format&fit=crop', // Healthy grain bowl
  'healthy3': 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=800&auto=format&fit=crop', // Fresh vegetable spread
  
  // Exotic recipes
  'exotic1': 'https://images.unsplash.com/photo-1551445523-324a0fdab051?w=800&auto=format&fit=crop', // Dragon fruit
  'exotic2': 'https://images.unsplash.com/photo-1571091655789-405127f7894f?w=800&auto=format&fit=crop', // Exotic curry
  
  // Additional reliable fallbacks
  'default': 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop', // Well-plated food
  'drink1': 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&auto=format&fit=crop', // Smoothie
  'drink2': 'https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?w=800&auto=format&fit=crop', // Cocktail
  'drink3': 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop', // Latte
  'appetizer1': 'https://images.unsplash.com/photo-1626200758640-6b843464e41f?w=800&auto=format&fit=crop', // Bruschetta
};

export default recipeImageMapping;
