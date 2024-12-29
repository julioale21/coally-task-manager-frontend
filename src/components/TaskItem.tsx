import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faEdit,
  faTrash,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Task } from "@/app/types";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: number) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompletion,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex-grow">
            <h3
              className={`font-semibold ${
                task.status ? "text-gray-400 line-through" : "text-white"
              }`}
            >
              {task.title}
            </h3>
            <p
              className={`text-sm mt-1 ${
                task.status ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {task.description}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Created:{" "}
              {task.createdAt
                ? new Date(task.createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : ""}
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <button
            onClick={() => onToggleCompletion(task._id as number)}
            className={`p-2 rounded-lg transition-colors ${
              task.status
                ? "bg-orange-600/20 text-orange-500 hover:bg-orange-600/30"
                : "bg-green-600/20 text-gray-500 hover:bg-green-600/30"
            }`}
            title={
              task.status ? "Marcar como pendiente" : "Marcar como completada"
            }
          >
            <FontAwesomeIcon
              icon={task.status ? faArrowRotateLeft : faSquareCheck}
              className="w-4 h-4"
            />
          </button>

          <button
            onClick={() => onEditTask(task)}
            className="p-2 rounded-lg bg-blue-600/20 text-blue-500 hover:bg-blue-600/30 transition-colors"
            title="Editar tarea"
          >
            <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
          </button>

          <button
            onClick={() => onDeleteTask(task._id as number)}
            className="p-2 rounded-lg bg-red-600/20 text-red-500 hover:bg-red-600/30 transition-colors"
            title="Eliminar tarea"
          >
            <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { TaskItem };
