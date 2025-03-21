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
      'classic-pizza': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
      'chocolate-cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      'spicy-noodles': 'https://images.unsplash.com/photo-1569058242567-93de6c36f8e6',
      'chicken-stir-fry': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
      'berry-smoothie': 'https://images.unsplash.com/photo-1553530666-ba11a90a3360',
      'lavender-tea': 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9',
      'mushroom-risotto': 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
      'gingerbread-cookies': 'https://images.unsplash.com/photo-1481391319762-47dff72954d9',
      'apple-pie': 'https://images.unsplash.com/photo-1621743478914-cc8a68d76208',
      'sushi-rolls': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
      'french-toast': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
      'chicken-curry': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      'butter-chicken': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db',
      'malai-kofta': 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db',
      'shahi-paneer': 'https://images.unsplash.com/photo-1631292784640-848cf71c0dce',
      'tandoori-raan': 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e',
      'masala-dosa': 'https://images.unsplash.com/photo-1610192244261-3f33de3f72e1'
    };
    
    // Check if we have a recipe-specific image
    if (recipeItem.id in recipeSpecificImages) {
      const baseUrl = recipeSpecificImages[recipeItem.id];
      const dimensions = smallSize ? 'w=400&h=200' : 'w=600&h=400';
      return `${baseUrl}?auto=format&fit=crop&${dimensions}&q=80`;
    }
    
    // Updated category images with better quality selections
    const categoryImages: Record<string, string> = {
      'pasta': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
      'curry': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      'indian': 'https://images.unsplash.com/photo-1585937421612-70a008356c36',
      'breakfast': 'https://images.unsplash.com/photo-1533089860892-a7c6f3a1aa85',
      'pancake': 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
      'cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      'dessert': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
      'soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
      'salad': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      'pizza': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
      'smoothie': 'https://images.unsplash.com/photo-1553530666-ba11a90a3360',
      'chicken': 'https://images.unsplash.com/photo-1598532213298-304a96a11b8e',
      'vegetarian': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      'south indian': 'https://images.unsplash.com/photo-1610192244261-3f33de3f72e1',
      'dosa': 'https://images.unsplash.com/photo-1610192244261-3f33de3f72e1',
      'noodles': 'https://images.unsplash.com/photo-1569058242567-93de6c36f8e6',
      'stir-fry': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
      'cookies': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
      'pie': 'https://images.unsplash.com/photo-1621743478914-cc8a68d76208',
      'tea': 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9',
      'risotto': 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
      'sushi': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
      'north indian': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      'paneer': 'https://images.unsplash.com/photo-1631292784640-848cf71c0dce',
      'lamb': 'https://images.unsplash.com/photo-1615361200098-9e630ec29b4e'
    };
    
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
    return `https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=${smallSize ? '400&h=200' : '600&h=400'}&q=80`;
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
