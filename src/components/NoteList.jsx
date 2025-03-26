// src/components/NoteList.jsx

import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import NoteCard from "./NoteCard";
import EditNote from "./EditNote"; // Новый компонент для редактирования задачи

function NoteList() {
  const { tasks, setTasks } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setIsEditing(true);
  };

  const handleUpdate = (updatedTask) => {
    setTasks(tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    ));
    setIsEditing(false);
    setTaskToEdit(null);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="note-list">
      {isEditing ? (
        <EditNote
          task={taskToEdit}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        tasks.map((task) => (
          <NoteCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;




