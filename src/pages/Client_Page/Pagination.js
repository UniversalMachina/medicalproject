// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="self-stretch bg-white flex flex-row items-center justify-center py-4 px-5 text-center text-darkgray">
      <div className="overflow-x-auto flex flex-row items-center justify-center gap-[12px]">
        <div
          className={`relative font-medium text-left inline-block min-w-[53px] whitespace-nowrap ${currentPage === 1 ? "text-gray-400" : "cursor-pointer"}`}
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        >
          Previous
        </div>
        {pageNumbers.map((number) => (
          <div
            key={number}
            onClick={() => paginate(number)}
            className={`w-[31px] rounded-lg ${currentPage === number ? "bg-mediumslateblue text-white" : "bg-gainsboro text-black1"} flex flex-row items-center justify-start py-2 px-[9px] box-border cursor-pointer`}
          >
            <div className="flex-1 relative font-medium whitespace-nowrap">
              {number}
            </div>
          </div>
        ))}
        <div
          className={`relative font-medium text-left inline-block min-w-[29px] whitespace-nowrap ${currentPage === pageNumbers.length ? "text-gray-400" : "cursor-pointer"}`}
          onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
