export interface Task {
  _id?: number;
  title: string;
  description: string;
  status?: boolean;
  createdAt?: Date;
}

export type UpdateTaskDto = Partial<Omit<Task, "_id">>;
