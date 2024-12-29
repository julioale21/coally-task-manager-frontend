// import React from "react";
// import { TaskItem } from "./";
// import { Task } from "@/app/types";

// interface TaskListProps {
//   tasks: Task[];
//   onToggleCompletion: (taskId: number) => void;
//   onEditTask: (task: Task) => void;
//   onDeleteTask: (taskId: number) => void;
// }

// const TaskList: React.FC<TaskListProps> = ({
//   tasks,
//   onToggleCompletion,
//   onEditTask,
//   onDeleteTask,
// }) => {
//   if (tasks.length === 0) {
//     return (
//       <div className="text-center py-8 text-gray-400 bg-gray-800 rounded-lg">
//         No hay tareas{" "}
//         {tasks.some((t) => t.status) ? "completadas" : "pendientes"}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {tasks.map((task) => (
//         <TaskItem
//           key={task._id}
//           task={task}
//           onToggleCompletion={onToggleCompletion}
//           onEditTask={onEditTask}
//           onDeleteTask={onDeleteTask}
//         />
//       ))}
//     </div>
//   );
// };

// export { TaskList };
import React from "react";
import { Task } from "@/app/types";
import { TaskItem } from "./TaskItem";
import { Pagination } from "./Pagination";

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
