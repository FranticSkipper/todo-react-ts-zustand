import { ITodoItem } from '../../../models/TodoItem';
import useTodos from '../../../store/todosStore';
import TodoItem from '../todo-item/TodoItem';
import styles from './styles.module.css';

export function TodoList() {
  const todos = useTodos((state) => state.todos);

  const todosToRender = todos.map((todo: ITodoItem) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return <ul className={styles.list}>{todosToRender}</ul>;
}
