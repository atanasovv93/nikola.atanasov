export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  dueDate?: Date;
  archived?: boolean;
}
