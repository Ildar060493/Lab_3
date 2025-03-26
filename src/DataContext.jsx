// src/DataContext.jsx

import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <DataContext.Provider value={{ tasks, setTasks }}>
      {children}
    </DataContext.Provider>
  );
};

