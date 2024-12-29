import { Task } from "@/app/types";
import { useCustomSnackbar } from "@/common/hooks/useCustomSnackbar";
import { useState } from "react";
import { useMutateCreateTask } from "./tanstack/useMutateCreateTask";
import { useMutateDeleteTask } from "./tanstack/useMutateDeleteTask";
import { useMutateUpdateTask } from "./tanstack/useMutateUpdateTask";
import { useQueryTasks } from "./tanstack/useQeuryTasks";

export const useTask = () => {
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

  return {
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
  };
};
