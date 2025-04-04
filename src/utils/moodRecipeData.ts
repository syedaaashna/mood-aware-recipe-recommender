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

// Recipe data
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
      mood: 'happy',
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
      mood: 'relaxed',
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
      mood: 'nostalgic',
      aiSuggestion: "Add a layer of shredded cheese under the mashed potatoes for a cheesy surprise.",
      nutritionAnalysis: "High in protein and carbohydrates. Provides a good source of iron.",
      cookingTips: ["Use leftover mashed potatoes to save time.", "Top with a sprinkle of paprika for added flavor."]
    },
  ],
  breakfast: [
    {
      id: 'breakfast1',
      name: 'Pancakes',
      description: 'Fluffy pancakes',
      ingredients: ['1 cup flour', '1 cup milk', '1 egg', '1 tbsp sugar', '2 tbsp butter'],
      instructions: ['Mix ingredients', 'Cook on griddle'],
      prepTime: '5 mins',
      cookTime: '10 mins',
      servings: 4,
      calories: 200,
      tags: ['breakfast', 'sweet', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add blueberries for extra flavor.",
      nutritionAnalysis: "High in carbohydrates.",
      cookingTips: ["Don't overmix the batter."]
    },
    {
      id: 'breakfast2',
      name: 'Omelette',
      description: 'Savory omelette',
      ingredients: ['2 eggs', '1/4 cup milk', 'Salt and pepper to taste', 'Optional fillings: cheese, ham, vegetables'],
      instructions: ['Whisk eggs with milk, salt, and pepper.', 'Heat a lightly oiled pan over medium heat.', 'Pour egg mixture into the pan.', 'As the omelette begins to set, add your choice of fillings to one half.', 'Fold the omelette in half and cook until heated through and set.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 250,
      tags: ['breakfast', 'savory', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a dash of hot sauce for a spicy kick.",
      nutritionAnalysis: "High in protein and vitamins.",
      cookingTips: ["Use a non-stick pan for best results.", "Don't overcook the omelette."]
    },
    {
      id: 'breakfast3',
      name: 'Breakfast Burrito',
      description: 'Hearty breakfast burrito',
      ingredients: ['1 large tortilla', '2 eggs, scrambled', '1/4 cup cheese', '1/4 cup salsa', 'Optional fillings: bacon, sausage, avocado'],
      instructions: ['Warm the tortilla in a pan or microwave.', 'Scramble the eggs and set aside.', 'Place the scrambled eggs in the center of the tortilla.', 'Top with cheese, salsa, and any optional fillings.', 'Fold in the sides of the tortilla and roll up tightly.', 'Serve immediately.'],
      prepTime: '10 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 400,
      tags: ['breakfast', 'savory', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a dollop of sour cream for extra creaminess.",
      nutritionAnalysis: "High in protein and carbohydrates.",
      cookingTips: ["Warm the tortilla to make it more pliable.", "Don't overfill the burrito."]
    },
    {
      id: 'breakfast4',
      name: 'Avocado Toast',
      description: 'Trendy avocado toast',
      ingredients: ['1 slice of bread', '1/2 avocado, mashed', 'Salt and pepper to taste', 'Optional toppings: red pepper flakes, everything bagel seasoning, fried egg'],
      instructions: ['Toast the bread to your liking.', 'Mash the avocado in a bowl and season with salt and pepper.', 'Spread the mashed avocado on the toast.', 'Top with your choice of toppings.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '2 mins',
      servings: 1,
      calories: 200,
      tags: ['breakfast', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a squeeze of lemon juice to prevent the avocado from browning.",
      nutritionAnalysis: "High in healthy fats and fiber.",
      cookingTips: ["Use a ripe avocado for best results.", "Toast the bread to your liking."]
    },
  ],
  lunch: [
    {
      id: 'lunch1',
      name: 'Chicken Salad Sandwich',
      description: 'Classic chicken salad sandwich',
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
      nutritionAnalysis: "High in protein.",
      cookingTips: ["Use leftover cooked chicken to save time.", "Toast the bread for added texture."]
    },
    {
      id: 'lunch2',
      name: 'Tomato Soup',
      description: 'Comforting tomato soup',
      ingredients: ['1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '28 oz canned crushed tomatoes', '4 cups vegetable broth', '1 tsp sugar', 'Salt and pepper to taste', 'Optional toppings: croutons, basil, sour cream'],
      instructions: ['Heat the olive oil in a pot over medium heat.', 'Add the onion and garlic and cook until softened, about 5 minutes.', 'Stir in the crushed tomatoes, vegetable broth, and sugar.', 'Season with salt and pepper.', 'Bring to a simmer and cook for 15 minutes.', 'Blend the soup with an immersion blender until smooth.', 'Serve hot with your choice of toppings.'],
      prepTime: '10 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 150,
      tags: ['lunch', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in vitamins and antioxidants.",
      cookingTips: ["Use high-quality canned tomatoes for best results.", "Serve with a grilled cheese sandwich for a complete meal."]
    },
    {
      id: 'lunch3',
      name: 'Quesadilla',
      description: 'Quick and easy quesadilla',
      ingredients: ['2 tortillas', '1/2 cup cheese', 'Optional fillings: cooked chicken, black beans, corn, salsa'],
      instructions: ['Sprinkle cheese on one tortilla.', 'Add your choice of fillings on top of the cheese.', 'Top with the other tortilla.', 'Cook in a lightly oiled pan over medium heat until the cheese is melted and the tortillas are golden brown.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '5 mins',
      servings: 1,
      calories: 400,
      tags: ['lunch', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a dollop of sour cream or guacamole for extra flavor.",
      nutritionAnalysis: "High in protein and calcium.",
      cookingTips: ["Use a variety of cheeses for a more complex flavor.", "Serve with a side of salsa or guacamole."]
    },
  ],
  dinner: [
    {
      id: 'dinner1',
      name: 'Spaghetti and Meatballs',
      description: 'Classic spaghetti and meatballs',
      ingredients: ['1 lb spaghetti', '1 lb ground beef', '1/2 cup breadcrumbs', '1/4 cup Parmesan cheese', '1 egg', '1 onion, chopped', '2 cloves garlic, minced', '28 oz canned crushed tomatoes', '1 tsp sugar', 'Salt and pepper to taste'],
      instructions: ['Cook spaghetti according to package directions.', 'In a bowl, mix together the ground beef, breadcrumbs, Parmesan cheese, egg, salt, and pepper.', 'Roll the mixture into meatballs.', 'In a pot, cook the onion and garlic until softened.', 'Stir in the crushed tomatoes, sugar, salt, and pepper.', 'Bring to a simmer and add the meatballs.', 'Cook for 20 minutes, or until the meatballs are cooked through.', 'Serve the meatballs and sauce over the spaghetti.'],
      prepTime: '20 mins',
      cookTime: '40 mins',
      servings: 6,
      calories: 550,
      tags: ['dinner', 'meat', 'pasta', 'comfort food'],
      difficulty: "Medium",
      mood: 'nostalgic',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in protein and carbohydrates.",
      cookingTips: ["Use high-quality canned tomatoes for best results.", "Serve with a side of garlic bread."]
    },
    {
      id: 'dinner2',
      name: 'Salmon with Roasted Vegetables',
      description: 'Healthy salmon with roasted vegetables',
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
      nutritionAnalysis: "High in protein and omega-3 fatty acids.",
      cookingTips: ["Use fresh, high-quality salmon for best results.", "Serve with a side of quinoa or brown rice."]
    },
    {
      id: 'dinner3',
      name: 'Chicken Stir-Fry',
      description: 'Quick and easy chicken stir-fry',
      ingredients: ['1 lb chicken breast, cut into bite-sized pieces', '1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '1 lb mixed vegetables, chopped (broccoli, carrots, bell peppers, etc.)', '1/4 cup soy sauce', '1 tbsp honey', '1 tbsp cornstarch', 'Salt and pepper to taste'],
      instructions: ['In a bowl, mix together the soy sauce, honey, and cornstarch.', 'Heat the olive oil in a wok or large skillet over high heat.', 'Add the chicken and cook until browned.', 'Add the onion and garlic and cook until softened.', 'Add the mixed vegetables and cook until tender-crisp.', 'Pour the sauce over the chicken and vegetables and cook until thickened.', 'Serve over rice or noodles.'],
      prepTime: '15 mins',
      cookTime: '20 mins',
      servings: 4,
      calories: 450,
      tags: ['dinner', 'meat', 'asian', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in protein and vitamins.",
      cookingTips: ["Use a wok for best results.", "Serve with a side of steamed rice."]
    },
  ],
  dessert: [
    {
      id: 'dessert1',
      name: 'Chocolate Chip Cookies',
      description: 'Classic chocolate chip cookies',
      ingredients: ['1 cup butter, softened', '3/4 cup sugar', '3/4 cup brown sugar', '2 eggs', '1 tsp vanilla extract', '2 1/4 cups flour', '1 tsp baking soda', '1 tsp salt', '2 cups chocolate chips'],
      instructions: ['Preheat oven to 375°F (190°C).', 'In a bowl, cream together the butter, sugar, and brown sugar.', 'Beat in the eggs and vanilla extract.', 'In a separate bowl, whisk together the flour, baking soda, and salt.', 'Gradually add the dry ingredients to the wet ingredients, mixing until just combined.', 'Stir in the chocolate chips.', 'Drop by rounded tablespoons onto a baking sheet.', 'Bake for 9-11 minutes, or until golden brown.', 'Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.'],
      prepTime: '15 mins',
      cookTime: '10 mins',
      servings: 24,
      calories: 150,
      tags: ['dessert', 'sweet', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a pinch of sea salt for extra flavor.",
      nutritionAnalysis: "High in sugar and fat.",
      cookingTips: ["Use high-quality chocolate chips for best results.", "Don't overbake the cookies."]
    },
    {
      id: 'dessert2',
      name: 'Apple Pie',
      description: 'Homemade apple pie',
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
      nutritionAnalysis: "High in sugar and carbohydrates.",
      cookingTips: ["Use a variety of apples for a more complex flavor.", "Serve warm with a scoop of vanilla ice cream."]
    },
    {
      id: 'dessert3',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake',
      ingredients: ['2 cups sugar', '1 3/4 cups flour', '3/4 cup cocoa powder', '1 1/2 tsp baking powder', '1 1/2 tsp baking soda', '1 tsp salt', '1 cup buttermilk', '1/2 cup vegetable oil', '2 eggs', '1 tsp vanilla extract', '1 cup boiling water'],
      instructions: ['Preheat oven to 350°F (175°C).', 'Grease and flour a 9x13 inch baking pan.', 'In a bowl, whisk together the sugar, flour, cocoa powder, baking powder, baking soda, and salt.', 'Add the buttermilk, vegetable oil, eggs, and vanilla extract and mix until combined.', 'Gradually add the boiling water, mixing until smooth.', 'Pour the batter into the prepared baking pan.', 'Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.', 'Let cool completely before frosting.'],
      prepTime: '20 mins',
      cookTime: '35 mins',
      servings: 12,
      calories: 400,
      tags: ['dessert', 'sweet', 'chocolate'],
      difficulty: "Medium",
      mood: 'happy',
      aiSuggestion: "Add a layer of chocolate ganache for extra richness.",
      nutritionAnalysis: "High in sugar and fat.",
      cookingTips: ["Use high-quality cocoa powder for best results.", "Serve with a scoop of vanilla ice cream or whipped cream."]
    },
  ],
  quick: [
    {
      id: 'quick1',
      name: 'Quesadilla',
      description: 'Quick quesadilla',
      ingredients: ['Tortilla, cheese'],
      instructions: ['Melt cheese in tortilla'],
      prepTime: '2 mins',
      cookTime: '3 mins',
      servings: 1,
      calories: 300,
      tags: ['quick', 'easy', 'lunch'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add salsa for extra flavor.",
      nutritionAnalysis: "High in calcium.",
      cookingTips: ["Use a non-stick pan."]
    },
    {
      id: 'quick2',
      name: 'Peanut Butter Sandwich',
      description: 'Classic peanut butter sandwich',
      ingredients: ['2 slices of bread', '2 tablespoons peanut butter'],
      instructions: ['Spread peanut butter on one slice of bread.', 'Top with the other slice of bread.', 'Serve immediately.'],
      prepTime: '2 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['quick', 'easy', 'lunch'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add jelly for a classic PB&J.",
      nutritionAnalysis: "High in protein and fat.",
      cookingTips: ["Use your favorite type of bread."]
    },
    {
      id: 'quick3',
      name: 'Microwave Popcorn',
      description: 'Quick microwave popcorn',
      ingredients: ['1 bag microwave popcorn'],
      instructions: ['Place the bag in the microwave and cook according to package directions.', 'Serve immediately.'],
      prepTime: '1 mins',
      cookTime: '3 mins',
      servings: 1,
      calories: 150,
      tags: ['quick', 'easy', 'snack'],
      difficulty: "Easy",
      mood: 'relaxed',
      aiSuggestion: "Add butter and salt for extra flavor.",
      nutritionAnalysis: "High in fiber.",
      cookingTips: ["Don't overcook the popcorn."]
    },
  ],
  snack: [
    {
      id: 'snack1',
      name: 'Yogurt Parfait',
      description: 'Healthy yogurt parfait',
      ingredients: ['1 cup yogurt', '1/4 cup granola', '1/4 cup berries'],
      instructions: ['Layer yogurt, granola, and berries in a glass.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['snack', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add honey for extra sweetness.",
      nutritionAnalysis: "High in protein and calcium.",
      cookingTips: ["Use your favorite type of yogurt."]
    },
    {
      id: 'snack2',
      name: 'Trail Mix',
      description: 'Easy trail mix',
      ingredients: ['1/4 cup nuts', '1/4 cup dried fruit', '1/4 cup chocolate chips'],
      instructions: ['Mix all ingredients together in a bowl.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 300,
      tags: ['snack', 'easy', 'healthy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add pretzels for extra saltiness.",
      nutritionAnalysis: "High in protein and healthy fats.",
      cookingTips: ["Use your favorite type of nuts and dried fruit."]
    },
    {
      id: 'snack3',
      name: 'Apple Slices with Peanut Butter',
      description: 'Healthy apple slices with peanut butter',
      ingredients: ['1 apple, sliced', '2 tablespoons peanut butter'],
      instructions: ['Spread peanut butter on apple slices.', 'Serve immediately.'],
      prepTime: '5 mins',
      cookTime: '0 mins',
      servings: 1,
      calories: 200,
      tags: ['snack', 'healthy', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add cinnamon for extra flavor.",
      nutritionAnalysis: "High in fiber and protein.",
      cookingTips: ["Use your favorite type of apple."]
    },
  ],
  ethnic: [
    {
      id: 'italian1',
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta carbonara',
      ingredients: ['1 lb spaghetti', '4 oz pancetta, diced', '2 eggs', '1/2 cup Parmesan cheese', 'Salt and pepper to taste'],
      instructions: ['Cook spaghetti according to package directions.', 'In a pan, cook the pancetta until crispy.', 'In a bowl, whisk together the eggs, Parmesan cheese, salt, and pepper.', 'Drain the spaghetti and add it to the pan with the pancetta.', 'Pour the egg mixture over the spaghetti and toss to combine.', 'Serve immediately.'],
      prepTime: '10 mins',
      cookTime: '15 mins',
      servings: 4,
      calories: 500,
      tags: ['italian', 'pasta', 'meat'],
      difficulty: "Medium",
      mood: 'happy',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in protein and fat.",
      cookingTips: ["Use high-quality Parmesan cheese for best results.", "Serve with a side of garlic bread."]
    },
    {
      id: 'italian2',
      name: 'Margherita Pizza',
      description: 'Classic Margherita pizza',
      ingredients: ['1 pizza dough', '1/2 cup tomato sauce', '8 oz mozzarella cheese, sliced', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste'],
      instructions: ['Preheat oven to 450°F (230°C).', 'Roll out the pizza dough.', 'Spread the tomato sauce over the dough.', 'Top with mozzarella cheese slices.', 'Bake for 12-15 minutes, or until the crust is golden brown and the cheese is melted.', 'Top with fresh basil leaves.', 'Drizzle with olive oil and season with salt and pepper.', 'Serve immediately.'],
      prepTime: '20 mins',
      cookTime: '15 mins',
      servings: 4,
      calories: 350,
      tags: ['italian', 'pizza', 'vegetarian'],
      difficulty: "Medium",
      mood: 'happy',
      aiSuggestion: "Add a pinch of red pepper flakes for a spicy kick.",
      nutritionAnalysis: "High in carbohydrates and calcium.",
      cookingTips: ["Use high-quality ingredients for best results.", "Serve with a side of salad."]
    },
    {
      id: 'mexican1',
      name: 'Tacos',
      description: 'Classic Mexican tacos',
      ingredients: ['1 lb ground beef', '1 packet taco seasoning', '12 taco shells', 'Toppings: lettuce, tomato, cheese, sour cream, salsa'],
      instructions: ['Cook the ground beef in a pan over medium heat.', 'Drain off any excess grease.', 'Stir in the taco seasoning and cook according to package directions.', 'Warm the taco shells.', 'Fill the taco shells with the ground beef mixture.', 'Top with your choice of toppings.', 'Serve immediately.'],
      prepTime: '15 mins',
      cookTime: '20 mins',
      servings: 6,
      calories: 400,
      tags: ['mexican', 'meat', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add guacamole for extra flavor.",
      nutritionAnalysis: "High in protein.",
      cookingTips: ["Use your favorite type of taco seasoning.", "Serve with a side of rice and beans."]
    },
    {
      id: 'mexican2',
      name: 'Guacamole',
      description: 'Classic Mexican guacamole',
      ingredients: ['3 avocados', '1/2 onion, chopped', '2 tomatoes, chopped', '1 jalapeño, minced', '1/4 cup cilantro, chopped', '2 tablespoons lime juice', 'Salt to taste'],
      instructions: ['Mash the avocados in a bowl.', 'Add the onion, tomatoes, jalapeño, cilantro, lime juice, and salt.', 'Mix well.', 'Serve with tortilla chips.'],
      prepTime: '10 mins',
      cookTime: '0 mins',
      servings: 6,
      calories: 150,
      tags: ['mexican', 'vegetarian', 'easy'],
      difficulty: "Easy",
      mood: 'happy',
      aiSuggestion: "Add a pinch of cumin for extra flavor.",
      nutritionAnalysis: "High in healthy fats.",
      cookingTips: ["Use ripe avocados for best results.", "Serve with tortilla chips or as a topping for tacos."]
    },
    {
      id: 'asian1',
      name: 'Sushi Rolls',
      description: 'Homemade sushi rolls',
      ingredients: ['Sushi rice', 'Nori sheets', 'Fillings: cucumber, avocado, crab meat, salmon'],
      instructions: ['Cook the sushi rice according to package directions.', 'Place a nori sheet on a bamboo rolling mat.', 'Spread a thin layer of sushi rice over the nori sheet.', 'Add your choice of fillings.', 'Roll up the sushi roll tightly.', 'Cut the sushi roll into slices.', 'Serve with soy sauce and wasabi.'],
      prepTime: '30 mins',
      cookTime: '0 mins',
      servings: 4,
      calories: 300,
      tags: ['asian', 'fish', 'healthy'],
      difficulty: "Hard",
      mood: 'relaxed',
      aiSuggestion: "Add a sprinkle of sesame seeds for extra flavor.",
      nutritionAnalysis: "High in omega-3 fatty acids.",
      cookingTips: ["Use high-quality sushi rice for best results.", "Serve with soy sauce, wasabi, and ginger."]
    },
    {
      id: 'asian2',
      name: 'Stir Fry',
      description: 'Quick and easy stir fry',
      ingredients: ['1 lb protein (chicken, beef, tofu)', '1 tbsp olive oil', '1 onion, chopped', '2 cloves garlic, minced', '1 lb mixed vegetables, chopped (broccoli, carrots, bell peppers, etc.)', '1/4 cup soy sauce', '1 tbsp honey', '1 tbsp cornstarch', 'Salt and pepper to taste'],
      instructions: ['In a bowl, mix together the soy sauce, honey, and cornstarch.', 'Heat the olive oil in
