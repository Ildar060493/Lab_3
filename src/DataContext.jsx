import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            content: "HTML is easy",
            date: {
                day: "2019-05-30",
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
                day: "2019-05-30",
                start: "10:00",
                end: "11:00"
            },
            important: false,
            completed: true
        },
        {
            id: 3,
            content: "GET and POST are the most important methods of HTTP protocol",
            date: {
                day: "2019-05-31",
                start: "11:00",
                end: "12:00"
            },
            important: true,
            completed: false
        }
    ]);

    return (
        <DataContext.Provider value={{ tasks, setTasks }}>
            {children}
        </DataContext.Provider>
    );
};
