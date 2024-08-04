import React from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook

const Header = () => {
  const { theme } = useTheme(); // Get the current theme

  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`absolute top-[175px] left-[276px] w-[1175px] h-[22px] flex flex-row items-start justify-start py-0 px-[75px] box-border z-[2] text-13xl ${textColor}`}>
      <div className="h-[22px] w-[890px] relative font-semibold inline-block">
        Add New Evaluation
      </div>
    </div>
  );
};

export default Header;
