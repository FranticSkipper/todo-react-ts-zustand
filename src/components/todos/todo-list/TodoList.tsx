import { memo, useCallback } from 'react';
import useTodos from '../../../store/todosStore';
import TodoItem from '../todo-item/TodoItem';
import styles from './styles.module.css';
import { ITodoItem } from '../../../types/TodoItem';

const TodoList = memo(function () {
  const todos = useTodos((state) => state.todos);
  const currentFilter = useTodos((state) => state.currentFilterStatus);

  const getFilteredTodos = useCallback(filterTodos, [todos, currentFilter]);
  const filteredTodos = currentFilter === 'all' ? todos : getFilteredTodos();

  const todosToRender = filteredTodos.map((todo: ITodoItem) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  function filterTodos() {
    return todos.filter((todo) => {
      return todo.status === currentFilter;
    });
  }

  return <ul className={styles.list}>{todosToRender}</ul>;
});

export default TodoList;
