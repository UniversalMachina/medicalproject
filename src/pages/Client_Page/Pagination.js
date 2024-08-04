import React from "react";
import { useTheme } from "../../themeContext"; // Import the custom hook

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const { theme } = useTheme(); // Get the current theme
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const backgroundColor = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-darkgray";
  const pageBgColor = theme === "dark" ? "bg-gray-700" : "bg-gainsboro";
  const activePageBgColor = theme === "dark" ? "bg-mediumslateblue" : "bg-mediumslateblue";
  const activePageTextColor = theme === "dark" ? "text-white" : "text-white";
  const inactivePageTextColor = theme === "dark" ? "text-white" : "text-black1";

  return (
    <div className={`self-stretch flex flex-row items-center justify-center py-4 px-5 text-center ${backgroundColor} ${textColor}`}>
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
            className={`w-[31px] rounded-lg ${currentPage === number ? `${activePageBgColor} ${activePageTextColor}` : `${pageBgColor} ${inactivePageTextColor}`} flex flex-row items-center justify-start py-2 px-[9px] box-border cursor-pointer`}
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
