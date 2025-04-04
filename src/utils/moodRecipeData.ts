
import { 
  Cloud, CloudRain, Coffee, Cookie, Frown, Heart, Laugh, 
  Meh, Smile, Sun, Zap, HelpCircle, Flame
} from 'lucide-react';

export interface Mood {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: string[];
  instructions: string[];
  image: string;
  tags: string[];
  mood: string[];
}

export const moods: Mood[] = [
  {
    id: "happy",
    name: "Happy",
    icon: "😊",
    description: "Joyful and content"
  },
  {
    id: "sad",
    name: "Sad",
    icon: "😢",
    description: "Feeling down or blue"
  },
  {
    id: "angry",
    name: "Angry",
    icon: "😠",
    description: "Feeling frustrated or irritated"
  },
  {
    id: "confused",
    name: "Confused",
    icon: "😕",
    description: "Uncertain or puzzled"
  },
  {
    id: "exhausted",
    name: "Exhausted",
    icon: "😫",
    description: "Completely drained of energy"
  },
  {
    id: "surprised",
    name: "Surprised",
    icon: "😲",
    description: "Feeling shocked or astonished"
  },
  {
    id: "scared",
    name: "Scared",
    icon: "😨",
    description: "Feeling fearful or frightened"
  },
  {
    id: "stressed",
    name: "Stressed",
    icon: "😰",
    description: "Feeling overwhelmed or under pressure"
  },
  {
    id: "excited",
    name: "Excited",
    icon: "😃",
    description: "Enthusiastic and eager"
  },
  {
    id: "bored",
    name: "Bored",
    icon: "😒",
    description: "Feeling uninterested or restless"
  },
  {
    id: "calm",
    name: "Calm",
    icon: "😌",
    description: "Peaceful and relaxed"
  },
  {
    id: "hungry",
    name: "Hungry",
    icon: "🍽️",
    description: "Craving food or snacks"
  },
  {
    id: "nostalgic",
    name: "Nostalgic",
    icon: "🕰️",
    description: "Reminiscing about the past"
  },
  {
    id: "adventurous",
    name: "Adventurous",
    icon: "🧭",
    description: "Ready to try something new"
  },
  {
    id: "cozy",
    name: "Cozy",
    icon: "🧸",
    description: "Seeking comfort and warmth"
  }
];

