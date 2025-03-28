import { memo, useCallback } from 'react';
import useTodos from '../../../store/todosStore';
import TodoItem from '../todo-item/TodoItem';
import styles from './styles.module.css';
import { ITodoItem } from '../../../types/TodoItem';
import useTodosFilter from '../../../store/todosFilterStore';
import getFilteredTodos from '../../ui/getFilteredTodos';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const TodoList = memo(function ({ inputRef }: IProps) {
  const todos = useTodos((state) => state.todos);
  const currentFilter = useTodosFilter((state) => state.currentFilterStatus);
  const getFilteredTodosCB = useCallback(() => {
    return getFilteredTodos(todos, currentFilter);
  }, [todos, currentFilter]);
  const filteredTodos = currentFilter === 'all' ? todos : getFilteredTodosCB();

  const todosToRender = filteredTodos.map((todo: ITodoItem) => (
    <TodoItem key={todo.id} todo={todo} inputRef={inputRef} />
  ));

  return <ul className={styles.list}>{todosToRender}</ul>;
});

export default TodoList;
