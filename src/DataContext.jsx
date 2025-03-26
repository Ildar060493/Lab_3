import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            content: "HTML is easy",
            date: {
                day: "2025-03-26",
                start: "09:00",
                end: "10:00"
            },
            important: true,
            completed: false
        },
        {
            id: 2,
            content: "Browser can execute only Javascript",
            date: {
                day: "2025-03-26",
                start: "10:00",
                end: "11:00"
            },
            important: false,
            completed: true
        }
    ]);

    return (
        <DataContext.Provider value={{ tasks, setTasks }}>
            {children}
        </DataContext.Provider>
    );
}
