
import { Recipe } from '@/types/recipe';

export const spiceLoverRecipes: Recipe[] = [
  {
    id: 'spice-lover-sichuan-hotpot',
    name: 'Sichuan Hotpot',
    description: 'Chinese spicy hotpot with beef, veggies, and numbing chili broth.',
    ingredients: [
      'Beef slices',
      'Hotpot broth base',
      'Sichuan peppercorns',
      'Chili oil',
      'Assorted vegetables'
    ],
    instructions: [
      'Prepare spicy broth with peppercorns and chili.',
      'Add beef and veggies to cook at the table.',
      'Dip in sesame sauce and eat hot.'
    ],
    prepTime: '20 mins',
    cookTime: '40 mins',
    servings: 3,
    calories: 440,
    tags: ['chinese', 'hotpot', 'spicy'],
    difficulty: 'Medium',
    mood: 'spice lover',
    image: 'https://images.unsplash.com/photo-1557499305-0af888c3d8ec?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Spicy and social.',
    cookingTips: ['Use lots of aromatics for depth.']
  },
  {
    id: 'spice-lover-korean-tteokbokki',
    name: 'Korean Tteokbokki',
    description: 'Chewy rice cakes in fiery gochujang chili sauce.',
    ingredients: [
      'Rice cakes',
      'Gochujang',
      'Fish cakes',
      'Green onions',
      'Boiled eggs'
    ],
    instructions: [
      'Simmer rice cakes in gochujang sauce.',
      'Add fish cakes and eggs.',
      'Serve hot and spicy.'
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 2,
    calories: 380,
    tags: ['korean', 'spicy', 'snack'],
    difficulty: 'Easy',
    mood: 'spice lover',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Hot and chewy.',
    cookingTips: ['Adjust spice level to taste.']
  },
  {
    id: 'spice-lover-indian-mirchi-pakora',
    name: 'Indian Mirchi Pakora',
    description: 'Green chili peppers stuffed and fried in spiced gram flour batter.',
    ingredients: [
      'Large green chilies',
      'Gram flour',
      'Spices',
      'Oil'
    ],
    instructions: [
      'Stuff chilies, dip in batter.',
      'Deep fry until golden.',
      'Enjoy with chutney.'
    ],
    prepTime: '8 mins',
    cookTime: '10 mins',
    servings: 2,
    calories: 250,
    tags: ['indian', 'spicy', 'street food'],
    difficulty: 'Medium',
    mood: 'spice lover',
    image: 'https://images.unsplash.com/photo-1533050487297-09b450131914?w=800&auto=format&fit=crop',
    nutritionAnalysis: 'Spicy snack experience.',
    cookingTips: ['Use mild chilies if sensitive.']
  }
];
