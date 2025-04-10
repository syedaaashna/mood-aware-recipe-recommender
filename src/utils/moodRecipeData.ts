
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
      aiSuggestion: "Add a pinch of sea salt to enhance the sweet and savory flavors.",
      nutritionAnalysis: "High in protein and healthy fats from nuts, natural sugars from dried fruit.",
      cookingTips: ["Roast the nuts briefly for enhanced flavor.", "Balance the ratio of nuts to dried fruit to chocolate based on your preferences."]
    },
    {
      id: 'snack3',
      name: 'Apple Slices with Peanut Butter',
      description: 'A classic combination that offers the perfect balance of sweet, crisp and creamy textures.',
      ingredients: ['1 apple, sliced', '2 tablespoons peanut butter', 'Optional toppings: granola, chocolate chips, cinnamon'],
      instructions: ['Wash and slice the apple into wedges.', 'Arrange the slices on a plate.', 'Spread or dollop peanut butter onto each slice.', 'Add optional toppings if desired.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['snack', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'stressed',
      aiSuggestion: "Sprinkle with cinnamon for added flavor and blood sugar regulation.",
      nutritionAnalysis: "High in fiber from apple, protein and healthy fats from peanut butter.",
      cookingTips: ["Squeeze lemon juice on apple slices to prevent browning.", "Try different nut butters for variety."]
    }
  ],
  // Add more categories for Indian, American, Chinese, Korean, Asian and Continental dishes
  indian: [
    {
      id: 'indian1',
      name: 'Butter Chicken',
      description: 'A rich and creamy North Indian curry with tender chicken pieces in a tomato-based sauce.',
      ingredients: ['1 lb boneless chicken', '1/4 cup yogurt', '1 tbsp ginger-garlic paste', '1 cup tomato puree', '1/4 cup butter', '1/4 cup heavy cream', '1 tsp garam masala', '1 tsp turmeric', '1 tsp cumin powder', 'Salt to taste'],
      instructions: ['Marinate chicken in yogurt, ginger-garlic paste, and spices for at least 30 minutes.', 'Cook marinated chicken in a pan until done.', 'In another pan, melt butter and add tomato puree, cooking until oil separates.', 'Add cooked chicken and simmer for 10 minutes.', 'Finish with heavy cream and garnish with chopped cilantro.', 'Serve hot with naan or rice.'],
      prepTime: '40 mins',
      cookTime: '30 mins',
      servings: 4,
      calories: 450,
      tags: ['indian', 'curry', 'chicken', 'dinner'],
      difficulty: "Medium",
      mood: 'indulgent',
      aiSuggestion: "Add a touch of kasuri methi (dried fenugreek leaves) for authentic flavor.",
      nutritionAnalysis: "High in protein from chicken, rich in calcium from cream.",
      cookingTips: ["Let the chicken marinate overnight for deeper flavor.", "Adjust cream amount for desired richness."]
    },
    {
      id: 'indian2',
      name: 'Vegetable Biryani',
      description: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices.',
      ingredients: ['2 cups basmati rice', '2 cups mixed vegetables (carrots, peas, beans)', '1 onion, sliced', '2 tomatoes, chopped', '2 tbsp biryani masala', '1/4 cup yogurt', '2 tbsp ghee', 'Whole spices (cinnamon, cardamom, cloves)', 'Fresh mint and cilantro', 'Saffron soaked in milk (optional)'],
      instructions: ['Soak rice for 30 minutes and par-boil it.', 'In a separate pot, sauté onions until golden brown.', 'Add vegetables and spices, cooking until vegetables are tender.', 'Layer par-boiled rice over vegetables.', 'Pour saffron milk and garnish with herbs.', 'Cover with tight lid and cook on low heat for 20 minutes.', 'Mix gently before serving.'],
      prepTime: '45 mins',
      cookTime: '30 mins',
      servings: 6,
      calories: 300,
      tags: ['indian', 'rice', 'vegetarian', 'dinner'],
      difficulty: "Medium",
      mood: 'festive',
      aiSuggestion: "Add fried cashews and raisins on top for a sweet and crunchy element.",
      nutritionAnalysis: "Balanced carbohydrates from rice, vitamins from mixed vegetables.",
      cookingTips: ["Use long-grain aged basmati rice for best results.", "Let the biryani rest for 10 minutes after cooking."]
    }
  ],
  chinese: [
    {
      id: 'chinese1',
      name: 'Kung Pao Chicken',
      description: 'A spicy stir-fry dish with chicken, peanuts, vegetables, and chili peppers.',
      ingredients: ['1 lb chicken breast, cubed', '1/2 cup peanuts', '2 bell peppers, diced', '3 dried red chilies', '3 cloves garlic, minced', '1 tbsp ginger, minced', '2 tbsp soy sauce', '1 tbsp vinegar', '1 tbsp brown sugar', '1 tbsp cornstarch'],
      instructions: ['Mix chicken with cornstarch, salt, and pepper.', 'Heat oil in a wok and stir-fry chicken until golden.', 'Remove chicken and add dried chilies, garlic, and ginger to the wok.', 'Add bell peppers and stir-fry for 2 minutes.', 'Return chicken to wok and add sauce ingredients.', 'Toss in peanuts and cook until sauce thickens.', 'Serve hot with steamed rice.'],
      prepTime: '15 mins',
      cookTime: '15 mins',
      servings: 4,
      calories: 350,
      tags: ['chinese', 'stir-fry', 'spicy', 'chicken'],
      difficulty: "Medium",
      mood: 'adventurous',
      aiSuggestion: "Use Sichuan peppercorns for authentic numbing flavor.",
      nutritionAnalysis: "High in protein from chicken and peanuts, low in carbohydrates.",
      cookingTips: ["Have all ingredients prepared before starting to cook.", "Adjust chili amount based on spice preference."]
    },
    {
      id: 'chinese2',
      name: 'Vegetable Fried Rice',
      description: 'A classic Chinese dish made with rice, mixed vegetables, and soy sauce.',
      ingredients: ['3 cups cooked rice (preferably day-old)', '1 cup mixed vegetables (carrots, peas, corn)', '2 eggs, beaten', '3 cloves garlic, minced', '3 tbsp soy sauce', '1 tbsp sesame oil', '2 green onions, chopped'],
      instructions: ['Heat oil in a wok over high heat.', 'Add garlic and stir-fry for 30 seconds.', 'Add vegetables and stir-fry until crisp-tender.', 'Push vegetables to the side and scramble eggs in the empty space.', 'Add rice and break up any clumps.', 'Pour in soy sauce and sesame oil, stirring to combine.', 'Garnish with green onions before serving.'],
      prepTime: '10 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 300,
      tags: ['chinese', 'rice', 'easy', 'vegetarian'],
      difficulty: "Easy",
      mood: 'tired',
      aiSuggestion: "Add a dash of white pepper for authentic flavor.",
      nutritionAnalysis: "Balanced carbohydrates from rice, protein from eggs.",
      cookingTips: ["Use cold, day-old rice for best texture.", "Cook on high heat to prevent soggy rice."]
    }
  ],
  korean: [
    {
      id: 'korean1',
      name: 'Kimchi Fried Rice',
      description: 'A flavorful and spicy Korean dish made with kimchi, rice, and various toppings.',
      ingredients: ['3 cups cooked rice', '1 cup kimchi, chopped', '1/4 cup kimchi juice', '1/2 cup pork belly or spam, diced', '2 tbsp gochujang (Korean chili paste)', '2 tsp sesame oil', '2 green onions, chopped', '1 fried egg (optional)'],
      instructions: ['Cook diced meat in a pan until crispy.', 'Add kimchi and stir-fry for 2-3 minutes.', 'Add rice, breaking up any clumps.', 'Pour in kimchi juice and gochujang, mixing well.', 'Drizzle with sesame oil and garnish with green onions.', 'Top with a fried egg if desired.', 'Serve hot.'],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 2,
      calories: 450,
      tags: ['korean', 'rice', 'spicy', 'easy'],
      difficulty: "Easy",
      mood: 'adventurous',
      aiSuggestion: "Add a sprinkle of seaweed flakes for umami flavor.",
      nutritionAnalysis: "High in probiotics from kimchi, balanced with carbohydrates from rice.",
      cookingTips: ["Use aged kimchi for deeper flavor.", "Don't skip the kimchi juice - it adds essential tanginess."]
    },
    {
      id: 'korean2',
      name: 'Bibimbap',
      description: 'A colorful Korean rice bowl topped with assorted vegetables, meat, egg, and gochujang sauce.',
      ingredients: ['3 cups cooked rice', '1/2 lb beef, thinly sliced', '1 cup spinach, blanched', '1 cup bean sprouts, blanched', '1 carrot, julienned', '1 zucchini, julienned', '4 eggs', '4 tbsp gochujang sauce', '2 tbsp sesame oil', 'Salt to taste'],
      instructions: ['Season beef with soy sauce and garlic, then sauté until cooked.', 'Sauté each vegetable separately with salt.', 'Fry eggs sunny-side up.', 'Place warm rice in bowls.', 'Arrange beef and vegetables in sections around the rice.', 'Place fried egg on top.', 'Serve with gochujang sauce and sesame oil on the side.', 'Mix everything together before eating.'],
      prepTime: '30 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 500,
      tags: ['korean', 'rice bowl', 'healthy', 'colorful'],
      difficulty: "Medium",
      mood: 'energetic',
      aiSuggestion: "Add a tablespoon of crispy rice or nurungji for texture contrast.",
      nutritionAnalysis: "Well-balanced meal with protein, vegetables, and carbohydrates.",
      cookingTips: ["Prepare all components before assembly.", "Traditional bibimbap is served in a hot stone bowl (dolsot) for crispy rice."]
    }
  ],
  american: [
    {
      id: 'american1',
      name: 'Classic Cheeseburger',
      description: 'A juicy beef patty topped with melted cheese, fresh vegetables, and condiments in a soft bun.',
      ingredients: ['1 lb ground beef (80/20)', '4 hamburger buns', '4 slices American cheese', '1 tomato, sliced', '1 onion, sliced', 'Lettuce leaves', 'Pickles', 'Ketchup, mustard, mayonnaise', 'Salt and pepper to taste'],
      instructions: ['Divide beef into 4 equal portions and form into patties.', 'Season patties with salt and pepper.', 'Cook on a hot grill or skillet for 4-5 minutes per side.', 'Top with cheese during the last minute of cooking.', 'Toast buns lightly.', 'Assemble burgers with condiments and toppings.', 'Serve immediately.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 550,
      tags: ['american', 'beef', 'burger', 'comfort food'],
      difficulty: "Easy",
      mood: 'hungry',
      aiSuggestion: "Add a fried egg for an extra level of richness.",
      nutritionAnalysis: "High in protein from beef, provides complete macronutrients.",
      cookingTips: ["Make a small indentation in the center of the patty to prevent it from puffing up.", "Don't press down on the patty while cooking to keep it juicy."]
    },
    {
      id: 'american2',
      name: 'Southern Fried Chicken',
      description: 'Crispy, golden-brown chicken with a seasoned coating and tender, juicy meat inside.',
      ingredients: ['1 whole chicken, cut into pieces', '2 cups buttermilk', '2 cups all-purpose flour', '1 tbsp paprika', '1 tbsp garlic powder', '1 tbsp onion powder', '1 tsp cayenne pepper', 'Salt and pepper to taste', 'Vegetable oil for frying'],
      instructions: ['Soak chicken in buttermilk for at least 4 hours or overnight.', 'Mix flour with all spices in a large bowl.', 'Remove chicken from buttermilk and dredge in seasoned flour.', 'Heat oil to 350°F in a large deep skillet.', 'Fry chicken in batches until golden brown and cooked through, about 15 minutes.', 'Drain on paper towels.', 'Serve hot or cold.'],
      prepTime: '20 mins (plus marinating time)',
      cookTime: '30 mins',
      servings: 6,
      calories: 450,
      tags: ['american', 'southern', 'chicken', 'comfort food'],
      difficulty: "Medium",
      mood: 'nostalgic',
      aiSuggestion: "Add a touch of honey to the buttermilk marinade for subtle sweetness.",
      nutritionAnalysis: "High in protein from chicken, contains fat from frying process.",
      cookingTips: ["Maintain oil temperature between 325-350°F for even cooking.", "Let chicken rest at room temperature for 30 minutes before frying."]
    }
  ],
  continental: [
    {
      id: 'continental1',
      name: 'Beef Wellington',
      description: 'A decadent dish featuring beef tenderloin coated with pâté and mushroom duxelles, wrapped in puff pastry.',
      ingredients: ['2 lb beef tenderloin', '1/2 lb mushrooms, finely chopped', '4 slices prosciutto', '2 tbsp Dijon mustard', '1 sheet puff pastry', '1 egg, beaten', '2 tbsp butter', '2 cloves garlic, minced', 'Fresh thyme', 'Salt and pepper to taste'],
      instructions: ['Sear the beef tenderloin on all sides in a hot pan.', 'Brush with Dijon mustard and let cool.', 'Sauté mushrooms, garlic, and thyme until moisture evaporates.', 'Lay out plastic wrap and arrange prosciutto slices.', 'Spread mushroom mixture over prosciutto.', 'Place beef on top and wrap tightly.', 'Roll out puff pastry and wrap around the beef.', 'Brush with beaten egg and score the top.', 'Bake at 425°F for 40-45 minutes until pastry is golden.', 'Rest for 10 minutes before slicing.'],
      prepTime: '45 mins',
      cookTime: '45 mins',
      servings: 6,
      calories: 650,
      tags: ['continental', 'beef', 'elegant', 'special occasion'],
      difficulty: "Hard",
      mood: 'festive',
      aiSuggestion: "For extra flavor, add a layer of foie gras between the beef and mushroom mixture.",
      nutritionAnalysis: "High in protein from beef, contains significant fat from pastry and meat.",
      cookingTips: ["Use a meat thermometer to ensure perfect doneness.", "Let the assembled Wellington chill before baking for best results."]
    },
    {
      id: 'continental2',
      name: 'Coq au Vin',
      description: 'A classic French dish of chicken braised with wine, bacon, mushrooms, and garlic.',
      ingredients: ['1 whole chicken, cut into pieces', '2 cups red wine', '1/4 lb bacon, diced', '1 cup pearl onions', '1 cup mushrooms, quartered', '2 cloves garlic, minced', '1 tbsp tomato paste', '2 tbsp flour', 'Fresh thyme and bay leaf', 'Salt and pepper to taste'],
      instructions: ['Brown bacon in a large Dutch oven.', 'Remove bacon and brown chicken pieces in the fat.', 'Add garlic and sauté briefly.', 'Sprinkle flour over chicken and cook for 1 minute.', 'Pour in wine and add tomato paste, herbs, bacon, onions, and mushrooms.', 'Bring to a simmer, cover, and cook for 1 hour or until chicken is tender.', 'Adjust seasoning and serve hot with crusty bread or potatoes.'],
      prepTime: '30 mins',
      cookTime: '1 hour 15 mins',
      servings: 6,
      calories: 450,
      tags: ['continental', 'french', 'chicken', 'wine'],
      difficulty: "Medium",
      mood: 'romantic',
      aiSuggestion: "Marinate the chicken in wine overnight for deeper flavor.",
      nutritionAnalysis: "High in protein from chicken, contains antioxidants from red wine.",
      cookingTips: ["Use a good quality wine that you would drink.", "For more flavor, brown the chicken pieces well before braising."]
    }
  ],
  unique: [
    {
      id: 'unique1',
      name: 'Chocolate Avocado Mousse',
      description: 'A surprisingly delicious and healthy dessert made with ripe avocados and dark chocolate.',
      ingredients: ['2 ripe avocados', '1/2 cup cocoa powder', '1/2 cup maple syrup or honey', '1 tsp vanilla extract', '1/4 cup almond milk', 'Pinch of salt', 'Berries for garnish'],
      instructions: ['Scoop avocado flesh into a food processor.', 'Add cocoa powder, sweetener, vanilla, milk, and salt.', 'Blend until completely smooth, scraping down sides as needed.', 'Taste and adjust sweetness if necessary.', 'Chill for at least 2 hours.', 'Serve in individual cups, garnished with berries.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 250,
      tags: ['unique', 'dessert', 'healthy', 'vegan'],
      difficulty: "Easy",
      mood: 'creative',
      aiSuggestion: "Add a pinch of cinnamon or chili powder for interesting flavor notes.",
      nutritionAnalysis: "High in healthy fats from avocado, antioxidants from cocoa.",
      cookingTips: ["Use very ripe avocados for the creamiest texture.", "For best results, chill thoroughly before serving."]
    },
    {
      id: 'unique2',
      name: 'Watermelon Pizza',
      description: 'A refreshing, no-bake "pizza" made with watermelon as the base and topped with yogurt and fruits.',
      ingredients: ['1 large round watermelon slice (1-inch thick)', '1 cup Greek yogurt', '1/4 cup honey', 'Assorted fresh fruits (berries, kiwi, peaches)', '1/4 cup chopped nuts', 'Fresh mint leaves'],
      instructions: ['Cut a 1-inch thick round slice from the center of a watermelon.', 'Pat the watermelon dry with paper towels.', 'Spread Greek yogurt over the watermelon slice.', 'Drizzle with honey.', 'Arrange fruits decoratively on top.', 'Sprinkle with chopped nuts.', 'Garnish with mint leaves.', 'Slice into wedges and serve immediately.'],
      prepTime: '15 mins',
      cookTime: '0 mins',
      servings: 6,
      calories: 150,
      tags: ['unique', 'fruit', 'healthy', 'no-cook'],
      difficulty: "Easy",
      mood: 'creative',
      aiSuggestion: "For a more dessert-like version, use sweetened whipped cream instead of yogurt.",
      nutritionAnalysis: "High in vitamins from fruits, probiotics from yogurt.",
      cookingTips: ["Choose a firm, ripe watermelon for best results.", "Serve immediately after assembly to prevent sogginess."]
    }
  ]
};

// Define utility functions that need to be exported

// Function to get recipes by mood
export const getRecipesByMood = (moodId: string): Recipe[] => {
  // Flatten all recipe categories into a single array
  const allRecipes = Object.values(recipesData).flat();
  
  // Filter recipes that match the given mood
  return allRecipes.filter(recipe => recipe.mood === moodId);
};

// Function to get a recipe by ID
export const getRecipeById = (id: string): Recipe | null => {
  // Flatten all recipe categories into a single array
  const allRecipes = Object.values(recipesData).flat();
  
  // Find the recipe with the matching ID
  const recipe = allRecipes.find(recipe => recipe.id === id);
  
  return recipe || null;
};

// Function to get all recipes
export const getAllRecipes = (): Recipe[] => {
  // Flatten all recipe categories into a single array
  return Object.values(recipesData).flat();
};

// Function to search recipes by name, ingredients, or tags
export const searchRecipes = (searchTerm: string): Recipe[] => {
  const allRecipes = getAllRecipes();
  const term = searchTerm.toLowerCase();
  
  return allRecipes.filter(recipe => {
    // Search in name
    if (recipe.name.toLowerCase().includes(term)) return true;
    
    // Search in description
    if (recipe.description.toLowerCase().includes(term)) return true;
    
    // Search in ingredients
    if (recipe.ingredients.some(ing => ing.toLowerCase().includes(term))) return true;
    
    // Search in tags
    if (recipe.tags.some(tag => tag.toLowerCase().includes(term))) return true;
    
    return false;
  });
};

// Function to get similar recipes
export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const currentRecipe = getRecipeById(recipeId);
  if (!currentRecipe) return [];
  
  const allRecipes = getAllRecipes();
  
  // Filter out the current recipe
  const otherRecipes = allRecipes.filter(recipe => recipe.id !== recipeId);
  
  // Score each recipe based on similarity (shared tags, mood, etc.)
  const scoredRecipes = otherRecipes.map(recipe => {
    let score = 0;
    
    // Score based on shared tags
    const sharedTags = recipe.tags.filter(tag => currentRecipe.tags.includes(tag));
    score += sharedTags.length * 2;
    
    // Score based on same mood
    if (recipe.mood === currentRecipe.mood) {
      score += 3;
    }
    
    // Score based on similar difficulty
    if (recipe.difficulty === currentRecipe.difficulty) {
      score += 1;
    }
    
    return { recipe, score };
  });
  
  // Sort by score (highest first) and return the top N recipes
  return scoredRecipes
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.recipe);
};

