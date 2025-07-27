import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/NavBar";
const AddJobPage = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState(""); // User can leave blank

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

 const newJob = {
  id: Date.now(),
  position,
  company,
  status,
  date, // store exactly what user selected (or empty string)
 };


    const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const updatedJobs = [...existingJobs, newJob];
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    alert("Job added successfully!");
    toast.success("Job added successfully! ✅");
    navigate("/dashboard");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"h
          placeholder="Job Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
         
        </select>
    <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full p-2 border rounded"
/>


        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 active:scale-95 text-white px-4 py-2 rounded transition-all"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobPage;
