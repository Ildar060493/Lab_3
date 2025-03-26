import React from "react";
import { DataProvider } from "./DataContext";
import NoteList from "./components/NoteList";

function App() {
  return (
    <DataProvider>
      <div className="container">
        <h1>To-Do List</h1>
        <NoteList />
      </div>
    </DataProvider>
  );
}

export default App;

