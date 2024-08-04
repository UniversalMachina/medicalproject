import React from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook

const UserProfile = () => {
  const { theme } = useTheme(); // Get the current theme

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`flex items-center gap-4 text-xs font-plus-jakarta-sans ${textColor}`}>
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-341xl" alt="Profile Photo" src="/iconprofilphoto.svg" />
        <div className="flex flex-col">
          <div className="font-semibold">John Doe</div>
          <div className={`${subTextColor}`}>johndoe@gmail.com</div>
        </div>
      </div>
      {/* <img className="h-6 w-6" alt="More Icon" src="/iconmore.svg" /> */}
    </div>
  );
};

export default UserProfile;
