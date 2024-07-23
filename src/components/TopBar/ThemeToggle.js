import React from 'react';

const ThemeToggle = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center gap-1 p-1 bg-color-white-75 rounded-xl">
        <div className="p-2 bg-color-primary-100 rounded-lg">
          <img className="h-6 w-6" alt="Sun Icon" src="/sun.svg" />
        </div>
        <div className="p-2 rounded-lg">
          <img className="h-6 w-6" alt="Moon Icon" src="/moon.svg" />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