// Function to get chatbot response
export const getChatbotResponse = (query: string, moodId: string | null): string => {
  query = query.toLowerCase();
  
  // Check for general questions and provide responses
  if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
    return "Hello! I'm your recipe assistant. How can I help you today?";
  }
  
  if (query.includes('how are you')) {
    return "I'm doing great, thanks for asking! Ready to help you with recipe ideas and cooking tips.";
  }
  
  // Recipe recommendations based on mood
  if (moodId && (query.includes('recommend') || query.includes('suggestion') || query.includes('what should i cook'))) {
    const moodRecipes = getRecipesByMood(moodId);
    
    if (moodRecipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * moodRecipes.length);
      const recommendation = moodRecipes[randomIndex];
      return `Based on your ${moodId} mood, I recommend trying ${recommendation.name}. It's a ${recommendation.difficulty.toLowerCase()} recipe that takes ${recommendation.prepTime} to prepare and ${recommendation.cookTime} to cook.`;
    } else {
      return "I don't have any specific recommendations for your current mood, but I can help you find recipes based on ingredients or cuisine preferences. What are you in the mood for?";
    }
  }
  
  // Questions about ingredients or recipe variations
  if (query.includes('substitute') || query.includes('replacement') || query.includes('instead of')) {
    return "There are many possible substitutions in cooking. Could you tell me which ingredient you're looking to replace, and I can suggest alternatives?";
  }
  
  // Cooking technique questions
  if (query.includes('how to') || query.includes('technique') || query.includes('method')) {
    if (query.includes('boil') || query.includes('boiling')) {
      return "For boiling, use a large pot with plenty of water. For pasta, add salt to the water once it's boiling, then add pasta. Different foods have different boiling times, so check specific instructions for what you're cooking.";
    }
    if (query.includes('fry') || query.includes('frying')) {
      return "For pan-frying, heat the pan before adding oil, then add food once the oil is hot. For deep frying, use a thermometer to ensure proper oil temperature (usually 350-375°F). Don't overcrowd the pan, and drain fried foods on paper towels.";
    }
    if (query.includes('bake') || query.includes('baking')) {
      return "For baking, always preheat your oven. Position racks appropriately: middle rack for even cooking, top rack for browning, lower rack for bottom heat. Use the correct bakeware for your recipe.";
    }
    return "That's a good cooking question! Could you provide more details about what you're trying to cook, and I can give you specific techniques?";
  }
  
  // Meal planning questions
  if (query.includes('meal plan') || query.includes('weekly menu') || query.includes('meal prep')) {
    return "Meal planning can save time and money! Start by picking 4-5 recipes for the week, make a shopping list of all ingredients, and consider batch cooking on weekends. Would you like specific meal prep recipe suggestions?";
  }
  
  // Dietary restriction questions
  if (query.includes('vegan') || query.includes('vegetarian') || query.includes('gluten-free') || query.includes('dairy-free')) {
    let dietType = '';
    if (query.includes('vegan')) dietType = 'vegan';
    else if (query.includes('vegetarian')) dietType = 'vegetarian';
    else if (query.includes('gluten-free')) dietType = 'gluten-free';
    else if (query.includes('dairy-free')) dietType = 'dairy-free';
    
    return `For ${dietType} cooking, focus on whole foods and appropriate substitutes. I can help you adapt recipes or find ones that already meet your dietary needs. What type of dish are you interested in making?`;
  }
  
  // Default response if no specific pattern is matched
  return "I'd be happy to help with recipe suggestions, cooking tips, or answering food-related questions. Could you provide more details about what you're looking for?";
};

export default recipesData;
