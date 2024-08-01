const ClientListItem = ({ id, name, date, evaluatedParentFirstName, evaluatedParentLastName, childFirstName, childLastName, childCollateralFirstName, childCollateralLastName, parentCollateralFirstName, parentCollateralLastName, status, onDelete }) => {
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
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 gap-[8px]">
        <span className="flex-1 relative">{status}</span> {/* Display status */}
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-5 text-center">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ClientListItem;
