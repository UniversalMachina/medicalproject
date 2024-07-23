import React from 'react';

const DateRangeButtons = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="border border-black rounded-6xl p-2.5">
        <img className="h-6 w-6" alt="Frame Icon" src="/frame.svg" />
      </div>
      <div className="flex items-center p-2.5 bg-purple rounded-3xs">
        <div className="font-medium">Today</div>
      </div>
      <div className="flex items-center p-2.5 bg-purple rounded-3xs">
        <div className="font-medium">Year</div>
      </div>
    </div>
  );
};

export default DateRangeButtons;
