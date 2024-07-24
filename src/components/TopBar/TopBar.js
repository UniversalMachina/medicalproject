import React from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import AddEvaluationsButton from './AddEvaluationsButton';
import NotificationIcon from './NotificationIcon';
import UserProfile from './UserProfile';
import DateRangeButtons from './DateRangeButtons';

const TopBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[106px] flex items-center justify-end pr-[40px] bg-color-white-100 text-black1 text-xl">
      <div className="flex items-center justify-between w-full max-w-[1531px] p-5">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center gap-12 text-white pr-[80px]">
          <ThemeToggle />
          <AddEvaluationsButton />
          <NotificationIcon />
          <UserProfile />
        </div>
      </div>
      <div className="absolute top-[28px] left-0 w-full flex items-center justify-end px-[75px] text-sm text-black">
        {/* <DateRangeButtons /> */}
      </div>
    </div>
  );
};

export default TopBar;
