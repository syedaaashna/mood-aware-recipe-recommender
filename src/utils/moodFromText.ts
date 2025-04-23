
// Utility to infer mood from a user text input

import { moods } from '@/data/moods/moodsList';

// Returns a mood id (string) or null if no match found
export function inferMoodFromText(input: string): string | null {
  const lower = input.trim().toLowerCase();
  // Direct mood name or id match
  for (const mood of moods) {
    if (lower.includes(mood.name.toLowerCase()) || lower.includes(mood.id.toLowerCase())) {
      return mood.id;
    }
  }
  if (lower.match(/\bhappy|joy|great|awesome|excited|good mood|wonderful\b/)) return "happy";
  if (lower.match(/\bsad|down|unhappy|depressed|blue|cry|not feeling good|upset\b/)) return "sad";
  if (lower.match(/\bromantic|love|date night|anniversary\b/)) return "romantic";
  if (lower.match(/\bcomfort|cozy|relax|relaxing|need warmth|comfort food\b/)) return "comforting";
  if (lower.match(/\badventure|try new|explore|different|exotic|spontaneous\b/)) return "adventurous";
  if (lower.match(/\bnostalgic|childhood|memory|like mom|reminds me\b/)) return "nostalgic";
  if (lower.match(/\benergetic|energy|workout|power|active|boost\b/)) return "energetic";
  if (lower.match(/\bstress|anxious|overwhelm|busy|no time|pressure\b/)) return "stressed";
  if (lower.match(/\bparty|celebrate|achievement|special occasion\b/)) return "celebratory";
  if (lower.match(/\btired|fatigue|sleepy|exhausted|no energy\b/)) return "tired";
  if (lower.match(/\bindulge|treat|decadent|spoil\b/)) return "indulgent";
  if (lower.match(/\bmindful|healthy|light|nutritious|diet|balanced\b/)) return "mindful";
  if (lower.match(/\bsocial|friends|gathering|get together\b/)) return "social";
  if (lower.match(/\bcreative|artistic|unique|unusual|experimental\b/)) return "creative";
  if (lower.match(/\bclassic|traditional|heritage|authentic|old fashioned\b/)) return "traditional";
  if (lower.match(/\brefresh|light meal|fresh\b/)) return "refreshed";
  if (lower.match(/\bheavy|cheese|mac|ramen|soup|comfort dish\b/)) return "comforting";
  return null;
}
