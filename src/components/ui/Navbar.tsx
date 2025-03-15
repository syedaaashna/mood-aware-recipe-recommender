
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleDarkMode, isDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-white/70 dark:bg-black/70 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary mr-1">Mood</span>
              <span className="text-xl font-bold">Recipes</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/favorites" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Favorites
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Favorites
            </Link>
            <button
              onClick={() => {
                toggleDarkMode();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
