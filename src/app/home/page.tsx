"use client";

import React, { useState } from "react";
import { Task } from "../types";
import { TaskForm, TaskList } from "@/components";

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Tarea 3",
    description: "Descripción de la tarea 3",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Tarea 4",
    description: "Descripción de la tarea 4",
    completed: true,
    createdAt: new Date(),
  },
];

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = (taskData: { title: string; description: string }) => {
    const newTask: Task = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (
    taskId: number,
    updatedData: { title: string; description: string }
  ) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedData } : task
      )
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Gestor de Tareas
        </h1>

        {/* Formulario */}
        <div className="mb-12">
          <TaskForm
            onAddTask={handleAddTask}
            editingTask={editingTask}
            onUpdateTask={handleUpdateTask}
          />
        </div>

        {/* Listas de tareas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Tareas Pendientes
              <span className="text-sm bg-blue-600 px-2 py-1 rounded-full">
                {pendingTasks.length}
              </span>
            </h2>
            <TaskList
              tasks={pendingTasks}
              onToggleCompletion={handleToggleCompletion}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Tareas Completadas
              <span className="text-sm bg-green-600 px-2 py-1 rounded-full">
                {completedTasks.length}
              </span>
            </h2>
            <TaskList
              tasks={completedTasks}
              onToggleCompletion={handleToggleCompletion}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
