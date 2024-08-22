import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ExpertContext } from './ExpertContext';
import Dropdown from "./Dropdown";

const Dashboard = () => {
  const navigate = useNavigate();
  const { experts } = useContext(ExpertContext);

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5">
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Industry Expert Dashboard</h1>
        <div className="flex space-x-4">
          <button
            className="text-purple-500"
            onClick={() => navigate('/dashboard')}
          >
            Industry Experts
          </button>
          <button
            className="text-purple-500"
            onClick={() => navigate('/facultyVisits')}
          >
            Faculty Visits
          </button>
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate('/addDetails')}
        >
          + Create
        </button>
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
            {experts.map((expert, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{expert.name}</td>
                <td className="border px-4 py-2">{expert.email}</td>
                <td className="border px-4 py-2">{expert.phoneNumber}</td> {/* Updated this line */}
                <td className="border px-4 py-2">{expert.alumniStatus}</td>
                <td className="border px-4 py-2">{expert.companyName}</td>
                <td className="border px-4 py-2">{expert.companyAddress}</td>
                <td className="border px-4 py-2">{expert.event}</td>
                <td className="border px-4 py-2">{expert.date}</td>
                <td className="border px-4 py-2">{expert.coordinatorName}</td>
                <td className="border px-4 py-2">{expert.coordinatorPhone}</td>
                <td className="border px-4 py-2">{expert.coordinatorEmail}</td>
                <td className="border px-4 py-2"><Dropdown /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
