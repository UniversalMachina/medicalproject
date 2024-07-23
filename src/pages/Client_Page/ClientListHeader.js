// src/components/ClientListHeader.jsx
import React from "react";

const ClientListHeader = () => {
  return (
    <div className="self-stretch bg-white overflow-x-auto flex flex-row items-center justify-center p-4 gap-[16px]">
      <div className="flex-[0.8519] flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <b className="flex-1 relative">{`Referral source `}</b>
        <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="/bxssortalt.svg" />
      </div>
      <div className="flex-1 bg-white flex flex-row items-start justify-start mq450:w-[calc(100%_-_40px)]">
        <b className="flex-1 relative">Name</b>
      </div>
      <div className="flex-[0.8519] flex flex-row items-center justify-start py-0 px-5 gap-[7px]">
        <b className="flex-1 relative">Contact info</b>
        <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="/bxssortalt1.svg" />
      </div>
      <div className="flex-[0.8519] flex flex-row items-center justify-start py-0 px-5">
        <b className="flex-1 relative">Clinician</b>
      </div>
      <div className="flex-[0.8519] flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <b className="flex-1 relative">Status</b>
        <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" src="/bxssortalt.svg" />
      </div>
      <div className="flex-[0.8519] flex flex-row items-start justify-start py-0 px-5 text-center">
        <b className="flex-1 relative">Notes</b>
      </div>
    </div>
  );
};

export default ClientListHeader;
