
import { useState } from "react";
import { getRecipesByMood, searchRecipes } from "@/utils/recipeOperations";
import MoodInput from "@/components/ui/MoodInput";
import RecipeCard from "@/components/ui/RecipeCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { Mood } from "@/types/recipe";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchTouched, setSearchTouched] = useState(false);

  // When mood is selected, fetch by mood
  const handleMoodSelect = (mood: Mood | null) => {
    setSelectedMood(mood);
    setSearchValue(""); // Clear search bar
    setSearchTouched(false);
    if (mood) {
      const foundRecipes = getRecipesByMood(mood.id);
      setRecipes(foundRecipes);
    } else {
      setRecipes([]);
    }
  };

  // When search is submitted, fetch by search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTouched(true);
    setSelectedMood(null);
    if (searchValue.trim()) {
      const found = searchRecipes(searchValue.trim());
      setRecipes(found);
    } else {
      setRecipes([]);
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(to bottom, #e7f0fd 0%, #f9fbfe 100%)"
      }}
    >
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center px-2 pt-4 pb-16">
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

          {/* Mood Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // MoodInput bar shouldn't submit, but lets it stay focusable
            }}
            className="max-w-xl mx-auto w-full mb-4"
            style={{ pointerEvents: selectedMood ? "none" : "auto" }}
          >
            <div className="relative">
              {/* Place icon */}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="How are you feeling today?"
                className="pl-10 py-5 md:py-6 w-full rounded-full bg-white text-base shadow border border-gray-200"
                value={selectedMood?.name || ""}
                readOnly // Block direct typing, only selects mood below
                tabIndex={-1}
              />
              {/* Overlay actual MoodInput */}
              <div className="absolute left-0 top-0 w-full h-full z-10">
                <MoodInput
                  onMoodSelect={handleMoodSelect}
                  selectedMood={selectedMood}
                />
              </div>
            </div>
          </form>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto w-full flex gap-2 items-center mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Or search recipes by name, ingredient, or tag..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-10 pr-28 w-full rounded-full bg-white text-base shadow border border-gray-200 py-5 md:py-6"
                autoFocus={false}
                disabled={!!selectedMood}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full px-8 py-3 transition-colors text-base -ml-8"
              disabled={!!selectedMood}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Below-Hero Guide Section */}
      <div className="w-full py-12 bg-white/80 shadow-none mb-8">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold mb-1">Select a mood or search for recipes</h3>
          <div className="text-gray-700">
            We'll help you find the perfect dish for your current state of mind.
          </div>
        </div>
      </div>

      {/* Recipes Area */}
      {(selectedMood || searchTouched) && (
        <div className="max-w-6xl mx-auto p-4">
          {(recipes.length === 0) ? (
            <div className="text-gray-500 text-lg text-center py-16">
              No recipes found. Try another mood or search!
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
