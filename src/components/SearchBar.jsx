
import React from "react";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  

   return (

      <div >

        {/* Search by Position or Company */}
        <input
          type="text"
          placeholder="🔍 Search by position or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        </div>

  );
};

export default SearchBar; 

  