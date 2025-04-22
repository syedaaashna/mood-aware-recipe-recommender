
import { Recipe } from './recipe';

export interface Language {
  code: string;
  name: string;
  voice: SpeechSynthesisVoice | null;
}

export interface VoiceGuidanceProps {
  recipe: Recipe;
}
