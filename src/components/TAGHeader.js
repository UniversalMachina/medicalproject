import PropTypes from "prop-types";

const TAGHeader = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4px] left-[289px] w-[1631px] flex flex-row items-start justify-start max-w-full text-left text-xl text-black1 font-poppins ${className}`}
    >
      <div className="w-[1631px] bg-color-white-100 flex flex-row items-start justify-between pt-[23px] pb-[33px] pr-[77px] pl-9 box-border max-w-full gap-[20px] mq850:flex-wrap">
        <div className="w-[236px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
          <div className="self-stretch relative font-semibold mq450:text-base">
            Interviews
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[57px] max-w-full text-xs text-color-black-100 font-plus-jakarta-sans mq675:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="rounded-xl bg-color-white-75 overflow-hidden flex flex-row items-start justify-start p-1 gap-[4px]">
              <div className="rounded-lg bg-color-primary-100 flex flex-row items-center justify-center p-2">
                <img className="h-6 w-6 relative" alt="" src="/sun.svg" />
              </div>
              <div className="rounded-lg flex flex-row items-center justify-center p-2">
                <img className="h-6 w-6 relative" alt="" src="/moon.svg" />
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-color-white-75 flex flex-row items-center justify-center p-3">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/iconnotification.svg"
            />
          </div>
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
      <div className="w-[645px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-full ml-[-1216px] text-sm text-gray2">
        <div className="self-stretch flex flex-row items-start justify-end gap-[15px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="w-[38px] h-[38px] rounded-6xl box-border flex flex-row items-center justify-center py-2.5 px-[9px] border-[1px] border-solid border-black">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
              />
            </div>
          </div>
          <div className="h-[41px] w-16 rounded-3xs bg-purple flex flex-row items-start justify-start p-2.5 box-border">
            <div className="self-stretch flex-1 relative font-medium">
              Today
            </div>
          </div>
          <div className="h-[41px] w-[52px] rounded-3xs bg-purple flex flex-row items-start justify-start p-2.5 box-border">
            <div className="self-stretch flex-1 relative font-medium">Year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

TAGHeader.propTypes = {
  className: PropTypes.string,
};

export default TAGHeader;
