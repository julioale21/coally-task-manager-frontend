import { UpdateTaskDto } from "@/app/types";
import { queryClient } from "@/config/client/query-client";
import { QUERY_KEYS } from "@/constants";
import { tasksService } from "@/services/task.service";
import { useMutation } from "@tanstack/react-query";

type UpdateTaskPayload = {
  id: string;
  task: UpdateTaskDto;
};

export const useMutateUpdateTask = () => {
  return useMutation({
    mutationFn: async ({ id, task }: UpdateTaskPayload) => {
      const response = await tasksService.updateTask(id, task);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });
    },
  });
};
