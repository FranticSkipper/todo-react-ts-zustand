import useTodos from '../../../store/todosStore';
import { ITodoItem } from '../../../types/TodoItem';
import { UTodoStatus } from '../../../types/TodoStatus';
import styles from './styles.module.css';

interface IProps {
  todo: ITodoItem;
}

const TodoItem: React.FC<IProps> = function ({ todo }) {
  const deleteTodo = useTodos((state) => state.delete);
  const changeStatus = useTodos((state) => state.changeStatus);

  return (
    <li className={styles.item}>
      <p className={styles.text}>{todo.text}</p>
      <p>{todo.status}</p>
      <button
        onClick={() => {
          const newStatus: UTodoStatus =
            todo.status === 'completed' ? 'active' : 'completed';

          changeStatus(todo.id, newStatus);
        }}
      >
        Change status
      </button>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
