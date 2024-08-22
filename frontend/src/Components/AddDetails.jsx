import React, { useState } from 'react';

const AddDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    isAlumnus: '',
    companyName: '',
    companyAddress: '',
    eventType: '',
    eventDate: '',
    coordinatorName: '',
    coordinatorPhone: '',
    coordinatorEmail: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-10">
      <div className="w-full max-w-3xl bg-gray-300 p-8 rounded-lg shadow-lg">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">INDUSTRY EXPERT</h1>
          <img src="/path/to/user-logo.png" alt="User Logo" className="w-10 h-10 rounded-full"/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/* Personal Details */}
            <div className="col-span-2">
              <h2 className="text-lg font-semibold">Personal Details</h2>
            </div>
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
              <label className="block text-sm font-medium">Mail ID <span className="text-red-500">*</span></label>
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
              <label className="block text-sm font-medium">Is an Alumnus of BIT? <span className="text-red-500">*</span></label>
              <div className="mt-1">
                <label className="mr-4">
                  <input 
                    type="radio" 
                    name="isAlumnus" 
                    value="Yes" 
                    onChange={handleChange} 
                    className="mr-2" 
                    required 
                  />
                  Yes
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="isAlumnus" 
                    value="No" 
                    onChange={handleChange} 
                    className="mr-2" 
                    required 
                  />
                  No
                </label>
              </div>
            </div>

            {/* Industry Affiliation Details */}
            <div className="col-span-2">
              <h2 className="text-lg font-semibold">Industry Affiliation Details</h2>
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

            {/* Event Details */}
            <div className="col-span-2">
              <h2 className="text-lg font-semibold">Event Details</h2>
            </div>
            <div>
              <label className="block text-sm font-medium">Type of Event <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="eventType" 
                value={formData.eventType} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="eventDate" 
                value={formData.eventDate} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                placeholder="DD/MM/YYYY"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Event Coordinator Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="coordinatorName" 
                value={formData.coordinatorName} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Event Coordinator Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="coordinatorPhone" 
                value={formData.coordinatorPhone} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
                required 
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium">Event Coordinator Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="coordinatorEmail" 
                value={formData.coordinatorEmail} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-400 rounded-lg" 
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

export default AddDetails;
