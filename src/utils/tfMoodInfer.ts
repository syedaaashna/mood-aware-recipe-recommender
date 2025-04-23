
// Handles mood inference from user input using TensorFlow.js (mock implementation)
import * as tf from '@tensorflow/tfjs';
import { moods } from '@/data/moods/moodsList';

// MOCK: Simulates text classification API with a "model"
// Replace with real model and vocabulary in production!
const moodKeywords = [
  { mood: 'happy', keywords: ['happy', 'joy', 'awesome', 'excited'] },
  { mood: 'sad', keywords: ['sad', 'unhappy', 'depressed', 'cry'] },
  { mood: 'romantic', keywords: ['romantic', 'love', 'date', 'anniversary'] },
  { mood: 'comforting', keywords: ['comfort', 'cozy', 'relax', 'warm'] },
  { mood: 'adventurous', keywords: ['adventure', 'explore', 'new', 'exotic'] },
  { mood: 'nostalgic', keywords: ['nostalgic', 'childhood', 'memory'] },
  { mood: 'energetic', keywords: ['energetic', 'workout', 'energy', 'power'] },
  { mood: 'stressed', keywords: ['stress', 'anxious', 'overwhelm', 'pressure'] },
  { mood: 'celebratory', keywords: ['party', 'celebrate', 'occasion'] },
  { mood: 'tired', keywords: ['tired', 'fatigue', 'sleepy', 'exhausted'] },
  { mood: 'indulgent', keywords: ['indulge', 'treat', 'decadent', 'spoil'] },
  { mood: 'mindful', keywords: ['healthy', 'mindful', 'nutritious', 'diet'] },
  { mood: 'social', keywords: ['social', 'friends', 'gathering'] },
  { mood: 'creative', keywords: ['creative', 'artistic', 'unique'] },
  { mood: 'traditional', keywords: ['classic', 'heritage', 'tradition'] },
  { mood: 'refreshed', keywords: ['refresh', 'light meal', 'fresh'] },
];
export async function tfInferMoodFromSentence(sentence: string): Promise<string | null> {
  // Lowercase, simple splitting
  const text = sentence.toLowerCase();
  for (const mk of moodKeywords) {
    for (const kw of mk.keywords) {
      if (text.includes(kw)) return mk.mood;
    }
  }
  // Could use TensorFlow model here for deeper inference!
  return null;
}

export function getMoodMeta(moodId: string) {
  return moods.find((m) => m.id === moodId) || null;
}
