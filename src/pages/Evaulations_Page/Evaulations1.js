import React from 'react';
import PropTypes from "prop-types";

const Evaulations1 = ({ className = "", name, date }) => {
  return (
    <div
      className={`w-[1278px] h-[68px] rounded-[20.23px] bg-thistle overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[21.9px] pb-[17.3px] pr-[28.3px] pl-8 box-border gap-[856px] text-left text-base-9 text-white font-poppins ${className}`}
    >
      <div className="h-[25.3px] w-[199px] relative font-semibold inline-block shrink-0">
        {name}
      </div>
      <div className="h-[28.7px] w-[162.7px] flex flex-row items-start justify-start gap-[39.6px] text-2xs-1 text-black1">
        <div className="h-[24.5px] w-[94.4px] flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0 box-border">
          <div className="w-[94.4px] h-[22.8px] rounded-[10.12px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[4.2px] pb-[1.7px] pr-[13.5px] pl-4 box-border">
            <div className="h-[16.9px] w-[64.9px] relative inline-block shrink-0">
              {date}
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

Evaulations1.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Evaulations1;
