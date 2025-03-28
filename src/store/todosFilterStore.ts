import { create } from 'zustand';
import { TFilterStatus } from '../types/TodoFIlterStatus';
import { ITodosFilterStore } from '../types/TodosStoreFilter';

const useTodosFilter = create<ITodosFilterStore>((set) => ({
  currentFilterStatus: 'all',
  changeFilterStatus: (newStatus: TFilterStatus) =>
    set(() => ({
      currentFilterStatus: newStatus,
    })),
}));

export default useTodosFilter;
