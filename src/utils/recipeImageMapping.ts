
// Map recipe image names to carefully curated image paths that accurately match each dish
const recipeImageMapping: Record<string, string> = {
  // Comfort food - Images that clearly show comfort dishes
  'comfort1': 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&auto=format&fit=crop', // Mac and cheese
  'comfort2': 'https://images.unsplash.com/photo-1588280991458-d759882787cf?w=800&auto=format&fit=crop', // Homemade soup
  'comfort3': 'https://images.unsplash.com/photo-1549203532-cc889bb25c9e?w=800&auto=format&fit=crop', // Mashed potatoes
  
  // Breakfast - Clear breakfast dish images
  'breakfast1': 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop', // Avocado toast
  'breakfast2': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop', // Yogurt granola bowl
  'breakfast3': 'https://images.unsplash.com/photo-1608649226842-f39257c9085f?w=800&auto=format&fit=crop', // Breakfast burrito
  'breakfast4': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop', // Pancakes with berries
  
  // Lunch - Specific lunch meal images
  'lunch1': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Healthy lunch bowl
  'lunch2': 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=800&auto=format&fit=crop', // Fresh salad
  'lunch3': 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop', // Sandwich with side
  
  // Dinner - Clear dinner plate images
  'dinner1': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop', // Salmon dinner
  'dinner2': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop', // Pasta dinner
  'dinner3': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop', // Steak dinner
  
  // Dessert - Close-up dessert images
  'dessert1': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop', // Chocolate cake
  'dessert2': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop', // Ice cream
  'dessert3': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop', // Cookies
  
  // Quick - Easy to identify quick meal images
  'quick1': 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop', // Quick sandwich
  'quick2': 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop', // Quick pasta
  'quick3': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&auto=format&fit=crop', // Quick salad
  
  // Snack - Clear snack images
  'snack1': 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&auto=format&fit=crop', // Popcorn
  'snack2': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop', // Trail mix
  'snack3': 'https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?w=800&auto=format&fit=crop', // Mixed berries
  
  // Ethnic cuisine - Authentic ethnic food images
  'italian1': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop', // Authentic pizza
  'italian2': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop', // Italian pasta
  'mexican1': 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop', // Authentic tacos
  'mexican2': 'https://images.unsplash.com/photo-1633632566177-39afa5f38b21?w=800&auto=format&fit=crop', // Mexican bowl with guacamole
  'asian1': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop', // Authentic ramen
  'asian2': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop', // Sushi platter
  'mediterranean1': 'https://images.unsplash.com/photo-1594671676120-4e333282a5f9?w=800&auto=format&fit=crop', // Mediterranean platter
  'mediterranean2': 'https://images.unsplash.com/photo-1551006917-3b4c078c47c9?w=800&auto=format&fit=crop', // Greek salad
  
  // Special diets - Clear dietary-specific images
  'vegan1': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop', // Colorful vegan bowl
  'vegan2': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop', // Vegan sandwich
  'vegan3': 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=800&auto=format&fit=crop', // Vegan salad
  
  // Flavors - Distinct flavor profile images
  'spicy1': 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop', // Spicy noodles
  'spicy2': 'https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=800&auto=format&fit=crop', // Hot peppers dish
  'sweet1': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop', // Sweet fruit bowl
  'sweet2': 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop', // Sweet pastries
  
  // Healthy - Visibly healthy food images
  'healthy1': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop', // Healthy colorful bowl
  'healthy2': 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&auto=format&fit=crop', // Healthy protein bowl
  'healthy3': 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&auto=format&fit=crop', // Fresh healthy smoothie bowl
  
  // Exotic - Visually distinct exotic foods
  'exotic1': 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop', // Dragon fruit and tropical fruits
  'exotic2': 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&auto=format&fit=crop', // Exotic curry dish
  
  // Additional recipes
  'default': 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop', // Beautiful food plating
  'creative1': 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&auto=format&fit=crop', // Creative plating
  'drink1': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop', // Colorful smoothie
  'drink2': 'https://images.unsplash.com/photo-1562708294-4df8650ae9b3?w=800&auto=format&fit=crop', // Cocktail with garnish
  'drink3': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop', // Latte art
  'appetizer1': 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&auto=format&fit=crop', // Bruschetta appetizer
};

export default recipeImageMapping;
