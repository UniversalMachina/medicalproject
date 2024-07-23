import PropTypes from "prop-types";

const Sidebar = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] bg-color-white-100 w-[289px] overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-[1022px] box-border gap-[74px] text-left text-xs text-color-black-100 font-plus-jakarta-sans ${className}`}
    >
      <div className="w-[1424px] h-[41px] relative max-w-[493%] shrink-0 text-sm text-black font-poppins">
        <div className="absolute top-[8px] left-[20px] w-60 flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-[26.4px] w-[26.4px] relative min-h-[26px]"
            alt=""
            src="/logosample.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
            <img
              className="w-6 h-6 relative"
              alt=""
              src="/iconarrowcircleleft.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[-16px] w-[1440px] flex flex-row items-center justify-start py-[15.5px] pr-[720px] pl-[75px] box-border gap-[0px] [row-gap:20px] z-[1]">
          <div className="w-[645px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
            <div className="h-2.5 relative font-semibold inline-block min-w-[84px]">
              Evaluations
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[446.5px] pr-[29px] pl-5">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative text-sm leading-[21px] font-semibold inline-block min-w-[41px]">
            MENU
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/icondashboard.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[18px] inline-block min-w-[64px]">
                Dashboard
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-color-primary-100 flex flex-row items-start justify-start p-3 gap-[16px] text-color-white-100">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/icondocumenttext.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[18px] font-semibold inline-block min-w-[67px]">
                Evaluations
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/iconmessage.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[18px] inline-block min-w-[58px]">
                Interviews
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/iconmessage1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[18px] inline-block min-w-[40px]">
                Clients
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-[0.5px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/divider.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-6">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="relative text-sm leading-[21px] font-semibold inline-block min-w-[67px]">
            SETTINGS
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] gap-[8px]">
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/iconsetting.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative leading-[18px] inline-block min-w-[49px]">
                  Settings
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[0.5px] relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/divider.svg"
            />
          </div>
          <div className="w-[158px] rounded-xl bg-color-primary-100 flex flex-row items-start justify-start py-1.5 px-2 box-border gap-[24px] text-color-white-100">
            <img
              className="h-[26px] w-[25px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/ionlogout.svg"
            />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="relative leading-[18px] font-semibold inline-block min-w-[45px]">
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
