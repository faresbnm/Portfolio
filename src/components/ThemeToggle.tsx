import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full focus:outline-none select-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-16 h-8 flex items-center">
        {/* Track */}
        <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
        }`}></div>
        
        {/* Thumb */}
        <div className={`absolute left-0 w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'light' 
            ? 'translate-x-0 bg-yellow-100' 
            : 'translate-x-8 bg-blue-100'  
        }`}>
          {theme === 'light' ? (
            <Sun className="h-4 w-4 text-yellow-500" />
          ) : (
            <Moon className="h-4 w-4 text-blue-500" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;