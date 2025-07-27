import React from "react";

const FilterSortBar = ({
  statusFilter,
  setStatusFilter,
  sortOption,
  setSortOption,

}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      
        {/* Filter by Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Statuses</option>
          <option value="Interview">Interview</option>
          <option value="Applied">Applied</option>
        </select>

        {/* Sort by Option */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="dateAsc">📅 Date ↑ Oldest</option>
          <option value="dateDesc">📅 Date ↓ Newest</option>
          <option value="positionAsc">🅰️ Position A → Z</option>
          <option value="positionDesc">🔤 Position Z → A</option>
        </select>
      </div>

  );
};

export default FilterSortBar;
