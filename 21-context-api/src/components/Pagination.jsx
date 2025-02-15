import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination() {
  const { page, handlePageChange, totalPage } = useContext(AppContext);

  return (
    // Outer wrapper to ensure full-width border
    <div className="w-full fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 mt-4 shadow-lg">
      {/* Inner container to align content with homepage */}
      <div className="max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-12 py-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-2">
        <div className="flex gap-2 sm:gap-4">
          {page > 1 && (
            <button
              className="w-24 px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-xs sm:text-sm"
              onClick={() => handlePageChange(page - 1)}
            >
              &larr; Previous
            </button>
          )}
          {page < totalPage && (
            <button
              className="w-24 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs sm:text-sm"
              onClick={() => handlePageChange(page + 1)}
            >
              Next &rarr;
            </button>
          )}
        </div>
        <p className="text-xs sm:text-sm">Page {page} of {totalPage}</p>
      </div>
    </div>
  );
}

export default Pagination;
