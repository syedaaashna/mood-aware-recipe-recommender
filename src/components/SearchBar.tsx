
import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  showSearchButton?: boolean;
  placeholder?: string;
  buttonClassName?: string;
}

const SearchBar = ({ onSearch, showSearchButton = false, placeholder = "Search recipes...", buttonClassName = "" }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full items-center group">
      <div className="relative w-full">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
        />
        <Sparkles
          className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300 animate-pulse"
        />
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-12 w-full rounded-full bg-white/90 backdrop-blur-sm text-base shadow-lg border-2 border-white/30 py-6 hover:shadow-xl focus:shadow-xl transition-all duration-300 hover:bg-white focus:bg-white group-hover:border-purple-300 focus:border-purple-400"
        />
      </div>
      {showSearchButton && (
        <button 
          type="submit"
          className={`ml-[-40px] px-8 py-3 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden ${buttonClassName}`}
          style={{
            background: "linear-gradient(90deg, #ff6b6b 0%, #ee5a24 25%, #f0932b 50%, #6c5ce7 75%, #a29bfe 100%)",
            backgroundSize: '200% 200%',
            animation: 'gradient-bg 3s ease infinite'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[slide_2s_infinite] skew-x-[-25deg]"></div>
          <span className="relative z-10 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
            <Sparkles className="w-4 h-4 animate-pulse" />
          </span>
        </button>
      )}
    </form>
  );
};

export default SearchBar;