export const recipes: Recipe[] = [
  // SAD MOOD RECIPES
  {
    id: "sad-comfort-mac-cheese",
    title: "Comforting Mac & Cheese",
    description: "A rich, creamy mac and cheese that feels like a warm hug.",
    cookTime: "30 minutes",
    difficulty: "easy",
    ingredients: [
      "8 oz elbow macaroni",
      "2 cups shredded cheddar cheese",
      "1 cup milk",
      "2 tbsp butter",
      "2 tbsp all-purpose flour",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "1/4 tsp paprika"
    ],
    instructions: [
      "Cook macaroni according to package directions. Drain.",
      "In a medium saucepan, melt butter over medium heat.",
      "Stir in flour, salt, pepper, and paprika until smooth.",
      "Gradually add milk, stirring constantly until thickened.",
      "Add cheese and stir until melted.",
      "Combine cheese sauce with cooked macaroni."
    ],
    image: "comfort1",
    tags: ["comfort food", "pasta", "cheese", "dinner"],
    mood: ["sad"]
  },
  {
    id: "sad-chocolate-pudding",
    title: "Silky Chocolate Pudding",
    description: "A velvety chocolate pudding that melts in your mouth.",
    cookTime: "20 minutes + cooling time",
    difficulty: "easy",
    ingredients: [
      "1/3 cup granulated sugar",
      "2 tbsp cornstarch",
      "2 tbsp unsweetened cocoa powder",
      "Pinch of salt",
      "2 cups milk",
      "4 oz chocolate chips",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "In a saucepan, whisk together sugar, cornstarch, cocoa powder, and salt.",
      "Gradually whisk in milk until smooth.",
      "Cook over medium heat, stirring constantly, until mixture comes to a boil and thickens.",
      "Remove from heat and stir in chocolate chips and vanilla until smooth.",
      "Pour into serving dishes and refrigerate until set."
    ],
    image: "dessert1",
    tags: ["dessert", "chocolate", "sweet", "comfort food"],
    mood: ["sad"]
  },
  {
    id: "sad-warm-soup",
    title: "Hearty Chicken Noodle Soup",
    description: "A classic comfort soup with tender chicken, vegetables, and noodles.",
    cookTime: "45 minutes",
    difficulty: "medium",
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "2 garlic cloves, minced",
      "6 cups chicken broth",
      "2 cups shredded cooked chicken",
      "1 cup egg noodles",
      "1 tsp dried thyme",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook until softened, about 5 minutes.",
      "Add garlic and cook for 30 seconds.",
      "Pour in chicken broth and add thyme. Bring to a boil.",
      "Add noodles and cook until tender, about 8 minutes.",
      "Stir in shredded chicken and cook until heated through.",
      "Season with salt and pepper to taste."
    ],
    image: "comfort2",
    tags: ["soup", "chicken", "comfort food", "dinner"],
    mood: ["sad"]
  },
  {
    id: "sad-cinnamon-toast",
    title: "Cinnamon Sugar Toast",
    description: "Simple yet comforting cinnamon toast that reminds you of childhood.",
    cookTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "4 slices of bread",
      "4 tbsp butter, softened",
      "2 tbsp granulated sugar",
      "1 tsp ground cinnamon",
      "Pinch of nutmeg (optional)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Mix sugar, cinnamon, and nutmeg in a small bowl.",
      "Spread butter evenly on each slice of bread.",
      "Sprinkle the cinnamon-sugar mixture over the buttered bread.",
      "Place on a baking sheet and bake for 5-10 minutes until crispy and golden."
    ],
    image: "breakfast1",
    tags: ["breakfast", "sweet", "quick", "comfort food"],
    mood: ["sad"]
  },
  {
    id: "sad-baked-potato",
    title: "Loaded Baked Potato",
    description: "A warm, filling baked potato topped with all the fixings.",
    cookTime: "1 hour",
    difficulty: "easy",
    ingredients: [
      "4 large russet potatoes",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 cup sour cream",
      "1/2 cup shredded cheddar cheese",
      "4 strips bacon, cooked and crumbled",
      "2 green onions, sliced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Scrub potatoes clean and pat dry. Poke several holes in each potato with a fork.",
      "Rub potatoes with olive oil and salt.",
      "Bake directly on oven rack for 45-60 minutes until tender.",
      "Slice each potato open, fluff the insides with a fork.",
      "Top with sour cream, cheese, bacon, and green onions."
    ],
    image: "comfort3",
    tags: ["comfort food", "potato", "dinner", "lunch"],
    mood: ["sad"]
  },

  // ANGRY MOOD RECIPES
  {
    id: "angry-spicy-wings",
    title: "Fiery Buffalo Wings",
    description: "Spicy chicken wings that let you release some steam.",
    cookTime: "45 minutes",
    difficulty: "medium",
    ingredients: [
      "2 lbs chicken wings",
      "1 tbsp vegetable oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 cup hot sauce",
      "1/4 cup butter, melted",
      "1 tbsp white vinegar",
      "1/4 tsp cayenne pepper",
      "Blue cheese dressing for serving",
      "Celery sticks for serving"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Toss wings with oil, salt, and pepper. Arrange on a baking sheet.",
      "Bake for 45-50 minutes until crispy and cooked through.",
      "In a bowl, combine hot sauce, melted butter, vinegar, and cayenne.",
      "Toss cooked wings in the sauce until well coated.",
      "Serve with blue cheese dressing and celery sticks."
    ],
    image: "spicy1",
    tags: ["spicy", "chicken", "appetizer", "dinner"],
    mood: ["angry"]
  },
  {
    id: "angry-chili",
    title: "Five-Alarm Chili",
    description: "An intensely spicy chili that matches your fiery mood.",
    cookTime: "1 hour 30 minutes",
    difficulty: "medium",
    ingredients: [
      "1 lb ground beef",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 red bell pepper, diced",
      "2 jalapeños, diced (seeds included for extra heat)",
      "1 habanero pepper, minced (optional for extreme heat)",
      "2 tbsp chili powder",
      "1 tbsp cumin",
      "1 tsp paprika",
      "1/2 tsp cayenne pepper",
      "1 can (14.5 oz) diced tomatoes",
      "1 can (15 oz) kidney beans, drained",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large pot, brown ground beef over medium-high heat.",
      "Add onion and garlic, cook until softened.",
      "Add bell pepper and hot peppers, cook for 2 minutes.",
      "Stir in spices and cook for 1 minute until fragrant.",
      "Add tomatoes and beans. Bring to a boil, then reduce heat and simmer for at least 1 hour.",
      "Adjust seasonings to taste."
    ],
    image: "spicy2",
    tags: ["spicy", "beef", "dinner", "lunch"],
    mood: ["angry"]
  },
  {
    id: "angry-curry",
    title: "Fiery Red Curry",
    description: "A bold, spicy curry that packs a serious punch.",
    cookTime: "40 minutes",
    difficulty: "medium",
    ingredients: [
      "2 tbsp vegetable oil",
      "1 onion, sliced",
      "2 tbsp red curry paste (or more for extra heat)",
      "1 lb chicken breast, sliced",
      "1 red bell pepper, sliced",
      "1 can (14 oz) coconut milk",
      "1 tbsp fish sauce",
      "1 tbsp brown sugar",
      "1 lime, juiced",
      "Fresh Thai chilies, sliced (to taste)",
      "Fresh basil leaves for garnish"
    ],
    instructions: [
      "Heat oil in a large pan or wok over medium-high heat.",
      "Add onion and cook until softened.",
      "Add curry paste and cook for 1 minute until fragrant.",
      "Add chicken and cook until no longer pink.",
      "Stir in bell pepper and cook for 2 minutes.",
      "Pour in coconut milk, fish sauce, and brown sugar. Bring to a simmer.",
      "Cook for 10-15 minutes until sauce thickens slightly.",
      "Stir in lime juice and fresh chilies.",
      "Garnish with basil leaves before serving."
    ],
    image: "spicy1",
    tags: ["spicy", "curry", "chicken", "dinner"],
    mood: ["angry"]
  },
  {
    id: "angry-salsa",
    title: "Volcanic Homemade Salsa",
    description: "An aggressive, fiery salsa that brings the heat.",
    cookTime: "15 minutes",
    difficulty: "easy",
    ingredients: [
      "6 ripe tomatoes, chopped",
      "1/2 onion, finely chopped",
      "2 jalapeños, seeds included, chopped",
      "1 habanero pepper, seeds included, minced",
      "3 cloves garlic, minced",
      "1/4 cup cilantro, chopped",
      "1 lime, juiced",
      "1 tsp salt",
      "1/2 tsp black pepper"
    ],
    instructions: [
      "Combine all ingredients in a food processor or blender.",
      "Pulse until desired consistency is reached.",
      "Taste and adjust seasonings as needed.",
      "Let sit for at least 30 minutes for flavors to meld.",
      "Serve with tortilla chips or as a condiment."
    ],
    image: "mexican1",
    tags: ["spicy", "appetizer", "mexican", "quick"],
    mood: ["angry"]
  },
  {
    id: "angry-pasta",
    title: "Arrabbiata Pasta",
    description: "A classic Italian pasta with a fiery sauce.",
    cookTime: "30 minutes",
    difficulty: "easy",
    ingredients: [
      "12 oz penne pasta",
      "2 tbsp olive oil",
      "4 cloves garlic, minced",
      "1 tsp red pepper flakes (or more to taste)",
      "1 can (28 oz) crushed tomatoes",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "Fresh basil leaves, torn",
      "Grated Parmesan cheese for serving"
    ],
    instructions: [
      "Cook pasta according to package directions. Drain.",
      "Meanwhile, heat olive oil in a large skillet over medium heat.",
      "Add garlic and red pepper flakes. Cook for 30 seconds until fragrant.",
      "Add crushed tomatoes, salt, and pepper. Simmer for 15 minutes.",
      "Toss cooked pasta with sauce and basil.",
      "Serve with grated Parmesan cheese."
    ],
    image: "italian1",
    tags: ["spicy", "pasta", "italian", "dinner"],
    mood: ["angry"]
  },

  // CONFUSED MOOD RECIPES
  {
    id: "confused-fusion-tacos",
    title: "Asian-Mexican Fusion Tacos",
    description: "A delightful confusion of Asian and Mexican flavors in taco form.",
    cookTime: "35 minutes",
    difficulty: "medium",
    ingredients: [
      "1 lb flank steak, thinly sliced",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tbsp honey",
      "1 tsp sriracha",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp vegetable oil",
      "8 small flour tortillas",
      "1 cup shredded cabbage",
      "1/4 cup cilantro, chopped",
      "Lime wedges for serving"
    ],
    instructions: [
      "Marinate steak in soy sauce, rice vinegar, honey, sriracha, garlic, and ginger for 15 minutes.",
      "Heat oil in a skillet over high heat. Cook steak for 3-4 minutes.",
      "Warm tortillas in a dry pan or microwave.",
      "Assemble tacos with steak, cabbage, and cilantro.",
      "Serve with lime wedges."
    ],
    image: "asian1",
    tags: ["fusion", "tacos", "beef", "dinner"],
    mood: ["confused"]
  },
  {
    id: "confused-breakfast-pizza",
    title: "Breakfast Pizza",
    description: "Is it breakfast? Is it pizza? It's both!",
    cookTime: "25 minutes",
    difficulty: "medium",
    ingredients: [
      "1 pre-made pizza dough",
      "1/4 cup salsa or pizza sauce",
      "1 cup shredded mozzarella cheese",
      "4 eggs",
      "4 strips bacon, cooked and crumbled",
      "1/2 cup bell peppers, diced",
      "1/4 cup red onion, diced",
      "1 tbsp butter, melted",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 450°F (230°C).",
      "Roll out pizza dough and place on a baking sheet.",
      "Spread sauce over dough, leaving a small border.",
      "Sprinkle with half the cheese.",
      "Make four wells in the cheese and crack an egg into each.",
      "Top with remaining cheese, bacon, peppers, and onion.",
      "Brush crust with melted butter.",
      "Bake for 12-15 minutes until eggs are set and crust is golden.",
      "Season with salt and pepper before serving."
    ],
    image: "breakfast2",
    tags: ["breakfast", "pizza", "eggs", "bacon"],
    mood: ["confused"]
  },
  {
    id: "confused-sushi-burrito",
    title: "Sushi Burrito",
    description: "A giant sushi roll wrapped like a burrito for a hand-held sushi experience.",
    cookTime: "40 minutes",
    difficulty: "hard",
    ingredients: [
      "2 cups sushi rice, cooked and seasoned",
      "4 nori sheets",
      "1/2 lb sushi-grade salmon or tuna, sliced",
      "1 avocado, sliced",
      "1 cucumber, julienned",
      "1 carrot, julienned",
      "1/4 cup pickled ginger",
      "Soy sauce for serving",
      "Wasabi for serving"
    ],
    instructions: [
      "Place a nori sheet on a bamboo sushi mat with the shiny side down.",
      "Spread a thin layer of rice over the nori, leaving a small border at the top.",
      "Layer fish and vegetables across the center of the rice.",
      "Using the bamboo mat, roll tightly from the bottom, sealing the edge with a bit of water.",
      "Wrap in parchment paper or aluminum foil for easier handling.",
      "Slice in half diagonally and serve with soy sauce and wasabi."
    ],
    image: "asian2",
    tags: ["fusion", "sushi", "seafood", "lunch"],
    mood: ["confused"]
  },
  {
    id: "confused-dessert-nachos",
    title: "Sweet Dessert Nachos",
    description: "A sweet twist on savory nachos that will confuse and delight your taste buds.",
    cookTime: "15 minutes",
    difficulty: "easy",
    ingredients: [
      "8 flour tortillas",
      "4 tbsp butter, melted",
      "1/4 cup cinnamon sugar",
      "1 cup chocolate chips, melted",
      "1 cup sliced strawberries",
      "1 cup sliced bananas",
      "1/2 cup chopped nuts",
      "Whipped cream for topping",
      "Caramel sauce for drizzling"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Cut tortillas into triangles and place on a baking sheet.",
      "Brush with melted butter and sprinkle with cinnamon sugar.",
      "Bake for 8-10 minutes until crispy.",
      "Arrange chips on a serving plate, drizzle with melted chocolate.",
      "Top with fruit, nuts, whipped cream, and caramel sauce."
    ],
    image: "dessert2",
    tags: ["dessert", "nachos", "sweet", "fruit"],
    mood: ["confused"]
  },
  {
    id: "confused-meatball-subs",
    title: "PB&J Meatball Subs",
    description: "A surprising combination of savory meatballs with a sweet and spicy PB&J sauce.",
    cookTime: "40 minutes",
    difficulty: "medium",
    ingredients: [
      "1 lb ground beef",
      "1/4 cup breadcrumbs",
      "1 egg",
      "1 tsp garlic powder",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "2 tbsp olive oil",
      "1/4 cup peanut butter",
      "1/4 cup grape jelly",
      "2 tbsp sriracha sauce",
      "4 sub rolls, toasted",
      "1/4 cup chopped peanuts for garnish"
    ],
    instructions: [
      "Mix beef, breadcrumbs, egg, garlic powder, salt, and pepper in a bowl.",
      "Form into 16 small meatballs.",
      "Heat oil in a skillet over medium heat. Cook meatballs until browned and cooked through.",
      "In a small saucepan, combine peanut butter, jelly, and sriracha. Heat until smooth.",
      "Place meatballs in toasted sub rolls and drizzle with sauce.",
      "Sprinkle with chopped peanuts before serving."
    ],
    image: "lunch1",
    tags: ["fusion", "sandwich", "beef", "lunch"],
    mood: ["confused"]
  },

  // EXHAUSTED MOOD RECIPES
  {
    id: "exhausted-one-pot-pasta",
    title: "One-Pot Pasta",
    description: "A simple, no-fuss pasta dish that requires minimal effort.",
    cookTime: "20 minutes",
    difficulty: "easy",
    ingredients: [
      "8 oz spaghetti",
      "2 cups cherry tomatoes, halved",
      "1 onion, thinly sliced",
      "4 cloves garlic, thinly sliced",
      "1/2 tsp red pepper flakes",
      "2 sprigs basil, plus torn leaves for garnish",
      "2 tbsp olive oil",
      "4 1/2 cups water",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for serving"
    ],
    instructions: [
      "Combine all ingredients except Parmesan in a large pot.",
      "Bring to a boil over high heat.",
      "Reduce heat and simmer, stirring occasionally, until pasta is al dente and water is nearly absorbed, about 9-11 minutes.",
      "Season with salt and pepper to taste.",
      "Serve with Parmesan cheese and torn basil leaves."
    ],
    image: "italian1",
    tags: ["quick", "pasta", "one-pot", "dinner"],
    mood: ["exhausted"]
  },
  {
    id: "exhausted-sheet-pan-dinner",
    title: "Sheet Pan Chicken Dinner",
    description: "A complete dinner on one pan with minimal cleanup.",
    cookTime: "45 minutes",
    difficulty: "easy",
    ingredients: [
      "4 chicken thighs",
      "1 lb small potatoes, halved",
      "2 carrots, chopped",
      "1 zucchini, chopped",
      "1 onion, cut into wedges",
      "2 tbsp olive oil",
      "2 tsp Italian seasoning",
      "1 tsp garlic powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Arrange chicken and vegetables on a baking sheet.",
      "Drizzle with olive oil and sprinkle with seasonings.",
      "Toss to coat everything evenly.",
      "Bake for 35-45 minutes until chicken is cooked through and vegetables are tender."
    ],
    image: "dinner1",
    tags: ["quick", "chicken", "one-pan", "dinner"],
    mood: ["exhausted"]
  },
  {
    id: "exhausted-microwave-meal",
    title: "5-Minute Microwave Meal in a Mug",
    description: "A quick and satisfying meal made entirely in the microwave.",
    cookTime: "5 minutes",
    difficulty: "easy",
    ingredients: [
      "1/2 cup instant rice",
      "3/4 cup water",
      "1/4 cup frozen mixed vegetables",
      "1/4 cup pre-cooked chicken or tofu",
      "2 tbsp soy sauce",
      "1 tsp sesame oil",
      "1 green onion, sliced"
    ],
    instructions: [
      "Combine rice and water in a large microwave-safe mug.",
      "Microwave on high for 2 minutes.",
      "Stir in vegetables and protein.",
      "Microwave for another 2 minutes until heated through.",
      "Stir in soy sauce and sesame oil.",
      "Top with green onion before serving."
    ],
    image: "quick1",
    tags: ["quick", "rice", "microwave", "dinner"],
    mood: ["exhausted"]
  },
  {
    id: "exhausted-smoothie-bowl",
    title: "Energizing Smoothie Bowl",
    description: "A nourishing smoothie bowl that requires minimal effort but provides maximum energy.",
    cookTime: "5 minutes",
    difficulty: "easy",
    ingredients: [
      "1 frozen banana",
      "1 cup frozen berries",
      "1/2 cup Greek yogurt",
      "1/4 cup milk or juice",
      "1 tbsp honey or maple syrup",
      "Toppings: granola, sliced fruit, nuts, seeds"
    ],
    instructions: [
      "Blend banana, berries, yogurt, milk, and honey until smooth.",
      "Pour into a bowl.",
      "Top with granola, fruit, nuts, and seeds.",
      "Eat immediately."
    ],
    image: "breakfast3",
    tags: ["quick", "breakfast", "fruit", "healthy"],
    mood: ["exhausted"]
  },
  {
    id: "exhausted-rotisserie-wrap",
    title: "Store-Bought Rotisserie Chicken Wrap",
    description: "A simple wrap using pre-cooked rotisserie chicken for minimal effort.",
    cookTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "1 large flour tortilla",
      "2 tbsp hummus or mayo",
      "1 cup shredded rotisserie chicken",
      "1/4 cup pre-shredded lettuce",
      "1/4 cup pre-shredded carrots",
      "1/4 avocado, sliced (optional)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Spread hummus or mayo on tortilla.",
      "Layer with chicken, lettuce, carrots, and avocado.",
      "Season with salt and pepper.",
      "Roll up tightly and cut in half."
    ],
    image: "quick2",
    tags: ["quick", "chicken", "lunch", "wrap"],
    mood: ["exhausted"]
  },

  // SURPRISED MOOD RECIPES
  {
    id: "surprised-stuffed-mushrooms",
    title: "Surprise-Inside Stuffed Mushrooms",
    description: "Mushrooms with an unexpected filling that will delight your taste buds.",
    cookTime: "35 minutes",
    difficulty: "medium",
    ingredients: [
      "12 large mushrooms, stems removed",
      "4 oz cream cheese, softened",
      "1/4 cup bacon, cooked and crumbled",
      "2 tbsp green onions, chopped",
      "1 clove garlic, minced",
      "1/4 cup shredded cheddar cheese",
      "1 tbsp breadcrumbs",
      "1 tsp Worcestershire sauce",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "In a bowl, mix cream cheese, bacon, green onions, garlic, cheese, Worcestershire sauce, salt, and pepper.",
      "Fill mushroom caps with the mixture.",
      "Sprinkle with breadcrumbs.",
      "Bake for 20-25 minutes until mushrooms are tender and filling is golden."
    ],
    image: "appetizer1",
    tags: ["appetizer", "mushrooms", "cheese", "bacon"],
    mood: ["surprised"]
  },
  {
    id: "surprised-popping-candy-brownies",
    title: "Popping Candy Brownies",
    description: "Chocolate brownies with an unexpected popping candy surprise.",
    cookTime: "40 minutes",
    difficulty: "medium",
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1 tsp vanilla extract",
      "1/2 cup all-purpose flour",
      "1/3 cup cocoa powder",
      "1/4 tsp salt",
      "1/4 tsp baking powder",
      "1/2 cup chocolate chips",
      "1/4 cup popping candy (like Pop Rocks)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease an 8x8 inch baking pan.",
      "Melt butter and mix with sugar, eggs, and vanilla.",
      "In another bowl, combine flour, cocoa, salt, and baking powder.",
      "Stir dry ingredients into wet ingredients just until combined.",
      "Fold in chocolate chips.",
      "Pour batter into pan and sprinkle popping candy on top.",
      "Bake for 25-30 minutes until a toothpick inserted comes out with a few crumbs."
    ],
    image: "dessert3",
    tags: ["dessert", "chocolate", "sweet", "surprise"],
    mood: ["surprised"]
  },
  {
    id: "surprised-color-changing-lemonade",
    title: "Color-Changing Butterfly Pea Lemonade",
    description: "A magical lemonade that changes color before your eyes.",
    cookTime: "15 minutes + cooling time",
    difficulty: "easy",
    ingredients: [
      "2 tbsp dried butterfly pea flowers",
      "4 cups water, divided",
      "1/2 cup freshly squeezed lemon juice",
      "1/2 cup sugar",
      "Ice cubes",
      "Lemon slices for garnish"
    ],
    instructions: [
      "Steep butterfly pea flowers in 2 cups of hot water for 5-10 minutes until water turns deep blue.",
      "In a separate container, mix lemon juice and sugar with remaining water until sugar dissolves.",
      "Fill glasses with ice, pour in blue butterfly pea tea.",
      "At the table, pour in the lemonade mixture and watch the color change from blue to purple!",
      "Garnish with lemon slices."
    ],
    image: "drink1",
    tags: ["drink", "lemonade", "surprise", "refreshing"],
    mood: ["surprised"]
  },
  {
    id: "surprised-molten-cake",
    title: "Molten Chocolate Surprise Cake",
    description: "A chocolate cake with a flowing center that surprises with every bite.",
    cookTime: "25 minutes",
    difficulty: "medium",
    ingredients: [
      "4 oz semi-sweet chocolate",
      "1/2 cup butter",
      "1 cup powdered sugar",
      "2 whole eggs",
      "2 egg yolks",
      "6 tbsp all-purpose flour",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Grease four ramekins.",
      "Melt chocolate and butter together in the microwave or a double boiler.",
      "Whisk in powdered sugar until smooth.",
      "Add eggs and egg yolks, one at a time, whisking well after each addition.",
      "Stir in flour, vanilla, and salt.",
      "Divide batter among ramekins and place on a baking sheet.",
      "Bake for 12-14 minutes until edges are firm but centers are soft.",
      "Let stand for 1 minute, then invert onto plates and dust with powdered sugar."
    ],
    image: "dessert1",
    tags: ["dessert", "chocolate", "cake", "surprise"],
    mood: ["surprised"]
  },
  {
    id: "surprised-rainbow-grilled-cheese",
    title: "Rainbow Grilled Cheese",
    description: "A colorful twist on a classic sandwich that pulls apart with rainbow cheese strings.",
    cookTime: "15 minutes",
    difficulty: "easy",
    ingredients: [
      "8 oz mozzarella cheese, shredded and divided into 4 portions",
      "Food coloring (red, yellow, green, blue)",
      "4 slices of white bread",
      "2 tbsp butter, softened"
    ],
    instructions: [
      "Divide cheese into 4 bowls and add a different food coloring to each. Mix well.",
      "Butter one side of each bread slice.",
      "Place 2 slices, butter side down, in a skillet over medium heat.",
      "Arrange colored cheese in rainbow stripes on bread.",
      "Top with remaining bread slices, butter side up.",
      "Cook until bottom is golden brown, about 3-4 minutes.",
      "Flip and cook until second side is golden and cheese is melted."
    ],
    image: "lunch2",
    tags: ["lunch", "cheese", "sandwich", "colorful"],
    mood: ["surprised"]
  },

  // SCARED MOOD RECIPES
  {
    id: "scared-comfort-soup",
    title: "Comforting Tomato Soup",
    description: "A warm, soothing soup to calm your nerves.",
    cookTime: "30 minutes",
    difficulty: "easy",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 cans (14.5 oz each) diced tomatoes",
      "2 cups vegetable broth",
      "1 tsp dried basil",
      "1/2 tsp dried oregano",
      "1/2 cup heavy cream",
      "Salt and pepper to taste",
      "Croutons for serving (optional)"
    ],
    instructions: [
      "Heat oil in a large pot over medium heat.",
      "Add onion and cook until softened, about 5 minutes.",
      "Add garlic and cook for 30 seconds.",
      "Add tomatoes, broth, basil, and oregano. Bring to a boil.",
      "Reduce heat and simmer for 15 minutes.",
      "Use an immersion blender to puree the soup until smooth.",
      "Stir in cream and heat through.",
      "Season with salt and pepper to taste.",
      "Serve with croutons if desired."
    ],
    image: "comfort2",
    tags: ["comfort food", "soup", "tomato", "dinner"],
    mood: ["scared"]
  },
  {
    id: "scared-warm-bread",
    title: "Fresh Baked Herb Bread",
    description: "The comforting aroma of freshly baked bread to create a sense of security.",
    cookTime: "3 hours (including rising time)",
    difficulty: "medium",
    ingredients: [
      "1 packet active dry yeast",
      "1 tsp sugar",
      "1 1/4 cups warm water",
      "3 cups all-purpose flour",
      "1 tsp salt",
      "2 tbsp olive oil, plus more for brushing",
      "2 tbsp fresh herbs (rosemary, thyme, sage), chopped",
      "1 tsp garlic powder",
      "Flaky sea salt for topping"
    ],
    instructions: [
      "In a bowl, combine yeast, sugar, and warm water. Let sit for 5-10 minutes until foamy.",
      "Mix in flour, salt, olive oil, herbs, and garlic powder.",
      "Knead on a floured surface for 5-7 minutes until smooth and elastic.",
      "Place in an oiled bowl, cover, and let rise in a warm place for 1-2 hours until doubled.",
      "Punch down dough and shape into a loaf. Place on a baking sheet.",
      "Let rise for another 30-45 minutes.",
      "Preheat oven to 375°F (190°C).",
      "Brush loaf with olive oil and sprinkle with sea salt.",
      "Bake for 25-30 minutes until golden and hollow-sounding when tapped."
    ],
    image: "comfort1",
    tags: ["bread", "baking", "comfort food", "herbs"],
    mood: ["scared"]
  },
  {
    id: "scared-hot-chocolate",
    title: "Rich Hot Chocolate",
    description: "A decadent hot chocolate to warm you up and calm your nerves.",
    cookTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "2 cups milk",
      "1/4 cup heavy cream",
      "4 oz high-quality chocolate, chopped",
      "2 tbsp cocoa powder",
      "2 tbsp sugar",
      "1/4 tsp vanilla extract",
      "Pinch of salt",
      "Whipped cream and marshmallows for topping"
    ],
    instructions: [
      "In a saucepan, heat milk and cream over medium heat until steaming but not boiling.",
      "Add chocolate, cocoa powder, sugar, vanilla, and salt.",
      "Whisk until chocolate is melted and mixture is smooth.",
      "Pour into mugs and top with whipped cream and marshmallows."
    ],
    image: "drink2",
    tags: ["drink", "chocolate", "warm", "comfort food"],
    mood: ["scared"]
  },
  {
    id: "scared-mashed-potatoes",
    title: "Creamy Mashed Potatoes",
    description: "A classic comfort food that feels like a warm hug.",
    cookTime: "30 minutes",
    difficulty: "easy",
    ingredients: [
      "2 lbs russet potatoes, peeled and cut into chunks",
      "1/2 cup butter",
      "1/2 cup milk, warmed",
      "1/4 cup sour cream",
      "Salt and pepper to taste",
      "2 tbsp chives, chopped (optional)"
    ],
    instructions: [
      "Place potatoes in a large pot and cover with cold water.",
      "Bring to a boil, add a pinch of salt, and cook until tender, about 15-20 minutes.",
      "Drain potatoes and return to pot.",
      "Add butter and mash potatoes.",
      "Gradually add warm milk and sour cream, continuing to mash until smooth and creamy.",
      "Season with salt and pepper to taste.",
      "Garnish with chives if desired."
    ],
    image: "comfort3",
    tags: ["comfort food", "potato", "side dish", "dinner"],
    mood: ["scared"]
  },
  {
    id: "scared-pudding",
    title: "Vanilla Rice Pudding",
    description: "A simple, soothing pudding that feels like childhood.",
    cookTime: "45 minutes",
    difficulty: "easy",
    ingredients: [
      "3/4 cup short-grain white rice",
      "2 cups whole milk",
      "2 cups half-and-half",
      "1/3 cup sugar",
      "1/4 tsp salt",
      "1 vanilla bean, split lengthwise, or 1 tsp vanilla extract",
      "Ground cinnamon for garnish"
    ],
    instructions: [
      "In a large saucepan, combine rice, milk, half-and-half, sugar, and salt.",
      "If using vanilla bean, scrape seeds into mixture and add pod.",
      "Bring to a simmer over medium heat, stirring occasionally.",
      "Reduce heat to low and cook, stirring frequently, until rice is tender and mixture is creamy, about 30-35 minutes.",
      "Remove from heat. If using vanilla extract, stir in now.",
      "Let cool slightly. Remove vanilla bean pod if used.",
      "Serve warm or cold, sprinkled with cinnamon."
    ],
    image: "dessert2",
    tags: ["dessert", "comfort food", "pudding", "vanilla"],
    mood: ["scared"]
  },

  // STRESSED MOOD RECIPES
  {
    id: "stressed-dark-chocolate",
    title: "Dark Chocolate Sea Salt Bark",
    description: "A simple chocolate treat with stress-reducing properties.",
    cookTime: "15 minutes + cooling time",
    difficulty: "easy",
    ingredients: [
      "12 oz dark chocolate (70% cocoa or higher), chopped",
      "1/4 cup almonds, toasted and chopped",
      "1/4 cup dried cranberries",
      "1 tsp flaky sea salt"
    ],
    instructions: [
      "Line a baking sheet with parchment paper.",
      "Melt chocolate in a heatproof bowl set over a pan of simmering water, stirring occasionally.",
      "Once melted, remove from heat and stir in half the almonds and cranberries.",
      "Pour onto prepared baking sheet and spread into an even layer, about 1/4 inch thick.",
      "Sprinkle remaining almonds, cranberries, and sea salt on top.",
      "Refrigerate until set, about 1 hour.",
      "Break into pieces and store in an airtight container."
    ],
    image: "snack1",
    tags: ["dessert", "chocolate", "quick", "nuts"],
    mood: ["stressed"]
  },
  {
    id: "stressed-chamomile-cookies",
    title: "Calming Chamomile Lavender Cookies",
    description: "Shortbread cookies infused with soothing herbs.",
    cookTime: "45 minutes",
    difficulty: "medium",
    ingredients: [
      "1 cup butter, softened",
      "1/2 cup powdered sugar",
      "2 cups all-purpose flour",
      "1/4 tsp salt",
      "1 tbsp dried chamomile flowers",
      "1 tsp dried culinary lavender",
      "1 tsp vanilla extract",
      "Additional sugar for sprinkling"
    ],
    instructions: [
      "Preheat oven to 325°F (165°C). Line a baking sheet with parchment paper.",
      "Cream butter and sugar until light and fluffy.",
      "Mix in flour and salt until just combined.",
      "Fold in chamomile, lavender, and vanilla.",
      "Roll dough into 1-inch balls and place on baking sheet.",
      "Flatten slightly with a fork and sprinkle with sugar.",
      "Bake for 15-18 minutes until edges are just golden.",
      "Allow to cool completely before serving."
    ],
    image: "snack2",
    tags: ["dessert", "cookies", "herbs", "calming"],
    mood: ["stressed"]
  },
  {
    id: "stressed-herbal-tea",
    title: "Stress-Relief Herbal Tea",
    description: "A calming blend of herbs to help reduce stress and anxiety.",
    cookTime: "5 minutes",
    difficulty: "easy",
    ingredients: [
      "1 tsp dried chamomile flowers",
      "1 tsp dried lavender buds",
      "1 tsp dried lemon balm",
      "1/2 tsp dried mint leaves",
      "1 slice of fresh ginger",
      "1 tsp honey (optional)",
      "1 cup hot water"
    ],
    instructions: [
      "Combine all herbs in a tea infuser or tea bag.",
      "Place in a mug and pour hot water over.",
      "Cover and steep for 5 minutes.",
      "Remove infuser and add honey if desired.",
      "Sip slowly and breathe deeply."
    ],
    image: "drink3",
    tags: ["drink", "tea", "calming", "herbs"],
    mood: ["stressed"]
  },
  {
    id: "stressed-smoothie",
    title: "Stress-Busting Banana Smoothie",
    description: "A magnesium-rich smoothie to help calm your nervous system.",
    cookTime: "5 minutes",
    difficulty: "easy",
    ingredients: [
      "1 banana",
      "1/2 cup spinach",
      "1 tbsp almond butter",
      "1 tbsp chia seeds",
      "1/2 tsp cinnamon",
      "1 cup almond milk",
      "1 tsp honey (optional)",
      "Ice cubes"
    ],
    instructions: [
      "Place all ingredients in a blender.",
      "Blend on high until smooth and creamy.",
      "Pour into a glass and enjoy immediately."
    ],
    image: "healthy1",
    tags: ["drink", "smoothie", "banana", "healthy"],
    mood: ["stressed"]
  },
  {
    id: "stressed-avocado-toast",
    title: "Avocado Toast with Egg",
    description: "A nutrient-rich meal with good fats and protein to fuel your body during stress.",
    cookTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "2 slices whole grain bread, toasted",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "1 lemon wedge"
    ],
    instructions: [
      "Mash avocado in a bowl with a fork. Add a squeeze of lemon juice, salt, and pepper.",
      "Heat olive oil in a skillet over medium heat. Crack eggs into skillet and cook to desired doneness.",
      "Spread mashed avocado on toast slices.",
      "Top each slice with a fried egg.",
      "Season with additional salt, pepper, and red pepper flakes if desired."
    ],
    image: "breakfast4",
    tags: ["breakfast", "avocado", "eggs", "healthy"],
    mood: ["stressed"]
  },

  // EXCITED MOOD RECIPES
  {
    id: "excited-celebration-cake",
    title: "Celebration Layer Cake",
    description: "A festive, colorful cake perfect for celebrating special moments.",
    cookTime: "1 hour 30 minutes",
    difficulty: "hard",
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "2 1/2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup unsalted butter, softened",
      "2 cups granulated sugar",
      "4 large eggs",
      "1 tbsp vanilla extract",
      "1 cup milk",
      "Food coloring in various colors",
      "3 cups buttercream frosting",
      "1/4 cup rainbow sprinkles, plus more for decoration"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and line three 8-inch cake pans.",
      "In a medium bowl, whisk together flour, baking powder, and salt.",
      "In a large bowl, beat butter and sugar until light and fluffy.",
      "Beat in eggs one at a time, then stir in vanilla.",
      "Gradually mix in dry ingredients alternating with milk.",
      "Divide batter equally into 3 bowls and color each with different food coloring.",
      "Fold sprinkles into each colored batter.",
      "Pour into prepared pans and bake for 25-30 minutes until a toothpick inserted comes out clean.",
      "Cool completely before frosting with buttercream and decorating with additional sprinkles."
    ],
    image: "dessert3",
    tags: ["dessert", "cake", "celebration", "colorful"],
    mood: ["excited"]
  },
  {
    id: "excited-cocktail",
    title: "Sparkling Celebration Cocktail",
    description: "A bubbly, festive cocktail to match your excitement.",
    cookTime: "5 minutes",
    difficulty: "easy",
    ingredients: [
      "4 oz champagne or prosecco",
      "1 oz elderflower liqueur",
      "1 oz fresh lemon juice",
      "1 tsp simple syrup",
      "Lemon twist for garnish",
      "Fresh berries for garnish"
    ],
    instructions: [
      "Combine elderflower liqueur, lemon juice, and simple syrup in a shaker with ice.",
      "Shake well and strain into a champagne flute.",
      "Top with champagne or prosecco.",
      "Garnish with lemon twist and fresh berries."
    ],
    image: "drink1",
    tags: ["drink", "cocktail", "celebration", "refreshing"],
    mood: ["excited"]
  },
  {
    id: "excited-nachos",
    title: "Loaded Party Nachos",
    description: "A crowd-pleasing nacho platter perfect for sharing during exciting gatherings.",
    cookTime: "25 minutes",
    difficulty: "medium",
    ingredients: [
      "1 large bag tortilla chips",
      "2 cups shredded Mexican cheese blend",
      "1 can (15 oz) black beans, drained and rinsed",
      "1 cup cooked and seasoned ground beef or chicken",
      "1 cup pico de gallo",
      "1/2 cup guacamole",
      "1/2 cup sour cream",
      "1/4 cup sliced jalapeños",
      "1/4 cup chopped cilantro",
      "1 lime, cut into wedges"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Arrange tortilla chips in an even layer on a large baking sheet.",
      "Sprinkle with half the cheese, then layer with beans and meat.",
      "Top with remaining cheese.",
      "Bake for 10-15 minutes until cheese is melted and chips are crispy.",
      "Remove from oven and top with pico de gallo, guacamole, sour cream, jalapeños, and cilantro.",
      "Serve immediately with lime wedges."
    ],
    image: "mexican2",
    tags: ["appetizer", "Mexican", "party food", "sharing"],
    mood: ["excited"]
  },
  {
    id: "excited-sushi",
    title: "Colorful Sushi Rolls",
    description: "Vibrant, fun sushi rolls to match your excited mood.",
    cookTime: "1 hour",
    difficulty: "hard",
    ingredients: [
      "2 cups sushi rice, cooked and seasoned",
      "8 nori sheets",
      "1 avocado, sliced",
      "1 cucumber, julienned",
      "1 carrot, julienned",
      "8 oz sushi-grade salmon or tuna",
      "4 oz cream cheese",
      "Soy sauce for serving",
      "Wasabi for serving",
      "Pickled ginger for serving"
    ],
    instructions: [
      "Place a nori sheet on a bamboo sushi mat, shiny side down.",
      "Wet your hands and spread a thin layer of rice over the nori, leaving a small border at the top.",
      "Arrange fillings in a line across the center of the rice.",
      "Using the bamboo mat, roll the sushi away from you, applying gentle pressure.",
      "Seal the edge with a bit of water.",
      "Repeat with remaining ingredients.",
      "Slice each roll into 6-8 pieces using a sharp, wet knife.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    image: "asian2",
    tags: ["sushi", "Japanese", "seafood", "colorful"],
    mood: ["excited"]
  },
  {
    id: "excited-breakfast",
    title: "Birthday Breakfast Pancakes",
    description: "Fun, colorful pancakes to kick start an exciting day.",
    cookTime: "30 minutes",
    difficulty: "medium",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "2 cups milk",
      "2 large eggs",
      "1/4 cup melted butter",
      "1 tsp vanilla extract",
      "Food coloring in various colors",
      "1/4 cup rainbow sprinkles",
      "Whipped cream for serving",
      "Maple syrup for serving"
    ],
    instructions: [
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "In another bowl, mix milk, eggs, melted butter, and vanilla.",
      "Add wet ingredients to dry ingredients and stir until just combined.",
      "Divide batter into separate bowls and add different food coloring to each.",
      "Fold sprinkles into each colored batter.",
      "Heat a griddle or non-stick pan over medium heat and lightly grease.",
      "Pour 1/4 cup of batter onto the griddle for each pancake.",
      "Cook until bubbles form on the surface, then flip and cook until golden.",
      "Serve stacked with whipped cream, more sprinkles, and maple syrup."
    ],
    image: "breakfast1",
    tags: ["breakfast", "pancakes", "celebration", "colorful"],
    mood: ["excited"]
  },

  // BORED MOOD RECIPES
  {
    id: "bored-experiment",
    title: "Culinary Experiment: Fusion Tacos",
    description: "A creative cooking project to break the monotony.",
    cookTime: "45 minutes",
    difficulty: "medium",
    ingredients: [
      "8 small flour or corn tortillas",
      "1 lb protein of choice (chicken, beef, tofu, etc.)",
      "Your choice of unconventional seasonings (curry powder, za'atar, garam masala, etc.)",
      "1 cup chopped vegetables (try unexpected ones like brussels sprouts, beets, or cauliflower)",
      "1/4 cup nuts or seeds",
      "Your choice of sauce (try mixing cuisines like tahini with sriracha)",
      "Fresh herbs for garnish",
      "Lime wedges for serving"
    ],
    instructions: [
      "Season and cook your protein with your chosen unconventional spices.",
      "Prepare your vegetables - roast, sauté, or pickle them for different textures.",
      "Create your fusion sauce by combining different cultural elements.",
      "Warm tortillas in a dry pan.",
      "Assemble tacos with protein, vegetables, sauce, nuts/seeds, and herbs.",
      "Document your creation and take notes on what worked and what you'd change!"
    ],
    image: "exotic1",
    tags: ["experimental", "fusion", "creative", "tacos"],
    mood: ["bored"]
  },
  {
    id: "bored-rainbow",
    title: "Rainbow Food Challenge",
    description: "Create a meal using ingredients from every color of the rainbow.",
    cookTime: "40 minutes",
    difficulty: "medium",
    ingredients: [
      "Red: red bell pepper, strawberries, or tomatoes",
      "Orange: carrots, orange segments, or sweet potatoes",
      "Yellow: corn, yellow squash, or pineapple",
      "Green: spinach, avocado, or broccoli",
      "Blue/Purple: blueberries, purple cabbage, or eggplant",
      "White/Brown: quinoa, rice, or pasta as a base",
      "Olive oil, salt, pepper, and your favorite seasonings",
      "Your choice of protein"
    ],
    instructions: [
      "Prepare your base (quinoa, rice, or pasta).",
      "Prepare each colorful ingredient - chop, roast, or cook as appropriate.",
      "Cook your protein if using.",
      "Arrange all ingredients in rainbow order in a bowl or plate.",
      "Drizzle with dressing or sauce of choice.",
      "Take a photo of your vibrant creation before enjoying!"
    ],
    image: "healthy2",
    tags: ["colorful", "healthy", "creative", "challenge"],
    mood: ["bored"]
  },
  {
    id: "bored-blind",
    title: "Blind Taste Test Challenge",
    description: "A fun sensory experience to engage your taste buds.",
    cookTime: "30 minutes",
    difficulty: "easy",
    ingredients: [
      "5-10 different small food items (chocolates, fruits, chips, etc.)",
      "A blindfold",
      "Pen and paper for recording guesses"
    ],
    instructions: [
      "Have someone else prepare small bites of various foods.",
      "Put on the blindfold.",
      "Taste each food item one by one, trying to identify it without seeing.",
      "Write down your guesses and compare with the actual items.",
      "Challenge friends or family to beat your score!"
    ],
    image: "snack3",
    tags: ["fun", "challenge", "game", "sensory"],
    mood: ["bored"]
  },
  {
    id: "bored-bread",
    title: "Artisan Bread Sculpture",
    description: "Turn breadmaking into an art project with shaped bread.",
    cookTime: "3-4 hours (including rising time)",
    difficulty: "hard",
    ingredients: [
      "4 cups all-purpose flour",
      "2 tsp salt",
      "1 tsp active dry yeast",
      "1 1/2 cups warm water",
      "Additional ingredients for decoration (sesame seeds, herbs, food coloring, etc.)"
    ],
    instructions: [
      "Mix flour, salt, and yeast in a large bowl.",
      "Add water and stir until a shaggy dough forms.",
      "Knead for 5-10 minutes until smooth and elastic.",
      "Cover and let rise until doubled, about 1-2 hours.",
      "Punch down dough and divide as needed for your sculpture.",
      "Shape dough into your desired creation (animals, landscapes, abstract designs).",
      "Let shaped dough rise for 30-60 minutes.",
      "Preheat oven to 450°F (230°C).",
      "Decorate with seeds, herbs, or other elements.",
      "Bake for 25-30 minutes until golden and hollow-sounding when tapped.",
      "Cool, photograph, and then enjoy eating your art!"
    ],
    image: "creative1",
    tags: ["bread", "baking", "creative", "art"],
    mood: ["bored"]
  },
  {
    id: "bored-mystery-box",
    title: "Mystery Ingredient Challenge",
    description: "Test your creativity by cooking with random pantry ingredients.",
    cookTime: "45 minutes",
    difficulty: "medium",
    ingredients: [
      "3-5 random ingredients from your pantry (have someone else select them)",
      "Basic staples like oil, salt, pepper, etc.",
      "1-2 protein options from your refrigerator or freezer"
    ],
    instructions: [
      "Have someone select 3-5 random ingredients from your pantry without telling you in advance.",
      "Set a timer for 5 minutes to plan your dish using the mystery ingredients.",
      "You must use ALL the mystery ingredients in your final dish.",
      "Cook your creation within 30 minutes.",
      "Plate your dish as presentable as possible.",
      "Have your household rate your creation for taste and creativity!"
    ],
    image: "exotic2",
    tags: ["challenge", "creative", "experimental", "fun"],
    mood: ["bored"]
  },

  // CALM MOOD RECIPES
  {
    id: "calm-bowl",
    title: "Zen Buddha Bowl",
    description: "A balanced, nourishing bowl to maintain your peaceful state.",
    cookTime: "30 minutes",
    difficulty: "medium",
    ingredients: [
      "1 cup cooked quinoa or brown rice",
      "1 cup roasted vegetables (sweet potatoes, brussels sprouts, etc.)",
      "1/2 cup chickpeas, drained and rinsed",
      "1 cup fresh greens (spinach, arugula, or kale)",
      "1/4 avocado, sliced",
      "2 tbsp nuts or seeds",
      "For the dressing: 2 tbsp tahini, 1 tbsp lemon juice, 1 tsp maple syrup, water to thin"
    ],
    instructions: [
      "Arrange quinoa or rice in the bottom of a bowl.",
      "Arrange roasted vegetables, chickpeas, and greens around the bowl.",
      "Add avocado slices and sprinkle with nuts or seeds.",
      "Whisk together tahini, lemon juice, maple syrup, and enough water to reach desired consistency.",
      "Drizzle dressing over the bowl.",
      "Eat mindfully, appreciating each ingredient and flavor."
    ],
    image: "healthy3",
    tags: ["healthy", "vegetarian", "bowl", "mindful"],
    mood: ["calm"]
  },
  {
    id: "calm-tea",
    title: "Calming Herb Tea Ritual",
    description: "A gentle tea ceremony to enhance your calm mood.",
    cookTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "1 tsp chamomile flowers",
      "1 tsp lavender buds",
      "1 tsp lemon balm",
      "1/2 tsp rose petals",
      "1 small cinnamon stick",
      "1 tsp honey (optional)",
      "2 cups hot water"
    ],
    instructions: [
      "Warm your teapot by filling it with hot water, then emptying it.",
      "Add all herbs to the teapot.",
      "Pour hot water (not boiling) over the herbs.",
      "Cover and steep for 5-7 minutes.",
      "Prepare your space - clear a table, perhaps light a candle.",
      "Strain tea into your favorite mug.",
      "Add honey if desired.",
      "Sit comfortably, take deep breaths, and sip slowly.",
      "Focus on the aroma, warmth, and flavors."
    ],
    image: "drink3",
    tags: ["tea", "herbs", "calming", "ritual"],
    mood: ["calm"]
  },
  {
    id: "calm-soup",
    title: "Mindful Miso Soup",
    description: "A simple, warming soup to nourish body and mind.",
    cookTime: "15 minutes",
    difficulty: "easy",
    ingredients: [
      "4 cups water or dashi stock",
      "3 tbsp miso paste",
      "1/2 block soft tofu, cubed",
      "2 green onions, thinly sliced",
      "1/4 cup seaweed (wakame), rehydrated",
      "1 tbsp ginger, finely grated"
    ],
    instructions: [
      "Bring water or dashi to a gentle simmer in a pot.",
      "Place miso paste in a small bowl and add a little hot water to dissolve it.",
      "Add dissolved miso to the pot and stir.",
      "Add tofu and seaweed. Simmer gently for 2-3 minutes.",
      "Remove from heat and add green onions and ginger.",
      "Serve in a bowl you enjoy holding.",
      "Feel the warmth of the bowl in your hands before taking your first sip."
    ],
    image: "asian1",
    tags: ["soup", "Japanese", "simple", "warming"],
    mood: ["calm"]
  },
  {
    id: "calm-smashed",
    title: "Simply Perfect Smashed Potatoes",
    description: "Rustic, satisfying potatoes with minimal ingredients and effort.",
    cookTime: "30 minutes",
    difficulty: "easy",
    ingredients: [
      "1 lb small baby potatoes",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 tbsp fresh rosemary, chopped",
      "Flaky sea salt and freshly ground pepper",
      "2 tbsp butter, melted"
    ],
    instructions: [
      "Boil potatoes in salted water until fork-tender, about 15 minutes.",
      "Drain and let steam dry for a minute.",
      "Arrange potatoes on a baking sheet and gently smash each with a fork or potato masher.",
      "Drizzle with olive oil and sprinkle with garlic, rosemary, salt, and pepper.",
      "Roast at 425°F (220°C) for 15-20 minutes until crispy around the edges.",
      "Drizzle with melted butter before serving."
    ],
    image: "comfort3",
    tags: ["potato", "simple", "comfort food", "side dish"],
    mood: ["calm"]
  },
  {
    id: "calm-parfait",
    title: "Layered Yogurt Parfait",
    description: "A visually pleasing, simple breakfast or snack.",
    cookTime: "10 minutes",
    difficulty: "easy",
    ingredients: [
      "2 cups Greek yogurt",
      "1/4 cup honey, divided",
      "1 tsp vanilla extract",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1/2 cup granola",
      "2 tbsp chia seeds",
      "Mint leaves for garnish"
    ],
    instructions: [
      "Mix yogurt with half the honey and vanilla extract.",
      "In clear glasses or bowls, create layers: start with yogurt, then berries, granola, and a sprinkle of chia seeds.",
      "Repeat layers, ending with berries on top.",
      "Drizzle with remaining honey and garnish with mint leaves.",
      "Take a moment to appreciate the beauty of your creation before enjoying."
    ],
    image: "breakfast3",
    tags: ["breakfast", "yogurt", "berries", "simple"],
    mood: ["calm"]
  }
];

