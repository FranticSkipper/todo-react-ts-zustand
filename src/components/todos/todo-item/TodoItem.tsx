import { ITodoItem } from '../../../models/TodoItem';
import { UTodoStatus } from '../../../models/TodoStatus';
import useTodos from '../../../store/todosStore';
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
      <p
        className={`${styles.status} ${todo.status === UTodoStatus.completed ? styles.completed : styles['not-completed']}`}
      ></p>
      <button
        onClick={() => {
          const newStatus: UTodoStatus =
            todo.status === UTodoStatus.completed
              ? UTodoStatus['not-completed']
              : UTodoStatus.completed;

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
