import React from 'react';

const FloatingButtons = () => {
  return (
    <>
      <div className="absolute top-[169.5px] left-[1651.5px] rounded-6xl box-border w-[38px] h-[38px] flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black">
        <img className="h-[18px] w-[18px] relative overflow-hidden shrink-0" alt="" src="/frame.svg" />
      </div>
      <div className="absolute top-[168px] left-[1704.5px] rounded-3xs bg-purple w-16 h-[41px] flex flex-row items-start justify-start p-2.5 box-border">
        <div className="h-[21px] w-11 relative font-medium inline-block">
          Today
        </div>
      </div>
      <div className="absolute top-[168px] left-[1783.5px] rounded-3xs bg-purple w-[52px] h-[41px] flex flex-row items-start justify-start p-2.5 box-border">
        <div className="h-[21px] w-8 relative font-medium inline-block">
          Year
        </div>
      </div>

    </>
  );
};

export default FloatingButtons;
