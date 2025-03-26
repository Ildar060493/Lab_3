import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";

function NoteCard({ note, index }) {
    const { tasks, setTasks } = useContext(DataContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(note.content);

    const toggleComplete = () => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = () => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const saveEdit = () => {
        if (!editText.trim()) return;
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, content: editText } : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
    };

    return (
        <div className={`note-card ${note.completed ? "completed" : ""}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <div className="note-content">{note.content}</div>
            )}
            <div className="note-actions">
                {isEditing ? (
                    <button onClick={saveEdit}>Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button onClick={toggleComplete}>{note.completed ? "Undo" : "Done"}</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </div>
    );
}

export default NoteCard;

