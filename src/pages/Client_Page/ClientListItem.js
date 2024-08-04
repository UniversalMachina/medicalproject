import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useTheme } from "../../themeContext"; // Import the custom hook

const ClientListItem = ({
  id,
  name,
  date,
  evaluatedParentFirstName,
  evaluatedParentLastName,
  childFirstName,
  childLastName,
  childCollateralFirstName,
  childCollateralLastName,
  parentCollateralFirstName,
  parentCollateralLastName,
  status,
  waitlistDate,
  onDelete,
  onStatusChange
}) => {
  const { theme } = useTheme(); // Get the current theme
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [waitlistDuration, setWaitlistDuration] = useState('');

  useEffect(() => {
    if (status === 'waitlist' && waitlistDate) {
      const calculateWaitlistDuration = () => {
        const currentDate = new Date();
        const waitlistStartDate = new Date(waitlistDate);
        const diffTime = Math.abs(currentDate - waitlistStartDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setWaitlistDuration(`${diffDays} day(s)`);
      };
      calculateWaitlistDuration();
    }
  }, [status, waitlistDate]);

  const handleMouseEnter = (e) => {
    if (status === 'waitlist') {
      setTooltipPosition({ top: e.clientY + 10, left: e.clientX + 10 });
      setShowTooltip(true);
    }
  };

  const handleMouseMove = (e) => {
    if (showTooltip) {
      setTooltipPosition({ top: e.clientY + 10, left: e.clientX + 10 });
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const backgroundColor = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const selectBgColor = theme === "dark" ? "bg-[#3A3838]" : "bg-white";
  const selectTextColor = theme === "dark" ? "text-white" : "text-black";
  const tooltipBackgroundColor = theme === "dark" ? "bg-gray-700" : "bg-gray-300";
  const tooltipTextColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`self-stretch overflow-x-auto flex flex-row items-center justify-center p-4 gap-[16px] ${backgroundColor} ${textColor}`}>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{id}</span>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start mq450:w-[calc(100%_-_40px)]">
        <span className="flex-1 relative">{name}</span>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{date}</span>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{evaluatedParentFirstName} {evaluatedParentLastName}</span>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{childFirstName} {childLastName}</span>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{childCollateralFirstName} {childCollateralLastName}</span>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{parentCollateralFirstName} {parentCollateralLastName}</span>
      </div>
      <div
        className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <select
          value={status}
          onChange={(e) => onStatusChange(id, e.target.value)}
          className={`p-2 rounded ${selectBgColor} ${selectTextColor}`}
        >
          <option value="waitlist">Waitlist</option>
          <option value="evaluated">Evaluated</option>
        </select>


        {showTooltip && (
          <div
            style={{
              position: 'fixed',
              top: tooltipPosition.top,
              left: tooltipPosition.left,
              padding: '8px',
              backgroundColor: tooltipBackgroundColor,
              color: tooltipTextColor,
              borderRadius: '4px',
              zIndex: 1000
            }}
          >
            On waitlist for: {waitlistDuration}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 text-center">
        <button 
          onClick={onDelete} 
          className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClientListItem;
