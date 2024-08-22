import React, { useState } from 'react';

const AddFacultyVisitDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyAddress: '',
    event: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can navigate back to the FacultyVisitDashboard after saving
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-10">
      <div className="w-full max-w-3xl bg-gray-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Add Faculty Visit Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Company Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Company Address <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="companyAddress" 
                value={formData.companyAddress} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Event <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="event" 
                value={formData.event} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                placeholder="DD/MM/YYYY"
                required 
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-lg">SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacultyVisitDetails;
