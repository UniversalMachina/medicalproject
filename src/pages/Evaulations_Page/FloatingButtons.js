import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingButtons = ({ filter, setFilter }) => {
  const navigate = useNavigate();

  const isActive = (currentFilter) => filter === currentFilter;

  return (
    <>
      <div className="absolute top-[169.5px] left-[1651.5px] rounded-6xl box-border w-[38px] h-[38px] flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black">
        <img className="h-[18px] w-[18px] relative overflow-hidden shrink-0" alt="" src="/frame.svg" />
      </div>
      <div 
        className={`absolute top-[168px] left-[1704.5px] rounded-3xs w-16 h-[41px] flex flex-row items-start justify-start p-2.5 box-border cursor-pointer ${isActive("day") ? "bg-darkpurple" : "bg-purple"}`} 
        onClick={() => setFilter(isActive("day") ? "all" : "day")}
      >
        <div className="h-[21px] w-11 relative font-medium inline-block">
          Today
        </div>
      </div>
      <div 
        className={`absolute top-[168px] left-[1783.5px] rounded-3xs w-[52px] h-[41px] flex flex-row items-start justify-start p-2.5 box-border cursor-pointer ${isActive("year") ? "bg-darkpurple" : "bg-purple"}`} 
        onClick={() => setFilter(isActive("year") ? "all" : "year")}
      >
        <div className="h-[21px] w-8 relative font-medium inline-block">
          Year
        </div>
      </div>
      <div
        className="absolute top-[168px] left-[1390px] flex items-center p-3 bg-color-primary-100 rounded-6xs-5 cursor-pointer"
        onClick={() => navigate('/new-evaluations')}
      >
        <b className="px-10 text-color-white-100">+ Add Evaluations</b>
      </div>
    </>
  );
};

export default FloatingButtons;
