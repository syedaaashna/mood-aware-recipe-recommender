
import { moods } from '@/data/moods/moodsList';
import { getRecipesByMood } from './recipeOperations';

export const getChatbotResponse = (message: string, moodId: string | null): string => {
  const lowerMessage = message.toLowerCase();
  
  if (moodId) {
    const mood = moods.find(m => m.id === moodId);
    if (mood) {
      if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
        const recipes = getRecipesByMood(moodId);
        if (recipes.length > 0) {
          const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
          return `Based on your ${mood.name.toLowerCase()} mood, I recommend trying "${randomRecipe.name}". It's a great choice when you're feeling this way.`;
        }
      }
    }
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return 'Hello! How can I help with your recipe needs today?';
  } else if (lowerMessage.includes('help')) {
    return 'I can suggest recipes based on your mood, answer cooking questions, or help you find specific ingredients. Just ask!';
  } else if (lowerMessage.includes('thank')) {
    return "You're welcome! Enjoy your cooking and let me know if you need anything else.";
  } else if (lowerMessage.includes('ingredient') || lowerMessage.includes('substitute')) {
    return 'For ingredient substitutions, you can often use what you have on hand. For example, yogurt can replace sour cream, and different vegetables can be swapped based on what\'s available.';
  } else if (lowerMessage.includes('time') || lowerMessage.includes('quick')) {
    return 'Looking for something quick? Check out the recipes tagged "easy" or "quick" - they typically take less than 30 minutes to prepare.';
  } else if (lowerMessage.includes('difficul') || lowerMessage.includes('hard')) {
    return 'If you\'re new to cooking, start with recipes marked "Easy". Work your way up to "Medium" difficulty as you gain confidence.';
  }
  
  return "I'm here to help with recipe suggestions and cooking tips. Let me know if you're looking for something specific!";
};
