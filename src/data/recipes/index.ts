
import { Recipe } from '@/types/recipe';
import { comfortingRecipes } from './comforting';
import { energeticRecipes } from './energetic';
import { happyRecipes } from './happy';
import { romanticRecipes } from './romantic';
import { healthyRecipes } from './healthy';

export const recipes: { [key: string]: Recipe[] } = {
  comforting: comfortingRecipes,
  energetic: energeticRecipes,
  happy: happyRecipes,
  romantic: romanticRecipes,
  healthy: healthyRecipes
};

export default recipes;
