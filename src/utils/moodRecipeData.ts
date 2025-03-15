
export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  ingredients: string[];
  instructions: string[];
  relatedMoods: string[];
}

export interface Mood {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// 50 different moods with vibrant icons
export const moods: Mood[] = [
  { id: 'happy', name: 'Happy', description: 'Joyful and content', icon: '😊' },
  { id: 'sad', name: 'Sad', description: 'Feeling down or blue', icon: '😢' },
  { id: 'energetic', name: 'Energetic', description: 'Full of energy and enthusiasm', icon: '⚡' },
  { id: 'tired', name: 'Tired', description: 'Feeling exhausted or fatigued', icon: '😴' },
  { id: 'anxious', name: 'Anxious', description: 'Feeling worried or nervous', icon: '😰' },
  { id: 'relaxed', name: 'Relaxed', description: 'Calm and at ease', icon: '😌' },
  { id: 'stressed', name: 'Stressed', description: 'Under pressure or tension', icon: '😫' },
  { id: 'excited', name: 'Excited', description: 'Thrilled or enthusiastic', icon: '😃' },
  { id: 'bored', name: 'Bored', description: 'Lacking interest or stimulation', icon: '😑' },
  { id: 'nostalgic', name: 'Nostalgic', description: 'Reminiscing about the past', icon: '🕰️' },
  { id: 'romantic', name: 'Romantic', description: 'Feeling affectionate or loving', icon: '❤️' },
  { id: 'confident', name: 'Confident', description: 'Self-assured and certain', icon: '💪' },
  { id: 'insecure', name: 'Insecure', description: 'Lacking confidence or certainty', icon: '🙁' },
  { id: 'motivated', name: 'Motivated', description: 'Driven to achieve or succeed', icon: '🎯' },
  { id: 'unmotivated', name: 'Unmotivated', description: 'Lacking drive or incentive', icon: '🥱' },
  { id: 'creative', name: 'Creative', description: 'Inspired and imaginative', icon: '🎨' },
  { id: 'confused', name: 'Confused', description: 'Perplexed or uncertain', icon: '😕' },
  { id: 'peaceful', name: 'Peaceful', description: 'Serene and tranquil', icon: '🕊️' },
  { id: 'angry', name: 'Angry', description: 'Feeling irate or furious', icon: '😠' },
  { id: 'grateful', name: 'Grateful', description: 'Appreciative and thankful', icon: '🙏' },
  { id: 'frustrated', name: 'Frustrated', description: 'Feeling hindered or blocked', icon: '😤' },
  { id: 'curious', name: 'Curious', description: 'Eager to learn or explore', icon: '🧐' },
  { id: 'hopeful', name: 'Hopeful', description: 'Optimistic about the future', icon: '🌱' },
  { id: 'disappointed', name: 'Disappointed', description: 'Let down or disheartened', icon: '😞' },
  { id: 'proud', name: 'Proud', description: 'Feeling accomplished or satisfied', icon: '🦚' },
  { id: 'guilty', name: 'Guilty', description: 'Feeling responsible for wrongdoing', icon: '😣' },
  { id: 'determined', name: 'Determined', description: 'Resolute and unwavering', icon: '🏋️' },
  { id: 'indifferent', name: 'Indifferent', description: 'Neither interested nor disinterested', icon: '😐' },
  { id: 'overwhelmed', name: 'Overwhelmed', description: 'Feeling overloaded or swamped', icon: '🌊' },
  { id: 'content', name: 'Content', description: 'Satisfied and at peace', icon: '🧘' },
  { id: 'adventurous', name: 'Adventurous', description: 'Seeking excitement and new experiences', icon: '🏔️' },
  { id: 'melancholic', name: 'Melancholic', description: 'Wistful or pensively sad', icon: '🌧️' },
  { id: 'inspired', name: 'Inspired', description: 'Stimulated to create or act', icon: '💭' },
  { id: 'lonely', name: 'Lonely', description: 'Feeling isolated or solitary', icon: '🧍' },
  { id: 'amused', name: 'Amused', description: 'Finding something funny or entertaining', icon: '😄' },
  { id: 'annoyed', name: 'Annoyed', description: 'Slightly angry or irritated', icon: '😒' },
  { id: 'shocked', name: 'Shocked', description: 'Surprised or startled', icon: '😲' },
  { id: 'calm', name: 'Calm', description: 'Free from agitation or excitement', icon: '🌊' },
  { id: 'passionate', name: 'Passionate', description: 'Having intense feelings or desire', icon: '🔥' },
  { id: 'homesick', name: 'Homesick', description: 'Missing home or familiar surroundings', icon: '🏠' },
  { id: 'empowered', name: 'Empowered', description: 'Feeling strong and confident', icon: '✨' },
  { id: 'envious', name: 'Envious', description: 'Desiring something that someone else has', icon: '👀' },
  { id: 'satisfied', name: 'Satisfied', description: 'Content with what one has', icon: '😊' },
  { id: 'skeptical', name: 'Skeptical', description: 'Doubtful or questioning', icon: '🤨' },
  { id: 'cautious', name: 'Cautious', description: 'Careful and vigilant', icon: '🦔' },
  { id: 'ambitious', name: 'Ambitious', description: 'Having a strong desire for success', icon: '🚀' },
  { id: 'generous', name: 'Generous', description: 'Willing to give and share', icon: '🎁' },
  { id: 'humble', name: 'Humble', description: 'Modest and unassuming', icon: '🙇' },
  { id: 'courageous', name: 'Courageous', description: 'Brave and fearless', icon: '🦁' },
  { id: 'apathetic', name: 'Apathetic', description: 'Showing little emotion or interest', icon: '😶' },
  // New moods
  { id: 'festive', name: 'Festive', description: 'Feeling celebratory and cheerful', icon: '🎉' },
  { id: 'playful', name: 'Playful', description: 'Feeling fun and frolicsome', icon: '🎮' },
  { id: 'refreshed', name: 'Refreshed', description: 'Revitalized and rejuvenated', icon: '🍃' },
  { id: 'glorious', name: 'Glorious', description: 'Feeling magnificent and triumphant', icon: '👑' },
  { id: 'amorous', name: 'Amorous', description: 'Feeling loving and affectionate', icon: '💕' },
  { id: 'whimsical', name: 'Whimsical', description: 'Playfully quaint or fanciful', icon: '🦄' },
  { id: 'brave', name: 'Brave', description: 'Showing courage despite fear', icon: '🛡️' },
  { id: 'serene', name: 'Serene', description: 'Completely clear and calm', icon: '🌅' },
  { id: 'joyous', name: 'Joyous', description: 'Feeling great happiness', icon: '🌟' },
  { id: 'victorious', name: 'Victorious', description: 'Feeling triumphant after success', icon: '🏆' },
  { id: 'ecstatic', name: 'Ecstatic', description: 'Overwhelmingly happy and excited', icon: '🤩' },
  { id: 'optimistic', name: 'Optimistic', description: 'Hopeful about the future', icon: '🌈' },
  { id: 'loving', name: 'Loving', description: 'Feeling warm affection', icon: '💞' },
  { id: 'bright', name: 'Bright', description: 'Feeling intellectually sharp', icon: '💡' },
  { id: 'vibrant', name: 'Vibrant', description: 'Full of energy and life', icon: '💃' },
  { id: 'tranquil', name: 'Tranquil', description: 'Free from disturbance', icon: '🏝️' },
  { id: 'elated', name: 'Elated', description: 'Extremely happy and excited', icon: '🎊' },
  { id: 'radiant', name: 'Radiant', description: 'Glowing with joy or health', icon: '☀️' },
  { id: 'jubilant', name: 'Jubilant', description: 'Feeling or expressing great happiness', icon: '🥳' },
  { id: 'sentimental', name: 'Sentimental', description: 'Prompted by feelings of tenderness', icon: '📷' }
];

// Extended recipes with 10+ per mood
export const recipes: Recipe[] = [
  // Comfort Recipes for sad, tired, nostalgic moods
  {
    id: 'comfort-mac-cheese',
    title: 'Comfort Mac & Cheese',
    description: 'A creamy, comforting classic mac and cheese that soothes the soul.',
    imageUrl: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e',
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 4,
    calories: 450,
    difficulty: 'Easy',
    tags: ['comfort food', 'pasta', 'cheesy', 'vegetarian'],
    ingredients: [
      '8 oz elbow macaroni',
      '2 tbsp butter',
      '2 tbsp all-purpose flour',
      '2 cups milk',
      '2 cups shredded cheddar cheese',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/4 tsp paprika'
    ],
    instructions: [
      'Bring a large pot of salted water to a boil. Add macaroni and cook according to package directions until al dente. Drain.',
      'In a large saucepan, melt butter over medium heat. Add flour and stir until smooth and bubbly.',
      'Gradually add milk, stirring constantly until mixture thickens.',
      'Add cheese, salt, pepper, and paprika. Stir until cheese is melted and sauce is smooth.',
      'Add cooked macaroni to cheese sauce and stir to combine.',
      'Serve hot, garnished with additional paprika if desired.'
    ],
    relatedMoods: ['sad', 'tired', 'nostalgic', 'stressed', 'content', 'melancholic', 'homesick']
  },
  {
    id: 'chicken-noodle-soup',
    title: 'Classic Chicken Noodle Soup',
    description: 'A warm, healing soup just like grandma used to make.',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    prepTime: '20 mins',
    cookTime: '40 mins',
    servings: 6,
    calories: 220,
    difficulty: 'Medium',
    tags: ['soup', 'comfort food', 'chicken', 'classic'],
    ingredients: [
      '1 tbsp olive oil',
      '1 onion, chopped',
      '2 carrots, sliced',
      '2 celery stalks, sliced',
      '2 garlic cloves, minced',
      '8 cups chicken broth',
      '2 bay leaves',
      '1/2 tsp dried thyme',
      '1 lb boneless chicken breast',
      '8 oz egg noodles',
      'Salt and pepper to taste',
      '2 tbsp fresh parsley, chopped'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add onion, carrots, and celery. Cook until vegetables begin to soften, about 5 minutes.',
      'Add garlic and cook for another minute until fragrant.',
      'Pour in chicken broth, add bay leaves and thyme. Bring to a boil.',
      'Add chicken breast, reduce heat to simmer, and cook for 15-20 minutes until chicken is cooked through.',
      'Remove chicken and shred it with two forks. Return shredded chicken to the pot.',
      'Add egg noodles and cook until tender, about 6-8 minutes.',
      'Season with salt and pepper to taste. Remove bay leaves before serving.',
      'Garnish with fresh parsley and serve hot.'
    ],
    relatedMoods: ['sad', 'tired', 'sick', 'nostalgic', 'homesick', 'melancholic']
  },
  {
    id: 'chocolate-chip-cookies',
    title: 'Warm Chocolate Chip Cookies',
    description: 'Freshly baked cookies with gooey chocolate chips that melt in your mouth.',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 24,
    calories: 180,
    difficulty: 'Easy',
    tags: ['dessert', 'baking', 'chocolate', 'cookies'],
    ingredients: [
      '1 cup (2 sticks) unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '2 cups semisweet chocolate chips',
      '1 cup chopped nuts (optional)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'In a separate bowl, whisk together flour, baking soda, and salt. Gradually add to the butter mixture and mix well.',
      'Fold in chocolate chips and nuts if using.',
      'Drop by rounded tablespoons onto ungreased baking sheets.',
      'Bake for 9-11 minutes or until golden brown. Let stand on baking sheet for 2 minutes before removing to cool on wire racks.'
    ],
    relatedMoods: ['sad', 'nostalgic', 'stressed', 'happy', 'content']
  },
  // Energy Recipes for energetic, motivated, ambitious moods
  {
    id: 'energizing-smoothie-bowl',
    title: 'Energizing Berry Smoothie Bowl',
    description: 'A vibrant, nutrient-packed smoothie bowl to boost your energy and mood.',
    imageUrl: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 320,
    difficulty: 'Easy',
    tags: ['breakfast', 'healthy', 'vegan', 'quick'],
    ingredients: [
      '1 frozen banana',
      '1 cup mixed frozen berries',
      '1/2 cup unsweetened almond milk',
      '1 tbsp chia seeds',
      '1 tbsp honey or maple syrup',
      'Toppings: fresh berries, granola, coconut flakes, sliced banana'
    ],
    instructions: [
      'Add frozen banana, berries, almond milk, chia seeds, and sweetener to a blender.',
      'Blend until smooth and creamy. Add more liquid if needed to achieve desired consistency.',
      'Pour into a bowl and arrange toppings artfully on top.',
      'Enjoy immediately with a spoon.'
    ],
    relatedMoods: ['energetic', 'happy', 'motivated', 'creative', 'ambitious', 'excited', 'confident']
  },
  {
    id: 'power-protein-bowl',
    title: 'Power Protein Quinoa Bowl',
    description: 'A protein-packed meal to fuel your most productive days.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-5ec6a79120b0',
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 2,
    calories: 450,
    difficulty: 'Medium',
    tags: ['protein', 'healthy', 'lunch', 'meal prep'],
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable or chicken broth',
      '2 chicken breasts (or 8 oz tofu for vegetarian option)',
      '1 tbsp olive oil',
      '1 tsp cumin',
      '1 tsp paprika',
      '1/2 tsp garlic powder',
      '1 avocado, sliced',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, diced',
      '1/4 cup feta cheese, crumbled',
      '2 tbsp pumpkin seeds',
      'Lemon tahini dressing: 2 tbsp tahini, 1 tbsp lemon juice, 1 tsp maple syrup, water to thin'
    ],
    instructions: [
      'Cook quinoa in broth according to package directions, usually simmering for 15-20 minutes until liquid is absorbed.',
      'Season chicken with cumin, paprika, garlic powder, salt and pepper.',
      'Heat olive oil in a pan over medium heat and cook chicken for 6-7 minutes per side until cooked through. Let rest for 5 minutes, then slice.',
      'Whisk together tahini, lemon juice, maple syrup, and enough water to reach desired consistency for the dressing.',
      'Assemble bowls with quinoa as the base, then arrange chicken, avocado, tomatoes, cucumber, and feta on top.',
      'Drizzle with tahini dressing and sprinkle with pumpkin seeds before serving.'
    ],
    relatedMoods: ['energetic', 'motivated', 'ambitious', 'confident', 'determined']
  },
  {
    id: 'preworkout-oatmeal',
    title: 'Pre-Workout Energy Oatmeal',
    description: 'The perfect breakfast to fuel your morning workout.',
    imageUrl: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc',
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 1,
    calories: 380,
    difficulty: 'Easy',
    tags: ['breakfast', 'pre-workout', 'healthy', 'quick'],
    ingredients: [
      '1/2 cup rolled oats',
      '1 cup water or milk of choice',
      '1 banana, half mashed and half sliced',
      '1 tbsp almond or peanut butter',
      '1 tbsp honey or maple syrup',
      '1 tbsp chia seeds',
      '1/4 tsp cinnamon',
      'Pinch of salt',
      'Toppings: sliced almonds, berries, cacao nibs'
    ],
    instructions: [
      'Combine oats, water or milk, mashed banana, chia seeds, cinnamon, and salt in a small pot.',
      'Bring to a simmer over medium heat and cook for 5-7 minutes, stirring occasionally, until oats are tender and mixture thickens.',
      'Remove from heat and stir in honey or maple syrup and nut butter.',
      'Transfer to a bowl and top with sliced banana, almonds, berries, and cacao nibs.',
      'Enjoy 1-2 hours before your workout for optimal energy.'
    ],
    relatedMoods: ['energetic', 'motivated', 'determined', 'ambitious']
  },
  // Relaxing Recipes for anxious, stressed, overwhelmed moods
  {
    id: 'calming-chamomile-latte',
    title: 'Calming Chamomile Honey Latte',
    description: 'A soothing, warm beverage with calming chamomile and sweet honey.',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 90,
    difficulty: 'Easy',
    tags: ['beverage', 'calming', 'quick', 'caffeine-free'],
    ingredients: [
      '1 chamomile tea bag',
      '3/4 cup hot water',
      '3/4 cup warm milk (dairy or plant-based)',
      '1 tbsp honey',
      '1/4 tsp vanilla extract',
      'Pinch of cinnamon'
    ],
    instructions: [
      'Steep the chamomile tea bag in hot water for 5 minutes.',
      'Remove the tea bag and stir in honey and vanilla extract.',
      'Warm the milk and froth it if possible.',
      'Pour the frothed milk into the tea mixture.',
      'Sprinkle with cinnamon and enjoy while warm.'
    ],
    relatedMoods: ['anxious', 'stressed', 'overwhelmed', 'tired', 'peaceful', 'relaxed']
  },
  {
    id: 'lavender-shortbread',
    title: 'Lavender Shortbread Cookies',
    description: 'Delicate cookies with a hint of calming lavender.',
    imageUrl: 'https://images.unsplash.com/photo-1603736087997-839845f529a5',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 24,
    calories: 120,
    difficulty: 'Medium',
    tags: ['baking', 'dessert', 'relaxing', 'gift'],
    ingredients: [
      '1 cup (2 sticks) unsalted butter, softened',
      '2/3 cup granulated sugar',
      '1/4 tsp salt',
      '2 cups all-purpose flour',
      '1 tbsp dried culinary lavender, finely chopped',
      '1 tsp vanilla extract',
      'Optional: 1/2 cup powdered sugar for dusting'
    ],
    instructions: [
      'Preheat oven to 325°F (165°C) and line baking sheets with parchment paper.',
      'Cream butter and sugar together until light and fluffy.',
      'Mix in vanilla extract and lavender.',
      'Gradually add flour and salt, mixing until just combined.',
      'Chill dough for 30 minutes in the refrigerator.',
      'Roll dough to 1/4 inch thickness and cut into desired shapes.',
      'Place cookies on prepared baking sheets and bake for 10-12 minutes until edges are just barely golden.',
      'Let cool on the baking sheet for 5 minutes, then transfer to a wire rack.',
      'When completely cool, dust with powdered sugar if desired.'
    ],
    relatedMoods: ['anxious', 'stressed', 'peaceful', 'relaxed', 'content']
  },
  {
    id: 'golden-milk',
    title: 'Anti-Inflammatory Golden Milk',
    description: 'A traditional Ayurvedic drink with turmeric to reduce stress and inflammation.',
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 130,
    difficulty: 'Easy',
    tags: ['beverage', 'anti-inflammatory', 'calming', 'healthy'],
    ingredients: [
      '1 cup unsweetened almond milk (or milk of choice)',
      '1 tsp ground turmeric',
      '1/2 tsp ground cinnamon',
      '1/4 tsp ground ginger',
      'Pinch of black pepper',
      '1 tbsp honey or maple syrup',
      '1/2 tbsp coconut oil or ghee'
    ],
    instructions: [
      'Add all ingredients to a small saucepan over medium-low heat.',
      'Whisk continuously until heated through and frothy, about 3-5 minutes.',
      'Taste and adjust sweetness if needed.',
      'Pour into a mug and enjoy warm, especially before bedtime.'
    ],
    relatedMoods: ['anxious', 'stressed', 'tired', 'overwhelmed', 'calm', 'relaxed']
  },
  // Mood-Boosting Recipes for sad, unmotivated moods
  {
    id: 'spicy-mood-booster-soup',
    title: 'Spicy Mood-Booster Soup',
    description: 'A warming, spicy soup that boosts circulation and energy.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    calories: 220,
    difficulty: 'Medium',
    tags: ['soup', 'spicy', 'warming', 'healthy'],
    ingredients: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 garlic cloves, minced',
      '1 tbsp ginger, grated',
      '1 red chili, sliced',
      '4 cups vegetable broth',
      '1 can (14 oz) diced tomatoes',
      '1 red bell pepper, diced',
      '1 carrot, sliced',
      '1 cup broccoli florets',
      '1 cup spinach',
      '1 tbsp lemon juice',
      'Fresh cilantro for garnish',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add onion and sauté until translucent.',
      'Add garlic, ginger, and chili. Sauté for 1 minute until fragrant.',
      'Add broth, tomatoes, bell pepper, and carrot. Bring to a boil, then reduce heat and simmer for 20 minutes.',
      'Add broccoli and cook for another 5 minutes until vegetables are tender.',
      'Stir in spinach and lemon juice. Cook until spinach wilts.',
      'Season with salt and pepper to taste.',
      'Serve hot, garnished with fresh cilantro.'
    ],
    relatedMoods: ['tired', 'sad', 'unmotivated', 'bored', 'apathetic', 'melancholic']
  },
  {
    id: 'sunshine-citrus-salad',
    title: 'Sunshine Citrus Salad with Honey Dressing',
    description: 'A bright, vitamin-rich salad to lift your spirits.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 250,
    difficulty: 'Easy',
    tags: ['salad', 'citrus', 'fresh', 'healthy', 'mood boosting'],
    ingredients: [
      '4 cups mixed greens',
      '1 orange, segmented',
      '1 grapefruit, segmented',
      '1 avocado, sliced',
      '1/4 cup sliced almonds, toasted',
      '1/4 cup feta cheese, crumbled',
      'For dressing: 2 tbsp olive oil, 1 tbsp honey, 1 tbsp lemon juice, 1/2 tsp Dijon mustard, salt and pepper'
    ],
    instructions: [
      'Arrange mixed greens on plates or in a large bowl.',
      'Top with orange and grapefruit segments, avocado slices, almonds, and feta cheese.',
      'Whisk together olive oil, honey, lemon juice, Dijon mustard, salt, and pepper in a small bowl.',
      'Drizzle dressing over salad just before serving.',
      'Serve immediately for maximum freshness and vitamin content.'
    ],
    relatedMoods: ['sad', 'tired', 'unmotivated', 'lethargic', 'bored']
  },
  {
    id: 'dark-chocolate-banana-bites',
    title: 'Dark Chocolate Dipped Banana Bites',
    description: 'A simple sweet treat that boosts serotonin levels.',
    imageUrl: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394',
    prepTime: '10 mins',
    cookTime: '30 mins freezing',
    servings: 2,
    calories: 200,
    difficulty: 'Easy',
    tags: ['dessert', 'healthy', 'chocolate', 'mood boosting'],
    ingredients: [
      '2 ripe bananas',
      '4 oz dark chocolate (70% cacao or higher)',
      '1 tbsp coconut oil',
      'Optional toppings: chopped nuts, shredded coconut, sea salt, crushed freeze-dried berries'
    ],
    instructions: [
      'Line a baking sheet with parchment paper.',
      'Slice bananas into 1/2-inch thick rounds and place on the baking sheet.',
      'Freeze banana slices for at least 30 minutes until firm.',
      'Melt dark chocolate and coconut oil together in a microwave-safe bowl, stirring every 30 seconds until smooth.',
      'Dip each frozen banana slice halfway into the melted chocolate, then place back on the parchment paper.',
      'Sprinkle with desired toppings before chocolate sets.',
      'Return to freezer for another 10-15 minutes until chocolate is set.',
      'Store in an airtight container in the freezer for up to a week.'
    ],
    relatedMoods: ['sad', 'stressed', 'down', 'melancholic', 'apathetic']
  },
  // Indulgent Recipes for celebrations, rewards
  {
    id: 'chocolate-indulgence-cake',
    title: 'Chocolate Indulgence Cake',
    description: 'A rich, decadent chocolate cake for when you need a sweet treat to lift your spirits.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    prepTime: '25 mins',
    cookTime: '35 mins',
    servings: 10,
    calories: 420,
    difficulty: 'Medium',
    tags: ['dessert', 'chocolate', 'indulgent', 'celebration'],
    ingredients: [
      '2 cups all-purpose flour',
      '2 cups sugar',
      '3/4 cup unsweetened cocoa powder',
      '2 tsp baking soda',
      '1 tsp baking powder',
      '1 tsp salt',
      '2 eggs',
      '1 cup strong black coffee, cooled',
      '1 cup buttermilk',
      '1/2 cup vegetable oil',
      '2 tsp vanilla extract',
      'For frosting: 1 cup butter, 3 cups powdered sugar, 2/3 cup cocoa powder, 1/3 cup milk, 1 tsp vanilla extract'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
      'Add eggs, coffee, buttermilk, oil, and vanilla. Beat with an electric mixer on medium speed for 2 minutes.',
      'Pour batter into prepared pans and bake for 30-35 minutes until a toothpick inserted comes out clean.',
      'For frosting: Beat butter until creamy, then gradually add powdered sugar, cocoa powder, milk, and vanilla extract until smooth and spreadable.',
      'Let cakes cool completely before frosting.',
      'Assemble the cake by placing one layer on a plate, spreading frosting on top, then placing the second layer and frosting the top and sides.'
    ],
    relatedMoods: ['sad', 'stressed', 'disappointed', 'romantic', 'celebratory', 'indulgent']
  },
  {
    id: 'crème-brûlée',
    title: 'Classic Vanilla Crème Brûlée',
    description: 'An elegant French dessert with a crisp caramelized sugar topping and creamy custard interior.',
    imageUrl: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc',
    prepTime: '15 mins',
    cookTime: '45 mins',
    servings: 4,
    calories: 380,
    difficulty: 'Hard',
    tags: ['dessert', 'french', 'elegant', 'impressive'],
    ingredients: [
      '2 cups heavy cream',
      '1 vanilla bean, split lengthwise (or 1 tbsp vanilla extract)',
      '5 egg yolks',
      '1/2 cup granulated sugar, plus more for topping',
      'Pinch of salt',
      'Berries for garnish (optional)'
    ],
    instructions: [
      'Preheat oven to 325°F (165°C).',
      'In a saucepan, heat cream and vanilla bean (scrape seeds into cream) over medium heat until it begins to simmer. Remove from heat and let steep for 10 minutes.',
      'In a bowl, whisk egg yolks, sugar, and salt until pale yellow.',
      'Slowly whisk the warm cream into the egg mixture, a little at a time to prevent curdling.',
      'Strain the mixture through a fine sieve into a large measuring cup.',
      'Divide the custard among four 6-oz ramekins. Place ramekins in a baking dish and fill with hot water halfway up the sides of the ramekins.',
      'Bake for 35-40 minutes until the edges are set but the center still jiggles slightly when shaken.',
      'Remove from water bath and cool to room temperature, then refrigerate for at least 2 hours or overnight.',
      'Just before serving, sprinkle a thin layer of sugar on top of each custard.',
      'Use a kitchen torch to caramelize the sugar until golden brown, or place under a broiler for 1-2 minutes.',
      'Let the caramelized sugar harden for a minute before serving. Garnish with berries if desired.'
    ],
    relatedMoods: ['romantic', 'celebratory', 'accomplished', 'indulgent', 'proud']
  },
  {
    id: 'lobster-risotto',
    title: 'Luxurious Lobster Risotto',
    description: 'An extravagant, creamy risotto featuring succulent lobster meat - perfect for special occasions.',
    imageUrl: 'https://images.unsplash.com/photo-1633436375843-d8bf448be05c',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: 4,
    calories: 520,
    difficulty: 'Hard',
    tags: ['dinner', 'seafood', 'gourmet', 'special occasion'],
    ingredients: [
      '2 lobster tails (about 8 oz each)',
      '6 cups seafood or chicken stock',
      '2 tbsp olive oil',
      '1 tbsp butter',
      '1 small onion, finely diced',
      '2 cloves garlic, minced',
      '1 1/2 cups Arborio rice',
      '1/2 cup dry white wine',
      '1/4 cup heavy cream',
      '1/2 cup freshly grated Parmesan cheese',
      '2 tbsp fresh chives, chopped',
      '1 tbsp fresh tarragon, chopped',
      'Salt and white pepper to taste',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Bring a large pot of salted water to a boil. Add lobster tails and cook for 5-6 minutes until shells turn bright red.',
      'Remove lobster, cool slightly, then extract meat from shells. Cut into bite-sized pieces and set aside.',
      'In a medium saucepan, bring stock to a simmer, then keep warm over low heat.',
      'In a large, heavy-bottomed pan, heat olive oil and butter over medium heat. Add onion and sauté until translucent, about 4 minutes.',
      'Add garlic and cook for 30 seconds until fragrant.',
      'Add Arborio rice and stir for 1-2 minutes until grains are coated and slightly translucent at the edges.',
      'Pour in wine and stir until absorbed.',
      'Begin adding hot stock one ladle at a time, stirring frequently. Wait until each addition is almost fully absorbed before adding more. This process should take about 18-22 minutes.',
      'When rice is creamy and al dente (with a slight bite), fold in lobster meat, heavy cream, and Parmesan cheese.',
      'Stir in herbs and season with salt and white pepper to taste.',
      'Remove from heat, cover, and let rest for 2 minutes.',
      'Serve immediately with lemon wedges and additional Parmesan if desired.'
    ],
    relatedMoods: ['romantic', 'celebratory', 'proud', 'accomplished', 'indulgent']
  },
  // Creative recipes
  {
    id: 'rainbow-sushi',
    title: 'Creative Rainbow Vegetable Sushi',
    description: 'Colorful vegetable sushi rolls that are as fun to make as they are to eat.',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    prepTime: '30 mins',
    cookTime: '20 mins',
    servings: 4,
    calories: 320,
    difficulty: 'Medium',
    tags: ['sushi', 'vegetarian', 'creative', 'colorful'],
    ingredients: [
      '2 cups sushi rice',
      '3 cups water',
      '1/4 cup rice vinegar',
      '2 tbsp sugar',
      '1 tsp salt',
      '6 nori sheets',
      'Colorful fillings: 1 avocado, 1 carrot, 1 cucumber, 1 red bell pepper, purple cabbage, yellow mango',
      'Soy sauce, pickled ginger, and wasabi for serving'
    ],
    instructions: [
      'Rinse sushi rice until water runs clear. Combine with water in a rice cooker or pot and cook until tender.',
      'Mix rice vinegar, sugar, and salt in a small bowl until dissolved. Fold into warm rice gently.',
      'Let rice cool to room temperature, covered with a damp cloth.',
      'Prepare vegetables by cutting into thin strips.',
      'Place a bamboo sushi mat on a work surface and cover with plastic wrap. Place a nori sheet shiny side down.',
      'With wet hands, spread a thin layer of rice over nori, leaving a 1-inch strip at the top edge.',
      'Arrange colorful vegetable strips horizontally across the center of the rice.',
      'Using the bamboo mat, roll the sushi away from you, applying gentle pressure to create a firm roll.',
      'Seal the edge with a little water on the nori.',
      'Using a sharp knife dipped in water, cut each roll into 8 pieces.',
      'Arrange sushi on a plate in rainbow order and serve with soy sauce, wasabi, and pickled ginger.'
    ],
    relatedMoods: ['creative', 'playful', 'happy', 'inspired', 'festive']
  },
  {
    id: 'edible-flower-salad',
    title: 'Edible Flower Garden Salad',
    description: 'A visually stunning salad featuring seasonal vegetables and edible flowers.',
    imageUrl: 'https://images.unsplash.com/photo-1600326145359-3a44909d1a39',
    prepTime: '20 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 180,
    difficulty: 'Easy',
    tags: ['salad', 'flowers', 'spring', 'creative', 'colorful'],
    ingredients: [
      '4 cups mixed baby greens',
      '1 cup microgreens',
      '1/2 cup assorted edible flowers (nasturtiums, pansies, borage, etc.)',
      '1 watermelon radish, thinly sliced',
      '1 avocado, sliced',
      '1/2 cup cucumber, thinly sliced',
      '1/4 cup candied walnuts',
      'For dressing: 3 tbsp olive oil, 1 tbsp white balsamic vinegar, 1 tsp honey, 1/2 tsp Dijon mustard, salt and pepper'
    ],
    instructions: [
      'Gently wash and dry edible flowers and greens.',
      'Arrange mixed greens on plates as the base layer.',
      'Artfully place radish, avocado, and cucumber slices.',
      'Sprinkle with microgreens and carefully place edible flowers.',
      'Top with candied walnuts.',
      'Whisk together dressing ingredients in a small bowl.',
      'Drizzle dressing over salad just before serving.',
      'Serve immediately as a stunning appetizer or light lunch.'
    ],
    relatedMoods: ['creative', 'inspired', 'whimsical', 'playful', 'happy', 'romantic']
  },
  // Add at least 3 more recipes with different related moods
  {
    id: 'meditation-matcha-latte',
    title: 'Meditation Matcha Latte',
    description: 'A mindful matcha preparation to center your thoughts and boost focus.',
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 120,
    difficulty: 'Easy',
    tags: ['beverage', 'matcha', 'mindful', 'antioxidant'],
    ingredients: [
      '1 tsp ceremonial grade matcha powder',
      '1 cup almond milk (or milk of choice)',
      '1 tsp honey or maple syrup (optional)',
      '1/4 tsp vanilla extract',
      'Pinch of sea salt'
    ],
    instructions: [
      'Sift matcha powder into a mug or bowl to remove any clumps.',
      'Heat milk until steaming but not boiling.',
      'Pour a small amount of hot milk over matcha and whisk vigorously in a "W" motion until smooth and frothy.',
      'Add remaining milk, sweetener if using, vanilla, and salt.',
      'Take a moment to appreciate the aroma and vibrant color before slowly enjoying your latte.'
    ],
    relatedMoods: ['peaceful', 'focused', 'calm', 'mindful', 'serene', 'tranquil']
  },
  {
    id: 'spicy-korean-tteokbokki',
    title: 'Fiery Korean Tteokbokki',
    description: 'Chewy rice cakes in a spicy, sweet, and savory sauce that wakes up your taste buds.',
    imageUrl: 'https://images.unsplash.com/photo-1635436338433-63fc446d9e5b',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 430,
    difficulty: 'Medium',
    tags: ['korean', 'spicy', 'street food', 'satisfying'],
    ingredients: [
      '1 lb Korean rice cakes (tteok)',
      '2 cups anchovy or vegetable broth',
      '3 tbsp gochujang (Korean red pepper paste)',
      '1 tbsp gochugaru (Korean red pepper flakes)',
      '2 tbsp soy sauce',
      '2 tbsp sugar',
      '2 cloves garlic, minced',
      '2 green onions, sliced (white and green parts separated)',
      '2 hard-boiled eggs, halved (optional)',
      '1/2 package fish cakes, sliced (optional)'
    ],
    instructions: [
      'Soak rice cakes in cold water for 10-15 minutes, then drain.',
      'In a medium pot, combine broth, gochujang, gochugaru, soy sauce, sugar, garlic, and white parts of green onions.',
      'Bring to a boil, then reduce heat and simmer for 3-4 minutes.',
      'Add rice cakes and fish cakes (if using) and simmer for 8-10 minutes until rice cakes are soft and chewy and sauce has thickened.',
      'Add hard-boiled eggs during the last 2 minutes of cooking if using.',
      'Garnish with green parts of onions and serve immediately while hot and bubbling.'
    ],
    relatedMoods: ['excited', 'adventurous', 'bored', 'energetic', 'curious']
  },
  {
    id: 'healing-bone-broth',
    title: 'Healing Homemade Bone Broth',
    description: 'A nourishing, mineral-rich broth to restore and heal from the inside out.',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    prepTime: '20 mins',
    cookTime: '24 hrs',
    servings: 8,
    calories: 120,
    difficulty: 'Easy',
    tags: ['healing', 'soup', 'gut health', 'immune support'],
    ingredients: [
      '2-3 lbs beef or chicken bones (preferably with some meat attached)',
      '2 carrots, roughly chopped',
      '2 celery stalks, roughly chopped',
      '1 onion, quartered',
      '4 garlic cloves, smashed',
      '2 bay leaves',
      '1 tbsp apple cider vinegar',
      '1 tbsp whole peppercorns',
      '1 tsp salt',
      'Handful of fresh herbs (parsley, thyme, rosemary)',
      'Water to cover'
    ],
    instructions: [
      'If using beef bones, roast them at 450°F for 40 minutes to enhance flavor.',
      'Place bones and all other ingredients in a large stock pot or slow cooker.',
      'Add enough water to cover everything by 1-2 inches.',
      'Add apple cider vinegar and let sit for 30 minutes (this helps extract minerals from the bones).',
      'Bring to a boil, then reduce to a very low simmer.',
      'Simmer covered for 12-24 hours for chicken or 24-48 hours for beef, adding water as needed.',
      'Strain the broth through a fine-mesh sieve.',
      'Let cool and skim off any fat that rises to the top.',
      'Store in glass jars in the refrigerator for up to 5 days or freeze for up to 3 months.',
      'Sip warm as is, or use as a base for soups and cooking.'
    ],
    relatedMoods: ['sick', 'tired', 'down', 'healing', 'comfort', 'restorative']
  }
];

