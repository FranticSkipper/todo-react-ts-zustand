import { create } from 'zustand';
import { UTodoStatus } from '../models/TodoStatus';
import { ITodoItem } from '../models/TodoItem';
import { ITodosStore } from '../models/TodosStore';

const useTodos = create<ITodosStore>((set) => ({
  todos: [
    {
      id: 0,
      text: 'Сделай краткую запись в Notion/Trello:',
      status: UTodoStatus['not-completed'],
    },
  ],
  add: (todo: { text: string }) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length ? state.todos.at(-1)!.id + 1 : 0,
          text: todo.text,
          status: UTodoStatus['not-completed'],
        },
      ],
    })),
  delete: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo: ITodoItem) => {
        return todo.id !== id;
      }),
    })),
  changeStatus: (id: number, newStatus: UTodoStatus) =>
    set((state) => ({
      todos: state.todos.map((todo: ITodoItem) => {
        return todo.id === id
          ? {
              ...todo,
              status: newStatus,
            }
          : todo;
      }),
    })),
}));

export default useTodos;
