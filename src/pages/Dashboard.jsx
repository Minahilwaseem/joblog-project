import ConfirmModal from "../components/ConfirmModal";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import Navbar from "../components/NavBar";
import WelcomeHeader from "../components/WelcomeBanner";
import SearchBar from "../components/SearchBar";
import FilterSortBar from "../components/FilterSortBar";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [JobToDelete, setJobToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    () => localStorage.getItem("searchTerm") || ""
  );
  const [statusFilter, setStatusFilter] = useState(
    () => localStorage.getItem("filterStatus") || "All"
  );
  const [sortOption, setSortOption] = useState(
    () => localStorage.getItem("sortOption") || "default"
  );
  const [visibleCount, setVisibleCount] = useState(5);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEdit = (jobId) => {
    navigate(`/edit/${jobId}`);
  };

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  useEffect(() => {
    setVisibleCount(5); // Reset visible count when filters change
  }, [searchTerm, statusFilter, sortOption, jobs]);
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("filterStatus", statusFilter);
  }, [statusFilter]);

  useEffect(() => {
    localStorage.setItem("sortOption", sortOption);
  }, [sortOption]);

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    toast.success("Job deleted successfully ✅");
    setShowModal(false);
  };

  const filteredJobs = jobs
    .filter(
      (job) =>
        job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) => statusFilter === "All" || job.status === statusFilter)
    .sort((a, b) => {
      switch (sortOption) {
        case "dateAsc":
          return new Date(a.date) - new Date(b.date);
        case "dateDesc":
          return new Date(b.date) - new Date(a.date);
        case "positionAsc":
          return a.position.localeCompare(b.position);
        case "positionDesc":
          return b.position.localeCompare(a.position);
        default:
          return 0;
      }
    });
  return (
    <div className="p-6">
      <WelcomeHeader user={email} />

      {/* Filters & searchBar*/}

      {/* <div className="flex justify-between mx-auto mb-6 border-2">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterSortBar
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            sortOrder={sortOption}
            onSortChange={setSortOption}
          />
        </div> */}

      <div className="w-full max-w-6xl mx-auto mb-6 px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="flex flex-1 gap-4">
            <FilterSortBar
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
        </div>
      </div>

      {/* Job Cards */}
      {filteredJobs.length === 0 ? (
        <p className="mt-6 text-center text-gray-500">No jobs found 🧐</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.slice(0, visibleCount).map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onEdit={handleEdit}
              onDelete={(id) => {
                setJobToDelete(id);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      )}

      {/* Load More */}
      {visibleCount < filteredJobs.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 active:scale-95 text-white px-4 py-2 rounded transition-all"
          >
            Load More
          </button>
        </div>
      )}

      {/* Add Job Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/add-job")}
          className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 active:scale-95 text-white px-4 py-2 rounded transition-all"
        >
          ➕ Add a Job
        </button>
      </div>

      {/* Confirm Delete Modal */}
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => handleDelete(JobToDelete)}
        title="Delete Job"
        message="Are you sure you want to delete this job?"
      />
    </div>
  );
};

export default Dashboard;
