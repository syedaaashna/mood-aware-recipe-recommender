
// Map recipe image names to actual image paths
// Using external image URLs that are guaranteed to be available
const recipeImageMapping: Record<string, string> = {
  // Comfort food
  'comfort1': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
  'comfort2': 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop',
  'comfort3': 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800&auto=format&fit=crop',
  
  // Breakfast
  'breakfast1': 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop',
  'breakfast2': 'https://images.unsplash.com/photo-1533089860892-a9b969df67a3?w=800&auto=format&fit=crop',
  'breakfast3': 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=800&auto=format&fit=crop',
  'breakfast4': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop',
  
  // Lunch
  'lunch1': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
  'lunch2': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
  'lunch3': 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&auto=format&fit=crop',
  
  // Dinner
  'dinner1': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&auto=format&fit=crop',
  'dinner2': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop',
  'dinner3': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop',
  
  // Dessert
  'dessert1': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop',
  'dessert2': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop',
  'dessert3': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop',
  
  // Quick
  'quick1': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop',
  'quick2': 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop',
  'quick3': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop',
  
  // Snack
  'snack1': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop',
  'snack2': 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&auto=format&fit=crop',
  'snack3': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
  
  // Ethnic
  'italian1': 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&auto=format&fit=crop',
  'italian2': 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&auto=format&fit=crop',
  'mexican1': 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&auto=format&fit=crop',
  'mexican2': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&auto=format&fit=crop',
  'asian1': 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=800&auto=format&fit=crop',
  'asian2': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop',
  'mediterranean1': 'https://images.unsplash.com/photo-1599021456807-25db0f974333?w=800&auto=format&fit=crop',
  'mediterranean2': 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop',
  
  // Special diets
  'vegan1': 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&auto=format&fit=crop',
  'vegan2': 'https://images.unsplash.com/photo-1598532213005-76c8bd158348?w=800&auto=format&fit=crop',
  'vegan3': 'https://images.unsplash.com/photo-1596560548464-f010549e45d8?w=800&auto=format&fit=crop',
  
  // Flavors
  'spicy1': 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop',
  'spicy2': 'https://images.unsplash.com/photo-1615584220329-8f3b8d87ebe0?w=800&auto=format&fit=crop',
  'sweet1': 'https://images.unsplash.com/photo-1583582740725-241b4628856a?w=800&auto=format&fit=crop',
  'sweet2': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop',
  
  // Healthy
  'healthy1': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
  'healthy2': 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=800&auto=format&fit=crop',
  'healthy3': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
  
  // Exotic
  'exotic1': 'https://images.unsplash.com/photo-1563590656268-5c41997321a6?w=800&auto=format&fit=crop',
  'exotic2': 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=800&auto=format&fit=crop',
  
  // Additional recipes
  'default': 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=800&auto=format&fit=crop',
  'creative1': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop',
  'drink1': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop',
  'drink2': 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&auto=format&fit=crop',
  'drink3': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop',
  'appetizer1': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop',
};

export default recipeImageMapping;
