'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

let tasks = [
  {
    id: 1,
    title: 'Tarea 1',
    description: 'Esta es la tarea 1.',
    completed: false,
  },
  {
    id: 2,
    title: 'Tarea 2',
    description: 'Esta es la tarea 2.',
    completed: true,
  },
];

const TaskManager = () => {
    const [newTask, setNewTask] = useState('');
    const router = useRouter();
  
    const handleAddTask = (e) => {
      e.preventDefault();
  
      // Agregar la nueva tarea al array de tareas
      tasks.push({
        id: Date.now(),
        title: newTask,
        description: '',
        completed: false,
      });
  
      // Limpiar el campo de entrada de nueva tarea
      setNewTask('');
    };
  
    const handleTaskCompleted = (id) => {
      // Marcar la tarea como completada
      tasks.find((task) => task.id === id).completed = true;
    };
  
    const handleTaskEdit = (id) => {
      // Redirigir al usuario a la página de edición de la tarea
      router.push('/task/edit/' + id);
    };
  
    const handleTaskDelete = (id) => {
      // Eliminar la tarea del array de tareas
      tasks = tasks.filter((task) => task.id !== id);
    };
  
    return (
      <div>
        <h1>Tareas</h1>
  
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Nueva tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>
  
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Completado</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleTaskCompleted(task.id)}
                  >
                    Marcar como hecha
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTaskEdit(task.id)}
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