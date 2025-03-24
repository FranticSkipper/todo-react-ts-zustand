import { useState } from 'react';
import { TodoList } from './todo-list/TodoList';
import { AddNew } from './add-new/AddNew';

export type UTodoStatus = 'completed' | 'not-completed';

export interface ITodoItem {
  id: number;
  text: string;
  completed: UTodoStatus;
}

const list: ITodoItem[] = [
  {
    id: 0,
    text: 'Сделай краткую запись в Notion/Trello:',
    completed: 'not-completed',
  },
];

export default function Todos() {
  const [todos, setTodos] = useState<ITodoItem[]>(list);

  function changeStatus(id: number, newStatus: UTodoStatus) {
    setTodos((prev) => {
      return prev.map((todo: ITodoItem) => {
        return todo.id === id
          ? {
              ...todo,
              status: newStatus,
            }
          : todo;
      });
    });
  }

  function addNewTodo(todo: { text: string }) {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: todos.at(-1).id + 1 || 0,
          text: todo.text,
          completed: false,
        },
      ];
    });
  }

  return (
    <div>
      <div>
        <TodoList todos={todos} changeStatus={changeStatus} />
      </div>

      <div>
        <AddNew addNewTodo={addNewTodo} />
      </div>
    </div>
  );
}
