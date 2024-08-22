import React, { createContext, useState } from 'react';

export const ExpertContext = createContext();

export const ExpertProvider = ({ children }) => {
  const [experts, setExperts] = useState([]);

  const addExpert = (newExpert) => {
    setExperts([...experts, newExpert]);
  };

  return (
    <ExpertContext.Provider value={{ experts, addExpert }}>
      {children}
    </ExpertContext.Provider>
  );
};
