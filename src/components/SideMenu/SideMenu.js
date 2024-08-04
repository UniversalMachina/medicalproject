import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FaRegFileAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { useTheme } from "../../themeContext"; // Import the custom hook

const SideMenu = ({ activePage = "" }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme } = useTheme(); // Get the current theme

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Evaluations", path: "/", icon: FaRegFileAlt },
    { name: "Dashboard", path: "/dashboard", icon: FaTachometerAlt },
    { name: "Clients", path: "/clients", icon: FaUsers },
  ];

  const getHighlightClass = (name) => {
    if (name === activePage ||
        (activePage === "" && currentPath === "/" && name === "Evaluations") ||
        (activePage === "" && currentPath === menuItems.find(item => item.name === name)?.path)) {
      return `bg-color-primary-100 text-color-white-100 ${isCollapsed ? "w-[25px]" : "w-[85%]"}`;
    }
    return "";
  };

  const getIconColor = (name) => {
    if (name === activePage ||
        (activePage === "" && currentPath === "/" && name === "Evaluations") ||
        (activePage === "" && currentPath === menuItems.find(item => item.name === name)?.path)) {
      return "text-white";
    }
    return theme === "dark" ? "text-white" : "text-black";
  };

  const backgroundColor = theme === "dark" ? "#2C2C2C" : "white";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const primaryColorClass = "bg-color-primary-100 text-color-white-100";

  return (
    <div
      className={`fixed top-0 left-0 ${isCollapsed ? "w-[120px]" : "w-[289px]"} h-screen overflow-hidden text-xs font-plus-jakarta-sans flex flex-col justify-between transition-all duration-300`}
      style={{ backgroundColor, color: textColor }}
    >
      <div>
        <div className="flex justify-between items-center pl-[30px] pt-[30px]">
         <div className={`text-sm leading-[21px] font-semibold ${textColor}`}>MENU</div>
          <button
            onClick={toggleSidebar}
            className="pr-[10px] bg-transparent border-none focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronLeft}
              className={theme === "dark" ? "text-white" : "text-color-primary-100"}
            />
          </button>
        </div>
        <div className="p-[30px]">
          {menuItems.map((item) => (
     <Link
              to={item.path}
              key={item.name}
              className={`no-underline flex items-center gap-4 p-3 rounded-xl mt-2 ${getHighlightClass(item.name)} ${theme === "dark" ? "text-white" : "text-black"} visited:text-current`}
            >
              <item.icon
                className={`h-6 w-6 ${getIconColor(item.name)}`}
              />
        {!isCollapsed && (
                <div
                  className={`font-semibold ${getHighlightClass(item.name) ? "text-color-white-100" : textColor}`}
                >
                  {item.name}
                </div>
              )}
            </Link>
          ))}
          <img
            className={`w-full mt-2 ${isCollapsed ? "hidden" : ""}`}
            alt="Divider"
            src="/divider.svg"
          />
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-[30px]">
          <div className={`text-sm leading-[21px] font-semibold ${textColor}`}>SETTINGS</div>
          <Link
            to="/logout"
            className={`no-underline flex items-center gap-4 p-3 rounded-xl mt-2 ${primaryColorClass} visited:text-current`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6 text-white" />
            <div
              className={`font-semibold ${currentPath === "/logout" ? "text-color-white-100" : "text-color-white-100"}`}
            >
              Log out
            </div>
          </Link>
          <img className="w-full mt-2" alt="Divider" src="/divider.svg" />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
