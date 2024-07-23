// Header.jsx
import React from "react";

const Header = ({ title, buttonLabel, buttonOnClick }) => {
  return (
    <div className="absolute top-[4px] left-[289px] bg-color-white-100 w-[1631px] h-[106px] text-xs">
      <div className="absolute top-[23px] left-[1225px] rounded-xl bg-color-white-75 flex flex-row items-center justify-center p-3">
        <img className="h-6 w-6 relative" alt="" src="/iconnotification.svg" />
      </div>
      <div className="absolute top-[23px] left-[1330px] flex flex-row items-center justify-start gap-[16px] font-plus-jakarta-sans">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img className="h-12 w-12 relative rounded-341xl overflow-hidden shrink-0" alt="" src="/iconprofilphoto.svg" />
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[18px] font-semibold inline-block min-w-[53px]">
              John Doe
            </div>
            <div className="relative leading-[18px] text-color-black-50 inline-block min-w-[120px] whitespace-nowrap">
              johndoe@gmail.com
            </div>
          </div>
        </div>
        <img className="h-6 w-6 relative" alt="" src="/iconmore.svg" />
      </div>
      <div className="absolute top-[22px] left-[815px] rounded-xl bg-color-white-75 w-[92px] h-12 overflow-hidden">
        <div className="absolute top-[4px] left-[4px] rounded-lg bg-color-primary-100 flex flex-row items-center justify-center p-2">
          <img className="h-6 w-6 relative" alt="" src="/sun.svg" />
        </div>
        <div className="absolute top-[4px] left-[48px] rounded-lg flex flex-row items-center justify-center p-2">
          <img className="h-6 w-6 relative" alt="" src="/moon.svg" />
        </div>
      </div>
      <div className="absolute top-[35px] left-[36px] text-xl font-semibold text-black1 inline-block w-[236px] h-[30px] mq450:text-base">
        {title}
      </div>
      <div className="absolute top-[28px] left-[966px] rounded-6xs-5 bg-color-primary-100 w-[213.4px] h-[35.2px] overflow-hidden whitespace-nowrap text-smi text-white" onClick={buttonOnClick}>
        <b className="absolute top-[8.1px] left-[39.5px] whitespace-pre-wrap">
          {buttonLabel}
        </b>
      </div>
    </div>
  );
};

export default Header;
