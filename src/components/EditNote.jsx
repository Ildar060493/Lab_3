// src/components/EditNote.jsx

import React, { useState } from "react";

function EditNote({ task, onUpdate, onCancel }) {
  const [updatedContent, setUpdatedContent] = useState(task.content);
  const [updatedDate, setUpdatedDate] = useState(task.date.day);
  const [updatedStartTime, setUpdatedStartTime] = useState(task.date.start);
  const [updatedEndTime, setUpdatedEndTime] = useState(task.date.end);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      content: updatedContent,
      date: { day: updatedDate, start: updatedStartTime, end: updatedEndTime },
    };
    onUpdate(updatedTask);
  };

  return (
    <div className="edit-note">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
        />
        <input
          type="date"
          value={updatedDate}
          onChange={(e) => setUpdatedDate(e.target.value)}
        />
        <input
          type="time"
          value={updatedStartTime}
          onChange={(e) => setUpdatedStartTime(e.target.value)}
        />
        <input
          type="time"
          value={updatedEndTime}
          onChange={(e) => setUpdatedEndTime(e.target.value)}
        />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отменить</button>
      </form>
    </div>
  );
}

export default EditNote;

