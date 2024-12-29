import { QUERY_KEYS } from "@/constants";
import { tasksService } from "@/services/task.service";
import { useQuery } from "@tanstack/react-query";

export const useQueryTasks = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: async () => {
      return tasksService.fetchTasks();
    },
    staleTime: 0,
  });
};
