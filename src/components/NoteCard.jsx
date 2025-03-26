import React from "react";

function NoteCard({ content, date, important, completed }) {
  return (
    <div className={`note-card ${completed ? "completed" : ""}`}>
      <div className="note-content">{content}</div>
      <div className="date-box">
        <div>{date.day}</div>
        <div>{date.start} - {date.end}</div>
      </div>
      <div className="note-actions">
        <button>✔</button>
        <button>✏</button>
        <button>❌</button>
      </div>
    </div>
  );
}

export default NoteCard;

