import { create } from 'zustand';
import { ITodoItem } from '../types/TodoItem';
import { ITodosStore } from '../types/TodosStore';
import { TFilterStatus } from '../types/TodoFIlterStatus';
import { UTodoStatus } from '../types/TodoStatus';

const useTodos = create<ITodosStore>((set) => ({
  todos: [
    {
      id: 0,
      text: 'Сделай краткую запись в Notion/Trello:',
      status: 'active',
    },
  ],
  currentFilterStatus: 'all',
  changeFilterStatus: (newStatus: TFilterStatus) =>
    set(() => ({
      currentFilterStatus: newStatus,
    })),
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
}));

export default useTodos;
