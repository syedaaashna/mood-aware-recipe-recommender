
import { useState } from "react";
import { getRecipesByMood, searchRecipes } from "@/utils/recipeOperations";
import MoodInput from "@/components/ui/MoodInput";
import RecipeCard from "@/components/ui/RecipeCard";
import SearchBar from "@/components/SearchBar";
import type { Mood } from "@/types/recipe";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

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

  // Show intro info if no recipes displayed
  const showIntroCard = !selectedMood && !searchQuery && recipes.length === 0;
  // Show search/mood bars if no recipes or mood selected or searched
  const showInputs = !selectedMood && recipes.length === 0;

  return (
    <div
      className="min-h-screen w-full pt-16"
      style={{
        background: "linear-gradient(to bottom, #e7f0fd 0%, #f9fbfe 100%)"
      }}
    >
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center px-2 pb-8">
        <div className="max-w-4xl w-full mx-auto text-center pt-10">
          {/* AI-Powered Badge */}
          <div className="mb-5 flex justify-center">
            <span className="inline-block rounded-full bg-purple-100 text-purple-600 px-4 py-1 text-xs font-semibold">
              AI-Powered Recipe Recommendations
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
            Find Recipes for Your{" "}
            <span className="text-[hsl(267,78%,58%)]">Mood</span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-10 mt-2 text-gray-600 text-lg font-normal max-w-2xl mx-auto">
            Discover personalized recipes based on how you're feeling right now, with step-by-step voice guidance to help you cook.
          </div>

          {/* Centered mood input and search bar as seen in the screenshot */}
          {showInputs && (
            <div className="flex flex-col w-full max-w-2xl gap-3 mx-auto">
              {/* MoodInput as top text bar */}
              <div className="relative z-10 flex-1">
                <MoodInput 
                  onMoodSelect={handleMoodSelect}
                  selectedMood={null}
                  inputPlaceholder="How are you feeling? Type your mood or select below..."
                />
              </div>
              {/* SearchBar right below, stylized */}
              <div className="relative z-0 flex-1">
                <SearchBar
                  onSearch={handleSearch}
                  showSearchButton
                  placeholder="Or search recipes by name, ingredient, or tag..."
                  buttonClassName="bg-[hsl(267,78%,58%)] hover:bg-purple-700 text-white font-semibold px-7 rounded-full transition-colors"
                />
              </div>
            </div>
          )}

          {/* Fun interactive intro card only shown when nothing selected */}
          {showIntroCard && (
            <div className="w-full flex justify-center pt-6 pb-8">
              <div className="bg-gradient-to-br from-[#9b87f5] via-[#D3E4FD] to-[#f1f1f1] rounded-3xl shadow-xl p-8 flex flex-col items-center max-w-2xl w-full transition-all duration-500 hover:scale-105 hover:shadow-2xl glass-card">
                <div className="text-6xl mb-4 animate-float">🍽️</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">
                  Select a mood or search for recipes
                </h3>
                <div className="text-gray-700 mb-2 text-lg">
                  We'll help you find the perfect dish for your current state of mind.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recipes Area */}
      {(selectedMood || searchQuery) && (
        <div className="max-w-6xl mx-auto p-4">
          {(recipes.length === 0) ? (
            <div className="text-gray-500 text-lg text-center py-16">
              No recipes found for this search. Try another!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map((recipe: any) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={false}
                  onToggleFavorite={() => {}}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;

