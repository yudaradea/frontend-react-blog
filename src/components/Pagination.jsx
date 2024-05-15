import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ onPageChange, currentPage, blogs, pagesSize }) => {
  const totalPages = Math.ceil(blogs.length / pagesSize);
  //   console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={
            pageNumber === currentPage ? "text-orange-500 my-1" : "my-1"
          }
          key={pageNumber}
        >
          <a
            href="#"
            className="py-1 px-2 bg-white shadow-md rounded"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <ul className="pt-2 pb-6 md:pb-12 flex gap-4 items-center justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>

      <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
        {renderPaginationLinks()}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </ul>
  );
};

export default Pagination;
