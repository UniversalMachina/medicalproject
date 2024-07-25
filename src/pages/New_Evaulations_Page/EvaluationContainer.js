import React from 'react';
import Evaulations1 from './Evaulations1';

const EvaluationContainer = ({ people }) => {
  const evaluationSections = [
    "Evaluated Parent",
    "Child",
    "Child Collateral Contact",
    "Parent Collateral Contact",
    "Other Contact"
  ];

  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-auto flex flex-col items-start justify-start gap-[38px]">
      {/* Separate Evaluation Name section */}
      <div className="w-[1278px] h-auto rounded-[20.23px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[21.9px] pb-[17.3px] pr-[28.3px] pl-8 box-border gap-4 text-left text-black font-poppins">
        <div className="h-[25.3px] w-full relative font-semibold inline-block shrink-0">
          Evaluation Name*
        </div>
        <input
          type="text"
          className="w-full h-[28.7px] mt-2 rounded-[10.12px] border border-black pl-2"
          placeholder="Enter Evaluation Name"
        />
      </div>

      {/* Other evaluation sections */}
      {evaluationSections.map((section, index) => (
        <div
          key={index}
          className="w-[1278px] h-[68px] rounded-[20.23px] bg-thistle overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[21.9px] pb-[17.3px] pr-[28.3px] pl-8 box-border gap-[856px] text-left text-base-9 text-white font-poppins"
        >
          <div className="h-[25.3px] w-[499px] relative font-semibold inline-block shrink-0">
            {section}
          </div>
          <div className="h-[28.7px] w-[162.7px] flex flex-row items-start justify-start gap-[39.6px] text-2xs-1 text-black1">
            <div className="h-[24.5px] w-[94.4px] flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0 box-border">
              <div className="w-[94.4px] h-[22.8px] rounded-[10.12px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[4.2px] pb-[1.7px] pr-[13.5px] pl-4 box-border">
                <div className="h-[16.9px] w-[64.9px] relative inline-block shrink-0">
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
      ))}
    </div>
  );
};

export default EvaluationContainer;
