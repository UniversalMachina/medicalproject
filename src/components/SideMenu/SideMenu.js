import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegFileAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa';

const SideMenu = ({ activePage = "" }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);

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
      return `bg-color-primary-100 text-color-white-100 ${
        isCollapsed ? "w-[25px]" : "w-[85%]"
      }`;
    }
    return "";
  };

  const getIconColor = (name) => {
    if (name === activePage ||
        (activePage === "" && currentPath === "/" && name === "Evaluations") ||
        (activePage === "" && currentPath === menuItems.find(item => item.name === name)?.path)) {
      return "text-white";
    }
    return "text-black";
  };

  return (
    <div
      className={`fixed top-0 left-0 ${
        isCollapsed ? "w-[120px]" : "w-[289px]"
      } h-screen bg-color-white-100 overflow-hidden text-xs text-color-black-100 font-plus-jakarta-sans flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <div className="flex justify-between items-center pl-[30px] pt-[30px]">
          <div className="text-sm leading-[21px] font-semibold">MENU</div>
          <button
            onClick={toggleSidebar}
            className="pr-[10px] bg-transparent border-none focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronLeft}
              className="text-color-primary-100"
            />
          </button>
        </div>
        <div className="p-[30px]">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className={`no-underline flex items-center gap-4 p-3 rounded-xl mt-2 ${getHighlightClass(item.name)}`}
            >
              <item.icon
                className={`h-6 w-6 ${getIconColor(item.name)}`}
              />
              {!isCollapsed && (
                <div
                  className={`font-semibold ${getHighlightClass(item.name) ? "text-color-white-100" : ""}`}
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
          <div className="text-sm leading-[21px] font-semibold">SETTINGS</div>
          <Link
            to="/logout"
            className={`no-underline flex items-center gap-4 p-3 rounded-xl mt-2 bg-color-primary-100 text-color-white-100`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6 text-white" />
            <div
              className={`font-semibold ${
                currentPath === "/logout" ? "text-color-white-100" : ""
              }`}
            >
              Log out
            </div>
          </Link>
          <img className={`w-full mt-2`} alt="Divider" src="/divider.svg" />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
