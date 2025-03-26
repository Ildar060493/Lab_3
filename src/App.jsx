import React from "react";
import { DataProvider } from "./DataContext";
import NoteList from "./components/NoteList";
import NoteAdd from "./components/NoteAdd";

function App() {
  return (
    <DataProvider>
      <div className="container">
        <h1>To-Do List</h1>
        <NoteAdd />
        <NoteList />
      </div>
    </DataProvider>
  );
}

export default App;

