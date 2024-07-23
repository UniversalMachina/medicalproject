// Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-color-white-100 w-[289px] h-[1072px] overflow-hidden font-plus-jakarta-sans mq450:h-auto mq450:min-h-[1072]">
      <div className="absolute top-[921px] left-[24px] flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[21px] font-semibold inline-block min-w-[67px]">
          SETTINGS
        </div>
        <div className="w-60 rounded-xl flex flex-row items-center justify-start p-3 box-border gap-[16px] text-xs">
          <img className="h-6 w-6 relative" alt="" src="/iconsetting.svg" />
          <div className="relative leading-[18px] inline-block min-w-[49px]">
            Settings
          </div>
        </div>
        <img className="w-60 h-[0.5px] relative" alt="" src="/divider.svg" />
      </div>
      <div className="absolute top-[147px] left-[20px] flex flex-col items-start justify-start gap-[8px] text-xs">
        <div className="relative text-sm leading-[21px] font-semibold inline-block min-w-[41px]">
          MENU
        </div>
        <div className="w-60 rounded-xl flex flex-row items-center justify-start p-3 box-border gap-[16px]">
          <img className="h-6 w-6 relative" alt="" src="/icondashboard.svg" />
          <div className="relative leading-[18px] inline-block min-w-[64px]">
            Dashboard
          </div>
        </div>
        <div className="w-60 rounded-xl bg-color-primary-100 flex flex-row items-center justify-start p-3 box-border gap-[16px] text-color-white-100">
          <img className="h-6 w-6 relative" alt="" src="/icondocumenttext.svg" />
          <div className="relative leading-[18px] font-semibold inline-block min-w-[67px]">
            Evaluations
          </div>
        </div>
        <div className="w-60 rounded-xl flex flex-row items-center justify-start p-3 box-border gap-[16px]">
          <img className="h-6 w-6 relative" alt="" src="/iconmessage.svg" />
          <div className="relative leading-[18px] inline-block min-w-[58px]">
            Interviews
          </div>
        </div>
        <div className="w-60 rounded-xl flex flex-row items-center justify-start p-3 box-border gap-[16px]">
          <img className="h-6 w-6 relative" alt="" src="/iconmessage1.svg" />
          <div className="relative leading-[18px] inline-block min-w-[40px]">
            Clients
          </div>
        </div>
        <img className="w-60 h-[0.5px] relative" alt="" src="/divider.svg" />
      </div>
      <div className="absolute top-[40px] left-[20px] w-60 flex flex-row items-center justify-between gap-[20px]">
        <img className="h-[26.4px] w-[26.4px] relative min-h-[26px]" alt="" src="/logosample.svg" />
        <img className="h-6 w-6 relative" alt="" src="/iconarrowcircleleft.svg" />
      </div>
      <div className="absolute top-[1020px] left-[24px] rounded-xl bg-color-primary-100 w-[158px] h-[38px] whitespace-nowrap text-xs text-color-white-100">
        <div className="absolute top-[10px] left-[57px] leading-[18px] font-semibold inline-block min-w-[45px]">
          Log out
        </div>
      </div>
      <img className="absolute top-[1026px] left-[32px] w-[25px] h-[26px] overflow-hidden" alt="" src="/ionlogout.svg" />
    </div>
  );
};

export default Sidebar;
