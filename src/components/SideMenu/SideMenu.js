import React from 'react';

const SideMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-[289px] h-screen bg-color-white-100 overflow-hidden text-xs text-color-black-100 font-plus-jakarta-sans flex flex-col justify-between">
      <div>
        <div className="text-sm leading-[21px] font-semibold pl-[30px] pt-[30px]">MENU</div>
        <div className="p-[30px]">
          <div className="flex items-center gap-4 p-3 rounded-xl bg-color-primary-100 text-color-white-100">
            <img className="h-6 w-6" alt="Evaluations Icon" src="/icondocumenttext.svg" />
            <div className="font-semibold">Evaluations</div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl mt-2">
            <img className="h-6 w-6" alt="Dashboard Icon" src="/icondashboard.svg" />
            <div>Dashboard</div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl mt-2">
            <img className="h-6 w-6" alt="Interviews Icon" src="/iconmessage.svg" />
            <div>Interviews</div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl mt-2">
            <img className="h-6 w-6" alt="Clients Icon" src="/iconmessage1.svg" />
            <div>Clients</div>
          </div>
          <img className="w-full mt-2" alt="Divider" src="/divider.svg" />
        </div>
      </div>

      
      <div className="p-[30px]">
        <div className="text-sm leading-[21px] font-semibold">SETTINGS</div>
        <div className="flex items-center gap-4 p-3 rounded-xl mt-2">
          <img className="h-6 w-6" alt="Settings Icon" src="/iconsetting.svg" />
          <div>Settings</div>
        </div>
        <img className="w-full mt-2" alt="Divider" src="/divider.svg" />
        <div className="flex items-center gap-4 p-3 rounded-xl bg-color-primary-100 text-color-white-100 mt-2">
          <img className="h-6 w-6" alt="Logout Icon" src="/ionlogout.svg" />
          <div className="font-semibold">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
