export interface Task {
  _id?: number;
  title: string;
  description: string;
  status?: boolean;
  createdAt?: Date;
}
