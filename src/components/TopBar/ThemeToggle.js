import React from "react";
import { useTheme } from "../../themeContext"; // Import the custom hook

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2.5" onClick={toggleTheme}>
      <div className="flex items-center gap-1 p-1 bg-color-white-75 rounded-xl">
        <div className={`p-2 rounded-lg ${theme === "light" ? "bg-color-primary-100" : ""}`}>
          <img className="h-6 w-6" alt="Sun Icon" src="/sun.svg" />
        </div>
        <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-color-primary-100" : ""}`}>
          <img className="h-6 w-6" alt="Moon Icon" src="/moon.svg" />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
