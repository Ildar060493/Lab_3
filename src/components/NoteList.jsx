// src/components/NoteList.jsx

import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import NoteCard from "./NoteCard";

function NoteList() {
  const { tasks } = useContext(DataContext);

  return (
    <div className="note-list">
      {tasks.map((note, index) => (
        <NoteCard key={index} note={note} index={index} />
      ))}
    </div>
  );
}

export default NoteList;


