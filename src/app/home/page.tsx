"use client";

import React, { useState } from "react";
import { Task } from "../types";
import { TaskForm, TaskList } from "@/components";
import { useQueryTasks } from "../hooks/tanstack/useQeuryTasks";
import { useMutateCreateTask } from "../hooks/tanstack/useMutateCreateTask";
import { useCustomSnackbar } from "@/common/hooks/useCustomSnackbar";
import { useMutateUpdateTask } from "../hooks/tanstack/useMutateUpdateTask";
import { useMutateDeleteTask } from "../hooks/tanstack/useMutateDeleteTask";

const Home: React.FC = () => {
  const { data: tasks = [], isLoading, isError } = useQueryTasks();
  const { mutate: createTask } = useMutateCreateTask();
  const { mutate: updateTask } = useMutateUpdateTask();
  const { mutate: deleteTask } = useMutateDeleteTask();
  const { showSuccess, showError } = useCustomSnackbar();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = async (taskData: {
    title: string;
    description: string;
  }) => {
    const newTask = {
      title: taskData.title,
      description: taskData.description,
    };

    createTask(newTask, {
      onError: () => {
        showError("Error al crear la tarea");
      },
      onSuccess: () => {
        showSuccess("Tarea creada con éxito");
      },
    });
  };

  const handleToggleCompletion = (taskId: number) => {
    updateTask(
      {
        id: taskId.toString(),
        task: {
          status: !tasks.find((task) => task._id === taskId)?.status,
        },
      },
      {
        onError: () => {
          showError("Error al cambiar el estado de la tarea");
        },
        onSuccess: () => {
          showSuccess("Estado de la tarea cambiado con éxito");
        },
      }
    );
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (
    taskId: number,
    updatedData: { title: string; description: string }
  ) => {
    updateTask(
      {
        id: taskId.toString(),
        task: updatedData,
      },
      {
        onError: () => {
          showError("Error al actualizar la tarea");
        },
        onSuccess: () => {
          showSuccess("Tarea actualizada conxito");
        },
      }
    );
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId.toString(), {
      onError: () => {
        showError("Error al eliminar la tarea");
      },
      onSuccess: () => {
        showSuccess("Tarea eliminada conxito");
      },
    });
  };

  const pendingTasks = tasks?.filter((task) => !task.status) || [];
  const completedTasks = tasks?.filter((task) => task.status) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

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
