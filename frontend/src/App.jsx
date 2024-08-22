import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Dashboard from './Components/Dashboard';
import FacultyVisitDashboard from './Components/FacultyVisitDashboard';
import AddDetails from './Components/AddDetails';  
import AddFacultyVisitDetails from './Components/AddFacultyVisitDetails';  // Import the AddFacultyVisitDetails component

function App() {
  const handleLogin = () => {
    // Logic after a successful login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/facultyVisits" element={<FacultyVisitDashboard />} />
        <Route path="/addDetails" element={<AddDetails />} />  
        <Route path="/addFacultyVisitDetails" element={<AddFacultyVisitDetails />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
