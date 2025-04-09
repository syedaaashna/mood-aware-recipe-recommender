
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food - Images that clearly show comfort dishes
  'comfort1': 'https://images.unsplash.com/photo-1549240923-93a2e080e653?w=800&auto=format&fit=crop', // Mac and cheese - visible cheese pulls
  'comfort2': 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=800&auto=format&fit=crop', // Beef stew - clear view of meat and vegetables
  'comfort3': 'https://images.unsplash.com/photo-1600891964599-f61f4298dfca?w=800&auto=format&fit=crop', // Mashed potatoes - creamy and visible texture
  
  // Breakfast - Clear breakfast dish images showing the exact meal
  'breakfast1': 'https://images.unsplash.com/photo-1511690078903-71de64ac6e9e?w=800&auto=format&fit=crop', // Granola yogurt bowl - clear top view
  'breakfast2': 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&auto=format&fit=crop', // Avocado toast - perfect presentation
  'breakfast3': 'https://images.unsplash.com/photo-1626711934535-9749ea933595?w=800&auto=format&fit=crop', // Breakfast burrito - cut to show filling
  'breakfast4': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop', // Pancakes with berries - stack with syrup
  
  // Lunch - Specific lunch meal images with clear presentation
  'lunch1': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Healthy salad bowl - colorful vegetables
  'lunch2': 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&auto=format&fit=crop', // Fresh garden salad - clear ingredients
  'lunch3': 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&auto=format&fit=crop', // Club sandwich with chips - full plate view
  
  // Dinner - Clear dinner plate images with each dish clearly visible
  'dinner1': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop', // Salmon dinner - perfectly plated
  'dinner2': 'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?w=800&auto=format&fit=crop', // Pasta dinner - swirled pasta with sauce
  'dinner3': 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop', // Steak dinner - medium rare with sides
  
  // Dessert - Close-up dessert images with textures clearly visible
  'dessert1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Chocolate cake slice - moist with layers
  'dessert2': 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop', // Ice cream scoops - multiple flavors
  'dessert3': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop', // Chocolate chip cookies - stack of cookies
  
  // Quick - Easy to identify quick meal images with clear presentation
  'quick1': 'https://images.unsplash.com/photo-1592415499556-74fcb9f18667?w=800&auto=format&fit=crop', // Quick sandwich - cross-section view
  'quick2': 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&auto=format&fit=crop', // Quick simple pasta - pasta with sauce
  'quick3': 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&auto=format&fit=crop', // Quick Greek salad - feta on top
  
  // Snack - Clear snack images showing exact items
  'snack1': 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&auto=format&fit=crop', // Popcorn in bowl - fluffy kernels
  'snack2': 'https://images.unsplash.com/photo-1604210565264-8867e7d53105?w=800&auto=format&fit=crop', // Trail mix variety - nuts and dried fruit
  'snack3': 'https://images.unsplash.com/photo-1596591868231-05e882c86018?w=800&auto=format&fit=crop', // Fresh mixed berries - colorful berries in bowl
  
  // Ethnic cuisine - Authentic ethnic food images showing traditional presentations
  'italian1': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop', // Authentic margherita pizza - traditional style
  'italian2': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop', // Italian pasta with sauce - spaghetti with meatballs
  'mexican1': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop', // Authentic tacos close up - street tacos
  'mexican2': 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=800&auto=format&fit=crop', // Bowl with guacamole - chunky texture
  'asian1': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop', // Authentic ramen - bowl with toppings
  'asian2': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop', // Sushi rolls platter - assorted pieces
  'mediterranean1': 'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?w=800&auto=format&fit=crop', // Mediterranean mezze platter - multiple items
  'mediterranean2': 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format&fit=crop', // Greek salad - with feta cheese block
  
  // Special diets - Clear dietary-specific images
  'vegan1': 'https://images.unsplash.com/photo-1540914124281-342587941389?w=800&auto=format&fit=crop', // Colorful vegan bowl - rainbow vegetables
  'vegan2': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop', // Vegan sandwich - with avocado toast
  'vegan3': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Vegan salad - colorful vegetables
  
  // Flavors - Distinct flavor profile images showing characteristic ingredients
  'spicy1': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop', // Spicy noodles with red peppers
  'spicy2': 'https://images.unsplash.com/photo-1631294846225-0394013957dc?w=800&auto=format&fit=crop', // Hot curry with visible chilis
  'sweet1': 'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800&auto=format&fit=crop', // Sweet fruit bowl - multiple colorful fruits
  'sweet2': 'https://images.unsplash.com/photo-1551404471-1b0d8da9fe00?w=800&auto=format&fit=crop', // Sweet pastries - various desserts
  
  // Healthy - Visibly healthy food images showing nutritious ingredients
  'healthy1': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop', // Healthy meal prep bowls - organized portions
  'healthy2': 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop', // Healthy protein bowl - grains and vegetables
  'healthy3': 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop', // Fresh healthy food - vegetable spread
  
  // Exotic - Visually distinct exotic foods showing unique ingredients
  'exotic1': 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop', // Dragon fruit platter - cut to show inside
  'exotic2': 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop', // Exotic curry with visible spices and herbs
  
  // Additional recipes with clear, high-quality images
  'default': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop', // Beautiful food plating - professional presentation
  'creative1': 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=800&auto=format&fit=crop', // Creative food art plating - artistic presentation
  'drink1': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop', // Colorful smoothie - visible layers
  'drink2': 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop', // Cocktail with garnish - detailed presentation
  'drink3': 'https://images.unsplash.com/photo-1522992319-0365e5f081d8?w=800&auto=format&fit=crop', // Latte art - detailed foam design
  'appetizer1': 'https://images.unsplash.com/photo-1626803775151-61d756612f97?w=800&auto=format&fit=crop', // Bruschetta appetizer - on toasted bread
};

export default recipeImageMapping;
