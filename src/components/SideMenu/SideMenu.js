import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SideMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: 'Evaluations', path: '/', icon: '/icondocumenttext.svg' },
    { name: 'Dashboard', path: '/dashboard', icon: '/icondashboard.svg' },
    { name: 'Interviews', path: '/interviews', icon: '/iconmessage.svg' },
    { name: 'Clients', path: '/clients', icon: '/iconmessage1.svg' },
    { name: 'Settings', path: '/settings', icon: '/iconsetting.svg' },
    { name: 'Log out', path: '/logout', icon: '/ionlogout.svg' },
  ];

  return (
    <div className={`fixed top-0 left-0 ${isCollapsed ? 'w-[120px]' : 'w-[289px]'} h-screen bg-color-white-100 overflow-hidden text-xs text-color-black-100 font-plus-jakarta-sans flex flex-col justify-between transition-all duration-300`}>
      <div>
        <div className="flex justify-between items-center pl-[30px] pt-[30px]">
          <div className="text-sm leading-[21px] font-semibold">MENU</div>
          <button onClick={toggleSidebar} className="pr-[10px] bg-transparent border-none focus:outline-none">
            <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} className="text-color-primary-100" />
          </button>
        </div>
        <div className="p-[30px]">
          {menuItems.slice(0, 4).map((item, index) => (
            <Link
              to={item.path}
              key={item.name}
              className={`no-underline flex items-center gap-4 p-3 rounded-xl mt-2 ${
                currentPath === item.path || (currentPath === '/' && index === 0)
                  ? `bg-color-primary-100 text-color-white-100 ${isCollapsed ? 'w-[30px]' : 'w-full'}`
                  : ''
              }`}
            >
              <img className="h-6 w-6" alt={`${item.name} Icon`} src={item.icon} />
              {!isCollapsed && (
                <div className={`font-semibold ${currentPath === item.path || (currentPath === '/' && index === 0) ? 'text-color-white-100' : ''}`}>
                  {item.name}
                </div>
              )}
            </Link>
          ))}
          <img className={`w-full mt-2 ${isCollapsed ? 'hidden' : ''}`} alt="Divider" src="/divider.svg" />
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-[30px]">
          <div className="text-sm leading-[21px] font-semibold">SETTINGS</div>
          {menuItems.slice(4).map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className={`no-underline flex items-center gap-4 p-3 rounded-xl mt-2 ${
                currentPath === item.path ? 'bg-color-primary-100 text-color-white-100' : ''
              }`}
            >
              <img className="h-6 w-6" alt={`${item.name} Icon`} src={item.icon} />
              <div className={`font-semibold ${currentPath === item.path ? 'text-color-white-100' : ''}`}>
                {item.name}
              </div>
            </Link>
          ))}
          <img className={`w-full mt-2`} alt="Divider" src="/divider.svg" />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
