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

function inferMood(message: string): string | null {
  const lower = message.toLowerCase();
  
  const directMatch = moods.find((m) => lower.includes(m.name.toLowerCase()));
  if (directMatch) return directMatch.id;
  
  if (
    lower.includes('sad') || 
    lower.includes('depressed') || 
    lower.includes('feeling down') || 
    lower.includes('unhappy') || 
    lower.includes('miserable') || 
    lower.includes('blue') ||
    lower.includes('not feeling good') ||
    lower.includes('crying')
  ) {
    return 'sad';
  }
  
  if (
    lower.includes('happy') || 
    lower.includes('joy') || 
    lower.includes('excited') || 
    lower.includes('great') || 
    lower.includes('wonderful') ||
    lower.includes('good mood') ||
    lower.includes('feeling awesome')
  ) {
    return 'happy';
  }
  
  if (
    lower.includes('romantic') || 
    lower.includes('date night') || 
    lower.includes('anniversary') || 
    lower.includes('love') || 
    lower.includes('special dinner')
  ) {
    return 'romantic';
  }
  
  if (
    lower.includes('comfort') || 
    lower.includes('cozy') || 
    lower.includes('relaxing') || 
    lower.includes('need something warm') ||
    lower.includes('comfort food')
  ) {
    return 'comforting';
  }
  
  if (
    lower.includes('adventurous') || 
    lower.includes('exciting') || 
    lower.includes('try something new') || 
    lower.includes('exotic') || 
    lower.includes('different cuisine')
  ) {
    return 'adventurous';
  }
  
  if (
    lower.includes('nostalgic') || 
    lower.includes('childhood') || 
    lower.includes('memory') || 
    lower.includes('reminds me of') || 
    lower.includes('like mom used to make')
  ) {
    return 'nostalgic';
  }
  
  if (
    lower.includes('energetic') || 
    lower.includes('energy') || 
    lower.includes('boost') || 
    lower.includes('workout') || 
    lower.includes('active') ||
    lower.includes('need power')
  ) {
    return 'energetic';
  }
  
  if (
    lower.includes('stressed') || 
    lower.includes('anxious') || 
    lower.includes('overwhelmed') || 
    lower.includes('pressure') || 
    lower.includes('busy') ||
    lower.includes('no time')
  ) {
    return 'stressed';
  }
  
  if (
    lower.includes('celebration') || 
    lower.includes('party') || 
    lower.includes('achievement') || 
    lower.includes('special occasion') || 
    lower.includes('celebrate')
  ) {
    return 'celebratory';
  }
  
  if (
    lower.includes('tired') || 
    lower.includes('exhausted') || 
    lower.includes('fatigue') || 
    lower.includes('no energy') || 
    lower.includes('sleepy')
  ) {
    return 'tired';
  }
  
  if (
    lower.includes('indulge') || 
    lower.includes('treat myself') || 
    lower.includes('decadent') || 
    lower.includes('rich food') || 
    lower.includes('spoil myself')
  ) {
    return 'indulgent';
  }
  
  if (
    lower.includes('mindful') || 
    lower.includes('healthy') || 
    lower.includes('nutritious') || 
    lower.includes('balanced') || 
    lower.includes('diet')
  ) {
    return 'mindful';
  }
  
  if (
    lower.includes('social') || 
    lower.includes('friends') || 
    lower.includes('gathering') || 
    lower.includes('dinner party') || 
    lower.includes('get together')
  ) {
    return 'social';
  }
  
  if (
    lower.includes('creative') || 
    lower.includes('artistic') || 
    lower.includes('something different') || 
    lower.includes('unusual') || 
    lower.includes('experimental')
  ) {
    return 'creative';
  }
  
  if (
    lower.includes('traditional') || 
    lower.includes('classic') || 
    lower.includes('authentic') || 
    lower.includes('heritage') || 
    lower.includes('old fashioned')
  ) {
    return 'traditional';
  }
  
  return null;
}

export const getChatbotResponse = (message: string, moodId: string | null): string => {
  const lowerMessage = message.toLowerCase();

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

  if (mood) {
    const recipes = getRecipesByMood(mood.id);
    
    if (recipes.length > 0) {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      
      if (lowerMessage.includes('recommend') || 
          lowerMessage.includes('suggestion') || 
          lowerMessage.includes('idea') ||
          lowerMessage.includes('recipe') ||
          lowerMessage.includes('food') ||
          lowerMessage.includes('eat') ||
          lowerMessage.includes('cook') ||
          lowerMessage.includes('make')) {
        
        return `Based on your ${mood.name.toLowerCase()} mood ${emojiForMood(mood.name)}, I recommend trying "${randomRecipe.name}". Would you like to know the recipe details, cooking tips, or maybe a similar dish?`;
      }
      
      return `You seem to be feeling ${mood.name.toLowerCase()} ${emojiForMood(mood.name)}! I have some perfect recipes for that mood. How about trying "${randomRecipe.name}"? Or I can suggest something else if you'd prefer.`;
    }
    
    return `I see you're feeling ${mood.name.toLowerCase()} ${emojiForMood(mood.name)}. I don't have specific recipes for this mood yet, but I'd be happy to recommend something based on ingredients you have or a type of cuisine you enjoy.`;
  }

  if (lowerMessage.match(/\bhello\b|\bhi\b|\bhey\b|\bgreetings\b/)) {
    return pickRandom(greetings);
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
    return pickRandom(helpMessages);
  }

  if (lowerMessage.includes('thank')) {
    return pickRandom(thanksReplies);
  }

  if (lowerMessage.includes('ingredient') || lowerMessage.includes('substitute')) {
    return 'For ingredient substitutions, you can often use what you have on hand. For example, yogurt can replace sour cream, mushrooms can sometimes replace meat, and you can mix veggies depending on what’s in your fridge. Ask me for a specific ingredient swap!';
  }

  if (lowerMessage.includes('time') || lowerMessage.includes('quick') || lowerMessage.includes('fast')) {
    return 'Looking for something quick? ⏱️ Check out recipes tagged "easy" or "quick" – they usually take less than 30 minutes. Want suggestions for a specific type of dish?';
  }

  if (lowerMessage.includes('difficul') || lowerMessage.includes('hard') || lowerMessage.includes('easy')) {
    return "If you're new to cooking, start with recipes marked “Easy” 🥄. If you're feeling confident, try “Medium” or even “Hard” for a fun challenge!";
  }

  if (lowerMessage.match(/\b(pasta|pizza|salad|curry|risotto|soup|cake|cookies|chicken|beef|tofu|shrimp|rice|noodle|fish|dessert|breakfast|brunch|dinner|lunch)\b/)) {
    return "Mmm, that sounds tasty! 😋 Would you like me to suggest a specific recipe for that dish or give you some tips?";
  }

  if (Math.random() > 0.5) {
    return "I didn’t quite catch that. " + pickRandom(followUpQuestions);
  } else {
    return "I'm here to help with recipe suggestions and cooking tips! Can you tell me your mood or a dish you’re craving?";
  }
};
