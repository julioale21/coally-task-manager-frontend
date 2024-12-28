import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/app/home/page";

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (taskId: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompletion,
  onEditTask,
  onDeleteTask,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 bg-gray-800 rounded-lg">
        No hay tareas{" "}
        {tasks.some((t) => t.completed) ? "completadas" : "pendientes"}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompletion={onToggleCompletion}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
