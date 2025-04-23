
import { useState, useEffect } from "react";
import { getAllRecipes, searchRecipes, getRecipesByMood } from "@/utils/recipeOperations";
import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/ui/RecipeCard";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { moods } from "@/data/moods/moodsList";
import { inferMoodFromText } from "@/utils/moodFromText";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | undefined>(undefined);
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [lastMoodDetected, setLastMoodDetected] = useState<string | undefined>(undefined);

  // Load all recipes at mount
  useEffect(() => {
    const allRecipes = getAllRecipes();
    setRecipes(allRecipes);
    setSearchResults(allRecipes);
  }, []);

  // Handle search bar typing/searching
  const handleInput = (input: string) => {
    setSearchTerm(input);

    // Only handle input if no mood is selected
    if (!selectedMood) {
      // Attempt to map to recipes; try normal search, then mood inference
      let results = searchRecipes(input);

      if (results.length === 0) {
        const inferredMood = inferMoodFromText(input);
        if (inferredMood) {
          results = getRecipesByMood(inferredMood);
          setSearchResults(results);
          setLastMoodDetected(inferredMood);
        } else {
          setSearchResults([]);
          setLastMoodDetected(undefined);
        }
      } else {
        setSearchResults(results);
        setLastMoodDetected(undefined);
      }
    }
  };

  // Handle dropdown mood select
  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);

    // Show all recipes for that mood
    const moodRecipes = getRecipesByMood(moodId);
    setSearchResults(moodRecipes);
    setLastMoodDetected(undefined);
  };

  // If user clears mood dropdown, revert to search
  const handleMoodClear = () => {
    setSelectedMood(undefined);
    // If search term is present, use it; else show all recipes
    if (searchTerm.trim()) {
      handleInput(searchTerm);
    } else {
      setSearchResults(recipes);
      setLastMoodDetected(undefined);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        <Select
          value={selectedMood || ""}
          onValueChange={(value) => {
            if (value) handleMoodSelect(value);
            else handleMoodClear();
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select mood..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All moods</SelectItem>
            {moods.map((m) => (
              <SelectItem key={m.id} value={m.id}>
                <span className="mr-2">{m.icon}</span>
                {m.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="w-full relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search recipes or describe your mood (e.g. I'm feeling down today)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (!selectedMood) handleInput(e.target.value);
            }}
            className="pl-10 w-full bg-white dark:bg-gray-800"
            disabled={!!selectedMood}
          />
        </div>
      </div>
      {/* Mood info banner */}
      {selectedMood && (
        <div className="mb-3 text-sm text-primary-800 font-medium">
          Showing recipes for mood:{" "}
          <span className="font-bold">
            {moods.find((m) => m.id === selectedMood)?.name || selectedMood}
          </span>
        </div>
      )}
      {!selectedMood && lastMoodDetected && searchResults.length > 0 && (
        <div className="mb-3 text-sm text-primary-800 font-medium">
          Showing recipes for your mood:{" "}
          <span className="font-bold">
            {moods.find((m) => m.id === lastMoodDetected)?.name || lastMoodDetected}
          </span>
        </div>
      )}
      {searchResults.length === 0 ? (
        <div>
          <span>No recipes found.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((recipe) => (
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
  );
};

export default Index;
