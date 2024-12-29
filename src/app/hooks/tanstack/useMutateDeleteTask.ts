import { queryClient } from "@/config/client/query-client";
import { QUERY_KEYS } from "@/constants";
import { tasksService } from "@/services/task.service";
import { useMutation } from "@tanstack/react-query";

export const useMutateDeleteTask = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await tasksService.deleteTask(id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });
    },
  });
};
