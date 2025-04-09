
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food - Images that clearly show comfort dishes
  'comfort1': 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=800&auto=format&fit=crop', // Improved mac and cheese
  'comfort2': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop', // Homemade beef stew
  'comfort3': 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop', // Creamy mashed potatoes
  
  // Breakfast - Clear breakfast dish images
  'breakfast1': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop', // Yogurt granola bowl
  'breakfast2': 'https://images.unsplash.com/photo-1673450785060-2d185bf301c2?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast3': 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop', // Pancakes with berries
  
  // Lunch - Specific lunch meal images
  'lunch1': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop', // Healthy salad bowl
  'lunch2': 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop', // Fresh garden salad
  'lunch3': 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&auto=format&fit=crop', // Proper sandwich with chips
  
  // Dinner - Clear dinner plate images
  'dinner1': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop', // Salmon dinner
  'dinner2': 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop', // Pasta dinner
  'dinner3': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop', // High-quality steak dinner
  
  // Dessert - Close-up dessert images
  'dessert1': 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=800&auto=format&fit=crop', // Chocolate cake slice
  'dessert2': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Ice cream scoops
  'dessert3': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop', // Chocolate chip cookies
  
  // Quick - Easy to identify quick meal images
  'quick1': 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&auto=format&fit=crop', // Quick sandwich
  'quick2': 'https://images.unsplash.com/photo-1625944525300-163a4e2669be?w=800&auto=format&fit=crop', // Quick simple pasta
  'quick3': 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=800&auto=format&fit=crop', // Quick Greek salad
  
  // Snack - Clear snack images
  'snack1': 'https://images.unsplash.com/photo-1612549593758-218db4a71faa?w=800&auto=format&fit=crop', // Popcorn closeup
  'snack2': 'https://images.unsplash.com/photo-1611954677341-81e043a9d3cb?w=800&auto=format&fit=crop', // Trail mix variety
  'snack3': 'https://images.unsplash.com/photo-1583064571012-0316444eaa7e?w=800&auto=format&fit=crop', // Fresh mixed berries
  
  // Ethnic cuisine - Authentic ethnic food images
  'italian1': 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop', // Authentic margherita pizza
  'italian2': 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop', // Italian pasta with sauce
  'mexican1': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&auto=format&fit=crop', // Authentic tacos close up
  'mexican2': 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&auto=format&fit=crop', // Bowl with guacamole
  'asian1': 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&auto=format&fit=crop', // Authentic ramen
  'asian2': 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&auto=format&fit=crop', // Sushi rolls platter
  'mediterranean1': 'https://images.unsplash.com/photo-1505154616206-8a9d647c1301?w=800&auto=format&fit=crop', // Mediterranean mezze platter
  'mediterranean2': 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=800&auto=format&fit=crop', // Greek salad
  
  // Special diets - Clear dietary-specific images
  'vegan1': 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962fd?w=800&auto=format&fit=crop', // Colorful vegan bowl
  'vegan2': 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&auto=format&fit=crop', // Vegan sandwich
  'vegan3': 'https://images.unsplash.com/photo-1605645310923-d5e11d64e2ee?w=800&auto=format&fit=crop', // Vegan salad
  
  // Flavors - Distinct flavor profile images
  'spicy1': 'https://images.unsplash.com/photo-1574984629536-33c5401ed9d9?w=800&auto=format&fit=crop', // Spicy noodles with peppers
  'spicy2': 'https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800&auto=format&fit=crop', // Hot curry with peppers
  'sweet1': 'https://images.unsplash.com/photo-1490323914169-4ce9276e7e23?w=800&auto=format&fit=crop', // Sweet fruit bowl
  'sweet2': 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop', // Sweet pastries
  
  // Healthy - Visibly healthy food images
  'healthy1': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop', // Healthy avocado toast
  'healthy2': 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&auto=format&fit=crop', // Healthy protein bowl
  'healthy3': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop', // Fresh healthy meal prep bowls
  
  // Exotic - Visually distinct exotic foods
  'exotic1': 'https://images.unsplash.com/photo-1601825121339-3fb3db39d3dc?w=800&auto=format&fit=crop', // Dragon fruit platter
  'exotic2': 'https://images.unsplash.com/photo-1628630878677-2494a6bbac8f?w=800&auto=format&fit=crop', // Exotic curry with spices
  
  // Additional recipes
  'default': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Beautiful food plating
  'creative1': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop', // Creative food art plating
  'drink1': 'https://images.unsplash.com/photo-1589734580748-6d9421464885?w=800&auto=format&fit=crop', // Colorful smoothie
  'drink2': 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop', // Cocktail with garnish
  'drink3': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop', // Latte art
  'appetizer1': 'https://images.unsplash.com/photo-1626803775151-61d756612f97?w=800&auto=format&fit=crop', // Bruschetta appetizer
};

export default recipeImageMapping;
