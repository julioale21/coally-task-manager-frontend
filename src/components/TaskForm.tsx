import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { Task } from "@/app/types";

interface TaskFormProps {
  onAddTask: (task: { title: string; description: string }) => void;
  editingTask: Task | null;
  onUpdateTask: (
    taskId: number,
    task: { title: string; description: string }
  ) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onAddTask,
  editingTask,
  onUpdateTask,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      if (editingTask) {
        onUpdateTask(editingTask._id as number, { title, description });
      } else {
        onAddTask({ title, description });
      }
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-300">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of the task"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description of the task"
            rows={3}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon
            icon={editingTask ? faSave : faPlus}
            className="w-4 h-4"
          />
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export { TaskForm };
