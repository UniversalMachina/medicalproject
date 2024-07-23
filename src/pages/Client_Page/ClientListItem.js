// src/components/ClientListItem.jsx
import React from "react";

const ClientListItem = ({ id, name, contactInfo, clinician, status, statusColor, statusBgColor, onDelete }) => {
  return (
    <div className={`self-stretch ${statusBgColor} overflow-x-auto flex flex-row items-center justify-center p-4 gap-[16px]`}>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 text-center">
        <div className="flex-1 relative font-medium">{id}</div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{name}</div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-0 px-5 text-smi text-darkslategray font-inter">
        <div className="flex-1 relative leading-[19px]">{contactInfo}</div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-start py-0 px-5">
        <div className="flex-1 relative font-medium">{clinician}</div>
      </div>
      <div className={`flex-1 flex flex-row items-start justify-start py-0 px-5 text-xs ${statusColor}`}>
        <div className={`rounded-3xl ${statusBgColor} flex flex-row items-center justify-center py-2 px-3`}>
          <div className="relative font-medium inline-block min-w-[61px]">
            {status}
          </div>
        </div>
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
