import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExpertContext } from './ExpertContext';

const AddDetails = () => {
  const { addExpert } = useContext(ExpertContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '', // Ensured this field is correct
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
    addExpert({
      sno: Date.now(),
      ...formData,
      alumniStatus: formData.isAlumnus,
      event: formData.eventType,
      date: formData.eventDate,
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-10">
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">INDUSTRY EXPERT</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <h2 className="text-lg font-semibold text-gray-300">Personal Details</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Mail ID <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Is an Alumnus of BIT? <span className="text-red-500">*</span></label>
              <div className="mt-1">
                <label className="mr-4 text-gray-300">
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
                <label className="text-gray-300">
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

            <div className="col-span-2">
              <h2 className="text-lg font-semibold text-gray-300">Industry Affiliation Details</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Company Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Company Address <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="companyAddress" 
                value={formData.companyAddress} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>

            <div className="col-span-2">
              <h2 className="text-lg font-semibold text-gray-300">Event Details</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Event Type <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="eventType" 
                value={formData.eventType} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Event Date <span className="text-red-500">*</span></label>
              <input 
                type="date" 
                name="eventDate" 
                value={formData.eventDate} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>

            <div className="col-span-2">
              <h2 className="text-lg font-semibold text-gray-300">Coordinator Details</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="coordinatorName" 
                value={formData.coordinatorName} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="coordinatorPhone" 
                value={formData.coordinatorPhone} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email ID <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="coordinatorEmail" 
                value={formData.coordinatorEmail} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white" 
                required 
              />
            </div>
          </div>
          <div className="mt-6">
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDetails;
