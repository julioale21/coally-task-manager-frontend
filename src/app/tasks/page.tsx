"use client";

import React from "react";
import { TaskForm, TaskList } from "@/components";
import { useTask } from "./hooks/useTask";

const Home: React.FC = () => {
  const {
    isLoading,
    isError,
    editingTask,
    handleAddTask,
    handleToggleCompletion,
    handleEditTask,
    handleUpdateTask,
    handleDeleteTask,
    pendingTasks,
    completedTasks,
  } = useTask();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Task Manager</h1>

        {/* Formulario */}
        <div className="mb-12">
          <TaskForm
            onAddTask={handleAddTask}
            editingTask={editingTask}
            onUpdateTask={handleUpdateTask}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Pending tasks
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
              Completed tasks
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
