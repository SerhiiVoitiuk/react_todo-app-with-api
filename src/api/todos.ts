import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const addTodo = ({ title, userId, completed }: Todo) => {
  return client.post<Todo>(`/todos`, { title, userId, completed });
};

export const updateTodo = (todo: Todo): Promise<Todo> => {
  return client.patch(`/todos/${todo.id}`, todo);
};
