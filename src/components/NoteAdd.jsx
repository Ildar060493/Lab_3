// src/components/NoteAdd.jsx

import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import DateInput from "./DateInput";

function NoteAdd() {
  const { tasks, setTasks } = useContext(DataContext);
  const [newNote, setNewNote] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [startTime, setStartTime] = useState(new Date().toISOString().slice(11, 16));
  const [endTime, setEndTime] = useState(new Date().toISOString().slice(11, 16));

  // Функция для добавления новой задачи
  const addTask = () => {
    if (!newNote.trim()) return; // Если поле пустое, не добавляем задачу
    setTasks([
      ...tasks,
      {
        content: newNote,
        date: { day: date, start: startTime, end: endTime },
        important: false,
        completed: false
      }
    ]);
    setNewNote(""); // Очищаем поле ввода после добавления задачи
  };

  // Функция для очистки поля ввода
  const clearInput = () => {
    setNewNote("");
    setDate(new Date().toISOString().split("T")[0]);
    setStartTime(new Date().toISOString().slice(11, 16));
    setEndTime(new Date().toISOString().slice(11, 16));
  };

  return (
    <div className="note-add">
      <input
        type="text"
        className="note-add__text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Добавьте новую задачу"
      />
      <DateInput
        date={date}
        startTime={startTime}
        endTime={endTime}
        onChange={(newDate, newStartTime, newEndTime) => {
          setDate(newDate);
          setStartTime(newStartTime);
          setEndTime(newEndTime);
        }}
      />
      <div className="note-add__actions">
        <button onClick={addTask}>Добавить</button>
        <button onClick={clearInput}>Очистить</button>
      </div>
    </div>
  );
}

export default NoteAdd;

