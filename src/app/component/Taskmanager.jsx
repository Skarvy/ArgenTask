'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const TaskManager = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    // Agregar la nueva tarea al array de tareas
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    // Limpiar los campos de entrada de nueva tarea
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const handleTaskToggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskEdit = (id, newTitle, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Tareas</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción de la tarea"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                {task.completed ? (
                "✓"
                ) : (
                  "⚠"
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleTaskToggleCompleted(task.id)}
                >
                  {task.completed ? 'Marcar como incompleta' : 'Marcar como hecha'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const newTitle = prompt('Nuevo título:', task.title);
                    const newDescription = prompt('Nueva descripción:', task.description);
                    if (newTitle !== null && newDescription !== null) {
                      handleTaskEdit(task.id, newTitle, newDescription);
                    }
                  }}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => handleTaskDelete(task.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManager;
