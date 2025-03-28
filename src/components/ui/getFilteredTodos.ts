import { TFilterStatus } from '../../types/TodoFIlterStatus';
import { ITodoItem } from '../../types/TodoItem';

export default function getFilteredTodos(
  todos: ITodoItem[],
  status: TFilterStatus,
): ITodoItem[] {
  return todos.filter((todo) => {
    return todo.status === status;
  });
}
