import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFacultyVisit } from './FacultyVisitContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "./Dropdown";

const FacultyVisitDashboard = () => {
  const navigate = useNavigate();
  const { visits } = useFacultyVisit();

  // State for search and sort
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Handle search and sort functionality
  const filteredVisits = visits
    .filter(visit =>
      visit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visit.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visit.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visit.event.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "company") {
        return a.companyName.localeCompare(b.companyName);
      }
      return 0;
    });

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5 overflow-y-auto"> {/* Added overflow-y-auto */}
      {/* Top Navigation */}
      <div className="flex flex-wrap justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Faculty Visit Dashboard</h1>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          <button
            className="text-purple-500 flex items-center space-x-2"
            onClick={() => navigate('/dashboard')}
          >
            <FontAwesomeIcon icon={faUserTie} />
            <span>Industry Experts</span>
          </button>
          <button
            className="text-purple-500 font-bold  text-[20px] flex items-center space-x-2"
            onClick={() => navigate('/facultyVisits')}
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span>Faculty Visits</span>
          </button>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 md:mt-0"
          onClick={() => navigate('/addFacultyVisitDetails')}
        >
          + Create
        </button>
      </div>

      {/* Search and Sort Options */}
      <div className="flex flex-col md:flex-row mt-5 justify-between items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-4 md:mb-0 w-full md:w-1/3"
        />

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full md:w-auto"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
          <option value="company">Sort by Company</option>
        </select>
      </div>

      {/* Faculty Visits Table */}
      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Sno</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">E-mail</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Company Address</th>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisits.map((visit, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{visit.name}</td>
                <td className="border px-4 py-2">{visit.email}</td>
                <td className="border px-4 py-2">{visit.phoneNumber}</td>
                <td className="border px-4 py-2">{visit.companyName}</td>
                <td className="border px-4 py-2">{visit.companyAddress}</td>
                <td className="border px-4 py-2">{visit.event}</td>
                <td className="border px-4 py-2">{visit.date}</td>
                <td className="border px-4 py-2"><Dropdown /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyVisitDashboard;
