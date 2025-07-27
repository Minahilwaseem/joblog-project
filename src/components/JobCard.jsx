import React from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import formatDate from "../utils/formatDate";

// ✅ Accept onEdit and onDelete as props
const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-4 mb-4 transition-all mt-5 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
        {job.position}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-100 break-words">
        <FaBuilding className="inline-block mr-1" />
        {job.company}
      </p>

      <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
        <span className="font-medium text-amber-300">
          <FaCalendarAlt className="inline-block mr-1" />
          Date Applied:
        </span>{" "}
        {formatDate(job.date)}
      </p>

      <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
        <span className="font-medium text-amber-300">
          <FaClock className="inline-block mr-1" />
          Status:
        </span>{" "}
        {job.status}
      </p>

      {/* ✅ Buttons inside the same container */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => onEdit(job.id)}
          className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(job.id)}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
