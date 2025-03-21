
import React, { useState } from 'react';
import { Brain, ChevronDown, ChevronUp, Lightbulb, Utensils, ListPlus, Sparkles, Flame } from 'lucide-react';
import { Recipe, getSimilarRecipes } from '@/utils/moodRecipeData';
import { Link } from 'react-router-dom';

interface RecipeAiFeaturesProps {
  recipe: Recipe;
}

const RecipeAiFeatures = ({ recipe }: RecipeAiFeaturesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const similarRecipes = getSimilarRecipes(recipe.id, 3);

  // Helper function to get appropriate image URL with fallbacks - updated with better images
  const getImageUrl = (recipeItem: Recipe, smallSize = false) => {
    // Recipe-specific image mappings - updated with better, more accurate images
    const recipeSpecificImages: Record<string, string> = {
      'classic-pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      'chocolate-cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      'spicy-noodles': 'https://images.unsplash.com/photo-1552611052-33e04de081de',
      'chicken-stir-fry': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
      'berry-smoothie': 'https://images.unsplash.com/photo-1553530666-ba11a90a3360',
      'lavender-tea': 'https://images.unsplash.com/photo-1572373696785-e8bd95d95b5b',
      'mushroom-risotto': 'https://images.unsplash.com/photo-1655323048051-a50e14cae28a',
      'gingerbread-cookies': 'https://images.unsplash.com/photo-1607920592519-ded8e61d8d9f',
      'apple-pie': 'https://images.unsplash.com/photo-1621743478914-cc8a68d76208',
      'sushi-rolls': 'https://images.unsplash.com/photo-1553621042-f6e147245754',
      'french-toast': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
      'chicken-curry': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      'butter-chicken': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
      'malai-kofta': 'https://images.unsplash.com/photo-1585937421612-70a008356c36',
      'shahi-paneer': 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      'tandoori-raan': 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84',
      'masala-dosa': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc'
    };
    
    // Check if we have a recipe-specific image
    if (recipeItem.id in recipeSpecificImages) {
      const baseUrl = recipeSpecificImages[recipeItem.id];
      const dimensions = smallSize ? 'w=400&h=200' : 'w=600&h=400';
      return `${baseUrl}?auto=format&fit=crop&${dimensions}&q=80`;
    }
    
    // Updated category images with better quality selections
    const categoryImages: Record<string, string> = {
      'indian': 'https://images.unsplash.com/photo-1585937421612-70a008356c36',
      'dessert': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
      'pasta': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
      'breakfast': 'https://images.unsplash.com/photo-1533089860892-a7c6f3a1aa85',
      'vegetarian': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      'chicken': 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b',
      'cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      'soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
      'salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      'smoothie': 'https://images.unsplash.com/photo-1553530666-ba11a90a3360'
    };
    
    if (!recipeItem.imageUrl) {
      // Search for matching category in recipe tags
      for (const tag of recipeItem.tags) {
        const lowerTag = tag.toLowerCase();
        for (const [category, url] of Object.entries(categoryImages)) {
          if (lowerTag.includes(category) || category.includes(lowerTag)) {
            const dimensions = smallSize ? 'w=400&h=200' : 'w=600&h=400';
            return `${url}?auto=format&fit=crop&${dimensions}&q=80`;
          }
        }
      }
      
      // Default fallback image
      return `https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=${smallSize ? '400&h=200' : '600&h=400'}&q=80`;
    }
    
    // Ensure we're using the base URL without existing query parameters
    const baseUrl = recipeItem.imageUrl.split('?')[0];
    
    // Add appropriate size parameters
    const dimensions = smallSize ? 'w=400&h=200' : 'w=600&h=400';
    return `${baseUrl}?auto=format&fit=crop&${dimensions}&q=80`;
  };

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
        <div className="flex items-center">
          <span className="text-white text-sm mr-3 bg-white/20 px-2 py-1 rounded-full">
            <Sparkles className="w-3 h-3 inline mr-1" /> AI Enhanced
          </span>
          <button className="text-white">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
          {/* AI Badge */}
          <div className="mb-4 flex justify-center">
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center">
              <Flame className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-300" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">AI-Analyzed Recipe</span>
            </div>
          </div>
          
          {/* AI Recipe Suggestion */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              <h4 className="text-base font-medium">Chef's AI Suggestion</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 pl-7 bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
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
              <p className="text-gray-700 dark:text-gray-300 pl-7 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
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
              <ul className="text-gray-700 dark:text-gray-300 pl-7 space-y-2 bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
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
                        src={getImageUrl(similarRecipe, true)} 
                        alt={similarRecipe.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Provide category-specific fallback images on error
                          let fallbackUrl = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=200';
                          
                          if (similarRecipe.tags.includes('dessert')) {
                            fallbackUrl = 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=200';
                          } else if (similarRecipe.tags.includes('indian')) {
                            fallbackUrl = 'https://images.unsplash.com/photo-1604952564555-13c872c0a364?auto=format&fit=crop&w=400&h=200';
                          } else if (similarRecipe.tags.includes('breakfast')) {
                            fallbackUrl = 'https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?auto=format&fit=crop&w=400&h=200';
                          }
                          
                          (e.target as HTMLImageElement).src = fallbackUrl;
                        }}
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
