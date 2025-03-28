import { TFilterStatus } from './TodoFIlterStatus';

export interface ITodosFilterStore {
  currentFilterStatus: TFilterStatus;
  changeFilterStatus: (newStatus: TFilterStatus) => void;
}
