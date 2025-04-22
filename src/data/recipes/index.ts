
import { Recipe } from '@/types/recipe';
import { comfortingRecipes } from './comforting';
import { energeticRecipes } from './energetic';
import { happyRecipes } from './happy';
import { romanticRecipes } from './romantic';
import { healthyRecipes } from './healthy';
import { stressedRecipes } from './stressed';
import { tiredRecipes } from './tired';
import { sadRecipes } from './sad';

export const recipes: { [key: string]: Recipe[] } = {
  comforting: comfortingRecipes,
  energetic: energeticRecipes,
  happy: happyRecipes,
  romantic: romanticRecipes,
  healthy: healthyRecipes,
  stressed: stressedRecipes,
  tired: tiredRecipes,
  sad: sadRecipes
};

export default recipes;
