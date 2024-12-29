import React from "react";
import { Task } from "@/app/types";
import { Pagination, TaskItem } from "./";

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (taskId: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  itemsPerPage?: number;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompletion,
  onEditTask,
  onDeleteTask,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastTask = currentPage * itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {currentTasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onToggleCompletion={onToggleCompletion}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}

        {tasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay tareas para mostrar
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};
