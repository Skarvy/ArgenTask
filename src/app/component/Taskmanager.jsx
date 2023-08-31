'use client'
import React, { useState } from 'react';

const TaskManager = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
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
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredTasks = tasks
    .filter(task =>
      filterTerm === '' || filterTerm === 'todos' ? true : task.completed === (filterTerm === 'completa')
    )
    .sort((task1, task2) =>
      sortOrder === 'asc'
        ? task1.title.localeCompare(task2.title)
        : task2.title.localeCompare(task1.title)
    );

  return (
    <div>
      <h1>Tareas</h1>
      <h2>Ingrese tareas</h2>
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

      <div>
        <label>Filtrar por:</label>
        <select name="filterTerm" onChange={handleFilterChange}>
          <option value="todos">Todos</option>
          <option value="pendiente">Pendiente</option>
          <option value="completa">Completa</option>
        </select>

        <label>Ordenar por:</label>
        <select name="sortOrder" onChange={handleSortOrderChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>

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
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                {task.completed ? 'Completada' : 'Pendiente'}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleTaskToggleCompleted(task.id)}
                >
                  {task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
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
