import { ITodoItem } from './TodoItem';
import { UTodoStatus } from './TodoStatus';

export interface ITodosStore {
  todos: ITodoItem[];
  add: (todo: { text: string }) => void;
  delete: (id: number) => void;
  changeStatus: (id: number, newStatus: UTodoStatus) => void;
}
