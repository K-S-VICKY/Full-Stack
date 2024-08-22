import React from "react";
import { useNavigate } from 'react-router-dom';

const FacultyVisitDashboard = () => {
  const navigate = useNavigate();

  const visits = [
    {
      sno: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      companyName: "Google",
      companyAddress: "1600 Amphitheatre Parkway, Mountain View, CA",
      event: "Industry Collaboration",
      date: "12/05/2023",
    },
    // Add more visits here...
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5">
      {/* Top Navigation */}
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Faculty Visit Dashboard</h1>
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
          onClick={() => navigate('/addFacultyVisitDetails')} // Update the route here
        >
          + Create
        </button>
      </div>

      {/* Faculty Visits Table */}
      <div className="mt-5">
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
            </tr>
          </thead>
          <tbody>
            {visits.map((visit, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="border px-4 py-2">{visit.sno}</td>
                <td className="border px-4 py-2">{visit.name}</td>
                <td className="border px-4 py-2">{visit.email}</td>
                <td className="border px-4 py-2">{visit.phoneNumber}</td>
                <td className="border px-4 py-2">{visit.companyName}</td>
                <td className="border px-4 py-2">{visit.companyAddress}</td>
                <td className="border px-4 py-2">{visit.event}</td>
                <td className="border px-4 py-2">{visit.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyVisitDashboard;
