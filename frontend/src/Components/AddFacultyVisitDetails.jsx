import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFacultyVisit } from './FacultyVisitContext';

const AddFacultyVisitDetails = () => {
  const { addVisit } = useFacultyVisit();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyAddress: '',
    event: '',
    date: new Date(),  // Set default date to today
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVisit({
      sno: Date.now(), // or a better unique identifier
      ...formData,
      date: formData.date.toLocaleDateString('en-GB'), // Format date to DD/MM/YYYY
    });
    navigate('/facultyVisits');
  };

  const handleCancel = () => {
    navigate('/facultyVisits'); // Navigate to FacultyVisitDashboard page
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center p-10">
      <div className="w-full max-w-3xl bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold text-white mb-6">Add Faculty Visit Details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="grid grid-cols-2 gap-6 mb-10">  {/* Added mb-10 for 1-inch spacing */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white" 
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
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Company Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white" 
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
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Event <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="event" 
                value={formData.event} 
                onChange={handleChange} 
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Date <span className="text-red-500">*</span></label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="w-full mt-1 p-2 border border-gray-500 rounded-lg bg-gray-600 text-white"
                placeholderText="dd-mm-yyyy" // Placeholder for clarity
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button 
              type="button" 
              className="bg-red-500 text-white p-2 rounded-lg"
              style={{ width: '2in' }}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white p-2 rounded-lg"
              style={{ width: '2in' }}  // Set the width of the Save button to 2 inches
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacultyVisitDetails;
