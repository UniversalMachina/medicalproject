import React from "react";

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
  otherContactFirstName,
  otherContactLastName,
  onDelete,
}) => {
  return (
    <div className="self-stretch overflow-x-auto flex flex-row items-center justify-center p-4 gap-[16px]">
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 text-center">
        <div className="flex-1 relative font-medium">{id}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{name}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{date}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{evaluatedParentFirstName} {evaluatedParentLastName}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{childFirstName} {childLastName}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{childCollateralFirstName} {childCollateralLastName}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{parentCollateralFirstName} {parentCollateralLastName}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{otherContactFirstName} {otherContactLastName}</div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center py-0 px-5">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] cursor-pointer" alt="Edit" src="/edit-1-2.svg" />
          <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] cursor-pointer" alt="Delete" src="/trash2-2.svg" onClick={() => onDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default ClientListItem;
