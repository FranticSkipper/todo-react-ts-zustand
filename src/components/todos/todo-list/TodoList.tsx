import { ITodoItem } from '../Todos';
import TodoItem from './todo-item/TodoItem';
import styles from './styles.module.css';

export function TodoList({ todos, changeStatus }) {
  const todosToRender = todos.map((todo: ITodoItem) => (
    <TodoItem key={todo.id} todo={todo} changeStatus={changeStatus} />
  ));

  return <ul className={styles.list}>{todosToRender}</ul>;
}
