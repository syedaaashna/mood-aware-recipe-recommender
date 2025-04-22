import comfort1 from '@/assets/images/recipes/comfort1.jpg';
import comfort2 from '@/assets/images/recipes/comfort2.jpg';
import comfort3 from '@/assets/images/recipes/comfort3.jpg';
import breakfast1 from '@/assets/images/recipes/breakfast1.jpg';
import breakfast2 from '@/assets/images/recipes/breakfast2.jpg';
import breakfast3 from '@/assets/images/recipes/breakfast3.jpg';
import breakfast4 from '@/assets/images/recipes/breakfast4.jpg';
import lunch1 from '@/assets/images/recipes/lunch1.jpg';
import lunch2 from '@/assets/images/recipes/lunch2.jpg';
import lunch3 from '@/assets/images/recipes/lunch3.jpg';
import dinner1 from '@/assets/images/recipes/dinner1.jpg';
import dinner2 from '@/assets/images/recipes/dinner2.jpg';
import dinner3 from '@/assets/images/recipes/dinner3.jpg';
import dessert1 from '@/assets/images/recipes/dessert1.jpg';
import dessert2 from '@/assets/images/recipes/dessert2.jpg';
import dessert3 from '@/assets/images/recipes/dessert3.jpg';
import quick1 from '@/assets/images/recipes/quick1.jpg';
import quick2 from '@/assets/images/recipes/quick2.jpg';
import quick3 from '@/assets/images/recipes/quick3.jpg';
import snack1 from '@/assets/images/recipes/snack1.jpg';
import snack2 from '@/assets/images/recipes/snack2.jpg';
import snack3 from '@/assets/images/recipes/snack3.jpg';
import italian1 from '@/assets/images/recipes/italian1.jpg';
import italian2 from '@/assets/images/recipes/italian2.jpg';
import mexican1 from '@/assets/images/recipes/mexican1.jpg';
import mexican2 from '@/assets/images/recipes/mexican2.jpg';
import asian1 from '@/assets/images/recipes/asian1.jpg';
import asian2 from '@/assets/images/recipes/asian2.jpg';
import mediterranean1 from '@/assets/images/recipes/mediterranean1.jpg';
import mediterranean2 from '@/assets/images/recipes/mediterranean2.jpg';
import vegan1 from '@/assets/images/recipes/vegan1.jpg';
import vegan2 from '@/assets/images/recipes/vegan2.jpg';
import vegan3 from '@/assets/images/recipes/vegan3.jpg';
import spicy1 from '@/assets/images/recipes/spicy1.jpg';
import spicy2 from '@/assets/images/recipes/spicy2.jpg';
import sweet1 from '@/assets/images/recipes/sweet1.jpg';
import sweet2 from '@/assets/images/recipes/sweet2.jpg';
import healthy1 from '@/assets/images/recipes/healthy1.jpg';
import healthy2 from '@/assets/images/recipes/healthy2.jpg';
import healthy3 from '@/assets/images/recipes/healthy3.jpg';
import exotic1 from '@/assets/images/recipes/exotic1.jpg';
import exotic2 from '@/assets/images/recipes/exotic2.jpg';
import creative1 from '@/assets/images/recipes/comfort1.jpg';
import drink1 from '@/assets/images/recipes/sweet1.jpg';
import drink2 from '@/assets/images/recipes/sweet2.jpg';
import drink3 from '@/assets/images/recipes/healthy1.jpg';
import appetizer1 from '@/assets/images/recipes/snack3.jpg';

export interface Mood {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    icon: '😊',
    description: 'Feeling cheerful and content'
  },
  {
    id: 'sad',
    name: 'Sad',
    icon: '😢',
    description: 'Feeling down or blue'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    icon: '⚡',
    description: 'Full of energy and ready to go'
  },
  {
    id: 'tired',
    name: 'Tired',
    icon: '😴',
    description: 'Feeling exhausted or sleepy'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    icon: '😰',
    description: 'Feeling overwhelmed or anxious'
  },
  {
    id: 'relaxed',
    name: 'Relaxed',
    icon: '😌',
    description: 'Feeling calm and at ease'
  },
  {
    id: 'hungry',
    name: 'Hungry',
    icon: '🍽️',
    description: 'Ready for a satisfying meal'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic',
    icon: '🕰️',
    description: 'Reminiscing about the past'
  },
  {
    id: 'adventurous',
    name: 'Adventurous',
    icon: '🌎',
    description: 'Ready to try something new'
  },
  {
    id: 'festive',
    name: 'Festive',
    icon: '🎉',
    description: 'In a celebratory mood'
  },
  {
    id: 'homesick',
    name: 'Homesick',
    icon: '🏠',
    description: 'Missing the comforts of home'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    icon: '❤️',
    description: 'In the mood for something special'
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: '🎨',
    description: 'Feeling inspired and imaginative'
  },
  {
    id: 'cozy',
    name: 'Cozy',
    icon: '🧣',
    description: 'Seeking warmth and comfort'
  },
  {
    id: 'indulgent',
    name: 'Indulgent',
    icon: '🍫',
    description: 'Treating yourself to something special'
  },
  {
    id: 'celebratory',
    name: 'Celebratory',
    icon: '🎊',
    description: 'Commemorating a special occasion'
  },
  {
    id: 'curious',
    name: 'Curious',
    icon: '🧐',
    description: 'Interested in exploring new flavors'
  },
  {
    id: 'sophisticated',
    name: 'Sophisticated',
    icon: '🥂',
    description: 'In the mood for something elegant'
  },
  {
    id: 'healthy-minded',
    name: 'Health-Conscious',
    icon: '🥗',
    description: 'Focused on nutrition and wellbeing'
  },
  {
    id: 'nostalgic-childhood',
    name: 'Childhood Memories',
    icon: '👶',
    description: 'Craving foods from your youth'
  },
  {
    id: 'wanderlust',
    name: 'Wanderlust',
    icon: '✈️',
    description: 'Craving flavors from around the world'
  },
  {
    id: 'fusion',
    name: 'Fusion Explorer',
    icon: '🔄',
    description: 'Excited about mixed cultural cuisines'
  },
  {
    id: 'traditional',
    name: 'Traditional',
    icon: '📜',
    description: 'Appreciating authentic cultural dishes'
  },
  {
    id: 'spice-lover',
    name: 'Spice Lover',
    icon: '🌶️',
    description: 'Craving bold, spicy flavors'
  },
  {
    id: 'comfort-seeker',
    name: 'Comfort Seeker',
    icon: '🧸',
    description: 'Looking for familiar, soothing foods'
  },
  {
    id: 'proud',
    name: 'Proud',
    icon: '🏆',
    description: 'Celebrating achievements and milestones'
  },
  {
    id: 'mindful',
    name: 'Mindful',
    icon: '🧘',
    description: 'Being present and conscious of choices'
  },
  {
    id: 'decadent',
    name: 'Decadent',
    icon: '✨',
    description: 'Seeking rich, luxurious experiences'
  },
  {
    id: 'nostalgic-travel',
    name: 'Travel Memories',
    icon: '🗺️',
    description: 'Reminiscing about food from past travels'
  },
  {
    id: 'seasonal',
    name: 'Seasonal',
    icon: '🍂',
    description: 'Enjoying foods from the current season'
  },
  {
    id: 'social',
    name: 'Social',
    icon: '👥',
    description: 'Foods perfect for sharing with friends'
  },
  {
    id: 'comforting',
    name: 'Comforting',
    icon: '🛋️',
    description: 'Seeking emotional comfort through food'
  },
  {
    id: 'inspired',
    name: 'Inspired',
    icon: '💫',
    description: 'Ready to create something impressive'
  },
  {
    id: 'time-pressed',
    name: 'Time-Pressed',
    icon: '⏱️',
    description: 'Need something quick but satisfying'
  },
  {
    id: 'refreshed',
    name: 'Refreshed',
    icon: '🌿',
    description: 'Craving something cool and revitalizing'
  }
];

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  tags: string[];
  difficulty: string;
  mood: string;
  image?: any;
  aiSuggestion?: string;
  nutritionAnalysis?: string;
  cookingTips?: string[];
}

