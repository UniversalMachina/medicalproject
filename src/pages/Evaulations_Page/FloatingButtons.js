import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

const FloatingButtons = ({ filter, setFilter, setSort, setSearchTerm }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (currentFilter) => filter === currentFilter;

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSort = (sortOption) => {
    setSort(sortOption);
    setIsDropdownOpen(false);
  };

  const debouncedHandleSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    []
  );

  const handleSearch = (event) => {
    debouncedHandleSearch(event.target.value);
  };

  return (
    <>
      <div 
        className="absolute top-[169.5px] left-[1651.5px] rounded-6xl box-border w-[38px] h-[38px] flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black cursor-pointer text-gray2" 
        onClick={toggleDropdown}
      >
        <img className="h-[18px] w-[18px] relative overflow-hidden shrink-0" alt="" src="/frame.svg" />
        {isDropdownOpen && (
          <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-40">
            <div 
              className="px-4 py-2 cursor-pointer hover:bg-gray-200" 
              onClick={() => handleSort("mostRecent")}
            >
              Most Recent
            </div>
            <div 
              className="px-4 py-2 cursor-pointer hover:bg-gray-200" 
              onClick={() => handleSort("oldest")}
            >
              Oldest
            </div>
          </div>
        )}
      </div>
      <div 
        className={`absolute top-[168px] left-[1704.5px] rounded-3xs w-16 h-[41px] flex flex-row items-start justify-start p-2.5 box-border cursor-pointer ${isActive("day") ? "bg-red-200" : "bg-purple"}`} 
        onClick={() => setFilter(isActive("day") ? "all" : "day")}
      >
        <div className="h-[21px] w-11 relative font-medium inline-block">
          Today
        </div>
      </div>
      <div 
        className={`absolute top-[168px] left-[1783.5px] rounded-3xs w-[52px] h-[41px] flex flex-row items-start justify-start p-2.5 box-border cursor-pointer ${isActive("year") ? "bg-red-200" : "bg-purple"}`} 
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
      <div className="absolute top-[170px] left-[770px] rounded-lg box-border z-[20] flex flex-row items-center justify-start py-[12px] px-2 gap-[8px] min-w-[591px] max-w-full text-darkgray border-[1px] border-solid border-darkgray">
  <img className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]" alt="" src="/akariconssearch.svg" />
  
  <input
  type="text"
  className="flex-1 relative font-medium inline-block max-w-[calc(100%_-_24px)] focus:outline-none bg-transparent placeholder-opacity-50 placeholder-gray-500"
  placeholder="Search..."
  onChange={handleSearch}
/>


</div>

    </>
  );
};

export default FloatingButtons;
