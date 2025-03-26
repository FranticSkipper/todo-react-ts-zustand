import { TodoInput } from './todo-input/TodoInput';
import TodoFilter from './todo-filter/TodoFIlter';
import TodoList from './todo-list/TodoList';

export default function Todos() {
  return (
    <div>
      <div>
        <TodoFilter />
      </div>

      <div>
        <TodoList />
      </div>

      <div>
        <TodoInput />
      </div>
    </div>
  );
}
