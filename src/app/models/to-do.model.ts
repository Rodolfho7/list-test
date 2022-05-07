export type TodoModel = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type NewTodoModel = Omit<TodoModel, 'id'>;
