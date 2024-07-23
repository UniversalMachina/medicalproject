import Evaulations2 from "../components/Evaulations2";

const Interviews = () => {
  return (
    <div className="w-full h-[1080px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-sm text-gray2 font-poppins mq450:h-auto mq450:min-h-[1080]">
      <div className="absolute top-[344px] left-[351px] w-[1278px] flex flex-col items-start justify-start gap-[38px] max-w-full">
        <Evaulations2 ericDekryger="Eric Dekryger" />
        <Evaulations2 ericDekryger="Kanishk Jagwani" />
        <Evaulations2 ericDekryger="Thayla Ovalle PCE" />
      </div>
      <div className="absolute top-[172.5px] left-[1658.5px] rounded-6xl box-border w-[38px] h-[38px] flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-black">
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className="absolute top-[171px] left-[1711.5px] rounded-3xs bg-purple flex flex-row items-start justify-start p-2.5">
        <div className="relative font-medium inline-block min-w-[44px]">
          Today
        </div>
      </div>
      <div className="absolute top-[171px] left-[1790.5px] rounded-3xs bg-purple flex flex-row items-start justify-start p-2.5">
        <div className="relative font-medium inline-block min-w-[32px]">
          Year
        </div>
      </div>
      <div className="absolute top-[4px] left-[0px] w-full flex flex-row items-start justify-end max-w-full text-xl text-black1">
        <div className="w-[1631px] bg-color-white-100 flex flex-row items-start justify-between pt-[22px] pb-[35px] pr-[77px] pl-9 box-border max-w-full gap-[20px] lg:flex-wrap mq1450:pr-[38px] mq1450:box-border">
          <div className="w-[236px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-semibold mq450:text-base">
              Interviews
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[45.6px] max-w-full text-smi text-white mq825:flex-wrap mq825:gap-[23px]">
            <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
              <div className="rounded-xl bg-color-white-75 overflow-hidden flex flex-row items-start justify-start p-1 gap-[4px]">
                <div className="rounded-lg bg-color-primary-100 flex flex-row items-center justify-center p-2">
                  <img className="h-6 w-6 relative" alt="" src="/sun.svg" />
                </div>
                <div className="rounded-lg flex flex-row items-center justify-center p-2">
                  <img className="h-6 w-6 relative" alt="" src="/moon.svg" />
                </div>
              </div>
            </div>
            <div className="w-[213.4px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
              <div className="self-stretch rounded-6xs-5 bg-color-primary-100 overflow-hidden flex flex-row items-start justify-start py-[8.1px] px-[39px] whitespace-nowrap">
                <b className="relative inline-block whitespace-pre-wrap min-w-[118px]">
                  + Add Interview
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[11px] pl-0">
              <div className="rounded-xl bg-color-white-75 flex flex-row items-center justify-center p-3">
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/iconnotification.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-xs text-color-black-100 font-plus-jakarta-sans">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-12 w-12 relative rounded-341xl overflow-hidden shrink-0"
                    alt=""
                    src="/iconprofilphoto.svg"
                  />
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
            </div>
          </div>
        </div>
        <div className="w-[1440px] !m-[0] absolute top-[28px] left-[-16px] flex flex-row items-start justify-start max-w-full text-sm text-black">
          <div className="w-60 !m-[0] absolute bottom-[6.6px] left-[36px] flex flex-row items-end justify-between gap-[20px]">
            <img
              className="h-[26.4px] w-[26.4px] relative min-h-[26px] shrink-0"
              alt=""
              src="/logosample.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
              <img
                className="w-6 h-6 relative shrink-0"
                alt=""
                src="/iconarrowcircleleft.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-between py-0 px-[75px] box-border [row-gap:20px] max-w-full gap-[0px] z-[1] mq1450:flex-wrap">
            <div className="w-[645px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
              <div className="h-2.5 relative font-semibold inline-block min-w-[84px]">
                Evaluations
              </div>
            </div>
            <div className="w-[645px] flex flex-row items-center justify-end py-0 pr-0 pl-[461px] box-border gap-[15px] max-w-full text-gray2 mq825:flex-wrap">
              <div className="h-[38px] w-[38px] rounded-6xl box-border flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-black">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className="flex-1 rounded-3xs bg-purple flex flex-row items-center justify-center p-2.5 box-border min-w-[42px]">
                <div className="h-[21px] flex-1 relative font-medium inline-block">
                  Today
                </div>
              </div>
              <div className="h-[41px] w-[52px] rounded-3xs bg-purple flex flex-row items-center justify-center p-2.5 box-border">
                <div className="self-stretch flex-1 relative font-medium">
                  Year
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-color-white-100 w-[289px] h-[1072px] overflow-hidden text-xs text-color-black-100 font-plus-jakarta-sans">
        <div className="absolute top-[147px] left-[20px] text-sm leading-[21px] font-semibold inline-block min-w-[41px]">
          MENU
        </div>
        <div className="absolute top-[176px] left-[20px] rounded-xl w-60 flex flex-row items-start justify-start p-3 box-border gap-[16px]">
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
        <div className="absolute top-[232px] left-[20px] w-60 flex flex-col items-start justify-start pt-0 px-0 pb-[512.5px] box-border gap-[8px]">
          <div className="self-stretch rounded-xl flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/icondocumenttext1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[18px] inline-block min-w-[65px]">
                Evaluations
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-color-primary-100 flex flex-row items-start justify-start p-3 gap-[16px] text-color-white-100">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/iconmessage2.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative leading-[18px] font-semibold inline-block min-w-[61px]">
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
        <div className="absolute top-[921px] left-[20px] w-[244px] flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border">
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
    </div>
  );
};

export default Interviews;
