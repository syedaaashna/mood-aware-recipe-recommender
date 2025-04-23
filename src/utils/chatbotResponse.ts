
import { moods } from '@/data/moods/moodsList';
import { getRecipesByMood } from './recipeOperations';

// Helper functions for random responses
const greetings = [
  "Hello! 👋 How can I help with your recipe needs today?",
  "Hi there! 🍳 Ready for some cooking inspiration?",
  "Hey! What would you like to make or learn today?",
  "Greetings! Need help choosing a dish?"
];

const helpMessages = [
  "I can suggest recipes based on your mood, answer cooking questions, or help you find specific ingredients. Just ask!",
  "Looking for cooking inspiration? I can help! Ask me for recipe ideas, tips, or even ingredient swaps.",
  "Need a recipe, a cooking tip, or guidance on substitutions? I’ve got you covered."
];

const thanksReplies = [
  "You're welcome! Enjoy your cooking and let me know if you need anything else. 😊",
  "Happy to help! Come back if you have more questions.",
  "Anytime! Wishing you delicious meals ahead."
];

const followUpQuestions = [
  "Are you feeling adventurous, nostalgic, or maybe in need of some comfort food? Let me know your mood for personalized ideas!",
  "What ingredients do you have on hand? I can suggest recipes based on what you've got.",
  "Would you like tips for a type of cuisine or a specific dish?",
  "Tell me a little about what you're hungry for, and I'll find something fun!"
];

const emojiForMood = (moodName: string) => {
  switch (moodName.toLowerCase()) {
    case 'happy': return '😊';
    case 'sad': return '😢';
    case 'adventurous': return '🎒';
    case 'nostalgic': return '🏡';
    case 'romantic': return '💖';
    case 'comfort': return '🛋️';
    case 'energetic': return '⚡';
    case 'tired': return '😴';
    default: return '🍽️';
  }
};

function pickRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Try to infer mood from message text
function inferMood(message: string): string | null {
  const lower = message.toLowerCase();
  const matches = moods.find((m) =>
    lower.includes(m.name.toLowerCase())
  );
  return matches ? matches.id : null;
}

export const getChatbotResponse = (message: string, moodId: string | null): string => {
  const lowerMessage = message.toLowerCase();

  // Try to infer the mood from the message if not given explicitly
  let mood: typeof moods[0] | null = null;
  let usedMoodId = moodId;
  if (!usedMoodId) {
    const inferredMood = inferMood(lowerMessage);
    if (inferredMood) {
      usedMoodId = inferredMood;
    }
  }
  if (usedMoodId) {
    mood = moods.find(m => m.id === usedMoodId) || null;
  }

  // 1. Dish recommendation flow
  if (mood) {
    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion') || lowerMessage.includes('idea')) {
      const recipes = getRecipesByMood(mood.id);
      if (recipes.length > 0) {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        return `Based on your ${mood.name.toLowerCase()} mood ${emojiForMood(mood.name)}, I recommend trying "${randomRecipe.name}". Would you like to know the recipe details, cooking tips, or maybe a similar dish?`;
      }
    }
    // If mood mentioned but not a direct food request
    return `You're feeling ${mood.name.toLowerCase()} ${emojiForMood(mood.name)}! Want a recipe suggestion, a quick tip, or to find something new? Let me know!`;
  }

  // 2. Greetings
  if (lowerMessage.match(/\bhello\b|\bhi\b|\bhey\b|\bgreetings\b/)) {
    return pickRandom(greetings);
  }

  // 3. Help/assistance
  if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
    return pickRandom(helpMessages);
  }

  // 4. Thank you
  if (lowerMessage.includes('thank')) {
    return pickRandom(thanksReplies);
  }

  // 5. Ingredient/substitution
  if (lowerMessage.includes('ingredient') || lowerMessage.includes('substitute')) {
    return 'For ingredient substitutions, you can often use what you have on hand. For example, yogurt can replace sour cream, mushrooms can sometimes replace meat, and you can mix veggies depending on what’s in your fridge. Ask me for a specific ingredient swap!';
  }

  // 6. Time/quick
  if (lowerMessage.includes('time') || lowerMessage.includes('quick') || lowerMessage.includes('fast')) {
    return 'Looking for something quick? ⏱️ Check out recipes tagged "easy" or "quick" – they usually take less than 30 minutes. Want suggestions for a specific type of dish?';
  }

  // 7. Difficulty level
  if (lowerMessage.includes('difficul') || lowerMessage.includes('hard') || lowerMessage.includes('easy')) {
    return "If you're new to cooking, start with recipes marked “Easy” 🥄. If you're feeling confident, try “Medium” or even “Hard” for a fun challenge!";
  }

  // 8. Direct requests for a dish
  if (lowerMessage.match(/\b(pasta|pizza|salad|curry|risotto|soup|cake|cookies|chicken|beef|tofu|shrimp|rice|noodle|fish|dessert|breakfast|brunch|dinner|lunch)\b/)) {
    return "Mmm, that sounds tasty! 😋 Would you like me to suggest a specific recipe for that dish or give you some tips?";
  }

  // 9. Fallback: engage with a follow-up
  if (Math.random() > 0.5) {
    return "I didn’t quite catch that. " + pickRandom(followUpQuestions);
  } else {
    return "I'm here to help with recipe suggestions and cooking tips! Can you tell me your mood or a dish you’re craving?";
  }
};

