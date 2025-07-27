import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/NavBar";

const EditJobPage = () => {
  const { id } = useParams(); // Get job ID from URL
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    position: "",
    company: "",
    status: "",
    date: "",
  });

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const jobToEdit = storedJobs.find((job) => String(job.id) === String(id));
    if (jobToEdit) {
      setJobData({ ...jobToEdit, id: jobToEdit.id }); // ensure ID is preserved
    }
  }, [id]);

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const updatedJobs = storedJobs.map((job) =>
      String(job.id) === String(id) ? { ...job, ...jobData, id: job.id } : job
    );
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    toast.success("Job updated ✅");
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-xl font-semibold mb-4">Edit Job</h2>
      <form onSubmit={handleUpdate}>
        <input
          name="position"
          value={jobData.position}
          onChange={handleChange}
          placeholder="Position"
          className="w-full border p-2 mb-2"
          required
        />
        <input
          name="company"
          value={jobData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full border p-2 mb-2"
          required
        />
        <input
          name="status"
          value={jobData.status}
          onChange={handleChange}
          placeholder="Status"
          className="w-full border p-2 mb-2"
          required
        />
        <input
  type="date"
  name="date"
  value={jobData.date}
  onChange={handleChange}
  className="w-full border p-2 mb-4"
  required
/>

        <button
          type="submit"
         className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 active:scale-95 text-white px-4 py-2 rounded transition-all"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default EditJobPage;
