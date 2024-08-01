import React, { useState } from 'react';

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
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

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

  return (
    <div className="self-stretch bg-white overflow-x-auto flex flex-row items-center justify-center p-4 gap-[16px]">
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{id}</span>
      </div>
      <div className="flex-1 bg-white flex flex-row items-start justify-start mq450:w-[calc(100%_-_40px)]">
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
              backgroundColor: 'gray',
              color: 'white',
              borderRadius: '4px',
              zIndex: 1000
            }}
          >
            Waitlist Date: {waitlistDate}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 text-center">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ClientListItem;
