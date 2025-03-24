import { UTodoStatus } from '../../Todos';
import styles from './styles.module.css';

export default function TodoItem({ todo, changeStatus }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{todo.text}</p>
      <p
        className={`${styles.status} ${todo.status === 'completed' ? styles.completed : styles['not-completed']}`}
      ></p>
      <button
        onClick={() => {
          const newStatus: UTodoStatus =
            todo.status === 'completed' ? 'not-completed' : 'completed';

          changeStatus(todo.id, newStatus);
        }}
      >
        Change status
      </button>
      <button>Delete</button>
    </li>
  );
}
