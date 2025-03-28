import { create } from 'zustand';
import { ITodoItem } from '../types/TodoItem';
import { ITodosStore } from '../types/TodosStore';
import { UTodoStatus } from '../types/TodoStatus';
import { persist } from 'zustand/middleware';

const useTodos = create<ITodosStore>()(
  persist(
    (set) => ({
      todos: [],
      add: (todo: { text: string }) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: state.todos.length ? state.todos.at(-1)!.id + 1 : 0,
              text: todo.text,
              status: 'active',
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
    }),
    {
      name: 'todos',
      partialize: (state) => ({ todos: state.todos }),
    },
  ),
);

export default useTodos;
