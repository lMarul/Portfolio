import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex items-center w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 border border-gray-300 dark:border-gray-700",
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900"
          : "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"
      )}
      tabIndex={0}
    >
      {/* Removed clouds and stars */}
      {/* Animated thumb */}
      <span
        className={cn(
          "absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300",
          isDarkMode ? "translate-x-8" : "translate-x-0"
        )}
      >
        {isDarkMode ? (
          <Moon className="h-5 w-5 text-blue-900" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-400" />
        )}
      </span>
    </button>
  );
};
