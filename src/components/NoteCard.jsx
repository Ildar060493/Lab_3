// src/components/NoteCard.jsx

import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import checkIcon from "../assets/check.svg"; // Путь к иконке выполненной задачи
import editIcon from "../assets/mode_edit.svg"; // Путь к иконке редактирования
import deleteIcon from "../assets/delete_sweep.svg"; // Путь к иконке удаления

function NoteCard({ note, index }) {
  const { tasks, setTasks } = useContext(DataContext);

  // Функция для отметки задачи как выполненной
  const handleMarkCompleted = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Функция для редактирования задачи
  const handleEdit = () => {
    const updatedContent = prompt("Введите новый текст задачи:", note.content);
    if (updatedContent) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, content: updatedContent } : task
      );
      setTasks(updatedTasks);
    }
  };

  // Функция для удаления задачи
  const handleDelete = () => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={`note-card ${note.completed ? "completed" : ""}`}>
      <div className="note-content">{note.content}</div>
      <div className="date-box">
        <div className="date-box__top">
          <div>{note.date.day}</div>
          <div>{note.date.start} - {note.date.end}</div>
        </div>
      </div>
      <div className="note-actions">
        <img
          src={checkIcon}
          alt="Mark Completed"
          onClick={handleMarkCompleted}
        />
        <img
          src={editIcon}
          alt="Edit"
          onClick={handleEdit}
        />
        <img
          src={deleteIcon}
          alt="Delete"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default NoteCard;

