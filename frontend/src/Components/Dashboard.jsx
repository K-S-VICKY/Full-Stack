import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ExpertContext } from './ExpertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "./Dropdown";

const Dashboard = () => {
  const navigate = useNavigate();
  const { experts, setExperts } = useContext(ExpertContext);

  // State for search and sort
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Handle search and sort functionality
  const filteredExperts = experts
    .filter(expert =>
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.coordinatorName.toLowerCase().includes(searchQuery.toLowerCase())
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

  // Function to delete an expert
  const deleteExpert = (email) => {
    const updatedExperts = experts.filter(expert => expert.email !== email);
    setExperts(updatedExperts);
  };

  // Function to handle edit (currently just a placeholder)
  const editExpert = (email) => {
    // Add your edit functionality here
    console.log(`Edit expert with email: ${email}`);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5">
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Industry Expert Dashboard</h1>
        <div className="flex space-x-4 items-center">
          <button
            className="text-purple-500 flex items-center space-x-2"
            onClick={() => navigate('/dashboard')}
          >
            <FontAwesomeIcon icon={faUserTie} />
            <span>Industry Experts</span>
          </button>
          <button
            className="text-purple-500 flex items-center space-x-2"
            onClick={() => navigate('/facultyVisits')}
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span>Faculty Visits</span>
          </button>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate('/addDetails')}
        >
          + Create
        </button>
      </div>

      <div className="flex mt-5 justify-between">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg w-1/3"
        />

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
          <option value="company">Sort by Company</option>
        </select>
      </div>

      <div className="mt-5 overflow-x-auto h-dvh">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 w-20">Sno</th>
              <th className="px-4 py-2 w-32">Name</th>
              <th className="px-4 py-2 w-48">Email</th>
              <th className="px-4 py-2 w-40">Phone Number</th>
              <th className="px-4 py-2 w-24">Alumni Status</th>
              <th className="px-4 py-2 w-48">Company Name</th>
              <th className="px-4 py-2 w-64">Company Address</th>
              <th className="px-4 py-2 w-32">Event</th>
              <th className="px-4 py-2 w-32">Date</th>
              <th className="px-4 py-2 w-48">Coordinator Name</th>
              <th className="px-4 py-2 w-48">Coordinator Phone</th>
              <th className="px-4 py-2 w-48">Coordinator Email</th>
              <th className="px-4 py-2 w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExperts.map((expert, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{expert.name}</td>
                <td className="border px-4 py-2">{expert.email}</td>
                <td className="border px-4 py-2">{expert.phoneNumber}</td>
                <td className="border px-4 py-2">{expert.alumniStatus}</td>
                <td className="border px-4 py-2">{expert.companyName}</td>
                <td className="border px-4 py-2">{expert.companyAddress}</td>
                <td className="border px-4 py-2">{expert.event}</td>
                <td className="border px-4 py-2">{expert.date}</td>
                <td className="border px-4 py-2">{expert.coordinatorName}</td>
                <td className="border px-4 py-2">{expert.coordinatorPhone}</td>
                <td className="border px-4 py-2">{expert.coordinatorEmail}</td>
                <td className="border px-4 py-2">
                  <Dropdown 
                    onDelete={() => deleteExpert(expert.email)} 
                    onEdit={() => editExpert(expert.email)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
