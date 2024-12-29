import { Task } from "@/app/types";
import { queryClient } from "@/config/client/query-client";
import { QUERY_KEYS } from "@/constants";
import { tasksService } from "@/services/task.service";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useMutateCreateTask = (): UseMutationResult<
  Task,
  Error,
  Omit<Task, "id">,
  unknown
> => {
  return useMutation({
    mutationFn: async (task: Omit<Task, "_id">) => {
      const response = await tasksService.createTask(task);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
        exact: true,
      });
    },
    onError: (error) => {
      console.error("Error creating task:", error);
    },
  });
};
