import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../themeContext"; // Import the custom hook

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const iconColor = theme === "dark" ? "#FFFFFF" : "#2C2C2C";
  const primaryColorClass = "bg-color-primary-100";

  return (
    <div className="flex items-center gap-2.5 cursor-pointer" onClick={toggleTheme}>
      <div className={`flex items-center gap-1 p-1 ${theme === "light" ? "bg-white" : "bg-[#2C2C2C]"} rounded-xl hover:bg-gray-200`}>
        <div className={`p-2 rounded-lg ${theme === "light" ? primaryColorClass : ""}`}>
          <FaSun className="h-6 w-6" color={"white"} />
        </div>
        <div className={`p-2 rounded-lg ${theme === "dark" ? primaryColorClass : ""}`}>
          <FaMoon className="h-6 w-6" color={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
