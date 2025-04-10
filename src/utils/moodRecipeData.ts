
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
  // New moods
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
  // Additional multicultural moods
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
  ],
  dinner: [
    {
      id: 'dinner1',
      name: 'Spaghetti and Meatballs',
      description: 'A classic Italian-American dish that is beloved by people of all ages.',
      ingredients: ['1 lb spaghetti', '1 lb ground beef', '1/2 cup breadcrumbs', '1/4 cup Parmesan cheese', '1 egg', '1 onion, chopped', '2 cloves garlic, minced', '28 oz canned crushed tomatoes', '1 tsp sugar', 'Salt and pepper to taste'],
      instructions: ['Cook spaghetti according to package directions.', 'In a bowl, mix together the ground beef, breadcrumbs, Parmesan cheese, egg, salt, and pepper.', 'Roll the mixture into meatballs.', 'In a pot, cook the onion and garlic until softened.', 'Stir in the crushed tomatoes, sugar, salt, and pepper.', 'Bring to a simmer and add the meatballs.', 'Cook for 20 minutes, or until the meatballs are cooked through.', 'Serve the meatballs and sauce over the spaghetti.'],
      prepTime: '20 mins',
      cookTime: '40 mins',
      servings: 6,
      calories: 550,
      tags: ['dinner', 'meat', 'pasta', 'comfort food'],
      difficulty: "Medium",
      mood: 'happy',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in protein and carbohydrates. Good source of iron.",
      cookingTips: ["Use high-quality canned tomatoes for best results.", "Serve with a side of garlic bread for a complete meal."]
    },
    {
      id: 'dinner2',
      name: 'Baked Salmon with Roasted Vegetables',
      description: 'A healthy and flavorful dinner option that is high in omega-3 fatty acids.',
      ingredients: ['4 salmon fillets', '1 tbsp olive oil', '1 lemon, sliced', '1 lb mixed vegetables, chopped (broccoli, carrots, bell peppers, etc.)', 'Salt and pepper to taste'],
      instructions: ['Preheat oven to 400°F (200°C).', 'Place the salmon fillets on a baking sheet.', 'Drizzle with olive oil and top with lemon slices.', 'In a bowl, toss the mixed vegetables with olive oil, salt, and pepper.', 'Spread the vegetables around the salmon fillets on the baking sheet.', 'Bake for 15-20 minutes, or until the salmon is cooked through and the vegetables are tender.', 'Serve immediately.'],
      prepTime: '15 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 400,
      tags: ['dinner', 'fish', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a sprinkle of herbs de Provence for extra flavor.",
      nutritionAnalysis: "High in protein and omega-3 fatty acids. Good source of vitamins.",
      cookingTips: ["Use fresh, high-quality salmon for best results.", "Serve with a side of quinoa or brown rice for a complete meal."]
    },
    {
      id: 'dinner3',
      name: 'Quick Chicken Stir-Fry',
      description: 'A versatile stir-fry that can be customized with your favorite vegetables and proteins.',
      ingredients: ['1 lb chicken breast, cut into bite-sized pieces', '1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '1 lb mixed vegetables, chopped (broccoli, carrots, bell peppers, etc.)', '1/4 cup soy sauce', '1 tbsp honey', '1 tbsp cornstarch', 'Salt and pepper to taste'],
      instructions: ['In a bowl, mix together the soy sauce, honey, and cornstarch.', 'Heat the olive oil in a wok or large skillet over high heat.', 'Add the chicken and cook until browned.', 'Add the onion and garlic and cook until softened.', 'Add the mixed vegetables and cook until tender-crisp.', 'Pour the sauce over the chicken and vegetables and cook until thickened.', 'Serve over rice or noodles.'],
      prepTime: '15 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 450,
      tags: ['dinner', 'meat', 'asian', 'easy'],
      difficulty: "Easy",
      mood: 'energetic',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in protein and vitamins. Moderate in carbohydrates.",
      cookingTips: ["Use a wok for best results.", "Serve with a side of steamed rice or noodles."]
    },
  ],
  dessert: [
    {
      id: 'dessert1',
      name: 'Classic Chocolate Chip Cookies',
      description: 'Irresistible cookies with the perfect balance of chewy centers and crisp edges.',
      ingredients: ['1 cup butter, softened', '3/4 cup sugar', '3/4 cup brown sugar', '2 eggs', '1 tsp vanilla extract', '2 1/4 cups flour', '1 tsp baking soda', '1 tsp salt', '2 cups chocolate chips'],
      instructions: ['Preheat oven to 375°F (190°C).', 'In a bowl, cream together the butter, sugar, and brown sugar.', 'Beat in the eggs and vanilla extract.', 'In a separate bowl, whisk together the flour, baking soda, and salt.', 'Gradually add the dry ingredients to the wet ingredients, mixing until just combined.', 'Stir in the chocolate chips.', 'Drop by rounded tablespoons onto a baking sheet.', 'Bake for 9-11 minutes, or until golden brown.', 'Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 24,
      calories: 150,
      tags: ['dessert', 'sweet', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a pinch of sea salt for extra flavor contrast.",
      nutritionAnalysis: "High in sugar and fat. Source of quick energy.",
      cookingTips: ["Use high-quality chocolate chips for best results.", "Don't overbake the cookies to keep them chewy."]
    },
    {
      id: 'dessert2',
      name: 'Homemade Apple Pie',
      description: 'A classic American dessert with a flaky crust and sweet apple filling.',
      ingredients: ['1 box refrigerated pie crusts', '6 apples, peeled and sliced', '3/4 cup sugar', '1/4 cup flour', '1 tsp cinnamon', '1/4 tsp nutmeg', '2 tbsp butter, cut into small pieces'],
      instructions: ['Preheat oven to 375°F (190°C).', 'Line a pie plate with one of the pie crusts.', 'In a bowl, mix together the apples, sugar, flour, cinnamon, and nutmeg.', 'Pour the apple mixture into the pie crust.', 'Dot with butter.', 'Top with the other pie crust.', 'Cut slits in the top crust to allow steam to escape.', 'Bake for 45-50 minutes, or until the crust is golden brown and the filling is bubbly.', 'Let cool completely before serving.'],
      prepTime: '20 mins',
      cookTime: '50 mins',
      servings: 8,
      calories: 350,
      tags: ['dessert', 'sweet', 'comfort food'],
      difficulty: "Medium",
      mood: 'nostalgic',
      aiSuggestion: "Add a scoop of vanilla ice cream for extra indulgence.",
      nutritionAnalysis: "High in sugar and carbohydrates. Good source of fiber from apples.",
      cookingTips: ["Use a variety of apples for a more complex flavor.", "Serve warm with a scoop of vanilla ice cream."]
    },
    {
      id: 'dessert3',
      name: 'Rich Chocolate Cake',
      description: 'A decadent chocolate cake that is perfect for celebrations or any time a chocolate craving strikes.',
      ingredients: ['2 cups sugar', '1 3/4 cups flour', '3/4 cup cocoa powder', '1 1/2 tsp baking powder', '1 1/2 tsp baking soda', '1 tsp salt', '1 cup buttermilk', '1/2 cup vegetable oil', '2 eggs', '1 tsp vanilla extract', '1 cup boiling water'],
      instructions: ['Preheat oven to 350°F (175°C).', 'Grease and flour a 9x13 inch baking pan.', 'In a bowl, whisk together the sugar, flour, cocoa powder, baking powder, baking soda, and salt.', 'Add the buttermilk, vegetable oil, eggs, and vanilla extract and mix until combined.', 'Gradually add the boiling water, mixing until smooth.', 'Pour the batter into the prepared baking pan.', 'Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.', 'Let cool completely before frosting.'],
      prepTime: '20 mins',
      cookTime: '35 mins',
      servings: 12,
      calories: 400,
      tags: ['dessert', 'sweet', 'chocolate'],
      difficulty: "Medium",
      mood: 'festive',
      aiSuggestion: "Add a layer of chocolate ganache for extra richness.",
      nutritionAnalysis: "High in sugar and fat. Good source of quick energy.",
      cookingTips: ["Use high-quality cocoa powder for best results.", "Serve with a scoop of vanilla ice cream or whipped cream."]
    },
  ],
  quick: [
    {
      id: 'quick1',
      name: 'Five-Minute Quesadilla',
      description: 'The ultimate quick meal or snack that requires minimal ingredients and preparation.',
      ingredients: ['2 tortillas', '1/2 cup shredded cheese', 'Optional: diced vegetables, cooked protein, salsa'],
      instructions: ['Place one tortilla in a non-stick pan over medium heat.', 'Sprinkle cheese and any optional ingredients over the tortilla.', 'Top with the other tortilla.', 'Cook for 2 minutes on each side or until golden and cheese is melted.', 'Cut into wedges and serve.'],
      prepTime: '2 mins',
      cookTime: '3 mins',
      servings: 1,
      calories: 300,
      tags: ['quick', 'easy', 'lunch'],
      difficulty: "Easy",
      mood: 'tired',
      aiSuggestion: "Add salsa or guacamole for extra flavor.",
      nutritionAnalysis: "High in calcium and protein from cheese.",
      cookingTips: ["Use a non-stick pan to prevent sticking.", "Keep heat medium to avoid burning."]
    },
    {
      id: 'quick2',
      name: 'Classic Peanut Butter Sandwich',
      description: 'The simplest comfort food that takes seconds to prepare but always satisfies.',
      ingredients: ['2 slices of bread', '2 tablespoons peanut butter', 'Optional: jelly, honey, or banana slices'],
      instructions: ['Spread peanut butter evenly on one slice of bread.', 'Add optional toppings if desired.', 'Top with the other slice of bread.', 'Cut in half if preferred.', 'Serve immediately.'],
      prepTime: '2 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['quick', 'easy', 'lunch'],
      difficulty: "Easy",
      mood: 'hungry',
      aiSuggestion: "Add jelly for a classic PB&J or banana slices for extra nutrition.",
      nutritionAnalysis: "High in protein and healthy fats from peanut butter.",
      cookingTips: ["Use your favorite type of bread.", "Toast the bread for extra texture."]
    },
    {
      id: 'quick3',
      name: 'Gourmet Microwave Popcorn',
      description: 'Transform plain microwave popcorn into a gourmet snack with creative seasonings.',
      ingredients: ['1 bag microwave popcorn', 'Optional toppings: melted butter, salt, nutritional yeast, herbs, spices'],
      instructions: ['Place the bag in the microwave and cook according to package directions.', 'Carefully open the bag when done, watch for hot steam.', 'Pour popcorn into a large bowl.', 'Add your preferred seasonings and toss to coat evenly.', 'Serve immediately.'],
      prepTime: '1 mins',
      cookTime: '3 mins',
      servings: 2,
      calories: 150,
      tags: ['quick', 'easy', 'snack'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Try different flavor combinations like Parmesan and herbs or cinnamon sugar.",
      nutritionAnalysis: "High in fiber, low in calories when not heavily buttered.",
      cookingTips: ["Listen carefully to avoid burning.", "Shake seasonings while popcorn is still hot so they stick better."]
    },
  ],
  snack: [
    {
      id: 'snack1',
      name: 'Layered Yogurt Parfait',
      description: 'A nutritious and visually appealing snack that can double as a light breakfast.',
      ingredients: ['1 cup Greek yogurt', '1/4 cup granola', '1/4 cup mixed berries', 'Optional: honey or maple syrup for sweetness'],
      instructions: ['In a glass or jar, add a layer of yogurt.', 'Top with a sprinkle of granola.', 'Add a layer of mixed berries.', 'Repeat layers until ingredients are used up.', 'Drizzle with honey or maple syrup if desired.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['snack', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'energetic',
      aiSuggestion: "Add a sprinkle of chia seeds or flaxseeds for extra nutrition.",
      nutritionAnalysis: "High in protein from Greek yogurt, antioxidants from berries.",
      cookingTips: ["Use frozen berries if fresh aren't available.", "Keep granola separate until serving to maintain crunchiness."]
    },
    {
      id: 'snack2',
      name: 'Homemade Trail Mix',
      description: 'A customizable snack that provides a good balance of protein, carbs, and healthy fats.',
      ingredients: ['1/2 cup nuts (almonds, walnuts, cashews, etc.)', '1/2 cup dried fruit (raisins, cranberries, apricots, etc.)', '1/4 cup seeds (pumpkin, sunflower, etc.)', '1/4 cup dark chocolate chips (optional)'],
      instructions: ['Combine all ingredients in a bowl and mix well.', 'Store in an airtight container for up to two weeks.', 'Portion into small bags for on-the-go snacking.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 200,
      tags: ['snack', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'adventurous',
      aiSuggestion: "Add a pinch of cinnamon or sea salt for extra flavor.",
      nutritionAnalysis: "Good source of protein, healthy fats, and fiber. Energy-dense.",
      cookingTips: ["Toast nuts before mixing for enhanced flavor.", "Balance sweet and savory components for the best taste."]
    },
    {
      id: 'snack3',
      name: 'Crispy Chickpeas',
      description: 'A crunchy, protein-packed snack that satisfies savory cravings.',
      ingredients: ['1 can chickpeas, drained and rinsed', '1 tbsp olive oil', '1/2 tsp salt', 'Optional seasonings: paprika, cumin, garlic powder, etc.'],
      instructions: ['Preheat oven to 400°F (200°C).', 'Pat chickpeas dry with a paper towel, removing any loose skins.', 'Toss with olive oil and seasonings.', 'Spread in a single layer on a baking sheet.', 'Bake for 20-30 minutes, or until golden and crispy, shaking the pan halfway through.', 'Let cool completely before storing in an airtight container.'],
      prepTime: '5 mins',
      cookTime: '25 mins',
      servings: 2,
      calories: 150,
      tags: ['snack', 'savory', 'healthy'],
      difficulty: "Easy",
      mood: 'hungry',
      aiSuggestion: "Try different spice blends like curry powder or taco seasoning for variety.",
      nutritionAnalysis: "High in fiber and plant-based protein. Good source of minerals.",
      cookingTips: ["Make sure chickpeas are completely dry before baking for maximum crispiness.", "They're done when they sound like marbles when shaken on the baking sheet."]
    },
  ],
  italian: [
    {
      id: 'italian1',
      name: 'Classic Margherita Pizza',
      description: 'A simple yet delicious pizza featuring the colors of the Italian flag.',
      ingredients: ['1 pizza dough', '1/4 cup tomato sauce', '8 oz fresh mozzarella, sliced', 'Fresh basil leaves', '2 tbsp olive oil', 'Salt to taste'],
      instructions: ['Preheat oven to 475°F (245°C).', 'Roll out pizza dough on a floured surface.', 'Spread tomato sauce evenly over the dough.', 'Arrange mozzarella slices on top.', 'Bake for 10-12 minutes until crust is golden and cheese is bubbly.', 'Remove from oven and immediately top with fresh basil leaves.', 'Drizzle with olive oil and sprinkle with salt.', 'Slice and serve immediately.'],
      prepTime: '15 mins',
      cookTime: '12 mins',
      servings: 4,
      calories: 300,
      tags: ['italian', 'dinner', 'vegetarian'],
      difficulty: "Medium",
      mood: 'romantic',
      aiSuggestion: "Add a drizzle of balsamic glaze for a sweet and tangy finish.",
      nutritionAnalysis: "Good source of calcium from cheese. Balanced carbohydrates and protein.",
      cookingTips: ["Use a pizza stone if available for a crispier crust.", "Less is more with toppings - don't overload the pizza."]
    },
    {
      id: 'italian2',
      name: 'Authentic Risotto',
      description: 'A creamy, luxurious rice dish that's worth the effort of constant stirring.',
      ingredients: ['1 1/2 cups Arborio rice', '6 cups chicken or vegetable broth, heated', '1/2 cup white wine', '1 onion, finely diced', '2 cloves garlic, minced', '3 tbsp butter', '1/2 cup grated Parmesan cheese', 'Salt and pepper to taste'],
      instructions: ['In a large pot, keep broth warm over low heat.', 'In a separate large pan, melt 2 tbsp butter over medium heat.', 'Add onion and cook until translucent, about 3 minutes.', 'Add garlic and cook for 30 seconds.', 'Add rice and stir for 1-2 minutes until grains are translucent at edges.', 'Add wine and stir until absorbed.', 'Begin adding hot broth 1/2 cup at a time, stirring constantly and allowing liquid to absorb before adding more.', 'Continue this process for about 18-20 minutes until rice is creamy but still al dente.', 'Remove from heat and stir in remaining butter and Parmesan cheese.', 'Season with salt and pepper to taste.', 'Let rest for 2 minutes before serving.'],
      prepTime: '10 mins',
      cookTime: '30 mins',
      servings: 4,
      calories: 380,
      tags: ['italian', 'dinner', 'comfort food'],
      difficulty: "Medium",
      mood: 'sophisticated',
      aiSuggestion: "Add sautéed mushrooms or peas for extra flavor and texture.",
      nutritionAnalysis: "High in carbohydrates. Good source of calcium from cheese.",
      cookingTips: ["Never rinse the rice - you need the starch for creaminess.", "Keep the broth hot to maintain consistent cooking temperature."]
    }
  ],
  mexican: [
    {
      id: 'mexican1',
      name: 'Authentic Guacamole',
      description: 'The perfect chunky guacamole with just the right amount of heat and zest.',
      ingredients: ['3 ripe avocados', '1 lime, juiced', '1/2 red onion, finely diced', '2 Roma tomatoes, diced', '1 jalapeño, seeds removed and minced', '1/4 cup cilantro, chopped', 'Salt to taste'],
      instructions: ['Cut avocados in half, remove pits, and scoop flesh into a bowl.', 'Mash avocados with a fork, leaving some chunks.', 'Add lime juice and mix to combine.', 'Fold in onion, tomatoes, jalapeño, and cilantro.', 'Season with salt to taste.', 'Serve immediately or cover tightly with plastic wrap (pressed directly onto the surface) and refrigerate.'],
      prepTime: '15 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 150,
      tags: ['mexican', 'appetizer', 'healthy'],
      difficulty: "Easy",
      mood: 'festive',
      aiSuggestion: "Add a pinch of cumin for extra depth of flavor.",
      nutritionAnalysis: "High in healthy fats from avocados. Good source of vitamins and minerals.",
      cookingTips: ["Use ripe but firm avocados for the best texture.", "Leave the avocado pit in the guacamole to help prevent browning."]
    },
    {
      id: 'mexican2',
      name: 'Street-Style Tacos',
      description: 'Simple, authentic tacos with fresh toppings and vibrant flavors.',
      ingredients: ['1 lb skirt steak, thinly sliced', '8 small corn tortillas', '1 white onion, diced', '1/2 cup cilantro, chopped', '2 limes, cut into wedges', '2 tbsp vegetable oil', '2 tsp chili powder', '1 tsp cumin', '1 tsp garlic powder', 'Salt and pepper to taste'],
      instructions: ['In a bowl, mix together chili powder, cumin, garlic powder, salt, and pepper.', 'Toss the sliced steak with the spice mixture.', 'Heat oil in a large skillet over high heat.', 'Add steak and cook for 3-4 minutes until browned and cooked through.', 'Warm tortillas in a dry skillet or directly over a gas flame.', 'Serve steak on tortillas, topped with diced onion and cilantro.', 'Serve with lime wedges on the side.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 320,
      tags: ['mexican', 'dinner', 'quick'],
      difficulty: "Easy",
      mood: 'adventurous',
      aiSuggestion: "Make a quick salsa with charred tomatoes, jalapeños, and onions for extra flavor.",
      nutritionAnalysis: "High in protein from steak. Moderate carbohydrates from tortillas.",
      cookingTips: ["Don't overcrowd the pan when cooking the steak to ensure proper browning.", "Double-stack the tortillas for authentic street-style presentation."]
    }
  ],
  asian: [
    {
      id: 'asian1',
      name: 'Easy Vegetable Stir-Fry',
      description: 'A quick and colorful stir-fry loaded with crisp vegetables in a savory sauce.',
      ingredients: ['2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas, etc.)', '2 tbsp vegetable oil', '2 cloves garlic, minced', '1 tbsp ginger, grated', '3 tbsp soy sauce', '1 tbsp honey', '1 tsp sesame oil', '1 tbsp cornstarch mixed with 2 tbsp water', 'Sesame seeds for garnish'],
      instructions: ['Prepare all vegetables by cutting into similar-sized pieces.', 'In a small bowl, whisk together soy sauce, honey, sesame oil, and cornstarch mixture.', 'Heat vegetable oil in a wok or large skillet over high heat.', 'Add garlic and ginger and stir-fry for 30 seconds until fragrant.', 'Add vegetables, starting with the firmer ones (carrots, broccoli), and stir-fry for 2 minutes.', 'Add the softer vegetables and continue to stir-fry for 2-3 more minutes until crisp-tender.', 'Pour in the sauce and stir continuously until sauce thickens, about 1 minute.', 'Garnish with sesame seeds and serve over rice or noodles.'],
      prepTime: '15 mins',
      cookTime: '8 mins',
      servings: 4,
      calories: 180,
      tags: ['asian', 'healthy', 'vegetarian', 'quick'],
      difficulty: "Easy",
      mood: 'healthy-minded',
      aiSuggestion: "Add tofu or edamame for extra protein.",
      nutritionAnalysis: "Low in calories, high in vitamins and minerals from vegetables.",
      cookingTips: ["Cut vegetables in uniform sizes for even cooking.", "Don't overcook - vegetables should remain crisp and colorful."]
    },
    {
      id: 'asian2',
      name: 'Homemade Ramen',
      description: 'A comforting bowl of ramen with rich broth and customizable toppings.',
      ingredients: ['4 cups chicken or vegetable broth', '2 packages ramen noodles (discard seasoning packets)', '2 cloves garlic, minced', '1 tbsp ginger, grated', '2 tbsp soy sauce', '1 tbsp miso paste', '1 tbsp sesame oil', 'Toppings: soft-boiled eggs, sliced green onions, corn, bean sprouts, nori sheets, etc.'],
      instructions: ['In a large pot, bring broth to a simmer.', 'Add garlic, ginger, soy sauce, and miso paste. Simmer for 10 minutes.', 'Meanwhile, cook ramen noodles according to package instructions, minus 1 minute.', 'Drain noodles and divide between serving bowls.', 'Ladle hot broth over noodles.', 'Arrange your choice of toppings on top.', 'Drizzle with sesame oil and serve immediately.'],
      prepTime: '15 mins',
      cookTime: '15 mins',
      servings: 2,
      calories: 400,
      tags: ['asian', 'comfort food', 'soup'],
      difficulty: "Medium",
      mood: 'cozy',
      aiSuggestion: "Add a tablespoon of tahini to the broth for extra richness.",
      nutritionAnalysis: "Moderate in carbohydrates from noodles. Good balance of proteins and vegetables with toppings.",
      cookingTips: ["Don't overcook the noodles as they'll continue cooking in the hot broth.", "For a spicy version, add chili oil or sriracha."]
    }
  ],
  mediterranean: [
    {
      id: 'mediterranean1',
      name: 'Greek Salad',
      description: 'A refreshing and colorful salad featuring the bright flavors of the Mediterranean.',
      ingredients: ['1 English cucumber, diced', '2 large tomatoes, diced', '1 red onion, thinly sliced', '1 cup kalamata olives', '8 oz feta cheese, cubed', '1/4 cup extra virgin olive oil', '2 tbsp red wine vinegar', '1 tsp dried oregano', 'Salt and pepper to taste'],
      instructions: ['Combine cucumber, tomatoes, red onion, and olives in a large bowl.', 'In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.', 'Pour dressing over the salad and toss gently to combine.', 'Add feta cheese and toss very gently.', 'Let sit for 10 minutes to allow flavors to meld.', 'Serve at room temperature for best flavor.'],
      prepTime: '15 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 280,
      tags: ['mediterranean', 'healthy', 'salad', 'vegetarian'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a pinch of sumac for authentic Mediterranean flavor.",
      nutritionAnalysis: "Good source of healthy fats from olive oil and feta. Rich in vitamins from fresh vegetables.",
      cookingTips: ["Use the freshest vegetables possible for best flavor.", "Don't substitute the kalamata olives - they're essential for authentic flavor."]
    },
    {
      id: 'mediterranean2',
      name: 'Homemade Hummus',
      description: 'Creamy, smooth hummus that's better than store-bought and perfect for dipping or spreading.',
      ingredients: ['1 can (15 oz) chickpeas, drained and rinsed', '1/4 cup tahini', '2 tbsp olive oil, plus more for serving', '2 cloves garlic', 'Juice of 1 lemon', '1/2 tsp ground cumin', '2-3 tbsp cold water', 'Salt to taste', 'Paprika and chopped parsley for garnish'],
      instructions: ['Combine chickpeas, tahini, olive oil, garlic, lemon juice, and cumin in a food processor.', 'Process until smooth, adding cold water as needed to reach desired consistency.', 'Season with salt to taste.', 'Transfer to a serving bowl and create a shallow well in the center.', 'Drizzle with additional olive oil and sprinkle with paprika and chopped parsley.', 'Serve with pita bread, vegetable sticks, or as a spread.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 200,
      tags: ['mediterranean', 'appetizer', 'healthy', 'vegetarian'],
      difficulty: "Easy",
      mood: 'healthy-minded',
      aiSuggestion: "For extra smooth hummus, remove the skins from the chickpeas before processing.",
      nutritionAnalysis: "Good source of plant-based protein and fiber. Healthy fats from tahini and olive oil.",
      cookingTips: ["Use ice-cold water for the smoothest texture.", "Let the food processor run for a full 3-5 minutes for ultra-creamy hummus."]
    }
  ],
  vegan: [
    {
      id: 'vegan1',
      name: 'Buddha Bowl',
      description: 'A nourishing, colorful bowl packed with plant-based goodness.',
      ingredients: ['1 cup quinoa, cooked', '1 sweet potato, diced and roasted', '1 cup chickpeas, roasted', '1 avocado, sliced', '1 cup mixed greens', '1/2 cup red cabbage, shredded', '1/4 cup tahini', '2 tbsp lemon juice', '1 tbsp maple syrup', 'Water to thin', 'Salt and pepper to taste'],
      instructions: ['Arrange quinoa in the bottom of two bowls.', 'Arrange sweet potato, chickpeas, avocado, mixed greens, and red cabbage on top.', 'In a small bowl, whisk together tahini, lemon juice, maple syrup, and enough water to create a pourable consistency.', 'Season dressing with salt and pepper.', 'Drizzle dressing over bowls and serve.'],
      prepTime: '20 mins',
      cookTime: '25 mins',
      servings: 2,
      calories: 550,
      tags: ['vegan', 'healthy', 'dinner'],
      difficulty: "Easy",
      mood: 'healthy-minded',
      aiSuggestion: "Add a sprinkle of nutritional yeast for a cheesy flavor without dairy.",
      nutritionAnalysis: "Well-balanced meal with protein from chickpeas and quinoa. Healthy fats from avocado.",
      cookingTips: ["Batch roast sweet potatoes and chickpeas to make assembly quicker.", "Add a fermented element like sauerkraut for gut health benefits."]
    },
    {
      id: 'vegan2',
      name: 'Creamy Mushroom Pasta',
      description: 'A rich, satisfying pasta dish that happens to be completely plant-based.',
      ingredients: ['8 oz pasta of choice', '1 lb mushrooms, sliced', '1 onion, diced', '3 cloves garlic, minced', '1 cup cashews, soaked for 4 hours', '1 cup vegetable broth', '2 tbsp nutritional yeast', '1 tbsp lemon juice', '1 tsp thyme', 'Salt and pepper to taste', '2 tbsp olive oil'],
      instructions: ['Cook pasta according to package instructions. Reserve 1/2 cup pasta water.', 'In a blender, combine soaked cashews, vegetable broth, nutritional yeast, and lemon juice. Blend until completely smooth.', 'Heat olive oil in a large skillet over medium heat.', 'Add onion and cook until translucent, about 5 minutes.', 'Add garlic and cook for 30 seconds.', 'Add mushrooms and cook until they release their liquid and begin to brown, about 7-8 minutes.', 'Pour in cashew cream sauce and thyme. Stir to combine.', 'Simmer for 5 minutes until slightly thickened.', 'Add cooked pasta and toss to coat, adding reserved pasta water if needed to thin the sauce.', 'Season with salt and pepper to taste.'],
      prepTime: '15 mins (plus cashew soaking time)',
      cookTime: '20 mins',
      servings: 4,
      calories: 420,
      tags: ['vegan', 'dinner', 'pasta'],
      difficulty: "Medium",
      mood: 'indulgent',
      aiSuggestion: "For a shortcut, pour boiling water over cashews and soak for 30 minutes instead of 4 hours.",
      nutritionAnalysis: "Good source of plant-based protein from cashews. Rich in B vitamins from nutritional yeast.",
      cookingTips: ["Don't crowd the mushrooms in the pan or they'll steam instead of brown.", "For extra umami flavor, add a tablespoon of miso paste to the sauce."]
    },
    {
      id: 'vegan3',
      name: 'Rainbow Spring Rolls',
      description: 'Fresh, crunchy spring rolls filled with colorful vegetables and served with a zesty dipping sauce.',
      ingredients: ['8 rice paper wrappers', '1 red bell pepper, julienned', '1 yellow bell pepper, julienned', '1 cucumber, julienned', '1 carrot, julienned', '1 avocado, sliced', '1 cup purple cabbage, shredded', '1 cup fresh herbs (mint, cilantro, basil)', 'For sauce: 3 tbsp peanut butter, 1 tbsp soy sauce, 1 tbsp lime juice, 1 tsp maple syrup, water to thin'],
      instructions: ['Prepare all vegetables and arrange on a work surface.', 'Fill a large, shallow dish with warm water.', 'Dip one rice paper wrapper in water for 10-15 seconds until pliable.', 'Lay wrapper on a clean, damp surface.', 'Arrange a small amount of each vegetable and herb in the center of the wrapper.', 'Fold in the sides, then roll tightly from the bottom up.', 'Repeat with remaining wrappers.', 'For the sauce, whisk together peanut butter, soy sauce, lime juice, and maple syrup. Add water as needed for desired consistency.', 'Serve spring rolls with dipping sauce.'],
      prepTime: '30 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 180,
      tags: ['vegan', 'appetizer', 'healthy', 'raw'],
      difficulty: "Medium",
      mood: 'creative',
      aiSuggestion: "Add thin slices of mango for a sweet-savory contrast.",
      nutritionAnalysis: "Low in calories, high in fiber and vitamins from fresh vegetables.",
      cookingTips: ["Don't oversoak the rice paper or it will tear easily.", "Double up on rice papers for stronger rolls if you're new to rolling."]
    }
  ],
};

// Function to get all recipes from all categories
export const getAllRecipes = (): Recipe[] => {
  const allRecipes: Recipe[] = [];
  
  for (const category in recipesData) {
    if (Object.prototype.hasOwnProperty.call(recipesData, category)) {
      allRecipes.push(...recipesData[category]);
    }
  }
  
  return allRecipes;
};

// Function to get recipes by mood
export const getRecipesByMood = (mood: string): Recipe[] => {
  const allRecipes = getAllRecipes();
  return allRecipes.filter(recipe => recipe.mood === mood);
};

// Function to search recipes by name, ingredients, or tags
export const searchRecipes = (searchTerm: string): Recipe[] => {
  const allRecipes = getAllRecipes();
  const term = searchTerm.toLowerCase();
  
  return allRecipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(term);
    const descriptionMatch = recipe.description.toLowerCase().includes(term);
    const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term));
    const tagsMatch = recipe.tags.some(tag => tag.toLowerCase().includes(term));
    
    return nameMatch || descriptionMatch || ingredientsMatch || tagsMatch;
  });
};

// Function to get similar recipes based on tags
export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const allRecipes = getAllRecipes();
  const currentRecipe = allRecipes.find(recipe => recipe.id === recipeId);
  
  if (!currentRecipe) {
    return [];
  }
  
  // Get recipes with similar tags, excluding the current recipe
  const similarRecipes = allRecipes
    .filter(recipe => recipe.id !== recipeId)
    .map(recipe => {
      // Count how many tags match
      const matchingTags = recipe.tags.filter(tag => currentRecipe.tags.includes(tag));
      return {
        recipe,
        matchCount: matchingTags.length
      };
    })
    .filter(item => item.matchCount > 0) // Only include recipes with at least one matching tag
    .sort((a, b) => b.matchCount - a.matchCount) // Sort by number of matching tags
    .map(item => item.recipe) // Get just the recipe objects
    .slice(0, limit); // Limit the number of results
  
  return similarRecipes;
};

// Export the recipes data for direct access
export { recipesData };

