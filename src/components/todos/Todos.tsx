import { TodoList } from './todo-list/TodoList';
import { TodoInput } from './todo-input/TodoInput';

export default function Todos() {
  return (
    <div>
      <div>
        <TodoList />
      </div>

      <div>
        <TodoInput />
      </div>
    </div>
  );
}
