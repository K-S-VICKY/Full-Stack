import React from "react";

const FacultyVisitDashboard = () => {
  const visits = [
    {
      sno: 1,
      name: "Bessie Cooper",
      email: "tanya.hill@example.com",
      phone: "(308) 555-0121",
      companyName: "IBM",
      companyAddress: "2972 Westheimer Rd. Illinois 85486",
      event: "Training",
      date: "4/4/18",
    },
    // Add more visits here...
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen p-5">
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Faculty Visit Dashboard</h1>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Sno</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
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
                <td className="border px-4 py-2">{visit.phone}</td>
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
