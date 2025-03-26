import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      content: "Изучить JSX",
      date: { day: "2025-03-26", start: "10:00", end: "11:00" },
      important: true,
      completed: false,
    },
    {
      content: "Разобраться с useState",
      date: { day: "2025-03-26", start: "11:00", end: "12:00" },
      important: false,
      completed: true,
    },
  ]);

  return (
    <DataContext.Provider value={{ tasks, setTasks }}>
      {children}
    </DataContext.Provider>
  );
}
