import React from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook

const Header = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className={`absolute top-[175px] left-[276px] w-[1175px] h-[22px] flex flex-row items-start justify-start py-0 px-[75px] box-border z-[2] text-13xl ${theme === "dark" ? "text-white" : "text-black"}`}>
      <div className="h-[22px] w-[190px] relative font-semibold inline-block">
        Evaluations
      </div>
    </div>
  );
};

export default Header;