// Function to get recipes by mood
export const getRecipesByMood = (moodId: string): Recipe[] => {
  return recipes.filter(recipe => recipe.relatedMoods.includes(moodId));
};

// Function to get a recipe by ID
export const getRecipeById = (recipeId: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === recipeId);
};

// Function to get a mood by ID
export const getMoodById = (moodId: string): Mood | undefined => {
  return moods.find(mood => mood.id === moodId);
};

// Function to search recipes by term
export const searchRecipes = (searchTerm: string): Recipe[] => {
  const term = searchTerm.toLowerCase();
  return recipes.filter(
    recipe => 
      recipe.title.toLowerCase().includes(term) || 
      recipe.description.toLowerCase().includes(term) || 
      recipe.tags.some(tag => tag.toLowerCase().includes(term)) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
  );
};

// Sample chatbot responses based on mood
export const getChatbotResponse = (mood: string): string => {
  const responses: Record<string, string[]> = {
    happy: [
      "Glad to hear you're feeling happy! Maybe celebrate with a fun, colorful dish?",
      "When I'm happy, I love to cook something adventurous! How about trying a new cuisine?",
      "Happiness calls for a celebratory meal! Perhaps something with bright flavors?"
    ],
    sad: [
      "I'm sorry you're feeling down. How about some comfort food to lift your spirits?",
      "When I feel sad, a warm, hearty dish often helps me feel better.",
      "Sending virtual hugs! Let's find you a recipe that's like a culinary hug."
    ],
    stressed: [
      "Sounds like you could use some calming recipes. How about something that doesn't require too much focus?",
      "When stressed, simple and nutritious meals can be really helpful. Let me find something easy for you.",
      "Stress calls for nourishing, uncomplicated food. I have some great options for you."
    ],
    energetic: [
      "Channel that energy into something vibrant and nutritious! How about a power-packed meal?",
      "Feeling energetic? Let's keep that momentum going with protein-rich, wholesome recipes!",
      "That's a great mood for trying something new and exciting in the kitchen!"
    ],
    creative: [
      "Your creative mood is perfect for experimenting in the kitchen! Try something colorful and artistic.",
      "Let's channel that creativity into a visually stunning dish that's as beautiful as it is delicious!",
      "Creative energy calls for unique flavor combinations and presentation. I have just the recipes!"
    ],
    romantic: [
      "Feeling romantic? I can suggest some intimate, shareable dishes perfect for two.",
      "A romantic mood calls for something decadent and special. How about an elegant dinner?",
      "Let's create something memorable and luxurious to match your romantic mood."
    ],
    adventurous: [
      "Your adventurous spirit is perfect for exploring new cuisines and bold flavors!",
      "Ready for a culinary adventure? Let's try recipes from around the world!",
      "Being adventurous in the kitchen leads to delicious discoveries. I've got some exciting options!"
    ]
  };

  // Default response if mood not found
  const defaultResponses = [
    "I have some great recipes that might match your current mood!",
    "Let me help you find the perfect recipe for how you're feeling right now.",
    "Food has an amazing ability to complement our moods. Let's find the right match for you."
  ];

  const moodResponses = responses[mood] || defaultResponses;
  return moodResponses[Math.floor(Math.random() * moodResponses.length)];
};