const recipesData: { [key: string]: Recipe[] } = {
  comfort: [
    {
      id: 'comfort1',
      name: 'Classic Mac and Cheese',
      description: 'Creamy, cheesy, and oh-so-comforting. This mac and cheese recipe is a guaranteed crowd-pleaser.',
      ingredients: ['1 lb elbow macaroni', '1/2 cup butter', '1/2 cup flour', '3 cups milk', '4 cups shredded cheddar cheese', 'Salt and pepper to taste'],
      instructions: ['Cook macaroni according to package directions.', 'In a saucepan, melt butter over medium heat. Stir in flour until smooth.', 'Gradually whisk in milk until smooth. Bring to a simmer, stirring constantly.', 'Reduce heat and stir in cheddar cheese until melted and smooth. Season with salt and pepper.', 'Drain macaroni and add to cheese sauce. Stir to combine.', 'Serve immediately.'],
      prepTime: '10 mins',
      cookTime: '20 mins',
      servings: 6,
      calories: 450,
      tags: ['comfort food', 'pasta', 'cheese', 'easy'],
      difficulty: "Easy",
      mood: 'sad',
      aiSuggestion: "Try adding a pinch of nutmeg to enhance the creamy flavor.",
      nutritionAnalysis: "High in carbohydrates and calcium. Contains a good source of protein.",
      cookingTips: ["Use a variety of cheeses for a more complex flavor.", "Bake the mac and cheese for a crispy topping."]
    },
    {
      id: 'comfort2',
      name: 'Grandma\'s Chicken Noodle Soup',
      description: 'A warm and hearty soup that\'s perfect for a chilly day. This recipe is sure to bring back memories of Grandma\'s kitchen.',
      ingredients: ['1 whole chicken', '12 cups water', '2 carrots, chopped', '2 celery stalks, chopped', '1 onion, chopped', '8 oz egg noodles', 'Salt and pepper to taste'],
      instructions: ['Place chicken in a large pot and cover with water. Bring to a boil, then reduce heat and simmer for 1.5-2 hours, or until chicken is cooked through.', 'Remove chicken from pot and let cool slightly. Shred the meat and set aside.', 'Strain the broth through a fine-mesh sieve and return to the pot.', 'Add carrots, celery, and onion to the pot and simmer for 10 minutes.', 'Add egg noodles and cook until tender, about 8 minutes.', 'Stir in shredded chicken and season with salt and pepper.', 'Serve hot.'],
      prepTime: '20 mins',
      cookTime: '2 hours',
      servings: 8,
      calories: 300,
      tags: ['comfort food', 'soup', 'chicken', 'healthy'],
      difficulty: "Medium",
      mood: 'nostalgic',
      aiSuggestion: "Add a bay leaf to the broth for extra flavor.",
      nutritionAnalysis: "Rich in vitamins and minerals. Provides a good source of protein.",
      cookingTips: ["Use homemade chicken broth for the best flavor.", "Add a squeeze of lemon juice to brighten the soup."]
    },
    {
      id: 'comfort3',
      name: 'Shepherd\'s Pie',
      description: 'A classic comfort food dish with a hearty meat filling and a creamy mashed potato topping.',
      ingredients: ['1 lb ground beef', '1 onion, chopped', '2 carrots, chopped', '1 cup frozen peas', '1 cup beef broth', '1 tbsp tomato paste', '1 tsp Worcestershire sauce', '4 cups mashed potatoes', '2 tbsp butter', '1/4 cup milk', 'Salt and pepper to taste'],
      instructions: ['Preheat oven to 375°F (190°C).', 'In a large skillet, brown ground beef over medium heat. Drain off any excess grease.', 'Add onion and carrots to the skillet and cook until softened, about 5 minutes.', 'Stir in frozen peas, beef broth, tomato paste, and Worcestershire sauce. Season with salt and pepper.', 'Bring to a simmer and cook until sauce has thickened, about 10 minutes.', 'In a separate bowl, combine mashed potatoes, butter, and milk. Season with salt and pepper.', 'Transfer meat mixture to a baking dish and spread mashed potatoes evenly over the top.', 'Bake for 20-25 minutes, or until potatoes are golden brown.', 'Let cool slightly before serving.'],
      prepTime: '25 mins',
      cookTime: '40 mins',
      servings: 6,
      calories: 520,
      tags: ['comfort food', 'meat', 'potatoes', 'dinner'],
      difficulty: "Medium",
      mood: 'tired',
      aiSuggestion: "Add a layer of shredded cheese under the mashed potatoes for a cheesy surprise.",
      nutritionAnalysis: "High in protein and carbohydrates. Provides a good source of iron.",
      cookingTips: ["Use leftover mashed potatoes to save time.", "Top with a sprinkle of paprika for added flavor."]
    },
    {
      id: 'comfort4',
      name: 'Creamy Tomato Soup',
      description: 'A rich and velvety tomato soup that pairs perfectly with a grilled cheese sandwich.',
      ingredients: ['2 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '2 (28 oz) cans crushed tomatoes', '2 cups vegetable broth', '1/2 cup heavy cream', '2 tbsp butter', '2 tbsp sugar', 'Salt and pepper to taste'],
      instructions: ['Heat olive oil in a large pot over medium heat. Add onion and cook until softened, about 5 minutes.', 'Add garlic and cook for 1 minute more.', 'Add crushed tomatoes, vegetable broth, and sugar. Bring to a simmer.', 'Reduce heat and simmer for 15 minutes.', 'Use an immersion blender to puree the soup until smooth.', 'Stir in heavy cream and butter until melted and combined.', 'Season with salt and pepper to taste.', 'Serve hot, garnished with fresh basil if desired.'],
      prepTime: '10 mins',
      cookTime: '25 mins',
      servings: 6,
      calories: 220,
      tags: ['comfort food', 'soup', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'homesick',
      aiSuggestion: "For a rustic version, leave some chunks instead of blending completely smooth.",
      nutritionAnalysis: "Good source of vitamins A and C from tomatoes. Contains calcium from cream.",
      cookingTips: ["Use fire-roasted tomatoes for a deeper flavor.", "Make it vegan by substituting coconut cream for heavy cream."]
    },
    {
      id: 'comfort5',
      name: 'Homestyle Meatloaf',
      description: 'A classic American comfort food that brings back memories of family dinners.',
      ingredients: ['2 lbs ground beef', '1 onion, finely chopped', '2 cloves garlic, minced', '2 eggs', '1 cup breadcrumbs', '1/2 cup milk', '1/3 cup ketchup', '2 tbsp Worcestershire sauce', '1 tsp dried thyme', 'Salt and pepper to taste', '1/4 cup ketchup (for topping)'],
      instructions: ['Preheat oven to 350°F (175°C).', 'In a large bowl, combine all ingredients except the topping ketchup.', 'Mix well but don\'t overmix, which can make the meatloaf tough.', 'Shape the mixture into a loaf and place in a loaf pan or on a rimmed baking sheet.', 'Spread ketchup on top of the meatloaf.', 'Bake for 1 hour to 1 hour 15 minutes, or until the internal temperature reaches 160°F (71°C).', 'Let rest for 10 minutes before slicing and serving.'],
      prepTime: '15 mins',
      cookTime: '1 hour 15 mins',
      servings: 8,
      calories: 380,
      tags: ['comfort food', 'meat', 'dinner', 'american'],
      difficulty: "Easy",
      mood: 'nostalgic-childhood',
      aiSuggestion: "Add grated carrots or zucchini for extra vegetables and moisture.",
      nutritionAnalysis: "High in protein and iron. Good source of B vitamins.",
      cookingTips: ["Use a mix of ground beef and pork for more flavor.", "Line your loaf pan with parchment paper for easy removal."]
    },
    {
      id: 'comfort6',
      name: 'Loaded Baked Potato Soup',
      description: 'A hearty soup that transforms the beloved loaded baked potato into a comforting bowl of goodness.',
      ingredients: ['4 large russet potatoes, peeled and diced', '4 tbsp butter', '1/2 cup chopped onion', '1/4 cup flour', '4 cups chicken broth', '2 cups milk', '1 cup sour cream', '1 cup shredded cheddar cheese', '8 slices bacon, cooked and crumbled', '4 green onions, sliced', 'Salt and pepper to taste'],
      instructions: ['In a large pot, melt butter over medium heat. Add onion and cook until tender.', 'Add flour to the pot and stir until smooth. Gradually add chicken broth and milk, stirring constantly.', 'Add potatoes and bring to a boil. Reduce heat and simmer until potatoes are tender, about 15-20 minutes.', 'Mash some of the potatoes in the pot to thicken the soup. Stir in sour cream and half of the cheese.', 'Season with salt and pepper to taste.', 'Serve hot, topped with remaining cheese, bacon, and green onions.'],
      prepTime: '15 mins',
      cookTime: '30 mins',
      servings: 6,
      calories: 420,
      tags: ['comfort food', 'soup', 'potatoes', 'easy'],
      difficulty: "Easy",
      mood: 'cozy',
      aiSuggestion: "For extra indulgence, add a swirl of truffle oil on top before serving.",
      nutritionAnalysis: "High in calcium and potassium. Contains significant amount of protein.",
      cookingTips: ["Leave the skin on some potatoes for added texture and nutrition.", "For a lighter version, use turkey bacon and low-fat sour cream."]
    }
  ],
  
  breakfast: [
    {
      id: 'breakfast1',
      name: 'Fluffy Pancakes',
      description: 'Light and fluffy pancakes that are perfect for a weekend breakfast.',
      ingredients: ['1 cup flour', '1 cup milk', '1 egg', '1 tbsp sugar', '2 tbsp butter'],
      instructions: ['Mix ingredients in a bowl until just combined.', 'Heat a lightly greased griddle over medium heat.', 'Pour 1/4 cup of batter onto the griddle for each pancake.', 'Cook until bubbles form, then flip and cook until golden.', 'Serve with maple syrup or your favorite toppings.'],
      prepTime: '5 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 200,
      tags: ['breakfast', 'sweet', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add blueberries for extra flavor and antioxidants.",
      nutritionAnalysis: "High in carbohydrates, moderate protein content.",
      cookingTips: ["Don't overmix the batter - lumps are okay!", "Let the batter rest for 5 minutes before cooking."]
    },
    {
      id: 'breakfast2',
      name: 'Classic Omelette',
      description: 'A versatile and protein-rich breakfast that can be customized with your favorite fillings.',
      ingredients: ['2 eggs', '1/4 cup milk', 'Salt and pepper to taste', 'Optional fillings: cheese, ham, vegetables'],
      instructions: ['Whisk eggs with milk, salt, and pepper.', 'Heat a lightly oiled pan over medium heat.', 'Pour egg mixture into the pan.', 'As the omelette begins to set, add your choice of fillings to one half.', 'Fold the omelette in half and cook until heated through and set.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 250,
      tags: ['breakfast', 'savory', 'easy'],
      difficulty: "Easy",
      mood: 'energetic',
      aiSuggestion: "Add a dash of hot sauce for a spicy kick.",
      nutritionAnalysis: "High in protein and vitamins. Good source of healthy fats.",
      cookingTips: ["Use a non-stick pan for best results.", "Don't overcook the omelette to keep it moist."]
    },
    {
      id: 'breakfast3',
      name: 'Hearty Breakfast Burrito',
      description: 'A filling breakfast burrito loaded with protein and flavor to start your day right.',
      ingredients: ['1 large tortilla', '2 eggs, scrambled', '1/4 cup cheese', '1/4 cup salsa', 'Optional fillings: bacon, sausage, avocado'],
      instructions: ['Warm the tortilla in a pan or microwave.', 'Scramble the eggs and set aside.', 'Place the scrambled eggs in the center of the tortilla.', 'Top with cheese, salsa, and any optional fillings.', 'Fold in the sides of the tortilla and roll up tightly.', 'Serve immediately.'],
      prepTime: '10 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 400,
      tags: ['breakfast', 'savory', 'easy'],
      difficulty: "Easy",
      mood: 'hungry',
      aiSuggestion: "Add a dollop of sour cream for extra creaminess.",
      nutritionAnalysis: "High in protein and carbohydrates. Good source of calcium.",
      cookingTips: ["Warm the tortilla to make it more pliable.", "Don't overfill the burrito to prevent tearing."]
    },
    {
      id: 'breakfast4',
      name: 'Trendy Avocado Toast',
      description: 'Simple yet nutritious avocado toast that is perfect for a quick breakfast or light meal.',
      ingredients: ['1 slice of bread', '1/2 avocado, mashed', 'Salt and pepper to taste', 'Optional toppings: red pepper flakes, everything bagel seasoning, fried egg'],
      instructions: ['Toast the bread to your liking.', 'Mash the avocado in a bowl and season with salt and pepper.', 'Spread the mashed avocado on the toast.', 'Top with your choice of toppings.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '2 mins',
      servings: 1,
      calories: 200,
      tags: ['breakfast', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'stressed',
      aiSuggestion: "Add a squeeze of lemon juice to prevent the avocado from browning.",
      nutritionAnalysis: "High in healthy fats and fiber. Good source of vitamins.",
      cookingTips: ["Use a ripe avocado for best results.", "Toast the bread to your preference for ideal texture."]
    },
    {
      id: 'breakfast5',
      name: 'Eggs Benedict',
      description: 'A classic brunch dish featuring poached eggs, Canadian bacon, and hollandaise sauce on an English muffin.',
      ingredients: ['4 English muffins, split', '8 slices Canadian bacon', '8 eggs', '2 tsp white vinegar', '4 egg yolks', '1 tbsp lemon juice', '1/2 cup unsalted butter, melted', 'Pinch of cayenne pepper', 'Salt to taste', 'Chopped fresh parsley for garnish'],
      instructions: ['For the hollandaise sauce: Whisk egg yolks and lemon juice in a stainless steel bowl. Place the bowl over a saucepan containing barely simmering water. Whisk rapidly while slowly drizzling in the melted butter. Continue whisking until the sauce thickens. Remove from heat and add cayenne and salt.', 'Fill a large saucepan with 3-4 inches of water. Add vinegar and bring to a simmer. Crack an egg into a small bowl and carefully slide it into the simmering water. Repeat with remaining eggs. Cook for 2-3 minutes. Remove with a slotted spoon.', 'Toast the English muffins and lightly butter them. Top each muffin half with a slice of Canadian bacon.', 'Place a poached egg on top of each muffin half and drizzle with hollandaise sauce.', 'Garnish with chopped parsley and serve immediately.'],
      prepTime: '15 mins',
      cookTime: '15 mins',
      servings: 4,
      calories: 450,
      tags: ['breakfast', 'brunch', 'eggs', 'special occasion'],
      difficulty: "Medium",
      mood: 'sophisticated',
      aiSuggestion: "Try using smoked salmon instead of Canadian bacon for a luxurious twist.",
      nutritionAnalysis: "High in protein and healthy fats. Good source of vitamin D and calcium.",
      cookingTips: ["The key to perfect poached eggs is using fresh eggs and maintaining a gentle simmer.", "For a foolproof hollandaise, you can use a blender method."]
    },
    {
      id: 'breakfast6',
      name: 'Overnight Oats',
      description: 'A make-ahead breakfast that\'s perfect for busy mornings and can be customized with your favorite toppings.',
      ingredients: ['1 cup rolled oats', '1 cup milk or plant-based alternative', '1 tbsp chia seeds', '1 tbsp honey or maple syrup', '1/2 tsp vanilla extract', 'Pinch of salt', 'Toppings: fresh fruit, nuts, seeds, nut butter'],
      instructions: ['In a jar or container, combine oats, milk, chia seeds, honey or maple syrup, vanilla extract, and salt.', 'Stir well to combine.', 'Cover and refrigerate overnight, or for at least 4 hours.', 'In the morning, add your favorite toppings and enjoy cold or warm it up if preferred.'],
      prepTime: '5 mins',
      cookTime: '0 mins (4 hours soaking)',
      servings: 1,
      calories: 350,
      tags: ['breakfast', 'healthy', 'easy', 'make-ahead'],
      difficulty: "Easy",
      mood: 'busy',
      aiSuggestion: "Prepare multiple jars at once for breakfast throughout the week.",
      nutritionAnalysis: "High in fiber and complex carbohydrates. Good source of protein when made with dairy milk.",
      cookingTips: ["Use a ratio of 1:1 oats to liquid for the perfect consistency.", "Toast the oats before soaking for a nuttier flavor."]
    },
    {
      id: 'breakfast7',
      name: 'Breakfast Smoothie Bowl',
      description: 'A nutritious and beautiful breakfast option that combines the convenience of a smoothie with the satisfaction of eating with a spoon.',
      ingredients: ['1 frozen banana', '1 cup frozen mixed berries', '1/2 cup Greek yogurt', '1/4 cup milk or plant-based alternative', '1 tbsp honey or maple syrup', 'Toppings: granola, fresh fruit, coconut flakes, nuts, seeds'],
      instructions: ['In a blender, combine frozen banana, berries, yogurt, milk, and sweetener.', 'Blend until smooth, but still thick. Add more liquid if needed, but keep it thick enough to eat with a spoon.', 'Pour into a bowl and artfully arrange toppings on top.', 'Eat immediately before it melts.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 300,
      tags: ['breakfast', 'healthy', 'fruit', 'easy'],
      difficulty: "Easy",
      mood: 'energetic',
      aiSuggestion: "Add a handful of spinach for extra nutrients without changing the taste significantly.",
      nutritionAnalysis: "Rich in antioxidants from berries. Good source of protein from Greek yogurt.",
      cookingTips: ["Freeze bananas when they're getting too ripe for the perfect smoothie base.", "Use frozen fruit instead of ice for a creamier texture."]
    },
    {
      id: 'breakfast8',
      name: 'Shakshuka',
      description: 'A Middle Eastern dish of eggs poached in a spiced tomato sauce, perfect for a hearty breakfast or brunch.',
      ingredients: ['2 tbsp olive oil', '1 onion, diced', '1 red bell pepper, diced', '2 cloves garlic, minced', '1 tsp cumin', '1 tsp paprika', '1/4 tsp cayenne pepper', '1 (28 oz) can diced tomatoes', 'Salt and pepper to taste', '6 eggs', '1/4 cup crumbled feta cheese', 'Fresh cilantro or parsley for garnish', 'Bread for serving'],
      instructions: ['Heat olive oil in a large skillet over medium heat. Add onion and bell pepper and cook until softened, about 5 minutes.', 'Add garlic, cumin, paprika, and cayenne and cook for 1 minute more.', 'Pour in diced tomatoes and their juices. Season with salt and pepper and simmer for 10 minutes.', 'Make 6 wells in the sauce and crack an egg into each well.', 'Cover and cook until eggs are set to your liking, about 5-8 minutes.', 'Sprinkle with feta cheese and cilantro or parsley. Serve hot with bread for dipping.'],
      prepTime: '10 mins',
      cookTime: '25 mins',
      servings: 6,
      calories: 200,
      tags: ['breakfast', 'brunch', 'mediterranean', 'eggs'],
      difficulty: "Medium",
      mood: 'adventurous',
      aiSuggestion: "Add spinach or kale to the tomato sauce for extra nutrients.",
      nutritionAnalysis: "High in protein from eggs. Good source of vitamins A and C from tomatoes and peppers.",
      cookingTips: ["Use a lid to help the eggs cook evenly.", "Serve with crusty bread or pita for soaking up the delicious sauce."]
    }
  ],
  
  lunch: [
    {
      id: 'lunch1',
      name: 'Classic Chicken Salad Sandwich',
      description: 'A timeless sandwich filled with creamy chicken salad for a satisfying lunch.',
      ingredients: ['2 slices of bread', '1/2 cup cooked chicken, shredded', '1/4 cup mayonnaise', '1/4 cup celery, chopped', 'Salt and pepper to taste'],
      instructions: ['In a bowl, mix together the shredded chicken, mayonnaise, and celery.', 'Season with salt and pepper.', 'Spread the chicken salad on one slice of bread.', 'Top with the other slice of bread.', 'Serve immediately.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 350,
      tags: ['lunch', 'savory', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a pinch of curry powder for extra flavor.",
      nutritionAnalysis: "High in protein. Good source of healthy fats.",
      cookingTips: ["Use leftover cooked chicken to save time.", "Toast the bread for added texture and flavor."]
    },
    {
      id: 'lunch2',
      name: 'Homemade Tomato Soup',
      description: 'A comforting tomato soup that pairs perfectly with a grilled cheese sandwich.',
      ingredients: ['1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '28 oz canned crushed tomatoes', '4 cups vegetable broth', '1 tsp sugar', 'Salt and pepper to taste', 'Optional toppings: croutons, basil, sour cream'],
      instructions: ['Heat the olive oil in a pot over medium heat.', 'Add the onion and garlic and cook until softened, about 5 minutes.', 'Stir in the crushed tomatoes, vegetable broth, and sugar.', 'Season with salt and pepper.', 'Bring to a simmer and cook for 15 minutes.', 'Blend the soup with an immersion blender until smooth.', 'Serve hot with your choice of toppings.'],
      prepTime: '10 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 150,
      tags: ['lunch', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'nostalgic',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in vitamins and antioxidants. Low in calories.",
      cookingTips: ["Use high-quality canned tomatoes for best results.", "Serve with a grilled cheese sandwich for a complete meal."]
    },
    {
      id: 'lunch3',
      name: 'Cheesy Quesadilla',
      description: 'A quick and easy quesadilla that makes for a perfect lunch or snack.',
      ingredients: ['2 tortillas', '1/2 cup cheese', 'Optional fillings: cooked chicken, black beans, corn, salsa'],
      instructions: ['Sprinkle cheese on one tortilla.', 'Add your choice of fillings on top of the cheese.', 'Top with the other tortilla.', 'Cook in a lightly oiled pan over medium heat until the cheese is melted and the tortillas are golden brown.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 400,
      tags: ['lunch', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'tired',
      aiSuggestion: "Add a dollop of sour cream or guacamole for extra flavor.",
      nutritionAnalysis: "High in protein and calcium. Good source of carbohydrates.",
      cookingTips: ["Use a variety of cheeses for a more complex flavor.", "Serve with a side of salsa or guacamole for dipping."]
    },
    {
      id: 'lunch4',
      name: 'Vietnamese Banh Mi Sandwich',
      description: 'A flavorful fusion sandwich featuring marinated protein, pickled vegetables, and fresh herbs on a crusty baguette.',
      ingredients: ['1 baguette, cut into sandwich-sized portions', '1/2 lb thinly sliced pork, chicken, or tofu, marinated and cooked', '1 carrot, julienned and pickled', '1/2 cucumber, thinly sliced', '1/4 cup cilantro, chopped', '2 tbsp mayonnaise', '1 tbsp sriracha or hot sauce (optional)', '1 tbsp soy sauce', '1 lime, juiced', 'Salt and pepper to taste'],
      instructions: ['Slice the baguette lengthwise, leaving one side attached as a hinge.', 'Spread mayonnaise on both sides of the bread.', 'Layer the cooked protein on the bottom half.', 'Top with pickled carrots, cucumber slices, and cilantro.', 'Drizzle with a mixture of soy sauce, lime juice, and sriracha if using.', 'Season with salt and pepper.', 'Close the sandwich and cut into portions.', 'Serve immediately.'],
      prepTime: '15 mins',
      cookTime: '5 mins',
      servings: 2,
      calories: 450,
      tags: ['lunch', 'sandwich', 'vietnamese', 'fusion'],
      difficulty: "Medium",
      mood: 'adventurous',
      aiSuggestion: "Add pickled daikon radish for authentic flavor.",
      nutritionAnalysis: "Good balance of protein and carbohydrates. Fresh vegetables provide vitamins and fiber.",
      cookingTips: ["Toast the baguette lightly for extra crunch.", "The pickled vegetables can be made a day ahead for better flavor."]
    }
  ],
  
  dinner: [
    {
      id: 'dinner1',
      name: 'Classic Beef Stew',
      description: 'A hearty and comforting stew that is perfect for a cozy dinner.',
      ingredients: ['1 lb beef chuck', '1 onion, chopped', '2 carrots, chopped', '2 celery stalks, chopped', '1/2 cup tomato paste', '1 cup beef broth', '1/2 cup red wine', '1/2 cup beef stock', '1/2 cup heavy cream', '1/2 cup chopped parsley', 'Salt and pepper to taste'],
      instructions: ['In a large pot, brown beef chuck over medium heat. Drain off any excess fat.', 'Add onion, carrots, and celery to the pot and cook until softened, about 5 minutes.', 'Stir in tomato paste and cook for 1 minute more.', 'Pour in beef broth, red wine, and beef stock. Season with salt and pepper.', 'Bring to a simmer and cook for 1 hour.', 'Stir in heavy cream and parsley. Cook for an additional 10 minutes.', 'Serve hot.'],
      prepTime: '15 mins',
      cookTime: '1 hour 10 mins',
      servings: 6,
      calories: 450,
      tags: ['dinner', 'meat', 'comfort', 'easy'],
      difficulty: "Easy",
      mood: 'tired',
      aiSuggestion: "Add a pinch of cumin for extra flavor.",
      nutritionAnalysis: "High in protein and carbohydrates. Provides a good source of iron.",
      cookingTips: ["Use a slow cooker for a more tender stew.", "Serve with a side of crusty bread for dipping."]
    },
    {
      id: 'dinner2',
      name: 'Vegetable Stir-Fry',
      description: 'A quick and easy stir-fry that is perfect for a busy dinner.',
      ingredients: ['1 lb mixed vegetables (e.g. bell peppers, broccoli, carrots)', '1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '1/2 cup soy sauce', '1/2 cup oyster sauce', '1/2 cup brown sugar', '1/4 cup cornstarch', '1/4 cup water', 'Salt and pepper to taste'],
      instructions: ['In a wok or large skillet, heat olive oil over high heat.', 'Add onion and garlic and cook until softened, about 1 minute.', 'Add mixed vegetables and stir-fry for 5 minutes.', 'Stir in soy sauce, oyster sauce, brown sugar, cornstarch, and water. Cook for an additional 2-3 minutes.', 'Season with salt and pepper to taste.', 'Serve hot.'],
      prepTime: '10 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 200,
      tags: ['dinner', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'hungry',
      aiSuggestion: "Add a handful of green onions for extra flavor.",
      nutritionAnalysis: "Good source of vitamins and minerals. Low in calories.",
      cookingTips: ["Use a wok for the best stir-fry results.", "Serve with a side of rice or noodles."]
    },
    {
      id: 'dinner3',
      name: 'Chicken and Rice',
      description: 'A classic American dish that is perfect for a cozy dinner.',
      ingredients: ['1 lb boneless, skinless chicken breasts', '1 cup cooked rice', '1/2 cup soy sauce', '1/2 cup brown sugar', '1/4 cup cornstarch', '1/4 cup water', 'Salt and pepper to taste'],
      instructions: ['In a wok or large skillet, heat olive oil over high heat.', 'Add chicken and cook until browned on both sides, about 5 minutes.', 'Stir in soy sauce, brown sugar, cornstarch, and water. Cook for an additional 2-3 minutes.', 'Season with salt and pepper to taste.', 'Serve hot with rice.'],
      prepTime: '10 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 300,
      tags: ['dinner', 'meat', 'american', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a pinch of ginger for extra flavor.",
      nutritionAnalysis: "High in protein and carbohydrates. Provides a good source of iron.",
      cookingTips: ["Use a wok for the best stir-fry results.", "Serve with a side of steamed vegetables."]
    }
  ],
  
  dessert: [
    {
      id: 'dessert1',
      name: 'Chocolate Cake',
      description: 'A rich and decadent chocolate cake that is perfect for a special occasion.',
      ingredients: ['1 cup all-purpose flour', '1/2 cup unsalted butter', '1/2 cup granulated sugar', '1/2 cup dark chocolate chips', '1/2 cup cocoa powder', '1 tsp baking soda', '1 tsp baking powder', '1/2 tsp salt', '1/2 cup milk', '1/2 cup vegetable oil', '2 large eggs', '1 tsp vanilla extract', '1/2 cup boiling water'],
      instructions: ['Preheat oven to 350°F (175°C).', 'In a large bowl, whisk together flour, butter, sugar, dark chocolate chips, cocoa powder, baking soda, baking powder, and salt.', 'In a separate bowl, whisk together milk, vegetable oil, eggs, and vanilla extract.', 'Gradually add wet ingredients to dry ingredients, stirring until just combined.', 'Pour batter into a greased 9x13 inch baking dish.', 'Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.', 'Let cool completely before slicing and serving.'],
      prepTime: '15 mins',
      cookTime: '30 mins',
      servings: 8,
      calories: 400,
      tags: ['dessert', 'chocolate', 'easy'],
      difficulty: "Easy",
      mood: 'proud',
      aiSuggestion: "Add a sprinkle of cocoa powder on top for extra flavor.",
      nutritionAnalysis: "High in carbohydrates and fat. Provides a good source of protein.",
      cookingTips: ["Use a stand mixer for easier mixing.", "Let the cake cool completely before frosting."]
    },
    {
      id: 'dessert2',
      name: 'Banana Bread',
      description: 'A moist and flavorful banana bread that is perfect for a weekend breakfast or snack.',
      ingredients: ['1 1/2 cups mashed ripe bananas', '1/2 cup granulated sugar', '1/2 cup all-purpose flour', '1/2 tsp baking soda', '1/2 tsp salt', '1/2 cup vegetable oil', '1 tsp vanilla extract'],
      instructions: ['Preheat oven to 350°F (175°C).', 'In a large bowl, mix together mashed bananas, sugar, flour, baking soda, and salt.', 'In a separate bowl, whisk together vegetable oil and vanilla extract.', 'Gradually add wet ingredients to dry ingredients, stirring until just combined.', 'Pour batter into a greased 9x5 inch loaf pan.', 'Bake for 50-55 minutes, or until a toothpick inserted into the center comes out clean.', 'Let cool completely before slicing and serving.'],
      prepTime: '10 mins',
      cookTime: '50 mins',
      servings: 6,
      calories: 200,
      tags: ['dessert', 'banana', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a sprinkle of cinnamon for extra flavor.",
      nutritionAnalysis: "High in carbohydrates and fiber. Provides a good source of vitamins.",
      cookingTips: ["Use ripe bananas for the best flavor.", "Let the bread cool completely before slicing."]
    },
    {
      id: 'dessert3',
      name: 'Strawberry Shortcake',
      description: 'A classic dessert that is perfect for a summer afternoon.',
      ingredients: ['1 cup sliced strawberries', '1/2 cup granulated sugar', '1/2 cup all-purpose flour', '1/2 tsp baking soda', '1/2 tsp salt', '1/2 cup vegetable oil', '1 tsp vanilla extract'],
      instructions: ['Preheat oven to 350°F (175°C).', 'In a large bowl, mix together sliced strawberries, sugar, flour, baking soda, and salt.', 'In a separate bowl, whisk together vegetable oil and vanilla extract.', 'Gradually add wet ingredients to dry ingredients, stirring until just combined.', 'Pour batter into a greased 9x5 inch loaf pan.', 'Bake for 50-55 minutes, or until a toothpick inserted into the center comes out clean.', 'Let cool completely before slicing and serving.'],
      prepTime: '10 mins',
      cookTime: '50 mins',
      servings: 6,
      calories: 200,
      tags: ['dessert', 'strawberry', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a sprinkle of cinnamon for extra flavor.",
      nutritionAnalysis: "High in carbohydrates and fiber. Provides a good source of vitamins.",
      cookingTips: ["Use ripe strawberries for the best flavor.", "Let the cake cool completely before frosting."]
    }
  ],
  
  quick: [
    {
      id: 'quick1',
      name: 'Quick Oatmeal',
      description: 'A quick and easy breakfast that is perfect for a busy morning.',
      ingredients: ['1 cup rolled oats', '1 cup milk or plant-based alternative', '1 tbsp chia seeds', '1 tbsp honey or maple syrup', '1/2 tsp vanilla extract', 'Pinch of salt'],
      instructions: ['In a jar or container, combine oats, milk, chia seeds, honey or maple syrup, vanilla extract, and salt.', 'Stir well to combine.', 'Cover and refrigerate overnight, or for at least 4 hours.', 'In the morning, add your favorite toppings and enjoy cold or warm it up if preferred.'],
      prepTime: '5 mins',
      cookTime: '0 mins (4 hours soaking)',
      servings: 1,
      calories: 350,
      tags: ['quick', 'breakfast', 'healthy', 'easy', 'make-ahead'],
      difficulty: "Easy",
      mood: 'busy',
      aiSuggestion: "Prepare multiple jars at once for breakfast throughout the week.",
      nutritionAnalysis: "High in fiber and complex carbohydrates. Good source of protein when made with dairy milk.",
      cookingTips: ["Use a ratio of 1:1 oats to liquid for the perfect consistency.", "Toast the oats before soaking for a nuttier flavor."]
    },
    {
      id: 'quick2',
      name: 'Quick Peanut Butter Banana Smoothie',
      description: 'A quick and easy smoothie that is perfect for a busy morning.',
      ingredients: ['1 banana', '1/2 cup peanut butter', '1/2 cup milk or plant-based alternative', '1/2 cup ice', '1/2 tsp honey or maple syrup'],
      instructions: ['In a blender, combine banana, peanut butter, milk, ice, and sweetener.', 'Blend until smooth, but still thick. Add more liquid if needed, but keep it thick enough to eat with a spoon.', 'Pour into a bowl and artfully arrange toppings on top.', 'Eat immediately before it melts.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 300,
      tags: ['quick', 'smoothie', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'energetic',
      aiSuggestion: "Add a handful of spinach for extra nutrients without changing the taste significantly.",
      nutritionAnalysis: "Rich in antioxidants from berries. Good source of protein from Greek yogurt.",
      cookingTips: ["Freeze bananas when they're getting too ripe for the perfect smoothie base.", "Use frozen fruit instead of ice for a creamier texture."]
    },
    {
      id: 'quick3',
      name: 'Quick Tomato Soup',
      description: 'A quick and easy tomato soup that is perfect for a busy morning.',
      ingredients: ['1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '28 oz canned crushed tomatoes', '4 cups vegetable broth', '1 tsp sugar', 'Salt and pepper to taste'],
      instructions: ['Heat olive oil in a pot over medium heat.', 'Add the onion and garlic and cook until softened, about 5 minutes.', 'Stir in the crushed tomatoes, vegetable broth, and sugar.', 'Season with salt and pepper.', 'Bring to a simmer and cook for 15 minutes.', 'Blend the soup with an immersion blender until smooth.', 'Serve hot.'],
      prepTime: '10 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 150,
      tags: ['quick', 'soup', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'nostalgic',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in vitamins and antioxidants. Low in calories.",
      cookingTips: ["Use high-quality canned tomatoes for best results.", "Serve with a grilled cheese sandwich for a complete meal."]
    }
  ],
  
  snack: [
    {
      id: 'snack1',
      name: 'Cheese and Crackers',
      description: 'A classic snack that is perfect for a quick and satisfying treat.',
      ingredients: ['1 cup cheese', '1 cup crackers'],
      instructions: ['Serve cheese and crackers on a plate.', 'Enjoy immediately.'],
      prepTime: '0 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['snack', 'cheese', 'crackers', 'easy'],
      difficulty: "Easy",
      mood: 'hungry',
      aiSuggestion: "Add a sprinkle of cheddar cheese for extra flavor.",
      nutritionAnalysis: "High in carbohydrates and fat. Provides a good source of protein.",
      cookingTips: ["Use a variety of cheeses for a more complex flavor."]
    },
    {
      id: 'snack2',
      name: 'Apple Slices',
      description: 'A healthy and refreshing snack that is perfect for a quick and satisfying treat.',
      ingredients: ['1 apple', '1 tbsp peanut butter', '1 tbsp honey or maple syrup'],
      instructions: ['Slice the apple and spread peanut butter on one side.', 'Top with honey or maple syrup.', 'Enjoy immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 150,
      tags: ['snack', 'apple', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'stressed',
      aiSuggestion: "Add a sprinkle of cinnamon for extra flavor.",
      nutritionAnalysis: "High in carbohydrates and fiber. Provides a good source of vitamins.",
      cookingTips: ["Use a ripe apple for the best flavor."]
    },
    {
      id: 'snack3',
      name: 'Greek Yogurt and Granola',
      description: 'A healthy and satisfying snack that is perfect for a quick and satisfying treat.',
      ingredients: ['1 cup Greek yogurt', '1/2 cup granola', '1/2 cup honey or maple syrup'],
      instructions: ['In a bowl, mix together Greek yogurt, granola, and honey or maple syrup.', 'Enjoy immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 300,
      tags: ['snack', 'yogurt', 'granola', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a sprinkle of chia seeds for extra fiber.",
      nutritionAnalysis: "High in carbohydrates and protein. Provides a good source of vitamins.",
      cookingTips: ["Use a variety of granola for a more complex flavor."]
    }
  ]
};

export const getAllRecipes = (): Recipe[] => {
  const allRecipes: Recipe[] = [];
  Object.values(recipesData).forEach(categoryRecipes => {
    allRecipes.push(...categoryRecipes);
  });
  return allRecipes;
};

export const getRecipeById = (id: string): Recipe | null => {
  const allRecipes = getAllRecipes();
  return allRecipes.find(recipe => recipe.id === id) || null;
};

export const getRecipesByMood = (moodId: string): Recipe[] => {
  return getAllRecipes().filter(recipe => recipe.mood === moodId);
};

export const searchRecipes = (query: string): Recipe[] => {
  const searchTerm = query.toLowerCase();
  return getAllRecipes().filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getChatbotResponse = (message: string, moodId: string | null): string => {
  const lowerMessage = message.toLowerCase();
  
  if (moodId) {
    const mood = moods.find(m => m.id === moodId);
    if (mood) {
      if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
        const recipes = getRecipesByMood(moodId);
        if (recipes.length > 0) {
          const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
          return `Based on your ${mood.name.toLowerCase()} mood, I recommend trying "${randomRecipe.name}". It's a great choice when you're feeling this way.`;
        }
      }
    }
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return 'Hello! How can I help with your recipe needs today?';
  } else if (lowerMessage.includes('help')) {
    return 'I can suggest recipes based on your mood, answer cooking questions, or help you find specific ingredients. Just ask!';
  } else if (lowerMessage.includes('thank')) {
    return "You're welcome! Enjoy your cooking and let me know if you need anything else.";
  } else if (lowerMessage.includes('ingredient') || lowerMessage.includes('substitute')) {
    return 'For ingredient substitutions, you can often use what you have on hand. For example, yogurt can replace sour cream, and different vegetables can be swapped based on what's available.';
  } else if (lowerMessage.includes('time') || lowerMessage.includes('quick')) {
    return 'Looking for something quick? Check out the recipes tagged "easy" or "quick" - they typically take less than 30 minutes to prepare.';
  } else if (lowerMessage.includes('difficul') || lowerMessage.includes('hard')) {
    return 'If you\'re new to cooking, start with recipes marked "Easy". Work your way up to "Medium" difficulty as you gain confidence.';
  }
  
  return "I'm here to help with recipe suggestions and cooking tips. Let me know if you're looking for something specific!";
};

export default recipesData;
