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
        showError("Error creating task");
      },
      onSuccess: () => {
        showSuccess("Task successfully created");
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
          showError("Error updating task status");
        },
        onSuccess: () => {
          showSuccess("Task status updated successfully");
        },
      }
    );
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          showError("Error updating task");
        },
        onSuccess: () => {
          showSuccess("Task successfully updated");
        },
      }
    );
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId.toString(), {
      onError: () => {
        showError("Error deleting task");
      },
      onSuccess: () => {
        showSuccess("Task successfully deleted");
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
