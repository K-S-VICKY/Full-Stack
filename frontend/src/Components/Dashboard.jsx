import React from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const experts = [
    {
      sno: 1,
      name: "Bessie Cooper",
      email: "tanya.hill@example.com",
      phone: "(308) 555-0121",
      alumniStatus: "No",
      companyName: "IBM",
      companyAddress: "2972 Westheimer Rd. Illinois 85486",
      event: "Training",
      date: "4/4/18",
      coordinatorName: "Judith",
      coordinatorPhone: "(229) 555-0109",
      coordinatorEmail: "papathan@yahoo.ca",
    },
    // Add more experts here...
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5">
      {/* Top Navigation */}
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
        {/* Update this button to navigate to the AddDetails page */}
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate('/addDetails')}
        >
          + Create
        </button>
      </div>

      {/* Experts Table */}
      <div className="mt-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Sno</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Alumni Status</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Company Address</th>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Coordinator Name</th>
              <th className="px-4 py-2">Coordinator Phone</th>
              <th className="px-4 py-2">Coordinator Email</th>
            </tr>
          </thead>
          <tbody>
            {experts.map((expert, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="border px-4 py-2">{expert.sno}</td>
                <td className="border px-4 py-2">{expert.name}</td>
                <td className="border px-4 py-2">{expert.email}</td>
                <td className="border px-4 py-2">{expert.phone}</td>
                <td className="border px-4 py-2">{expert.alumniStatus}</td>
                <td className="border px-4 py-2">{expert.companyName}</td>
                <td className="border px-4 py-2">{expert.companyAddress}</td>
                <td className="border px-4 py-2">{expert.event}</td>
                <td className="border px-4 py-2">{expert.date}</td>
                <td className="border px-4 py-2">{expert.coordinatorName}</td>
                <td className="border px-4 py-2">{expert.coordinatorPhone}</td>
                <td className="border px-4 py-2">{expert.coordinatorEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
