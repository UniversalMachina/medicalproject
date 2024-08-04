import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../themeContext"; // Import the custom hook
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import AddEvaluationsButton from './AddEvaluationsButton';
import NotificationIcon from './NotificationIcon';
import UserProfile from './UserProfile';
import DateRangeButtons from './DateRangeButtons';

const TopBar = ({ title = "", backUrl = "" }) => {
  const navigate = useNavigate();
  const { theme } = useTheme(); // Get the current theme

  const backgroundColor = theme === "dark" ? "#2C2C2C" : "white";
  const textColor = theme === "dark" ? "white" : "#000000";

  return (
    <div
      className="absolute top-0 left-0 w-full h-[106px] flex items-center justify-end pr-[40px] text-xl"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="flex items-center justify-between w-full max-w-[1531px] p-5">
        <div className="flex items-center">
          {backUrl && (
            <button 
              onClick={() => navigate(backUrl)} 
              className="mr-4 p-2 rounded hover:bg-gray-300 cursor-pointer"
              style={{ backgroundColor: 'transparent' }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#000000" }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
          )}
          <div className="font-semibold">{title}</div>
        </div>
        <div className="flex items-center gap-12 pr-[80px]">
          <ThemeToggle />
          <UserProfile />
        </div>
      </div>
      <div className="absolute top-[28px] left-0 w-full flex items-center justify-end px-[75px] text-sm">
        {/* <DateRangeButtons /> */}
      </div>
    </div>
  );
};

export default TopBar;