// Function to get recipes by mood
export const getRecipesByMood = (moodId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.mood.includes(moodId));
};

// Function to search recipes by search term
export const searchRecipes = (searchTerm: string): Recipe[] => {
  const term = searchTerm.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(term) ||
    recipe.description.toLowerCase().includes(term) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(term)) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
  );
};

// Function to get a recipe by ID
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

// Function to get all recipes
export const getAllRecipes = (): Recipe[] => {
  return recipes;
};

// Function to get similar recipes based on tags and mood
export const getSimilarRecipes = (recipeId: string, limit: number = 3): Recipe[] => {
  const recipe = getRecipeById(recipeId);
  if (!recipe) return [];
  
  // Find recipes with similar tags or from the same mood category
  const similarRecipes = recipes.filter(r => 
    r.id !== recipe.id && // Not the same recipe
    (
      r.mood.some(mood => recipe.mood.includes(mood)) || // Same mood
      r.tags.some(tag => recipe.tags.includes(tag)) // Similar tags
    )
  );
  
  // Return random selection of similar recipes
  return similarRecipes
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, limit); // Limit to specified number
};

// Function to get chatbot response based on mood
export const getChatbotResponse = (currentMood: string | null): string => {
  if (!currentMood) {
    return "Hello! I'm your recipe assistant. How can I help you today?";
  }

  switch (currentMood) {
    case "happy":
      return "You're feeling happy! How about a celebratory recipe to match your mood?";
    case "sad":
      return "I notice you're feeling down. Would you like a comforting recipe to cheer you up?";
    case "angry":
      return "Feeling angry? I have some spicy recipes that might help you channel that energy!";
    case "confused":
      return "Confused about what to cook? I can suggest some simple, foolproof recipes to make decision-making easier.";
    case "exhausted":
      return "You seem tired. Let me recommend some quick and easy recipes that require minimal effort.";
    case "surprised":
      return "In the mood for something unexpected? I have recipes with surprising flavor combinations!";
    case "scared":
      return "When you're feeling anxious, familiar comfort food can help. Would you like some cozy recipe ideas?";
    case "stressed":
      return "Stress calls for calming, nourishing foods. I can suggest recipes with stress-reducing ingredients.";
    case "excited":
      return "Your excitement is contagious! How about trying something adventurous in the kitchen?";
    case "bored":
      return "Bored? Let's spice things up with a challenging recipe that will keep you engaged!";
    case "calm":
      return "In a peaceful mood? I can suggest mindful cooking recipes that maintain your tranquility.";
    case "hungry":
      return "Hungry? I've got quick recipes that can satisfy your appetite in no time!";
    case "nostalgic":
      return "Feeling nostalgic? Let me suggest classic recipes that might bring back fond memories.";
    case "adventurous":
      return "In an adventurous mood! Let's explore cuisines from around the world!";
    case "cozy":
      return "Looking for something cozy? I have perfect recipes for a warm, comforting meal.";
    default:
      return "I'd be happy to suggest recipes tailored to your current mood. What are you in the mood for?";
  }
};
