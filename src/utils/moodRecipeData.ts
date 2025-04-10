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
    },
