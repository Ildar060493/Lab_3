// src/components/NoteCard.jsx

import React from "react";

function NoteCard({ task, onEdit, onDelete, onToggleComplete }) {
  return (
    <div className={`note-card ${task.completed ? 'completed' : ''}`}>
      <div className="note-card__content">
        <p>{task.content}</p>
        <p>{task.date.day} | {task.date.start} - {task.date.end}</p>
      </div>
      <div className="note-card__actions">
        <button onClick={() => onEdit(task)}>Редактировать</button>
        <button onClick={() => onDelete(task.id)}>Удалить</button>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Отметить как не выполненную" : "Отметить как выполненную"}
        </button>
      </div>
    </div>
  );
}

export default NoteCard;


