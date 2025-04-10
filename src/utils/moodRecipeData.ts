
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
      cookingTips: ["Use frozen berries if fresh aren't available.", "Keep granola separate until serving to maintain crunch."]
    },
    {
      id: 'snack2',
      name: 'Energy-Boosting Trail Mix',
      description: 'A customizable mix of nuts, dried fruits and treats for on-the-go energy.',
      ingredients: ['1/4 cup mixed nuts (almonds, walnuts, cashews)', '1/4 cup dried fruits (raisins, cranberries, apricots)', '1/4 cup dark chocolate chips', 'Optional: seeds, coconut flakes, cereal'],
      instructions: ['Combine all ingredients in a bowl.', 'Mix thoroughly until evenly distributed.', 'Store in an airtight container or portion into individual servings.', 'Enjoy whenever you need a quick energy boost.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 300,
      tags: ['snack', 'easy', 'healthy'],
      difficulty: "Easy",
      mood: 'adventurous',
      aiSuggestion: "Add spices like cinnamon or cardamom for extra flavor.",
      nutritionAnalysis: "High in healthy fats and fiber. Good source of energy.",
      cookingTips: ["Toast nuts for enhanced flavor.", "Customize with your favorite mix-ins."]
    },
    {
      id: 'snack3',
      name: 'Crispy Baked Chickpeas',
      description: 'A crunchy, savory snack that's packed with protein and fiber.',
      ingredients: ['1 can chickpeas, drained and rinsed', '1 tbsp olive oil', '1/2 tsp salt', 'Optional seasonings: paprika, cumin, garlic powder'],
      instructions: ['Preheat oven to 400°F (200°C).', 'Pat chickpeas dry with paper towels.', 'Toss chickpeas with olive oil and seasonings.', 'Spread in a single layer on a baking sheet.', 'Bake for 20-30 minutes, stirring halfway through, until crispy.', 'Let cool completely for maximum crispness.'],
      prepTime: '5 mins',
      cookTime: '25 mins',
      servings: 2,
      calories: 150,
      tags: ['snack', 'healthy', 'vegan'],
      difficulty: "Easy",
      mood: 'stressed',
      aiSuggestion: "Try different seasoning combinations like ranch or taco seasoning.",
      nutritionAnalysis: "High in protein and fiber. Low in fat.",
      cookingTips: ["Make sure to dry chickpeas thoroughly.", "Store in an airtight container to maintain crispness."]
    }
  ],
  // New multicuisine recipes
  italian: [
    {
      id: 'italian1',
      name: 'Authentic Margherita Pizza',
      description: 'A classic Italian pizza featuring the colors of the Italian flag: red tomatoes, white mozzarella, and green basil.',
      ingredients: ['Pizza dough', 'San Marzano tomatoes', 'Fresh mozzarella', 'Fresh basil leaves', 'Extra virgin olive oil', 'Salt'],
      instructions: ['Preheat oven to 500°F (260°C) with a pizza stone if available.', 'Stretch the pizza dough into a 12-inch circle.', 'Spread crushed San Marzano tomatoes over the dough.', 'Tear fresh mozzarella into pieces and distribute over the pizza.', 'Bake for 8-10 minutes until crust is golden and cheese is bubbly.', 'Top with fresh basil leaves and a drizzle of olive oil.', 'Slice and serve immediately.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 2,
      calories: 350,
      tags: ['italian', 'dinner', 'vegetarian'],
      difficulty: "Medium",
      mood: 'wanderlust',
      aiSuggestion: "Use high-quality ingredients for authentic Italian flavor.",
      nutritionAnalysis: "Good source of carbohydrates and calcium. Moderate in calories.",
      cookingTips: ["A hot oven is key to great pizza.", "Don't overload with toppings for best results."]
    },
    {
      id: 'italian2',
      name: 'Creamy Risotto with Mushrooms',
      description: 'A northern Italian rice dish cooked slowly to creamy perfection with earthy mushrooms.',
      ingredients: ['1½ cups Arborio rice', '4 cups vegetable or chicken broth', '½ cup white wine', '1 onion, finely diced', '2 cups mushrooms, sliced', '½ cup Parmesan cheese', '2 tbsp butter', 'Fresh parsley', 'Salt and pepper'],
      instructions: ['Heat broth in a separate pot and keep warm.', 'Sauté onions in butter until translucent.', 'Add mushrooms and cook until softened.', 'Add rice and stir for 1-2 minutes to toast.', 'Add wine and stir until absorbed.', 'Add hot broth one ladle at a time, stirring constantly until liquid is absorbed before adding more.', 'Continue until rice is creamy and al dente, about 20 minutes.', 'Stir in Parmesan cheese and parsley. Season with salt and pepper.', 'Serve immediately.'],
      prepTime: '10 mins',
      cookTime: '30 mins',
      servings: 4,
      calories: 380,
      tags: ['italian', 'dinner', 'vegetarian'],
      difficulty: "Medium",
      mood: 'sophisticated',
      aiSuggestion: "Add a drizzle of truffle oil for an elegant finish.",
      nutritionAnalysis: "Rich in carbohydrates. Good source of protein from cheese.",
      cookingTips: ["Constant stirring is key to creamy risotto.", "Keep broth hot for proper cooking."]
    }
  ],
  mexican: [
    {
      id: 'mexican1',
      name: 'Street-Style Tacos',
      description: 'Authentic Mexican street tacos with simple, fresh ingredients and bold flavors.',
      ingredients: ['1 lb skirt steak', 'Corn tortillas', '1 onion, diced', 'Fresh cilantro, chopped', '2 limes', 'Salt', 'Optional: salsa verde'],
      instructions: ['Season steak with salt and grill to medium-rare.', 'Let meat rest, then dice into small pieces.', 'Warm corn tortillas on a hot griddle.', 'Fill tortillas with meat, diced onion, and cilantro.', 'Serve with lime wedges and optional salsa verde.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 320,
      tags: ['mexican', 'dinner', 'meat'],
      difficulty: "Easy",
      mood: 'adventurous',
      aiSuggestion: "Add a pinch of cumin to the meat for extra flavor.",
      nutritionAnalysis: "High in protein. Good source of fiber from corn tortillas.",
      cookingTips: ["Don't overcook the meat for tender tacos.", "Double-stack tortillas for authentic street style."]
    },
    {
      id: 'mexican2',
      name: 'Guacamole from Scratch',
      description: 'Fresh, vibrant guacamole made with ripe avocados and traditional ingredients.',
      ingredients: ['3 ripe avocados', '1 lime, juiced', '1 small onion, finely diced', '1 jalapeño, seeds removed and minced', '2 tablespoons cilantro, chopped', 'Salt to taste'],
      instructions: ['Cut avocados in half and remove pits.', 'Scoop flesh into a bowl and mash to desired consistency.', 'Add lime juice, onion, jalapeño, and cilantro.', 'Mix well and season with salt.', 'Serve immediately with tortilla chips.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 200,
      tags: ['mexican', 'appetizer', 'vegetarian'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add diced tomatoes for color and freshness.",
      nutritionAnalysis: "High in healthy fats. Good source of fiber and vitamins.",
      cookingTips: ["Use ripe but not overly soft avocados.", "Keep the pit in leftover guacamole to prevent browning."]
    }
  ],
  asian: [
    {
      id: 'asian1',
      name: 'Authentic Pad Thai',
      description: 'Thailand\'s famous stir-fried noodle dish with the perfect balance of sweet, sour, and savory flavors.',
      ingredients: ['8 oz rice noodles', '2 tbsp vegetable oil', '2 eggs, beaten', '1 cup firm tofu, cubed', '2 cloves garlic, minced', '1/4 cup tamarind paste', '3 tbsp fish sauce', '3 tbsp palm sugar', 'Bean sprouts', 'Green onions', 'Crushed peanuts', 'Lime wedges'],
      instructions: ['Soak rice noodles in warm water until soft, about 15 minutes, then drain.', 'Heat oil in a wok over high heat. Add garlic and stir-fry briefly.', 'Add tofu and cook until golden.', 'Push ingredients to one side and pour in beaten eggs. Scramble until set.', 'Add noodles and toss to combine.', 'Mix in tamarind paste, fish sauce, and palm sugar. Stir-fry until noodles are coated.', 'Add bean sprouts and green onions. Toss quickly.', 'Serve topped with crushed peanuts and lime wedges.'],
      prepTime: '20 mins',
      cookTime: '15 mins',
      servings: 2,
      calories: 420,
      tags: ['asian', 'thai', 'dinner'],
      difficulty: "Medium",
      mood: 'wanderlust',
      aiSuggestion: "Add shrimp or chicken for additional protein.",
      nutritionAnalysis: "High in carbohydrates with balanced protein. Good source of minerals.",
      cookingTips: ["Have all ingredients ready before cooking, as the process moves quickly.", "Adjust fish sauce and sugar to taste for perfect balance."]
    },
    {
      id: 'asian2',
      name: 'Japanese Miso Soup',
      description: 'A traditional Japanese soup with umami flavor from fermented soybean paste.',
      ingredients: ['4 cups dashi stock', '3 tbsp miso paste', '1/2 block soft tofu, cubed', '2 green onions, thinly sliced', '1/4 cup wakame seaweed, rehydrated'],
      instructions: ['Heat dashi stock in a pot, but do not boil.', 'Place miso paste in a small bowl and add some hot dashi. Whisk until smooth.', 'Return miso mixture to the pot and stir to combine.', 'Add tofu and wakame. Simmer gently for 2 minutes.', 'Garnish with green onions and serve immediately.'],
      prepTime: '5 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 80,
      tags: ['asian', 'japanese', 'soup'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add shitake mushrooms for additional flavor and texture.",
      nutritionAnalysis: "Low in calories. Good source of protein from tofu and minerals from seaweed.",
      cookingTips: ["Never boil miso soup after adding the paste to preserve probiotics.", "Use white miso for milder flavor, red miso for stronger taste."]
    }
  ],
  indian: [
    {
      id: 'indian1',
      name: 'Butter Chicken (Murgh Makhani)',
      description: 'Tender chicken in a rich, creamy tomato sauce that\'s a favorite in Indian restaurants worldwide.',
      ingredients: ['1.5 lbs chicken thighs, cut into pieces', '1 cup yogurt', '2 tbsp garam masala', '1 tbsp ginger paste', '1 tbsp garlic paste', '1 can tomato sauce', '1/2 cup heavy cream', '1/4 cup butter', '1 tsp turmeric', '1 tsp cumin', 'Fresh cilantro'],
      instructions: ['Marinate chicken in yogurt, ginger, garlic, and 1 tbsp garam masala for at least 1 hour.', 'Grill or bake chicken until cooked through.', 'In a pot, melt butter and add remaining spices. Cook for 1 minute until fragrant.', 'Add tomato sauce and simmer for 10 minutes.', 'Stir in heavy cream and cooked chicken. Simmer for 5 more minutes.', 'Garnish with fresh cilantro and serve with naan or rice.'],
      prepTime: '15 mins (plus marinating time)',
      cookTime: '30 mins',
      servings: 4,
      calories: 450,
      tags: ['indian', 'dinner', 'meat'],
      difficulty: "Medium",
      mood: 'indulgent',
      aiSuggestion: "Add a dash of kasoori methi (dried fenugreek leaves) for authentic flavor.",
      nutritionAnalysis: "High in protein and fat. Rich source of vitamins from tomato sauce.",
      cookingTips: ["Marinate chicken overnight for best flavor.", "Adjust cream to your preference for richness."]
    },
    {
      id: 'indian2',
      name: 'Vegetable Biryani',
      description: 'Aromatic basmati rice dish layered with spiced vegetables and fragrant herbs.',
      ingredients: ['2 cups basmati rice', '3 cups mixed vegetables (carrots, peas, potatoes, beans)', '1 onion, sliced', '3 tbsp biryani masala', '1/4 cup yogurt', '1/4 cup mint leaves', '1/4 cup cilantro', 'Pinch of saffron soaked in warm milk', 'Ghee or oil for cooking'],
      instructions: ['Wash rice and soak for 30 minutes, then drain.', 'Parboil rice until 70% cooked, then drain.', 'Sauté onions until golden, then add vegetables and spices.', 'Cook vegetables until tender, then add yogurt.', 'In a heavy pot, layer half the rice, then all the vegetable mixture, then remaining rice.', 'Pour saffron milk over top and sprinkle with herbs.', 'Cover tightly and cook on low heat for 20 minutes.', 'Mix gently before serving.'],
      prepTime: '20 mins (plus soaking time)',
      cookTime: '40 mins',
      servings: 6,
      calories: 320,
      tags: ['indian', 'vegetarian', 'dinner'],
      difficulty: "Medium",
      mood: 'festive',
      aiSuggestion: "Add fried cashews and raisins for traditional garnish.",
      nutritionAnalysis: "High in complex carbohydrates. Good source of fiber and vitamins.",
      cookingTips: ["Use aged basmati rice for best aroma.", "The tight seal during final cooking is crucial - use dough to seal pot if needed."]
    }
  ],
  mediterranean: [
    {
      id: 'mediterranean1',
      name: 'Greek Salad',
      description: 'A refreshing, crisp salad with chunky vegetables, feta cheese, and Greek dressing.',
      ingredients: ['1 cucumber, chopped', '2 tomatoes, chopped', '1 red onion, sliced', '1 green bell pepper, chopped', '1/2 cup kalamata olives', '200g feta cheese, cubed', '2 tbsp extra virgin olive oil', '1 tbsp red wine vinegar', '1 tsp dried oregano', 'Salt and pepper to taste'],
      instructions: ['Combine cucumber, tomatoes, onion, bell pepper, and olives in a large bowl.', 'In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.', 'Pour dressing over vegetables and toss gently.', 'Top with cubed feta cheese.', 'Serve immediately or chill for 30 minutes to allow flavors to meld.'],
      prepTime: '15 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 220,
      tags: ['mediterranean', 'greek', 'salad', 'vegetarian'],
      difficulty: "Easy",
      mood: 'healthy-minded',
      aiSuggestion: "Add a pinch of sumac for authentic Mediterranean flavor.",
      nutritionAnalysis: "High in healthy fats from olive oil and feta. Rich in vitamins and minerals.",
      cookingTips: ["Use the freshest vegetables you can find.", "Don't mix the feta into the salad - leave it on top for presentation."]
    },
    {
      id: 'mediterranean2',
      name: 'Hummus with Fresh Pita',
      description: 'Creamy chickpea dip with tahini, lemon, and garlic served with warm pita bread.',
      ingredients: ['1 can chickpeas, drained and rinsed', '1/4 cup tahini', '3 tbsp extra virgin olive oil, plus more for serving', '3 tbsp lemon juice', '2 garlic cloves, minced', '1/2 tsp ground cumin', 'Salt to taste', 'Paprika for garnish', 'Fresh pita bread'],
      instructions: ['Combine chickpeas, tahini, olive oil, lemon juice, garlic, and cumin in a food processor.', 'Blend until smooth, adding water if needed to reach desired consistency.', 'Season with salt to taste.', 'Transfer to a serving bowl, create a well in the center, and fill with olive oil.', 'Sprinkle with paprika.', 'Serve with warm pita bread.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 6,
      calories: 180,
      tags: ['mediterranean', 'appetizer', 'vegetarian'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add roasted red peppers for a colorful and flavorful variation.",
      nutritionAnalysis: "High in plant protein and fiber. Good source of healthy fats.",
      cookingTips: ["Reserve some chickpea liquid to adjust consistency.", "Warm the pita bread for best experience."]
    }
  ],
  fusion: [
    {
      id: 'fusion1',
      name: 'Korean-Mexican Bulgogi Tacos',
      description: 'Soft corn tortillas filled with sweet and savory Korean marinated beef, topped with kimchi slaw.',
      ingredients: ['1 lb thinly sliced beef ribeye or sirloin', '1/4 cup soy sauce', '2 tbsp brown sugar', '1 tbsp sesame oil', '3 cloves garlic, minced', '1 tbsp ginger, grated', '1 cup cabbage kimchi, chopped', '1/2 cup cabbage, shredded', '8 corn tortillas', 'Sesame seeds and cilantro for garnish'],
      instructions: ['Combine soy sauce, brown sugar, sesame oil, garlic, and ginger in a bowl.', 'Add beef and marinate for at least 1 hour.', 'Mix chopped kimchi with shredded cabbage for the slaw.', 'Heat a skillet over high heat and cook marinated beef until caramelized.', 'Warm corn tortillas on a dry skillet.', 'Fill tortillas with bulgogi beef and top with kimchi slaw.', 'Garnish with sesame seeds and cilantro.'],
      prepTime: '15 mins (plus marinating time)',
      cookTime: '10 mins',
      servings: 4,
      calories: 350,
      tags: ['fusion', 'korean', 'mexican', 'dinner'],
      difficulty: "Medium",
      mood: 'adventurous',
      aiSuggestion: "Add a drizzle of gochujang mayo for extra flavor and creaminess.",
      nutritionAnalysis: "High in protein and complex flavors. Moderate in carbohydrates.",
      cookingTips: ["Freeze meat for 30 minutes before slicing for thinner cuts.", "Don't overcook the beef - it should be tender and juicy."]
    },
    {
      id: 'fusion2',
      name: 'Mediterranean-Asian Glazed Salmon',
      description: 'Salmon fillet glazed with miso and honey, served with a Mediterranean herb salad.',
      ingredients: ['4 salmon fillets', '2 tbsp white miso paste', '1 tbsp honey', '1 tbsp olive oil', '1 lemon, zested and juiced', '1 cucumber, diced', '1 cup cherry tomatoes, halved', '1/4 cup kalamata olives, pitted', '1/4 cup feta cheese', 'Fresh herbs (mint, parsley, dill)'],
      instructions: ['Whisk together miso paste, honey, 1 tsp olive oil, and half the lemon juice.', 'Brush salmon fillets with the miso glaze.', 'Broil or grill salmon for 8-10 minutes until cooked through.', 'In a bowl, combine cucumber, tomatoes, olives, and herbs.', 'Dress the salad with remaining olive oil, lemon juice, and zest.', 'Sprinkle with feta cheese.', 'Serve salmon with the Mediterranean salad on the side.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 380,
      tags: ['fusion', 'mediterranean', 'asian', 'dinner'],
      difficulty: "Medium",
      mood: 'sophisticated',
      aiSuggestion: "Add a sprinkle of toasted sesame seeds to the salmon for extra texture.",
      nutritionAnalysis: "High in omega-3 fatty acids and protein. Good balance of healthy fats.",
      cookingTips: ["Don't overcook the salmon - it should be just opaque in the center.", "You can substitute miso with tahini for a more Mediterranean version."]
    }
  ],
  caribbean: [
    {
      id: 'caribbean1',
      name: 'Jamaican Jerk Chicken',
      description: 'Spicy and aromatic grilled chicken with authentic Jamaican jerk seasoning.',
      ingredients: ['8 chicken thighs', '4 green onions', '4 garlic cloves', '2 habanero peppers', '1 tbsp allspice', '1 tbsp thyme', '1 tbsp brown sugar', '1 tsp cinnamon', '1/2 tsp nutmeg', '2 tbsp soy sauce', '2 tbsp lime juice', '1/4 cup olive oil'],
      instructions: ['Blend green onions, garlic, habaneros, spices, soy sauce, lime juice, and oil into a paste.', 'Score chicken thighs and rub with jerk paste. Marinate for at least 4 hours, preferably overnight.', 'Preheat grill to medium-high heat.', 'Grill chicken for 6-8 minutes per side until cooked through.', 'Let rest for 5 minutes before serving.', 'Serve with rice and peas or grilled pineapple.'],
      prepTime: '20 mins (plus marinating time)',
      cookTime: '20 mins',
      servings: 4,
      calories: 410,
      tags: ['caribbean', 'jamaican', 'dinner', 'spicy'],
      difficulty: "Medium",
      mood: 'adventurous',
      aiSuggestion: "Serve with a side of cooling mango salsa to balance the heat.",
      nutritionAnalysis: "High in protein. Rich in vitamins from spices.",
      cookingTips: ["Adjust habanero peppers to your preferred spice level.", "Use bone-in chicken for more flavor."]
    },
    {
      id: 'caribbean2',
      name: 'Cuban Black Bean Soup',
      description: 'Hearty, flavorful soup with black beans, peppers, and traditional Cuban spices.',
      ingredients: ['1 lb dried black beans, soaked overnight', '1 onion, diced', '1 green bell pepper, diced', '4 cloves garlic, minced', '1 tbsp cumin', '1 tbsp oregano', '1 bay leaf', '2 tbsp olive oil', '1/4 cup sherry vinegar', 'Salt and pepper to taste', 'Sour cream and cilantro for garnish'],
      instructions: ['Drain soaked beans and place in a large pot with 8 cups water.', 'Bring to a boil, then reduce heat and simmer for 1 hour.', 'In a separate pan, sauté onion, bell pepper, and garlic in olive oil until soft.', 'Add cumin and oregano to vegetables and cook for 1 minute until fragrant.', 'Add vegetable mixture to beans along with bay leaf.', 'Simmer for another hour or until beans are very tender.', 'Remove bay leaf and puree half the soup for thicker consistency.', 'Stir in sherry vinegar and season with salt and pepper.', 'Serve with a dollop of sour cream and fresh cilantro.'],
      prepTime: '15 mins (plus soaking time)',
      cookTime: '2 hours',
      servings: 6,
      calories: 280,
      tags: ['caribbean', 'cuban', 'soup', 'vegetarian'],
      difficulty: "Medium",
      mood: 'nostalgic',
      aiSuggestion: "Serve with a side of white rice for an authentic Cuban meal.",
      nutritionAnalysis: "High in fiber and plant protein. Low in fat.",
      cookingTips: ["Don't skip the soaking step for beans - it reduces cooking time.", "The soup tastes even better the next day."]
    }
  ],
  vegan: [
    {
      id: 'vegan1',
      name: 'Creamy Vegan Mushroom Risotto',
      description: 'A plant-based version of the Italian classic with rich mushroom flavor and no dairy.',
      ingredients: ['1 1/2 cups arborio rice', '6 cups vegetable broth', '2 cups mixed mushrooms, sliced', '1 onion, finely diced', '3 cloves garlic, minced', '1/2 cup nutritional yeast', '1/4 cup coconut cream', '1/2 cup white wine', '2 tbsp olive oil', 'Fresh thyme', 'Salt and pepper to taste'],
      instructions: ['Heat vegetable broth in a separate pot and keep warm.', 'In a large skillet, sauté mushrooms until golden. Set aside half for topping.', 'In the same skillet, sauté onion and garlic in olive oil until translucent.', 'Add rice and stir for 1-2 minutes until lightly toasted.', 'Add wine and stir until absorbed.', 'Add hot broth one ladle at a time, stirring constantly until liquid is absorbed before adding more.', 'Continue until rice is creamy and al dente, about 20 minutes.', 'Stir in nutritional yeast, coconut cream, and remaining mushrooms.', 'Garnish with fresh thyme and serve immediately.'],
      prepTime: '15 mins',
      cookTime: '30 mins',
      servings: 4,
      calories: 320,
      tags: ['vegan', 'italian', 'dinner'],
      difficulty: "Medium",
      mood: 'sophisticated',
      aiSuggestion: "Add a handful of spinach at the end for extra nutrition and color.",
      nutritionAnalysis: "Rich in B vitamins from nutritional yeast. Good source of complex carbohydrates.",
      cookingTips: ["Use a variety of mushrooms for complex flavor.", "The risotto should be creamy but not mushy - keep it al dente."]
    },
    {
      id: 'vegan2',
      name: 'Buddha Bowl with Tahini Dressing',
      description: 'A nourishing bowl filled with colorful vegetables, grains, and protein-rich legumes.',
      ingredients: ['1 cup quinoa', '1 sweet potato, cubed', '1 cup chickpeas', '2 cups kale, chopped', '1 avocado, sliced', '1/4 cup tahini', '2 tbsp lemon juice', '1 tbsp maple syrup', 'Water to thin', 'Salt and pepper to taste', 'Sesame seeds for garnish'],
      instructions: ['Cook quinoa according to package directions.', 'Toss sweet potato cubes with olive oil, salt, and pepper. Roast at 400°F for 25 minutes.', 'Drain and rinse chickpeas, toss with spices of choice, and roast for 15 minutes until crispy.', 'Massage kale with a bit of olive oil and salt until tender.', 'Whisk together tahini, lemon juice, maple syrup, and enough water to create a pourable consistency.', 'Assemble bowls with quinoa, roasted sweet potatoes, chickpeas, kale, and avocado.', 'Drizzle with tahini dressing and sprinkle with sesame seeds.'],
      prepTime: '15 mins',
      cookTime: '25 mins',
      servings: 2,
      calories: 540,
      tags: ['vegan', 'healthy', 'dinner'],
      difficulty: "Easy",
      mood: 'healthy-minded',
      aiSuggestion: "Add fermented vegetables like kimchi or sauerkraut for gut-healthy probiotics.",
      nutritionAnalysis: "Excellent balance of protein, complex carbs, and healthy fats. Rich in vitamins and minerals.",
      cookingTips: ["Prep components ahead of time for quick assembly.", "Customize with seasonal vegetables."]
    },
    {
      id: 'vegan3',
      name: 'Spicy West African Peanut Stew',
      description: 'A hearty plant-based stew with rich peanut flavor and warming spices.',
      ingredients: ['1 onion, diced', '3 cloves garlic, minced', '1 tbsp ginger, grated', '1 sweet potato, cubed', '1 red bell pepper, diced', '1 can diced tomatoes', '4 cups vegetable broth', '1/2 cup natural peanut butter', '2 cups chopped collard greens', '1 tsp cumin', '1 tsp coriander', '1/2 tsp cayenne pepper', 'Cilantro and chopped peanuts for garnish'],
      instructions: ['Sauté onion, garlic, and ginger in a large pot until soft.', 'Add sweet potato and bell pepper, cook for 5 minutes.', 'Stir in spices and cook until fragrant, about 1 minute.', 'Add tomatoes and vegetable broth, bring to a simmer.', 'Cook until sweet potatoes are almost tender, about 15 minutes.', 'Whisk in peanut butter until well incorporated.', 'Add collard greens and simmer for 5 more minutes.', 'Serve hot, garnished with cilantro and chopped peanuts.'],
      prepTime: '15 mins',
      cookTime: '30 mins',
      servings: 6,
      calories: 280,
      tags: ['vegan', 'african', 'dinner', 'spicy'],
      difficulty: "Medium",
      mood: 'adventurous',
      aiSuggestion: "Serve over brown rice or with flatbread for a complete meal.",
      nutritionAnalysis: "High in plant protein from peanuts. Rich source of vitamins A and C.",
      cookingTips: ["Use natural peanut butter without added sugar.", "Adjust cayenne to your preferred spice level."]
    }
  ]
};

// Helper function to get recipes by mood
export const getRecipesByMood = (moodId: string) => {
  let allRecipes: Recipe[] = [];
  Object.values(recipesData).forEach(recipeArray => {
    allRecipes = [...allRecipes, ...recipeArray];
  });
  
  return allRecipes.filter(recipe => recipe.mood === moodId);
};

// Helper function to get recipe by ID
export const getRecipeById = (id: string) => {
  let allRecipes: Recipe[] = [];
  Object.values(recipesData).forEach(recipeArray => {
    allRecipes = [...allRecipes, ...recipeArray];
  });
  
  return allRecipes.find(recipe => recipe.id === id);
};

// Helper function to get all recipes
export const getAllRecipes = () => {
  let allRecipes: Recipe[] = [];
  Object.values(recipesData).forEach(recipeArray => {
    allRecipes = [...allRecipes, ...recipeArray];
  });
  
  return allRecipes;
};

// Helper function to search recipes
export const searchRecipes = (query: string) => {
  const allRecipes = getAllRecipes();
  const searchTerm = query.toLowerCase();
  
  return allRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm) || 
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Helper function to get similar recipes
export const getSimilarRecipes = (recipeId: string, limit: number = 3) => {
  const allRecipes = getAllRecipes();
  const currentRecipe = getRecipeById(recipeId);
  
  if (!currentRecipe) return [];
  
  const similar = allRecipes
    .filter(recipe => recipe.id !== recipeId)
    .sort((a, b) => {
      const aMatchingTags = a.tags.filter(tag => currentRecipe.tags.includes(tag)).length;
      const bMatchingTags = b.tags.filter(tag => currentRecipe.tags.includes(tag)).length;
      return bMatchingTags - aMatchingTags;
    })
    .slice(0, limit);
  
  return similar;
};

// Helper function for chatbot responses
export const getChatbotResponse = (query: string) => {
  const searchTerm = query.toLowerCase();
  
  // Quick suggestions for common recipe questions
  if (searchTerm.includes('breakfast') || searchTerm.includes('morning')) {
    return "For breakfast, I'd recommend trying our Fluffy Pancakes or Trendy Avocado Toast. Both are quick to make and delicious!";
  }
  
  if (searchTerm.includes('dinner') || searchTerm.includes('evening meal')) {
    return "For dinner, our Spaghetti and Meatballs is a classic choice, or try Baked Salmon with Roasted Vegetables for a healthier option.";
  }
  
  if (searchTerm.includes('vegetarian') || searchTerm.includes('plant')) {
    return "We have several vegetarian options! Our Creamy Vegan Mushroom Risotto and Buddha Bowl with Tahini Dressing are very popular.";
  }
  
  if (searchTerm.includes('quick') || searchTerm.includes('fast') || searchTerm.includes('hurry')) {
    return "If you need something quick, try our Five-Minute Quesadilla or Gourmet Microwave Popcorn. Both take less than 10 minutes total!";
  }
  
  if (searchTerm.includes('healthy') || searchTerm.includes('diet') || searchTerm.includes('nutrition')) {
    return "For healthy options, check out our Buddha Bowl with Tahini Dressing or Trendy Avocado Toast. Both are nutritious and satisfying!";
  }
  
  // Default response
  return "I'd be happy to help you find a recipe! You can search by meal type (breakfast, lunch, dinner), dietary preference (vegetarian, vegan), or mood (happy, sad, tired). What are you in the mood for today?";
};
