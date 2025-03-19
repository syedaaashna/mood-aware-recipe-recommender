
import React, { useState } from 'react';
import { Brain, ChevronDown, ChevronUp, Lightbulb, Utensils, ListPlus } from 'lucide-react';
import { Recipe, getSimilarRecipes } from '@/utils/moodRecipeData';
import { Link } from 'react-router-dom';

interface RecipeAiFeaturesProps {
  recipe: Recipe;
}

const RecipeAiFeatures = ({ recipe }: RecipeAiFeaturesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const similarRecipes = getSimilarRecipes(recipe.id, 3);

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-primary/20">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)',
        }}
      >
        <div className="flex items-center">
          <Brain className="w-6 h-6 mr-3 text-white" />
          <h3 className="text-lg font-bold text-white">AI-Powered Recipe Insights</h3>
        </div>
        <button className="text-white">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
          {/* AI Recipe Suggestion */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              <h4 className="text-base font-medium">Chef's AI Suggestion</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 pl-7">
              {recipe.aiSuggestion || "Our AI chef doesn't have any specific suggestions for this recipe."}
            </p>
          </div>
          
          {/* Nutrition Analysis */}
          {recipe.nutritionAnalysis && (
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <Utensils className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <h4 className="text-base font-medium">Nutrition Insight</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 pl-7">
                {recipe.nutritionAnalysis}
              </p>
            </div>
          )}
          
          {/* Cooking Tips */}
          {recipe.cookingTips && recipe.cookingTips.length > 0 && (
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <ListPlus className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                <h4 className="text-base font-medium">AI Cooking Tips</h4>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 pl-7 space-y-2">
                {recipe.cookingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Similar Recipes */}
          {similarRecipes.length > 0 && (
            <div>
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 mr-2 text-purple-500" />
                <h4 className="text-base font-medium">AI-Recommended Similar Recipes</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-7">
                {similarRecipes.map(similarRecipe => (
                  <Link 
                    key={similarRecipe.id} 
                    to={`/recipe/${similarRecipe.id}`}
                    className="block p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="h-24 rounded-md overflow-hidden mb-2">
                      <img 
                        src={similarRecipe.imageUrl} 
                        alt={similarRecipe.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium text-sm">{similarRecipe.name}</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {similarRecipe.tags.slice(0, 2).join(', ')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeAiFeatures;
