import { UTodoStatus } from './TodoStatus';

export interface ITodoItem {
  id: number;
  text: string;
  status: UTodoStatus;
}
