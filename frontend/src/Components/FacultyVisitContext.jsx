// src/Components/FacultyVisitContext.js
import React, { createContext, useState, useContext } from 'react';

const FacultyVisitContext = createContext();

export const FacultyVisitProvider = ({ children }) => {
  const [visits, setVisits] = useState([]);

  const addVisit = (visit) => {
    setVisits((prevVisits) => [...prevVisits, visit]);
  };

  return (
    <FacultyVisitContext.Provider value={{ visits, addVisit }}>
      {children}
    </FacultyVisitContext.Provider>
  );
};

export const useFacultyVisit = () => useContext(FacultyVisitContext);
