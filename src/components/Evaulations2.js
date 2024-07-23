import PropTypes from "prop-types";

const Evaulations2 = ({ className = "", ericDekryger }) => {
  return (
    <div
      className={`self-stretch rounded-[20.23px] bg-thistle overflow-hidden flex flex-row items-start justify-between pt-[21.9px] pb-[17.3px] pr-7 pl-8 gap-[20px] text-left text-base-9 text-white font-poppins mq450:flex-wrap ${className}`}
    >
      <div className="w-[199px] relative font-semibold inline-block shrink-0">
        {ericDekryger}
      </div>
      <div className="w-[162.7px] flex flex-row items-start justify-start gap-[39.6px] text-2xs-1 text-black1">
        <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
          <div className="rounded-[10.12px] bg-white overflow-hidden flex flex-row items-start justify-start pt-[4.2px] pb-[1.7px] pr-[13px] pl-4 shrink-0 whitespace-nowrap">
            <div className="relative inline-block min-w-[64.9px]">
              Apr, 10 2024
            </div>
          </div>
        </div>
        <img
          className="h-[28.7px] w-[28.7px] relative overflow-hidden shrink-0"
          alt=""
          src="/makiarrow.svg"
        />
      </div>
    </div>
  );
};

Evaulations2.propTypes = {
  className: PropTypes.string,
  ericDekryger: PropTypes.string,
};

export default Evaulations2;
