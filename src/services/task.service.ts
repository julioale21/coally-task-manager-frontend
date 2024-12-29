import { Task } from "@/app/types";
import { axiosInstance } from "@/config/axios";

export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    try {
      const response = await axiosInstance.get("/tasks");

      return response.data.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw new Error("Failed to fetch tasks");
    }
  },

  async createTask(task: Task): Promise<Task> {
    try {
      const response = await axiosInstance.post<Task>("/tasks", task);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error("Failed to create task");
    }
  },

  async getTaskById(id: string): Promise<Task> {
    try {
      const response = await axiosInstance.get<Task>(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching task:", error);
      throw new Error("Failed to fetch tassk");
    }
  },

  async deleteTask(id: string): Promise<string> {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      return id;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw new Error("Failed to delete task");
    }
  },
};
