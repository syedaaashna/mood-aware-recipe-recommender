
import { useState, useEffect } from "react";
import { getRecipesByMood, searchRecipes } from "@/utils/recipeOperations";
import MoodInput from "@/components/ui/MoodInput";
import RecipeCard from "@/components/ui/RecipeCard";
import SearchBar from "@/components/SearchBar";
import ChatBot from "@/components/ui/ChatBot";
import type { Mood } from "@/types/recipe";
import { Sparkles, ChefHat, Heart, Star } from "lucide-react";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // When mood is selected, fetch by mood
  const handleMoodSelect = (mood: Mood | null) => {
    setSelectedMood(mood);

    if (mood) {
      const foundRecipes = getRecipesByMood(mood.id);
      setRecipes(foundRecipes);
      setSearchQuery(''); // clear search query
    } else {
      setRecipes([]);
    }
  };

  // When search is performed
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedMood(null);

    if (query && query.trim().length > 0) {
      // Try tf.js mood inference could go here, but that's in the App's main logic
      const foundRecipes = searchRecipes(query.trim());
      setRecipes(foundRecipes);
    } else {
      setRecipes([]);
    }
  };

  return (
    <div
      className="min-h-screen w-full pt-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient-bg 15s ease infinite"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-blob-1 top-10 left-10 animate-float"></div>
        <div className="bg-blob-2 top-32 right-20 animate-float-delay-1"></div>
        <div className="bg-blob-3 bottom-20 left-32 animate-float-delay-2"></div>
        
        {/* Floating icons */}
        <div className="absolute top-20 left-1/4 text-4xl animate-float opacity-30">🍕</div>
        <div className="absolute top-40 right-1/3 text-3xl animate-float-delay-1 opacity-30">🍰</div>
        <div className="absolute bottom-40 left-1/5 text-5xl animate-float-delay-2 opacity-30">🥗</div>
        <div className="absolute bottom-60 right-1/4 text-4xl animate-float-delay-3 opacity-30">🍜</div>
        
        {/* Sparkles */}
        <div className="sparkle absolute top-32 left-20" style={{ animationDelay: '0s', width: '8px', height: '8px' }}></div>
        <div className="sparkle absolute top-60 right-40" style={{ animationDelay: '2s', width: '6px', height: '6px' }}></div>
        <div className="sparkle absolute bottom-32 left-60" style={{ animationDelay: '4s', width: '10px', height: '10px' }}></div>
      </div>

      {/* Hero Section */}
      <div className={`w-full flex flex-col items-center px-2 pb-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl w-full mx-auto text-center pt-10 relative z-10">
          {/* AI-Powered Badge */}
          <div className="mb-5 flex justify-center animate-bounce-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 animate-pulse" />
              AI-Powered Recipe Recommendations
              <ChefHat className="w-4 h-4" />
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Find Recipes for Your{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Mood
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-12 mt-4 text-white/90 text-xl font-medium max-w-2xl mx-auto animate-slide-in backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            </div>
            Discover personalized recipes based on how you're feeling right now, with step-by-step voice guidance to help you cook.
          </div>

          {/* Always visible input bars */}
          <div className="flex flex-col w-full max-w-2xl gap-4 mx-auto relative z-20">
            {/* MoodInput as top text bar */}
            <div className="relative flex-1 animate-scale-in">
              <MoodInput 
                onMoodSelect={handleMoodSelect}
                selectedMood={selectedMood}
                placeholder="How are you feeling? Type your mood or select below..."
              />
            </div>
            {/* SearchBar right below */}
            <div className="relative flex-1 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <SearchBar
                onSearch={handleSearch}
                showSearchButton
                placeholder="Or search recipes by name, ingredient, or tag..."
                buttonClassName="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              />
            </div>
          </div>

          {/* Fun interactive intro card only shown when no recipes and no mood/search */}
          {recipes.length === 0 && !selectedMood && !searchQuery && (
            <div className="w-full flex justify-center pt-8 pb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="card-magic-background rounded-3xl shadow-2xl p-8 flex flex-col items-center max-w-2xl w-full transition-all duration-500 hover:scale-105 hover:shadow-3xl glass-card border border-white/30 backdrop-blur-lg">
                <div className="text-7xl mb-6 animate-bounce floating-icon">🍽️</div>
                <h3 className="text-4xl font-bold mb-4 text-white text-shadow-lg">
                  Select a mood or search for recipes
                </h3>
                <div className="text-white/90 mb-4 text-xl text-center">
                  We'll help you find the perfect dish for your current state of mind.
                </div>
                <div className="flex gap-3 mt-4 flex-wrap justify-center">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm animate-pulse">🎯 Mood-based</span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>🎤 Voice guided</span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm animate-pulse" style={{ animationDelay: '1s' }}>🤖 AI powered</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recipes Area */}
      {(selectedMood || searchQuery) && (
        <div className="max-w-6xl mx-auto p-4 relative z-10">
          {(recipes.length === 0) ? (
            <div className="text-white text-xl text-center py-16 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20">
              <div className="text-6xl mb-4">🔍</div>
              No recipes found for this search. Try another!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map((recipe: any, index: number) => (
                <div 
                  key={recipe.id}
                  className="animate-scale-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <RecipeCard
                    recipe={recipe}
                    isFavorite={false}
                    onToggleFavorite={() => {}}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Enhanced ChatBot */}
      <ChatBot currentMood={selectedMood?.name || null} />
    </div>
  );
};

export default Index;
