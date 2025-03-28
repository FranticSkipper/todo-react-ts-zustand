import useTodos from '../../../store/todosStore';
import { ITodoItem } from '../../../types/TodoItem';
import { UTodoStatus } from '../../../types/TodoStatus';
import Button from '../../ui/Button';
import styles from './styles.module.css';

interface IProps {
  todo: ITodoItem;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TodoItem: React.FC<IProps> = function ({ todo, inputRef }) {
  const deleteTodo = useTodos((state) => state.delete);
  const changeStatus = useTodos((state) => state.changeStatus);

  return (
    <li className={styles.item}>
      <p className={styles.text}>{todo.text}</p>
      <p>{todo.status}</p>
      <Button
        onClick={() => {
          const newStatus: UTodoStatus =
            todo.status === 'completed' ? 'active' : 'completed';

          changeStatus(todo.id, newStatus);
        }}
      >
        Change status
      </Button>

      <Button
        onClick={() => {
          inputRef.current.focus();
          deleteTodo(todo.id);
        }}
      >
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
